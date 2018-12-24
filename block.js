class Block {
	constructor(data, x, y) {
		this.canvas = data.canvas;
		this.ctx = data.ctx;
		this.columns = data.columns;
		this.rows = data.rows;
		this.x = x;
		this.y = y;
	}

	update(color) {
		this.draw(color);
	}

	draw(color) {
		let x = this.top(this.x);
		let y = this.left(this.y);
		let w = this.width();
		let h = this.height();

		this.ctx.fillStyle = '#000';
		this.ctx.fillRect(x, y, w, h);

		this.ctx.fillStyle = color;
		this.ctx.fillRect(x + 0.5, y + 0.5, w - 1, h - 1);
	}

	top(num) {
		return num * this.width();
	}

	left(num) {
		return num * this.height();
	}

	width() {
		return this.canvas.width / this.columns;
	}

	height() {
		return this.canvas.height / this.rows;
	}

	moveLeft() {
		this.x -= 1;

		if (this.x < 0) {
			return false;
		}

		return true;
	}

	moveRight() {
		this.x += 1;

		if (this.x > this.columns - 1) {
			return false;
		}

		return true;
	}

	moveUp() {
		this.y -= 1;

		if (this.y < 0) {
			return false;
		}

		return true;
	}

	moveDown() {
		this.y += 1;

		if (this.y > this.rows - 1) {
			return false;
		}

		return true;
	}

}
