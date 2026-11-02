export class Paddle {
  constructor(game) {
    this.game = game;
    this.width = 140;
    this.height = 20;
    this.x = this.game.cvs.width / 2 - this.width / 2;
    this.y = this.game.cvs.height - this.height;
    this.speed = 400;
  }

  update(dt, input) {
    if (input.isPressed('ArrowLeft')) {
      this.x -= this.speed * dt;
    }
    if (input.isPressed('ArrowRight')) {
      this.x += this.speed * dt;
    }

    this.constrainPaddle(this.width);
  }

  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }

  constrainPaddle() {
    this.x = Math.max(0, Math.min(this.x, this.game.cvs.width - this.width));
  }
}
