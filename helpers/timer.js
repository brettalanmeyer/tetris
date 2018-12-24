class Timer {
  constructor(fn, time) {
    this.fn = fn;
    this.time = time;
    this.interval;
    this.paused = false;
  }

  start() {
    if (this.paused) return;

    if (this.interval == null) {
      this.interval = setInterval(this.fn, this.time);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset(newTime) {
    if (newTime != null) {
      this.time = newTime;
    }

    this.stop();
    this.start();
  }

  toggle() {
    if (this.paused) {
      this.resume();
    } else {
      this.pause();
    }

    return this.paused;
  }

  pause() {
    this.paused = true;
    this.stop();
  }

  resume() {
    this.paused = false;
    this.start();
  }
}
