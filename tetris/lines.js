class Lines extends Canvas {
	constructor() {
    super('lines');

    this.x;
    this.y;
    this.num = 0;
  }

  update() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;

		this.draw();
  }

  draw() {
    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = 'center';
    this.ctx.font = '30px Arial';
    this.ctx.fillText('LINES - ' + this.count(this.num), this.x, this.y);
  }
}
