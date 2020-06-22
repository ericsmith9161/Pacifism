class Shard{
  constructor(pos, vel) {
    this.pos = pos;
    this.vel = vel;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + 2, y - 3, x + 4, y - 3, x + 5, y - 2);
    ctx.bezierCurveTo(x + 2, y + 3, x + 4, y + 3, x, y);
    ctx.strokeStyle = '#39ff14';
    ctx.stroke();
  }
}

export default Shard;