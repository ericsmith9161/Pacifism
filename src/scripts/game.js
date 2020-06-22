import GameView from "./game_view";
import Player from "./player";
import Diamond from "./diamond";
import Gate from "./gate";
import Shard from "./shard";


class Game {
  constructor(){
    this.player = new Player([480, 320]);
    this.diamonds = [];
    this.gates = [];
    this.shards = [];

  }

  addDiamond(){

  }

  addGate(){

  }

  addShard(){

  }

  moveObjects(delta){
    this.player.move()
  }

  draw(ctx){
    this.player.draw(ctx);
  }
}

export default Game;