class Canvas {

  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    this.isInDebugMode = false;

    this.resize();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    let canvas = document.getElementById(this.canvas.id);
    this.canvas.width = canvas.scrollWidth;
    this.canvas.height = canvas.scrollHeight;
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.update();
  }

  update() {
    this.draw();
  }

  draw() {}

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
