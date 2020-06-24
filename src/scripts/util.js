// Return a randomly oriented vector with the given length.
const Util = {
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },

  dist(v1, v2){
    return Math.sqrt(((v1[0] - v2[0]) ** 2)+ ((v1[1] - v2[1]) ** 2))
  },

  norm(vec){
    return Util.dist([0,0], vec)
  },

  isCollided(obj1, obj2){
    var dx = obj1.pos[0] - obj2.pos[0];
    var dy = obj1.pos[1] - obj2.pos[1];
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < obj1.radius + obj2.radius) {
      return true;
    }else{
      return false;
    }
  },

  goneThroughGate(player, gate){
    for (let i = 0; i < gate.collisionCircles.length; i++){
      if (Util.isCollided(player, gate.collisionCircles[i])){
        return true
      }
    }

    return false;
  }

};

export default Util;