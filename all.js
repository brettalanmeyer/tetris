let board;
let next;
let level;
let score;
let lines;
let statistics;
let gametype;

function init() {
	board = new Board();
	next = new Next();
	level = new Level();
	score = new Score();
	lines = new Lines();
	statistics = new Statistics();
	gametype = new Gametype();

	document.addEventListener('keydown', handleKeydown);
}

function animate() {
	requestAnimationFrame(animate);

	board.render();
	next.render();
	level.render();
	score.render();
	lines.render();
	statistics.render();
	gametype.render();
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
