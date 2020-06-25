import Util from './util';

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

  move(playerPos) {
    const velDir = [playerPos[0] - this.pos[0], playerPos[1] - this.pos[1]];
    const velMag = Util.norm(velDir);
    const vel = [velDir[0] / (velMag/4), velDir[1] / (velMag/4)];
    this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]];
    // this.pos = [this.pos[0] + (velDir[0] / (velMag * 10)), velDir[1] / (velMag * 10)]
  }
}

export default Shard;