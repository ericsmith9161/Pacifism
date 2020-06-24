class Score{
  constructor(){
    this.score = 0;
    this.multiplier = 1;
    this.name = "Moe Szyslak";
  }

  drawMult(ctx) {
    ctx.font = "small-caps bold 25px Courier New";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + this.score, 760, 20);

  }

  drawScore(ctx) {
    ctx.font = "small-caps bold 25px Courier New";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Multiplier: " + this.multiplier, 20, 20);


  }
}

export default Score;