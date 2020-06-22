import Game from "./game";

class GameView{
  constructor(ctx){
    this.ctx = ctx;
    this.game = new Game()
    this.lastTime = 0;
    this.animate = this.animate.bind(this)
    this.start = this.start.bind(this)
  }

  animate(currentTime) {
    console.log(this);
    this.drawBackground(this.ctx);
    const delta = currentTime - this.lastTime;
    requestAnimationFrame(this.animate);
    this.game.draw(this.ctx);
    this.handleMovement();
    this.game.moveObjects(delta);
    this.lastTime = currentTime;
  }

  drawBackground() {
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, 960, 640);
  }

  start() {
    window.addEventListener('keydown', (e) => {
      e.preventDefault();
      debugger
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
    if (this.keys && this.keys[65]) {  this.game.player.moveAngle = -3; }
    if (this.keys && this.keys[68]) {  this.game.player.moveAngle = 3; }
    if (this.keys && this.keys[87]) { this.game.player.speed = -5; }
    if (this.keys && this.keys[83]) { this.game.player.speed = 5; }

  }
}

export default GameView;