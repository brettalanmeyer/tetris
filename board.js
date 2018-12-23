class Board {
	constructor() {
		this.piece = this.nextPiece();
		this.pieces = []
	}

	update() {
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
		switch(Math.floor(Math.random() * 7)) {
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
		let allowed = true;

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.y == block.y && otherBlock.x - block.x == -1;
		});

		if (!blockDetected) {
			this.piece.moveLeft();
		}
	}

	moveRight() {
		let allowed = true;

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.y == block.y && otherBlock.x - block.x == 1;
		});

		if (!blockDetected) {
			this.piece.moveRight();
		}
	}

	moveUp() {
		this.piece.moveUp();
	}

	moveDown() {
		let allowed = true;


		this.piece.moveDown();

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.x == block.x && otherBlock.y - block.y == 1;
		});

		if (blockDetected) {
			this.piece.place();
		}
	}

	detectBlock(func) {
		let blocks = this.piece.blocks;

		for (let i in blocks) {
			let block = blocks[i];

			if (block.y == rows - 1) {
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
