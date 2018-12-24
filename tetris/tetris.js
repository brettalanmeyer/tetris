class Tetris {
  constructor() {
    this.next = new Next();
    this.level = new Level();
    this.score = new Score();
    this.lines = new Lines();
    this.statistics = new Statistics();
    this.gametype = new Gametype();
    this.board = new Board(this.next);

    this.isPaused = false;
    this.isInDebugMode = false;

    this.addEvents();
    this.animate();
  }

  addEvents() {
    document.addEventListener('keydown', (e) => this.handleKeydown(e));
  }

  animate() {
    if (!this.isPaused) {
      window.requestAnimationFrame(() => this.animate());
    }

    this.board.render();
    this.next.render();
    this.level.render();
    this.score.render();
    this.lines.render();
    this.statistics.render();
    this.gametype.render();
  }

  pause(){
    this.isPaused = !this.isPaused;

    if (!this.isPaused) {
      this.animate()
    }
  }

  toggleDebugMode() {
    this.isInDebugMode = !this.isInDebugMode;
    console.log('toggleDebugMode:', this.isInDebugMode);

    this.next.setDebugMode(this.isInDebugMode);
    this.level.setDebugMode(this.isInDebugMode);
    this.score.setDebugMode(this.isInDebugMode);
    this.lines.setDebugMode(this.isInDebugMode);
    this.statistics.setDebugMode(this.isInDebugMode);
    this.gametype.setDebugMode(this.isInDebugMode);
    this.board.setDebugMode(this.isInDebugMode);
  }

  handleKeydown(event) {
    switch(event.keyCode) {
      case KEYS.UP:
        this.board.moveUp();
        break;
      case KEYS.DOWN:
          this.board.moveDown();
          break;
      case KEYS.LEFT:
        this.board.moveLeft();
        break;
      case KEYS.RIGHT:
        this.board.moveRight();
        break;
      case KEYS.SPACE:
        this.board.drop();
        break;
      case KEYS.ENTER:
        this.board.clearRow();
        break;
      case KEYS.F:
        this.board.rotateRight();
        break;
      case KEYS.D:
        this.board.rotateLeft();
        break;
      case KEYS.S:
        this.board.startGame();
        break;
      case KEYS.E:
        this.board.endGame();
        break;
      case KEYS.O:
        this.pause();
        break;
      case KEYS.P:
        this.board.pause();
        break;
      case KEYS.LEFT_BRACKET:
        this.board.increaseTimer();
        break;
      case KEYS.RIGHT_BRACKET:
        this.board.decreaseTimer();
        break;
      case KEYS.Q:
        this.toggleDebugMode();
        break;
      }
    }
}
