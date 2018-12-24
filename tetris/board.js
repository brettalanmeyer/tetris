class Board extends Canvas {

	constructor() {
		super('board');

		this.piece;
		this.pieces = [];
		this.difficulty = 1000;
		this.difficultyTimer = new Timer(() => this.moveDown(), this.difficulty);
		this.inProgress = false;

		this.data = {
			canvas: this.canvas,
			ctx: this.ctx,
			columns: 10,
			rows: 20,
		}
	}

	startGame() {
		this.piece = this.nextPiece();
		this.difficultyTimer.start();
		this.inProgress = true;
	}

	endGame() {
		this.difficultyTimer.stop();
		this.inProgress = false;
	}

	increaseTimer() {
		this.difficulty -= 50;
		this.difficultyTimer.reset(this.difficulty);
	}

	decreaseTimer() {
		this.difficulty += 50;
		this.difficultyTimer.reset(this.difficulty);
	}

	pause() {
		this.inProgress = !this.difficultyTimer.toggle();
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
				this.piece = this.nextPiece();
			}
		}
	}

	nextPiece() {
		switch(Math.floor(Math.random() * 7)) {
			case 0:
				return new I(this.data);
			case 1:
				return new J(this.data);
			case 2:
				return new L(this.data);
			case 3:
				return new O(this.data);
			case 4:
				return new S(this.data);
			case 5:
				return new T(this.data);
			case 6:
				return new Z(this.data);
		}
	}

	drop() {
		if (!this.inProgress) return;

		while (!this.piece.placed) {
			this.moveDown();
		}
	}

	rotateRight() {
		if (!this.inProgress) return;

		this.piece.rotateRight();
	}

	rotateLeft() {
		if (!this.inProgress) return;

		this.piece.rotateLeft();
	}

	moveLeft() {
		if (!this.inProgress) return;

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.y == block.y && otherBlock.x - block.x == -1;
		});

		if (!blockDetected) {
			this.piece.moveLeft();
		}
	}

	moveRight() {
		if (!this.inProgress) return;

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.y == block.y && otherBlock.x - block.x == 1;
		});

		if (!blockDetected) {
			this.piece.moveRight();
		}
	}

	moveUp() {
		if (!this.inProgress) return;

		this.piece.moveUp();
	}

	moveDown() {
		if (!this.inProgress) return;

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