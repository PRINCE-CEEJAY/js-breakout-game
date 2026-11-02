export class Ball {
  constructor(game) {
    this.game = game;
    this.radius = 12;
    this.fillColor = 'blue';
    this.x = this.game.paddle.x + this.game.paddle.width / 2;
    this.y = this.game.paddle.y - this.game.paddle.height;
    this.dx = 300;
    this.dy = 300;
  }

  update(dt) {
    this.x -= this.dx * dt;
    this.y -= this.dy * dt;

    //ball collisions
    // vertical top
    if (this.y - this.radius < 0) {
      this.dy *= -1;
    }

    // ball to paddle collision
    if (
      this.y + this.radius > this.game.paddle.y &&
      this.y - this.radius < this.game.paddle.y + this.game.paddle.height &&
      this.x + this.radius > this.game.paddle.x &&
      this.x - this.radius < this.game.paddle.x + this.game.paddle.width
    ) {
      this.dy *= -1;
      this.game.stats.score++;
    }

    // gameover
    if (this.y > this.game.cvs.height) {
      this.game.live--;
      this.game.stop();
    }

    //horizontal right
    if (this.x + this.radius > this.game.cvs.width) {
      this.dx *= -1;
    }

    // horizontal left
    if (this.x - this.radius < 0) {
      this.dx *= -1;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
