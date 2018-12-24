class Gametype extends Canvas {
	constructor() {
    super('gametype');

    this.x;
    this.y;
    this.gameType = 'A';
  }

  update() {
    this.x = this.canvas.width / 2;
    this.y = 30 + this.canvas.height / 20;

		this.draw();
  }

  draw() {
    this.ctx.textAlign = 'center';
    this.ctx.font = '30px Arial';
    this.ctx.fillText(this.gameType + ' - TYPE', this.x, this.y);
  }
}
