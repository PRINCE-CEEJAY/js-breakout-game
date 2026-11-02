export class InputManager {
  constructor() {
    this.keys = new Set();

    window.addEventListener('keydown', (e) => {
      this.keys.add(e.code);
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });

    window.addEventListener('blur', (e) => {
      this.keys.clear(e.code);
    });
  }

  isPressed(key) {
    return this.keys.has(key);
  }
}
