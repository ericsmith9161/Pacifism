class Gate{
  constructor(pos, vel) {
    this.pos = pos;
    this.vel = vel;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y - 10);
    ctx.lineTo(x - 10, y - 10);
    ctx.lineTo(x, y);
    ctx.lineTo(x, y + 60);
    ctx.lineTo(x + 10, y + 70);
    ctx.lineTo(x - 10, y + 70);
    ctx.lineTo(x, y + 60);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffa500';
    ctx.stroke();
  }
}

export default Gate;