class Player{
  constructor(pos){
    this.pos = pos;
    this.speed = 0;
    this.moveAngle = 0;
    this.angle = 0;
    this.draw = this.draw.bind(this);
    this.collisionPos = {
      top: this.pos[1] - 5,
      left: this.pos[0] - 5,
      bottom: this.pos[1] + 5,
      right: this.pos[0] + 5
    }
    this.radius = 8;
  }

  draw(ctx){

    let x = this.pos[0];
    let y = this.pos[1];
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    // ctx.moveTo(x, y);
    ctx.lineTo(-10,-10)
    ctx.lineTo(-10, 5);
    ctx.lineTo(0, 15);
    ctx.lineTo(10, 5);
    ctx.lineTo(10, -10);
    ctx.lineTo(0, 0);
    ctx.lineTo(-10, -10);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.restore();
  }

  move(){
    this.angle += this.moveAngle * Math.PI / 180;
    this.pos = [
      this.pos[0] + this.speed * Math.sin(this.angle),
      this.pos[1] - this.speed * Math.cos(this.angle)
    ]
    this.collisionPos = {
      top: this.pos[1] - 5,
      left: this.pos[0] - 5,
      bottom: this.pos[1] + 5,
      right: this.pos[0] + 5
    }
    this.speed = 0;
    this.moveAngle = 0
  }

}

export default Player;