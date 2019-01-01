class Canvas {

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  offsetX() {}
  offsetY() {}
  width() {}
  height() {}

  render() {
    this.ctx.translate(this.offsetX(), this.offsetY());

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.update();

    this.ctx.rect(0, 0, this.width(), this.height());
    this.ctx.stroke();

    this.ctx.translate(-this.offsetX(), -this.offsetY());
  }

  update() {
    this.draw();
  }

  draw() {}

  font() {
    return (this.width() / 12) + 'px PressStart2P';
  }

  count(value, pad = 3) {
    return value.toString().padStart(pad, 0)
  }

  setDebugMode(isInDebugMode) {
    this.isInDebugMode = isInDebugMode;
  }

  log() {
    if (this.isInDebugMode) {
      console.log.apply(null, arguments);
    }
  }
}
