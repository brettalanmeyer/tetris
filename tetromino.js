class Tetromino {

	constructor(data) {
		this.color = '#f00';
		this.blocks = [];
		this.placed = false;
		this.data = data;
		this.ctx = this.data.ctx;
	}

	update() {
		this.draw();
	}

	draw() {
		this.ctx.beginPath();

		for(let i in this.blocks) {
			let block = this.blocks[i];
			block.update(this.color);
		}
	}

	hasBlocks() {
		return this.blocks.length > 0;
	}

	place() {
		this.placed = true;
	}

	clearRow() {
		for (let i = this.blocks.length - 1; i >= 0; i--) {
			let block = this.blocks[i];

			if (block.y == this.rows - 1) {
				this.blocks.splice(i, 1);
			}
		}
	}

	rotateRight() {
		console.log('rotate right');
	}

	rotateLeft() {
		console.log('rotate left');
	}

	moveLeft() {
		let valid = true;

		for(let i in this.blocks) {
			if (!this.blocks[i].moveLeft()) {
				valid = false;
			}
		}

		if (!valid) {
			this.moveRight();
		}
	}

	moveRight() {
		let valid = true;

		for(let i in this.blocks) {
			if (!this.blocks[i].moveRight()) {
				valid = false;
			}
		}

		if (!valid) {
			this.moveLeft();
		}
	}

	moveUp() {
		let valid = true;

		for(let i in this.blocks) {
			if (!this.blocks[i].moveUp()) {
				valid = false;
			}
		}

		if (!valid) {
			this.moveDown();
		}
	}

	moveDown() {
		let valid = true;

		for(let i in this.blocks) {
			if (!this.blocks[i].moveDown()) {
				valid = false;
			}
		}

		if (!valid) {
			this.moveUp();
			this.placed = true;
		}
	}

}
