class Explosion {
  constructor(pos, radius) {
    this.pos = pos;
    this.radius = radius;
    this.color = [
      '#FFFF00','#FFFF33','#F2EA02','#E6FB04',
      '#FF0000', '#FD1C03', '#FF3302', '#FF6600',
      '#00FFFF', '#099FFF', '#0062FF', '#0033FF',
      '#FF00FF', '#FF00CC', '#FF0099', '#CC00FF',
      '#9D00FF', '#CC00FF', '#6E0DD0', '#9900FF',
    ]
      [Math.floor(Math.random() * 20)]
  }

  draw(ctx) {
    let x = this.pos[0];
    let y = this.pos[1];
    let r = this.radius;

    ctx.beginPath();
    ctx.arc(x,y,r, 0 , 2*Math.PI);
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

export default Explosion;