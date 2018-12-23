class Timer {
  constructor(fn, time) {
    this.fn = fn;
    this.time = time;
    this.interval;
  }

  start() {
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
}
