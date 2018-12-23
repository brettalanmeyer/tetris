const canvas = document.getElementById("c");
const c = canvas.getContext("2d");


let board;

const columns = 10;
const rows = 16
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
		case 32:
			board.rotateRight();
			break;
		case 65:
			board.rotateLeft();
			break;
		case 37:
			board.moveLeft();
			break;
		case 39:
			board.moveRight();
			break;
		case 38:
			board.moveUp();
			break;
		case 40:
			board.moveDown();
			break;
		case 13:
			board.clearRow();
			break;			
	}
}

// function rotateRight() {
// 	piece.rotateRight();
// 	console.log('rotateRight');
// }

// function rotateLeft() {
// 	piece.rotateLeft();
// 	console.log('rotateLeft');
// }

// function moveLeft() {
// 	piece.moveLeft();
// 	console.log('moveLeft');
// }

// function moveRight() {
// 	piece.moveRight();
// 	console.log('moveRight');
// }

// function moveUp() {
// 	piece.moveUp();
// 	console.log('moveDown');
// }
