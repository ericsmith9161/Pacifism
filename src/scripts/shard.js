class Shard{
  constructor(pos) {
    this.pos = pos;
    this.radius = 25;
  }

  draw(ctx){
    let x = this.pos[0];
    let y = this.pos[1];
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + 2, y - 3, x + 4, y - 3, x + 5, y - 2);
    ctx.bezierCurveTo(x + 2, y + 3, x + 4, y + 3, x, y);
    ctx.strokeStyle = '#39ff14';
    ctx.stroke();
  }
}

export default Shard;