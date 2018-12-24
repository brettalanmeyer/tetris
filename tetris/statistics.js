class Statistics extends Canvas {
	constructor() {
    super('statistics');

    this.x;
    this.y;

    this.data.count = this.count;

    let i = 0;
    this.items = [
      new Item(I, this.data),
      new Item(J, this.data),
      new Item(L, this.data),
      new Item(O, this.data),
      new Item(S, this.data),
      new Item(T, this.data),
      new Item(Z, this.data),
    ];
  }

  update() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 20;

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
    this.ctx.font = '20px PressStart2P';
    this.ctx.fillText('STATISTICS', this.x, this.y);

    for (let i in this.items) {
      this.items[i].update();
    }
  }
}

class Item {
  constructor(piece, data) {
    this.ctx = data.ctx;
    this.count = data.count;
    this.piece = new piece(data);

    this.num = 0;

    this.pieceX = (data.canvas.width - this.piece.getWidth()) / 2 - 50;
    this.pieceY = 0;
    this.textX = data.canvas.width * .75;
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
    this.ctx.font = '18px PressStart2P';
    this.ctx.fillText(this.count(this.num), this.textX, this.textY);
  }
}
