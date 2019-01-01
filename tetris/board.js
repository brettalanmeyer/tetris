class Board extends Canvas {

	constructor(canvas, next) {
		super(canvas);

		this.tetromino;
		this.tetrominos = [];
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

		let tetrominoType = this.next.nextTetrominoType();
		this.tetromino = new tetrominoType(this);

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
		for (let i in this.tetrominos) {
			let tetromino = this.tetrominos[i];
			tetromino.update();
		}

		if (this.tetromino) {
			this.tetromino.update();

			if (this.tetromino.placed) {
				this.tetrominos.push(this.tetromino);

				let tetrominoType = this.next.nextTetrominoType();
				this.tetromino = new tetrominoType(this);
			}
		}
	}

	drop() {
		this.log('drop');

		if (this.isPaused) return;

		while (!this.tetromino.placed) {
			this.moveDown();
		}
	}

	rotateRight() {
		this.log('rotateRight');

		if (this.isPaused) return;

		this.tetromino.rotateRight();
	}

	rotateLeft() {
		this.log('rotateLeft');

		if (this.isPaused) return;

		this.tetromino.rotateLeft();
	}

	moveLeft() {
		this.log('moveLeft');

		if (this.isPaused) return;

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.y == block.y && otherBlock.x - block.x == -1;
		});

		if (!blockDetected) {
			this.tetromino.moveLeft();
		}
	}

	moveRight() {
		this.log('moveRight');

		if (this.isPaused) return;

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.y == block.y && otherBlock.x - block.x == 1;
		});

		if (!blockDetected) {
			this.tetromino.moveRight();
		}
	}

	moveUp() {
		this.log('moveUp');

		if (this.isPaused) return;

		this.tetromino.moveUp();
	}

	moveDown() {
		this.log('moveDown');

		if (this.isPaused) return;

		let blockDetected = this.detectBlock((otherBlock, block) => {
			return otherBlock.x == block.x && otherBlock.y - block.y == 1;
		});

		if (blockDetected) {
			this.tetromino.place();
		} else {
			this.tetromino.moveDown();
		}

		this.difficultyTimer.reset();
	}

	detectBlock(func) {
		let blocks = this.tetromino.blocks;

		for (let i in blocks) {
			let block = blocks[i];

			if (block.y == this.rows - 1) {
				return true;
			}

			for (let j in this.tetrominos) {
				let tetromino = this.tetrominos[j];

				for (let k in tetromino.blocks) {
					let otherBlock = tetromino.blocks[k];

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

		for (let i = this.tetrominos.length - 1; i >= 0; i--) {
			let tetromino = this.tetrominos[i];
			tetromino.clearRow();

			if (!tetromino.hasBlocks()) {
				this.tetrominos.splice(i , 1);
			}

			tetromino.moveDown();
		}
	}
}
