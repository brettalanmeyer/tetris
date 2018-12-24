const canvas = document.getElementById("c");
const c = canvas.getContext("2d");


let board;

const columns = 10;
const rows = 20
const ratio = rows / columns;

function init() {
	document.addEventListener('keydown', handleKeydown);
	window.addEventListener('resize', handleResize);
	handleResize();

	board = new Board();
}

function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0, 0, canvas.width, canvas.height);

	board.update();
}

init();
animate();

function handleResize() {
	let width = window.innerHeight / ratio;
	let height = window.innerHeight;

	if (width > window.innerWidth) {
		width = window.innerWidth;
		height = window.innerWidth * ratio;
	}

	canvas.width = width;
	canvas.height = height;
}

function handleKeydown(event) {
	switch(event.keyCode) {
		// case :
			// board.rotateRight();
			// break;
		// case :
			// board.rotateLeft();
			// break;
		case KEYS.LEFT:
			board.moveLeft();
			break;
		case KEYS.RIGHT:
			board.moveRight();
			break;
		case KEYS.UP:
			board.moveUp();
			break;
		case KEYS.DOWN:
			board.moveDown();
			break;
		case KEYS.SPACE:
			board.drop();
			break;
		case KEYS.ENTER:
			board.clearRow();
			break;
		case KEYS.S:
			board.startGame();
			break;
		case KEYS.E:
			board.endGame();
			break;
		case KEYS.I:
			board.increaseTimer();
			break;
		case KEYS.O:
			board.decreaseTimer();
			break;
		case KEYS.P:
			board.pause();
			break;
		}
}
