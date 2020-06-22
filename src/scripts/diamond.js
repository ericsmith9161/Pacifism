class Diamond{
  constructor(pos, vel) {
    this.pos = pos;
    this.vel = vel;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 5, y - 10);
    ctx.lineTo(x, y - 20);
    ctx.lineTo(x + 5, y - 10);
    ctx.lineTo(x, y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#4dffff';
    ctx.stroke();
  }
}

export default Diamond;