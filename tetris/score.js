class Score extends Canvas {
	constructor() {
    super('score');

    this.x;
    this.y;
    this.dy;
    this.top = 0;
    this.score = 0;
  }

  update() {
    this.x = this.canvas.width / 20;
    this.y = 40;

		this.draw();
  }

  draw() {
    this.ctx.font = '20px PressStart2P';
    this.ctx.fillText('TOP', this.x, 40);
    this.ctx.fillText(this.count(this.top, 6), this.x, 70);
    this.ctx.fillText('SCORE', this.x, 120);
    this.ctx.fillText(this.count(this.score, 6), this.x, 150);
  }
}
