import GameView from "./game_view";
import Player from "./player";
import Diamond from "./diamond";
import Gate from "./gate";
import Shard from "./shard";
import Util from "./util";


class Game {
  constructor(){
    this.player = new Player([480, 320]);

    this.diamonds = [];
    this.diamondSpawnRate = 90;

    this.gates = [];
    this.gateSpawnRate = 360;

    this.shards = [];


    this.frameNum = 1;

    this.inPlay = true;

  }

  addDiamond(){
    const diamond = new Diamond([Math.random()*960, Math.random()*640]);
    this.diamonds.push(diamond);
  }

  addGate(){
    const gate = new Gate([Math.random() * 960, Math.random() * 640], Math.random()* Math.PI / 2);
    this.gates.push(gate);
  }


  addShard(){

  }

  diamondPlayerCollision(diamond){

  }

  moveObjects(delta){
    this.player.move()
    if (this.frameNum % this.diamondSpawnRate === 0){
      this.addDiamond();
    }
    if (this.frameNum % this.gateSpawnRate === 0){
      this.addGate();
    }
    if (this.frameNum % 600 === 0 && this.diamondSpawnRate > 20){
      this.diamondSpawnRate -= 5;
    }
    for(let i = 0; i < this.diamonds.length; i++){
      this.diamonds[i].move(delta, this.player.pos)
      if ((Math.abs(this.diamonds[i].pos[0] - this.player.pos[0]) < 40) &&
        (Math.abs(this.diamonds[i].pos[1] - this.player.pos[1]) < 40)){
        if(Util.isCollided(this.diamonds[i], this.player)){
          this.inPlay = false;
        }
      }
    }
    for (let i = 0; i < this.gates.length; i++) {
      this.gates[i].move(this.frameNum, this.player)
      if (this.gates[i].collisionCircles.length !== 0) {
        if(Util.goneThroughGate(this.player, this.gates[i])){
          const explosion = {pos:this.gates[i].collisionCircles[3].pos, radius: 150}
          const diamondsToKeep =[];
          for(let i = 0; i < this.diamonds.length; i++){
            if (!Util.isCollided(explosion, this.diamonds[i])){
              diamondsToKeep.push(this.diamonds[i]);
            }
          }
          this.diamonds = diamondsToKeep;
          this.gates.splice(i,1);
        }
      }

    }
    this.frameNum++;
  }

  draw(ctx){
    this.player.draw(ctx);
    for (let i = 0; i < this.diamonds.length; i++) {
      this.diamonds[i].draw(ctx);
    }
    for (let i = 0; i < this.gates.length; i++) {
      this.gates[i].draw(ctx);
    }
  }
}

export default Game;