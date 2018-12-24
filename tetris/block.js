class Block {
	constructor(data, x, y) {
		this.canvas = data.canvas;
		this.ctx = data.ctx;
		this.columns = data.columns;
		this.rows = data.rows;
		this.x = x;
		this.y = y;

		this.l;
		this.t;
		this.w;
		this.h;
	}

	update(color) {
		this.l = this.left(this.x);
		this.t = this.top(this.y);
		this.w = this.width();
		this.h = this.height();

		this.draw(color);
	}

	draw(color) {
		this.ctx.fillStyle = '#000';
		this.ctx.fillRect(this.l, this.t, this.w, this.h);

		this.ctx.fillStyle = color;
		this.ctx.fillRect(this.l + 0.5, this.t + 0.5, this.w - 1, this.h - 1);
	}

	left(num) {
		return num * this.width();
	}

	top(num) {
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
