class Next extends Canvas {
	constructor(canvas) {
    super(canvas);

    this.textX;
    this.textY;
    this.tetrominoX;
    this.tetrominoX;

    this.tetrominoType = this._nextTetrominoType();
    this.tetromino = new this.tetrominoType(this);
	}

	offsetX() {
    return this.canvas.width * 2 / 3;
  }

  offsetY() {
    return this.canvas.height * 1 / 3;
  }

  width() {
    return this.canvas.width * 1 / 3;
  }

  height() {
    return this.canvas.height * 1 / 3;
  }

  update() {
    this.textX = this.width() / 2;
    this.textY = this.canvas.height / 24;
    this.draw();

    this.tetrominoX = (this.width() - this.tetromino.getWidth()) / 2;
    this.tetrominoY = (this.height() - this.tetromino.getHeight()) / 2;
    this.tetromino.setPosition(this.tetrominoX, this.tetrominoY);
    this.tetromino.update();
  }

  draw() {
    this.ctx.fillStyle = '#000';
    this.ctx.textAlign = 'center';
    this.ctx.font = this.font();
    this.ctx.fillText('NEXT', this.textX, this.textY);
  }

  nextTetrominoType() {
    let previousType = this.tetrominoType;
    this.tetrominoType = this._nextTetrominoType();
    this.tetromino = new this.tetrominoType(this);
    return previousType;
  }

  _nextTetrominoType() {
		this.log('nextTetromino');

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

  nextTetromino() {
		this.log('nextTetromino');

		switch(Math.floor(Math.random() * 7)) {
			case 0:
				return new I(this);
			case 1:
				return new J(this);
			case 2:
				return new L(this);
			case 3:
				return new O(this);
			case 4:
				return new S(this);
			case 5:
				return new T(this);
			case 6:
				return new Z(this);
		}
	}
}
