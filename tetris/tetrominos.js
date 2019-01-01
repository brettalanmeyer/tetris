//  # # # #
class I extends Tetromino {
	constructor(container) {
		super('I', container);

		this.color = '#0ff';
		this.blocks = [
			new Block(container, 0, 0),
			new Block(container, 1, 0),
			new Block(container, 2, 0),
			new Block(container, 3, 0),
		];
	}
}

//  # # #
//      #
class J extends Tetromino {
	constructor(container) {
		super('J', container);
		this.color = '#00f';
		this.blocks = [
			new Block(container, 0, 0),
			new Block(container, 1, 0),
			new Block(container, 2, 0),
			new Block(container, 2, 1),
		];
	}
}

//  # # #
//  #
class L extends Tetromino {
	constructor(container) {
		super('L', container);
		this.color = '#ffa500';
		this.blocks = [
			new Block(container, 0, 0),
			new Block(container, 1, 0),
			new Block(container, 2, 0),
			new Block(container, 0, 1),
		];
	}
}

//  # #
//  # #
class O extends Tetromino {
	constructor(container) {
		super('O', container);
		this.color = '#ff0';
		this.blocks = [
			new Block(container, 0, 0),
			new Block(container, 0, 1),
			new Block(container, 1, 0),
			new Block(container, 1, 1),
		];
	}
}

//    # #
//  # #
class S extends Tetromino {
	constructor(container) {
		super('S', container);
		this.color = '#0f0';
		this.blocks = [
			new Block(container, 1, 0),
			new Block(container, 2, 0),
			new Block(container, 0, 1),
			new Block(container, 1, 1),
		];
	}
}

//  # # #
//    #
class T extends Tetromino {
	constructor(container) {
		super('T', container);
		this.color = '#551a8b';
		this.blocks = [
			new Block(container, 0, 0),
			new Block(container, 1, 0),
			new Block(container, 2, 0),
			new Block(container, 1, 1),
		];
	}
}

//  # #
//    # #
class Z extends Tetromino {
	constructor(container) {
		super('Z', container);
		this.color = '#f00';
		this.blocks = [
			new Block(container, 0, 0),
			new Block(container, 1, 0),
			new Block(container, 1, 1),
			new Block(container, 2, 1),
		];
	}
}