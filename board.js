class Board {
	constructor() {
		this.piece = new I();
		this.pieces = []
		this.current = 0;
	}

	update() {
		console.log(this.pieces.length);
		for (let i in this.pieces) {
			let piece = this.pieces[i];
			piece.update();
		}

		this.piece.update();

		if (this.piece.placed) {
			this.pieces.push(this.piece);
			this.piece = this.nextPiece();
		}
	}

	nextPiece() {
		this.current++;

		switch(this.current % 7) {
			case 0:
				return new I();
			case 1:
				return new J();
			case 2:
				return new L();
			case 3:
				return new O();
			case 4:
				return new S();
			case 5:
				return new T();
			case 6:
				return new Z();
		}

	}

	rotateRight() {
		this.piece.rotateRight();
	}

	rotateLeft() {
		this.piece.rotateLeft();
	}

	moveLeft() {
		this.piece.moveLeft();
	}

	moveRight() {
		this.piece.moveRight();
	}

	moveUp() {
		this.piece.moveUp();
	}

	moveDown() {
		this.piece.moveDown();
	}

	clearRow() {
		for (let i = this.pieces.length - 1; i >= 0; i--) {
			let piece = this.pieces[i];
			piece.clearRow();
			
			if (!piece.hasBlocks()) {
				this.pieces.splice(i , 1);
			}

			piece.moveDown();
		}
	}
}
