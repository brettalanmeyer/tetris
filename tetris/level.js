class Level extends Canvas {
	constructor() {
    super('level');

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
    this.ctx.font = '20px PressStart2P';
    this.ctx.fillText('LEVEL', this.x, this.y);
  }
}
