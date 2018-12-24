class Gametype extends Canvas {
	constructor() {
    super('gametype');

    this.x;
    this.y;
    this.gameType = 'A';
  }

  update() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;

		this.draw();
  }

  draw() {
    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = 'center';
    this.ctx.font = '20px PressStart2P';
    this.ctx.fillText(this.gameType + '-TYPE', this.x, this.y);
  }
}
