class Board extends Canvas {

	constructor(canvas, next) {
		super(canvas);

		this.piece;
		this.pieces = [];
		this.difficulty = 1000;
		this.difficultyTimer = new Timer(() => this.moveDown(), this.difficulty);
		this.isPaused = false;

		this.next = next;
	}

	offsetX() {
    return this.canvas.width / 3;
  }

  offsetY() {
    return this.canvas.height * 1 / 8;
  }

  width() {
    return this.canvas.width * 1 / 3;
  }

  height() {
    return this.canvas.height * 7 / 8;
  }

	startGame() {
		this.log('startGame');

		let pieceType = this.next.nextPieceType();
		this.piece = new pieceType(this.data);

		this.difficultyTimer.start();
		this.isPaused = false;
	}

	endGame() {
		this.log('endGame');

		this.difficultyTimer.stop();
		this.isPaused = true;
	}

	increaseTimer() {
		this.log('increaseTimer');

		this.difficulty -= 50;
		this.difficultyTimer.reset(this.difficulty);
	}

	decreaseTimer() {
		this.log('decreaseTimer');

		this.difficulty += 50;
		this.difficultyTimer.reset(this.difficulty);
	}

	pause() {
		this.log('pause');

		this.isPaused = this.difficultyTimer.toggle();
	}

	update() {
		for (let i in this.pieces) {
			let piece = this.pieces[i];
			piece.update();
		}

		if (this.piece) {
			this.piece.update();

			if (this.piece.placed) {
				this.pieces.push(this.piece);

				let pieceType = this.next.nextPieceType();
				this.piece = new pieceType(this.data);
			}
		}
	}

	drop() {
		this.log('drop');

		if (this.isPaused) return;

		while (!this.piece.placed) {
			this.moveDown();
		}
	}

	rotateRight() {
		this.log('rotateRight');

		if (this.isPaused) return;

		this.piece.rotateRight();
	}

	rotateLeft() {
		this.log('rotateLeft');

		if (this.isPaused) return;

		this.piece.rotateLeft();
	}

	moveLeft() {
		this.log('moveLeft');

		if (this.isPaused) return;

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.y == block.y && otherBlock.x - block.x == -1;
		});

		if (!blockDetected) {
			this.piece.moveLeft();
		}
	}

	moveRight() {
		this.log('moveRight');

		if (this.isPaused) return;

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.y == block.y && otherBlock.x - block.x == 1;
		});

		if (!blockDetected) {
			this.piece.moveRight();
		}
	}

	moveUp() {
		this.log('moveUp');

		if (this.isPaused) return;

		this.piece.moveUp();
	}

	moveDown() {
		this.log('moveDown');

		if (this.isPaused) return;

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.x == block.x && otherBlock.y - block.y == 1;
		});

		if (blockDetected) {
			this.piece.place();
		} else {
			this.piece.moveDown();
		}

		this.difficultyTimer.reset();
	}

	detectBlock(func) {
		let blocks = this.piece.blocks;

		for (let i in blocks) {
			let block = blocks[i];

			if (block.y == this.rows - 1) {
				return true;
			}

			for (let j in this.pieces) {
				let piece = this.pieces[j];

				for (let k in piece.blocks) {
					let otherBlock = piece.blocks[k];

					if (func(otherBlock, block)) {
						return true;
					}
				}
			}
		}

		return false;
	}

	clearRow() {
		this.log('clearRow');

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
