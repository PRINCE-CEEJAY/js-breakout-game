import { Ball } from './Ball.js';
import { InputManager } from './InputManager.js';
import { Paddle } from './Paddle.js';
import { Stats } from './Stats.js';

export class Game {
  constructor(canvas) {
    this.cvs = canvas;
    this.width = this.cvs.width = 800;
    this.height = this.cvs.height = 400;
    this.ctx = this.cvs.getContext('2d');
    this.lastTime = 0;
    this.running = false;
    this.score = 0;

    this.input = new InputManager();
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.stats = new Stats(this.score, this);
  }
  update(dt) {
    this.paddle.update(dt, this.input);
    this.ball.update(dt);
    this.stats.update(dt);
  }

  draw() {
    this.paddle.draw(this.ctx);
    this.ball.draw(this.ctx);
    this.stats.draw(this.ctx);
  }

  loop = (timestamp) => {
    if (!this.running) return;
    let dt = (timestamp - this.lastTime) / 1000;
    this.lastTime = timestamp;

    this.ctx.clearRect(0, 0, this.width, this.height);

    this.update(dt);
    this.draw();

    requestAnimationFrame(this.loop);
  };

  start() {
    this.running = true;
    requestAnimationFrame(this.loop);
  }

  stop() {
    if (!this.running) return;
    this.running = false;
  }
}
