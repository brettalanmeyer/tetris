class Score extends Canvas {
	constructor(canvas) {
    super(canvas);

    this.x;
    this.y;
    this.top = 0;
    this.score = 0;
  }

  offsetX() {
    return this.canvas.width * 2 / 3;
  }

  offsetY() {
    return 0;
  }

  width() {
    return this.canvas.width * 1 / 3;
  }

  height() {
    return this.canvas.height * 1 / 3;
  }

  update() {
    this.x = this.width() / 2;
    this.y = this.height() / 5;

		this.draw();
  }

  draw() {
    this.ctx.font = this.font();
    this.ctx.fillText('TOP', this.x, this.y);
    this.ctx.fillText(this.count(this.top, 6), this.x, this.y * 2);
    this.ctx.fillText('SCORE', this.x, this.y * 3);
    this.ctx.fillText(this.count(this.score, 6), this.x, this.y * 4);
  }
}
