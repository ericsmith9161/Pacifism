import Util from "./util";

class Diamond{
  constructor(pos) {
    this.pos = pos;
    this.vel = 0;
    this.radius = 10;
  }

  draw(ctx){
    let x = this.pos[0];
    let y = this.pos[1];

    ctx.beginPath();
    ctx.moveTo(x, y+15);
    ctx.lineTo(x - 8, y);
    ctx.lineTo(x, y - 15);
    ctx.lineTo(x + 8, y);
    ctx.lineTo(x, y+15);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#4dffff';
    ctx.stroke();
  }

  move(delta, playerPos){
    const velDir = [playerPos[0]-this.pos[0], playerPos[1] - this.pos[1]];
    const velMag = Util.norm(velDir);
    const vel = [velDir[0]/(velMag), velDir[1]/(velMag)];
    this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]];
  }
}

export default Diamond;