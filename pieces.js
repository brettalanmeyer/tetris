//  # # # #
class I extends Tetromino {
	constructor(data) {
		super(data);
		this.color = '#0ff';
		this.blocks = [
			new Block(data, 0, 0),
			new Block(data, 1, 0),
			new Block(data, 2, 0),
			new Block(data, 3, 0),
		];
	}
}

//  # # #
//      #
class J extends Tetromino {
	constructor(data) {
		super(data);
		this.color = '#00f';
		this.blocks = [
			new Block(data, 0, 0),
			new Block(data, 1, 0),
			new Block(data, 2, 0),
			new Block(data, 2, 1),
		];
	}
}

//  # # #
//  #
class L extends Tetromino {
	constructor(data) {
		super(data);
		this.color = '#ffa500';
		this.blocks = [
			new Block(data, 0, 0),
			new Block(data, 1, 0),
			new Block(data, 2, 0),
			new Block(data, 0, 1),
		];
	}
}

//  # #
//  # #
class O extends Tetromino {
	constructor(data) {
		super(data);
		this.color = '#ff0';
		this.blocks = [
			new Block(data, 0, 0),
			new Block(data, 0, 1),
			new Block(data, 1, 0),
			new Block(data, 1, 1),
		];
	}
}

//    # #
//  # #
class S extends Tetromino {
	constructor(data) {
		super(data);
		this.color = '#0f0';
		this.blocks = [
			new Block(data, 1, 0),
			new Block(data, 2, 0),
			new Block(data, 0, 1),
			new Block(data, 1, 1),
		];
	}
}

//  # # #
//    #
class T extends Tetromino {
	constructor(data) {
		super(data);
		this.color = '#551a8b';
		this.blocks = [
			new Block(data, 0, 0),
			new Block(data, 0, 1),
			new Block(data, 0, 2),
			new Block(data, 1, 1),
		];
	}
}

//  # #
//    # #
class Z extends Tetromino {
	constructor(data) {
		super(data);
		this.color = '#f00';
		this.blocks = [
			new Block(data, 0, 0),
			new Block(data, 1, 0),
			new Block(data, 1, 1),
			new Block(data, 2, 1),
		];
	}
}