class Statistics extends Canvas {
	constructor(canvas) {
    super(canvas);

    this.x;
    this.y;

    let i = 0;
    this.items = [
      new Item(I, this, this.font()),
      new Item(J, this, this.font()),
      new Item(L, this, this.font()),
      new Item(O, this, this.font()),
      new Item(S, this, this.font()),
      new Item(T, this, this.font()),
      new Item(Z, this, this.font()),
    ];
  }

  offsetX() {
    return 0;
  }

  offsetY() {
    return this.canvas.height / 4;
  }

  width() {
    return this.canvas.width / 3;
  }

  height() {
    return this.canvas.height * 3 / 4;
  }

  update() {
    this.x = this.width() / 2;
    this.y = this.height() / 24;

    let tetrominoY = 60;

    for (let i in this.items) {
      let item = this.items[i];

      item.tetrominoY = tetrominoY;
      item.textY = tetrominoY + item.tetromino.getHeight() / 2;

      tetrominoY += item.tetromino.getHeight() + 10;
    }

		this.draw();
  }

  draw() {
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = '#000';
    this.ctx.textAlign = 'center';
    this.ctx.font = this.font('PressStart2P');
    this.ctx.fillText('STATISTICS', this.x, this.y);

    for (let i in this.items) {
      this.items[i].update();
    }
  }
}

class Item {
  constructor(tetromino, container, font) {
    this.container = container;
    this.canvas = this.container.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.tetromino = new tetromino(container);
    this.count = this.container.count;
    this.font = font;

    this.num = 0;

    this.tetrominoX = 50;
    this.tetrominoY = 0;
    this.textX = 200;
    this.textY;
  }

  update() {
    this.tetromino.setPosition(this.tetrominoX, this.tetrominoY);
    this.tetromino.update();
    this.draw();
  }

  draw() {
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = '#000';
    this.ctx.font = this.font;
    this.ctx.fillText(this.count(this.num), this.textX, this.textY);
  }
}
