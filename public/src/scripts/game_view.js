import Game from "./game";
import Sound from "./sound";
import {setUpModals} from "./page";
import Util from "./util";
import axios from "axios";

class GameView{
  constructor(ctx){
    this.ctx = ctx;
    this.game = new Game()
    this.lastTime = 0;
    this.animate = this.animate.bind(this);
    this.start = this.start.bind(this);
    this.started = false;
    this.bgi = new Image();
    this.bgi.src = "../../assets/images/bg.jpg";
    this.bgiX = 0;
    this.bgiY = 0;

    this.bgm = new Sound("../../assets/sounds/bgm.mp3");
    this.bgm.sound.volume = .15;
    this.bgm.sound.classList.add("background-music");

    this.gom = new Sound("../../assets/sounds/gameover.mp3");
    this.gom.sound.volume = .15;

    this.gate = new Sound("../../assets/sounds/gate.mp3");
    this.gate.sound.volume = .3;

    this.multi = new Sound("../../assets/sounds/multi.mp3");
    this.multi.sound.volume = .3;

    this.diamond = new Sound("../../assets/sounds/diamondspawn.mp3");
    this.diamond.sound.volume = .05;

    this.name = "Moe Szyslak";
    
    setUpModals();
  }

  animate(currentTime) {
    this.drawBackground(this.ctx);
    // this.ctx.drawImage(this.bgi,0, 0);

    const delta = currentTime - this.lastTime;
    if (this.game.inPlay){
      this.bgm.play();
      requestAnimationFrame(this.animate);
      this.game.draw(this.ctx);
      this.handleMovement();
      this.game.moveObjects(delta);
      this.lastTime = currentTime;
    }else{
      const playAgainBtn = document.getElementsByClassName("play-again-btn")[0];
      playAgainBtn.classList.toggle("hidden");
      playAgainBtn.onclick = () => {
        this.restart();
        playAgainBtn.classList.toggle("hidden");
      }
      this.bgm.stop();
      this.gom.sound.currentTime=0;
      this.gom.play();
      let scoresArray = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];
      let newScoreObj;
      newScoreObj = [this.game.score.name, this.game.score.score];
      scoresArray.push(newScoreObj);
      const topTen = scoresArray.sort((a, b) => b[1] - a[1]).slice(0, 10);
      this.drawGameOver(topTen);
      localStorage.setItem('scores', JSON.stringify(topTen));

    }

  }

  drawGameBegin(){
    this.ctx.drawImage(this.bgi, 0, 0);
    this.ctx.drawImage(this.bgi, this.x, this.y - this.canvasHeight);

    this.ctx.font = "small-caps bold 40px Courier New";
    this.ctx.fillStyle = "#00FF00";
    this.ctx.fillText("Click to Play", 350, 300);
    this.toggleSoundSetup();
    const cvs = document.getElementById("mycanvas")
    const name = document.getElementsByClassName("name-input");
    this.name = name || this.name;
    cvs.onclick = () => {
      if (!this.started){
        this.start();
      }
    }
  }

  drawGameOver(topTen){
    ctx.font = "small-caps bold 40px Courier New";
    ctx.fillStyle = "#00FF00";
    ctx.textAlign = "center";

    ctx.fillText("Final Score: " + this.game.score.score, 480, 40);
    ctx.font = "small-caps 30px Courier New";
    ctx.fillStyle = "#FFFF00";
    ctx.fillText("High Scores", 480, 100);

    ctx.font = "small-caps bold 25px Courier New";
    ctx.fillStyle = "#0095DD";
    for(let i = 0; i < 10; i++){
      if (topTen[i]){
        ctx.fillText((i+1) + "." + topTen[i][0] + ": " + topTen[i][1], 480, 120 + 30*(i+1))
      }
    }
    Util.addScore({ user: this.name, score: this.game.score.score }).then(() => {
      setUpModals();
    })
  }

  drawBackground() {
    const speed = 0.08;
    this.bgiX += speed;
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, 960, 640);

    this.ctx.drawImage(this.bgi, this.bgiX, this.bgiY);
    this.ctx.drawImage(this.bgi, this.bgiX - 960, this.bgiY);

    if (this.bgiX >= 960){
      this.bgiX = 0;
    }
  }

  start() {
    this.started = true;
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

  restart(){
    this.game = new Game();
    this.gom.stop();
    const sounds = document.getElementsByTagName("audio");
    let anyMuted = false;
    for (let i = 0; i < sounds.length; i++) {
      if (sounds[i].muted) {
        anyMuted = true;
      }
    }
    for (let i = 0; i < sounds.length; i++) {
      if (anyMuted) {
        sounds[i].muted = true;
      } else {
        sounds[i].muted = false;
      }
    }

    requestAnimationFrame(this.animate);

  }

  toggleSoundSetup(){
    const soundIcons = document.getElementsByClassName("sound-icon");
    for (let i = 0; i < soundIcons.length; i++){
      soundIcons[i].onclick = () => {
        soundIcons[0].classList.toggle("hidden");
        soundIcons[1].classList.toggle("hidden");
        const sounds = document.getElementsByTagName("audio")
        for(let i = 0; i < sounds.length; i++){
          if (sounds[i].muted){
            sounds[i].muted = false;
          }else{
            sounds[i].muted = true;
          }
        }
      }
    }
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