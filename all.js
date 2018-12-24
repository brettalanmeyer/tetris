let board;

const columns = 10;
const rows = 20
const ratio = rows / columns;

function init() {
	board = new Board();

	document.addEventListener('keydown', handleKeydown);
}

function animate() {
	requestAnimationFrame(animate);

	board.render();
}

init();
animate();

function handleKeydown(event) {
	switch(event.keyCode) {
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
