class Gametype extends Canvas {
	constructor(canvas) {
    super(canvas);

    this.x;
    this.y;
    this.gameType = 'A';
  }

  offsetX() {
    return 0;
  }

  offsetY() {
    return 0;
  }

  width() {
    return this.canvas.width * 1 / 3;
  }

  height() {
    return this.canvas.height * 1 / 4;
  }

  update() {
    this.x = this.width() / 2;
    this.y = this.height() / 2;

		this.draw();
  }

  draw() {
    this.ctx.textBaseline = 'middle';
    this.ctx.textAlign = 'center';
    this.ctx.font = this.font();
    this.ctx.fillText(this.gameType + '-TYPE', this.x, this.y);
  }
}
