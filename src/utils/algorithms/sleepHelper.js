class ExecutionController {
  constructor() {
    this.isPaused = false;
    this.isAborted = false;
    this.resumeResolver = null;
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
    if (this.resumeResolver) {
      this.resumeResolver();
      this.resumeResolver = null;
    }
  }

  step() {
    // If we are paused, unblock once to allow one step, then remain paused
    if (this.resumeResolver) {
      this.resumeResolver();
      this.resumeResolver = null;
    }
  }

  abort() {
    this.isAborted = true;
    if (this.resumeResolver) {
      this.resumeResolver();
      this.resumeResolver = null;
    }
  }
  
  reset() {
    this.isPaused = false;
    this.isAborted = false;
    this.resumeResolver = null;
  }

  async wait(ms) {
    if (this.isAborted) throw new Error("Algorithm aborted");

    if (this.isPaused) {
      // Block until resumed or stepped
      await new Promise((resolve) => {
        this.resumeResolver = resolve;
      });
      if (this.isAborted) throw new Error("Algorithm aborted");
    } else {
      // Normal wait
      await new Promise((resolve) => setTimeout(resolve, ms));
      if (this.isAborted) throw new Error("Algorithm aborted");
    }
  }
}

export const executionController = new ExecutionController();

export const sleep = (ms) => executionController.wait(ms);
