class Block {
	constructor(x, y) {
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

		c.fillStyle = '#000';
		c.fillRect(x, y, w, h);

		c.fillStyle = color;
		c.fillRect(x + 0.5, y + 0.5, w - 1, h - 1);
	}

	top(num) {
		return num * this.width();
	}

	left(num) {
		return num * this.height();
	}

	width() {
		return canvas.width / columns;
	}

	height() {
		return canvas.height / rows;
	}

	moveLeft() {
		this.x -= 1;

		if (block.x < 0) {
			return false;
		}

		return true;
	}

	moveRight() {
		this.x += 1;

		if (this.x > columns - 1) {
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

		if (this.y > rows - 1) {
			return false;
		}

		return true;
	}

}
