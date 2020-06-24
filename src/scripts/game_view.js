import Game from "./game";
import Sound from "./sound";
import {setUpModals} from "./page";

class GameView{
  constructor(ctx){
    this.ctx = ctx;
    this.game = new Game()
    this.lastTime = 0;
    this.animate = this.animate.bind(this)
    this.start = this.start.bind(this)

    this.bgm = new Sound("../../assets/sounds/bgm.mp3");
    this.gom = new Sound("../../assets/sounds/gameover.mp3");
    setUpModals();
  }

  animate(currentTime) {
    this.drawBackground(this.ctx);
    const delta = currentTime - this.lastTime;
    if (this.game.inPlay){
      this.bgm.play();
      requestAnimationFrame(this.animate);
      this.game.draw(this.ctx);
      this.handleMovement();
      this.game.moveObjects(delta);
      this.lastTime = currentTime;
    }else{
      this.bgm.stop();
      this.gom.play();
      let scoresArray = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];
      let newScoreObj;
      newScoreObj = [this.game.score.name, this.game.score.score];
      scoresArray.push(newScoreObj);
      localStorage.setItem('scores', JSON.stringify(scoresArray));
      const scores = JSON.parse(localStorage.getItem("scores"));
      console.log(scores);
      const topTen = scores.sort((a,b) => b[1] - a[1]).slice(0,10);


      this.drawGameOver(topTen);
    }

  }

  drawGameOver(topTen){
    ctx.font = "small-caps bold 40px Courier New";
    ctx.fillStyle = "#00FF00";
    ctx.fillText("Final Score: " + this.game.score.score, 300, 40);
    ctx.font = "small-caps 30px Courier New";
    ctx.fillStyle = "#FFFF00";
    ctx.fillText("High Scores", 300, 100);

    ctx.font = "small-caps bold 25px Courier New";
    ctx.fillStyle = "#0095DD";
    for(let i = 0; i < 10; i++){
      if (topTen[i]){
        ctx.fillText((i+1) + "." + topTen[i][0] + ": " + topTen[i][1], 300, 100 + 30*(i+1))
      }
    }
  }

  drawBackground() {
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, 960, 640);
  }

  start() {
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      this.keys = (this.keys || []);
      this.keys[e.keyCode] = (e.type == "keydown");
    })
    window.addEventListener('keyup', (e) => {
      e.preventDefault();
      this.keys[e.keyCode] = (e.type == "keydown");
    })
    requestAnimationFrame(this.animate);
  }

  handleMovement(){
    if (this.keys && this.keys[65]) {  this.game.player.moveAngle = -5; }
    if (this.keys && this.keys[68]) {  this.game.player.moveAngle = 5; }
    if (this.keys && this.keys[87]) { this.game.player.speed = -4; }
    if (this.keys && this.keys[84]) { this.game.player.speed = 4; }
    if (this.keys && this.keys[37]) { this.game.player.moveAngle = -5; }
    if (this.keys && this.keys[39]) { this.game.player.moveAngle = 5; }
    if (this.keys && this.keys[38]) { this.game.player.speed = -4; }
    if (this.keys && this.keys[40]) { this.game.player.speed = 4; }

  }
}

export default GameView;