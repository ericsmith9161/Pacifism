import Util from './util';

class Gate{
  constructor(pos, angle) { // (-1,0) (1, 0), (-1,60), (1,60)
    this.pos = pos;
    this.angle = angle;
    this.vel = [0,0];
    this.collisionCircles = []

  }

  draw(ctx){
    let x= this.pos[0];
    let y= this.pos[1];
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(this.angle);

    ctx.beginPath();

    ctx.lineTo(0, 0);
    ctx.lineTo(0 + 10, 0 - 10);
    ctx.lineTo(0 - 10, 0 - 10);
    ctx.lineTo(0, 0);
    ctx.lineTo(0, 0 + 60);
    ctx.lineTo(0 + 10, 0 + 70);
    ctx.lineTo(0 - 10, 0 + 70);
    ctx.lineTo(0, 0 + 60);

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffa500';
    ctx.stroke();
    ctx.restore();
  }

  move(frameNum, player){
    this.collisionCircles = [];
    if (frameNum % 120 === 0){
      this.vel = Util.randomVec(0.125);
    }
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if ((Math.abs(player.pos[0] - this.pos[0]) < 70) && (Math.abs(player.pos[1] - this.pos[1]) < 70)){
      for(let i = 0; i < 6; i++){
        this.collisionCircles.push({pos: 
          [this.pos[0] - (5 + 10*i) * Math.sin(this.angle),
           this.pos[1] + ((5 + 10*i) * Math.cos(this.angle))],
          radius: 5
        })
      }
    }
    // this.collisionPos = {

    //   topLeft: [(this.pos[0] - 1) * Math.cos(this.angle) + this.pos[1] * Math.sin(this.angle),
    //   this.pos[1] * Math.cos(this.angle) - ((this.pos[0] - 1) * Math.sin(this.angle))],
    //   topRight: [(this.pos[0] + 1) * Math.cos(this.angle) + this.pos[1] * Math.sin(this.angle),
    //   this.pos[1] * Math.cos(this.angle) - ((this.pos[0] + 1) * Math.sin(this.angle))],
    //   bottomLeft: [(this.pos[0] - 1) * Math.cos(this.angle) + (this.pos[1]+60) * Math.sin(this.angle),
    //   (this.pos[1]+60) * Math.cos(this.angle) - ((this.pos[0] - 1) * Math.sin(this.angle))],
    //   bottomRight: [(this.pos[0] + 1) * Math.cos(this.angle) + (this.pos[1]+60) * Math.sin(this.angle),
    //   (this.pos[1]+60) * Math.cos(this.angle) - ((this.pos[0] + 1) * Math.sin(this.angle))]
    // }
  }
}

export default Gate;