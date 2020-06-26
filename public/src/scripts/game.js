import GameView from "./game_view";
import Player from "./player";
import Diamond from "./diamond";
import Gate from "./gate";
import Shard from "./shard";
import Explosion from "./explosion";
import Util from "./util";
import Score from "./score";
import Sound from "./sound";


class Game {
  constructor(){
    this.player = new Player([480, 320]);

    this.diamonds = [];
    this.diamondSpawnRate = 100;

    this.gates = [];
    this.gateSpawnRate = 240;

    this.shards = [];

    this.explosions = [];
    this.explosionFrames = 0;

    this.frameNum = 1;
    this.inPlay = true;

    this.score = new Score();

    this.gate = new Sound("../../assets/sounds/gate.mp3");
    this.gate.sound.volume = .3;
    this.multi = new Sound("../../assets/sounds/multi.mp3");
    this.multi.sound.volume = .3;
    this.diamond = new Sound("../../assets/sounds/diamondspawn.mp3");
    this.diamond.sound.volume = .05;

  }

  addDiamond(){
    const diamond = new Diamond([Math.random()*960, Math.random()*640]);
    if (Util.dist(diamond.pos, this.player.pos) > 200){
      this.diamond.play();
      this.diamonds.push(diamond);
    }
  }

  addGate(){
    const gate = new Gate([Math.random() * 960, Math.random() * 640], Math.random()* Math.PI / 2);
    this.gates.push(gate);
  }


  addShard(pos){
    const shard = new Shard(pos)
    this.shards.push(shard);
  }

  checkBounds(pos){
    if (pos[0] < -100 || pos[0] > 1060 || pos[1] < -100 || pos[1] > 740){
      this.inPlay = false;
    }
  }

  isOutOfBounds(pos){
    if (pos[0] < 0){
      return "left";
    }else if(pos[0] > 960){
      return "right";
    }else if(pos[1] < 0){
      return "top";
    }else if(pos[1] > 640){
      return "bottom";
    }else{
      return null;
    }
  }

  drawOOBcircle(ctx, oobSpecifics){
    debugger
    let x, y, r, color;
    switch (oobSpecifics){
      case "left":
        x = 0;
        y = this.player.pos[1];
        if (this.player.pos[0] > -50){
          color = "#FAED27"
        }else{
          color = "#FF0000"
        }
        break
      case "right":
        x = 960;
        y = this.player.pos[1];
        if (this.player.pos[0] < 1010) {
          color = "#FAED27"
        } else {
          color = "#FF0000"
        }
        break
      case "top":
        x = this.player.pos[0];
        y = 0;
        if (this.player.pos[1] > -50) {
          color = "#FAED27"
        } else {
          color = "#FF0000"
        }
        break 
      case "bottom":
        x = this.player.pos[0];
        y = 640;
        if (this.player.pos[1] < 690) {
          color = "#FAED27"
        } else {
          color = "#FF0000"
        }
        break 
    }
    r = 20;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }

  moveObjects(delta){
    this.player.move()
    this.checkBounds(this.player.pos)

    if (this.frameNum % this.diamondSpawnRate === 0){
      this.addDiamond();
    }
    if (this.frameNum % this.gateSpawnRate === 0){
      this.addGate();
    }
    if (this.frameNum % 600 === 0 && this.diamondSpawnRate > 10){
      this.diamondSpawnRate -= 10;
      this.gateSpawnRate -= 10;
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
          const expPos = this.gates[i].collisionCircles[3].pos
          for(let i = 1; i < 16; i++){
            this.explosions.push(new Explosion(expPos, i*10))
          }
          this.explosionFrames = 15;

          this.score.score += this.score.multiplier*100;
          this.score.multiplier += 2;
          if (this.gate.paused){
            this.gate.play();
          }else{
            this.gate.sound.currentTime = 0;
            this.gate.play();
          }

          const diamondsToKeep = [];
          for(let i = 0; i < this.diamonds.length; i++){
            if (!Util.isCollided(explosion, this.diamonds[i])){
              diamondsToKeep.push(this.diamonds[i]);
            }else{
              this.score.score += this.score.multiplier*50;
              this.addShard(this.diamonds[i].pos);
            }
          }
          this.diamonds = diamondsToKeep;
          this.gates.splice(i,1);
        }
      }

      for (let i = 0; i < this.shards.length; i++){
        if ((Math.abs(this.shards[i].pos[0] - this.player.pos[0]) < 70) &&
          (Math.abs(this.shards[i].pos[1] - this.player.pos[1]) < 70)) {
          this.shards[i].move(this.player.pos)
          if (Util.isCollided(this.shards[i], this.player)){
            this.score.multiplier += 1;
            this.multi.sound.currentTime = 0;
            this.multi.play();
            this.shards.splice(i,1);
          }
        }
      }

    }
    this.frameNum++;
    if (this.explosionFrames > 0){
      this.explosionFrames --;
    }else{
      this.explosions = [];
    }
  }

  draw(ctx){
    this.player.draw(ctx);
    const oobSpecifics = this.isOutOfBounds(this.player.pos);
    if(oobSpecifics){
      this.drawOOBcircle(ctx, oobSpecifics);
    }
    for (let i = 0; i < this.diamonds.length; i++) {
      this.diamonds[i].draw(ctx);
    }
    for (let i = 0; i < this.gates.length; i++) {
      this.gates[i].draw(ctx);
    }
    for (let i = 0; i < this.shards.length; i++) {
      this.shards[i].draw(ctx);
    }
    for (let i = 0; i < this.explosions.length; i++) {
      this.explosions[i].draw(ctx);
    }
    this.score.drawMult(ctx);
    this.score.drawScore(ctx);
  }
}

export default Game;