class Statistics extends Canvas {
	constructor(canvas) {
    super(canvas);

    this.x;
    this.y;

    let i = 0;
    this.items = [
      new Item(I, this.canvas, this.count),
      new Item(J, this.canvas, this.count),
      new Item(L, this.canvas, this.count),
      new Item(O, this.canvas, this.count),
      new Item(S, this.canvas, this.count),
      new Item(T, this.canvas, this.count),
      new Item(Z, this.canvas, this.count),
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
    this.y = this.canvas.height / 24;

    let pieceY = 60;

    for (let i in this.items) {
      let item = this.items[i];

      item.pieceY = pieceY;
      item.textY = pieceY + item.piece.getHeight() / 2;

      pieceY += item.piece.getHeight() + 10;
    }

		this.draw();
  }

  draw() {
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = '#000';
    this.ctx.textAlign = 'center';
    this.ctx.font = this.font('PressStart2P');
    this.ctx.fillText('STATISTICS', this.x, this.y);

    // for (let i in this.items) {
    //   this.items[i].update();
    // }
  }
}

class Item {
  constructor(piece, canvas, count) {
    this.piece = new piece(canvas);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.count = count;

    this.num = 0;

    this.pieceX = (canvas.width - this.piece.getWidth()) / 2 - 50;
    this.pieceY = 0;
    this.textX = canvas.width * .75;
    this.textY;
  }

  update() {
    this.piece.setPosition(this.pieceX, this.pieceY);
    this.piece.update();
    this.draw();
  }

  draw() {
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = '#000';
    this.ctx.font = this.font();
    this.ctx.fillText(this.count(this.num), this.textX, this.textY);
  }
}
