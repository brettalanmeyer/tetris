class Statistics extends Canvas {
	constructor() {
    super('statistics');

    this.x;
    this.y;
  }

  update() {
    this.x = this.canvas.width / 2;
    this.y = 30 + this.canvas.height / 20;

		this.draw();
  }

  draw() {
    this.ctx.textAlign = 'center';
    this.ctx.font = '30px Arial';
    this.ctx.fillText('STATISTICS', this.x, this.y);
  }
}
