class Level extends Canvas {
	constructor(canvas) {
    super(canvas);

    this.x;
    this.y;
    this.level = 0;
  }

  offsetX() {
    return this.canvas.width * 2 / 3;
  }

  offsetY() {
    return this.canvas.height * 2 / 3;
  }

  width() {
    return this.canvas.width * 1 / 3;
  }

  height() {
    return this.canvas.height * 1 / 3;
  }

  update() {
    this.x = this.width() / 2;
    this.y = this.canvas.height / 20;

		this.draw();
  }

  draw() {
    this.ctx.textAlign = 'center';
    this.ctx.font = this.font();
    this.ctx.fillText('LEVEL', this.x, this.y);
    this.ctx.fillText(this.count(this.level), this.x, this.y + this.height() / 8);
  }
}
