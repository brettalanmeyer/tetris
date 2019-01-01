//  # # # #
class I extends Tetromino {
	constructor(canvas) {
		super('I', canvas);

		this.color = '#0ff';
		this.blocks = [
			new Block(canvas, 0, 0),
			new Block(canvas, 1, 0),
			new Block(canvas, 2, 0),
			new Block(canvas, 3, 0),
		];
	}
}

//  # # #
//      #
class J extends Tetromino {
	constructor(canvas) {
		super('J', canvas);
		this.color = '#00f';
		this.blocks = [
			new Block(canvas, 0, 0),
			new Block(canvas, 1, 0),
			new Block(canvas, 2, 0),
			new Block(canvas, 2, 1),
		];
	}
}

//  # # #
//  #
class L extends Tetromino {
	constructor(canvas) {
		super('L', canvas);
		this.color = '#ffa500';
		this.blocks = [
			new Block(canvas, 0, 0),
			new Block(canvas, 1, 0),
			new Block(canvas, 2, 0),
			new Block(canvas, 0, 1),
		];
	}
}

//  # #
//  # #
class O extends Tetromino {
	constructor(canvas) {
		super('O', canvas);
		this.color = '#ff0';
		this.blocks = [
			new Block(canvas, 0, 0),
			new Block(canvas, 0, 1),
			new Block(canvas, 1, 0),
			new Block(canvas, 1, 1),
		];
	}
}

//    # #
//  # #
class S extends Tetromino {
	constructor(canvas) {
		super('S', canvas);
		this.color = '#0f0';
		this.blocks = [
			new Block(canvas, 1, 0),
			new Block(canvas, 2, 0),
			new Block(canvas, 0, 1),
			new Block(canvas, 1, 1),
		];
	}
}

//  # # #
//    #
class T extends Tetromino {
	constructor(canvas) {
		super('T', canvas);
		this.color = '#551a8b';
		this.blocks = [
			new Block(canvas, 0, 0),
			new Block(canvas, 1, 0),
			new Block(canvas, 2, 0),
			new Block(canvas, 1, 1),
		];
	}
}

//  # #
//    # #
class Z extends Tetromino {
	constructor(canvas) {
		super('Z', canvas);
		this.color = '#f00';
		this.blocks = [
			new Block(canvas, 0, 0),
			new Block(canvas, 1, 0),
			new Block(canvas, 1, 1),
			new Block(canvas, 2, 1),
		];
	}
}