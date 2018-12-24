class Next extends Canvas {
	constructor() {
    super('next');

    this.textX;
    this.textY;
    this.pieceX;
    this.pieceX;

    this.pieceType = this._nextPieceType();
    this.piece = new this.pieceType(this.data);
    this.boardData;
  }

  update() {
    this.textX = this.canvas.width / 2;
    this.textY = 30 + this.canvas.height / 20;
    this.draw();

    this.pieceX = (this.data.canvas.width - this.piece.getWidth()) / 2;
    this.pieceY = (this.data.canvas.height - this.piece.getHeight()) / 2;
    this.piece.setPosition(this.pieceX, this.pieceY);
    this.piece.update();
  }

  draw() {
    this.ctx.fillStyle = '#000';
    this.ctx.textAlign = 'center';
    this.ctx.font = '20px PressStart2P';
    this.ctx.fillText('NEXT', this.textX, this.textY);
  }

  nextPieceType() {
    let previousType = this.pieceType;
    this.pieceType = this._nextPieceType();
    this.piece = new this.pieceType(this.data);
    return previousType;
  }

  _nextPieceType() {
		this.log('nextPiece');

		switch(Math.floor(Math.random() * 7)) {
			case 0:
				return I;
			case 1:
				return J;
			case 2:
				return L;
			case 3:
				return O;
			case 4:
				return S;
			case 5:
				return T;
			case 6:
				return Z;
		}
	}
  // nextPiece() {
	// 	this.log('nextPiece');

	// 	switch(Math.floor(Math.random() * 7)) {
	// 		case 0:
	// 			return new I(this.data);
	// 		case 1:
	// 			return new J(this.data);
	// 		case 2:
	// 			return new L(this.data);
	// 		case 3:
	// 			return new O(this.data);
	// 		case 4:
	// 			return new S(this.data);
	// 		case 5:
	// 			return new T(this.data);
	// 		case 6:
	// 			return new Z(this.data);
	// 	}
	// }
}
