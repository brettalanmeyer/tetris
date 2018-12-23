//  # # # #
class I extends Tetromino {
	constructor() {
		super();
		this.color = '#0ff';
		this.blocks = [
			new Block(0, 0),
			new Block(1, 0),
			new Block(2, 0),
			new Block(3, 0),
		];
	}
}

//  # # #
//      #
class J extends Tetromino {
	constructor() {
		super();
		this.color = '#00f';
		this.blocks = [
			new Block(0, 0),
			new Block(1, 0),
			new Block(2, 0),
			new Block(2, 1),
		];
	}
}

//  # # #
//  #
class L extends Tetromino {
	constructor() {
		super();
		this.color = '#ffa500';
		this.blocks = [
			new Block(0, 0),
			new Block(1, 0),
			new Block(2, 0),
			new Block(0, 1),
		];
	}
}

//  # #
//  # #
class O extends Tetromino {
	constructor() {
		super();
		this.color = '#ff0';
		this.blocks = [
			new Block(0, 0),
			new Block(0, 1),
			new Block(1, 0),
			new Block(1, 1),
		];
	}
}

//    # #
//  # #
class S extends Tetromino {
	constructor() {
		super();
		this.color = '#0f0';
		this.blocks = [
			new Block(1, 0),
			new Block(2, 0),
			new Block(0, 1),
			new Block(1, 1),
		];
	}
}

//  # # #
//    #
class T extends Tetromino {
	constructor() {
		super();
		this.color = '#551a8b';
		this.blocks = [
			new Block(0, 0),
			new Block(0, 1),
			new Block(0, 2),
			new Block(1, 1),
		];
	}
}

//  # #
//    # #
class Z extends Tetromino {
	constructor() {
		super();
		this.color = '#f00';
		this.blocks = [
			new Block(0, 0),
			new Block(1, 0),
			new Block(1, 1),
			new Block(2, 1),
		];
	}
}