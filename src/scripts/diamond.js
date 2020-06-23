import Util from "./util";

class Diamond{
  constructor(pos) {
    this.pos = pos;
    this.vel = 0;
    this.collisionPos = {
      top: this.pos[1] - 15,
      left: this.pos[0] - 5,
      bottom: this.pos[1],
      right: this.pos[0] + 5
    }
    this.radius = 5;
  }

  draw(ctx){
    let x = this.pos[0];
    let y = this.pos[1] - 10;

    ctx.beginPath();
    ctx.moveTo(x, y+10);
    ctx.lineTo(x - 5, y);
    ctx.lineTo(x, y - 10);
    ctx.lineTo(x + 5, y);
    ctx.lineTo(x, y+10);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#4dffff';
    ctx.stroke();
  }

  move(delta, playerPos){
    const velDir = [playerPos[0]-this.pos[0], playerPos[1] - this.pos[1]];
    const velMag = Util.norm(velDir);
    const vel = [velDir[0]/(velMag*3), velDir[1]/(velMag*3)];
    this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]];
    // this.pos = [this.pos[0] + (velDir[0] / (velMag * 10)), velDir[1] / (velMag * 10)]
  }
}

export default Diamond;