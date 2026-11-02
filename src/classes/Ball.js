export class Ball {
  constructor(game) {
    this.game = game;
    this.radius = 12;
    this.fillColor = 'blue';
    this.x = this.game.paddle.x + this.game.paddle.width / 2;
    this.y = this.game.paddle.y - this.game.paddle.height;
    this.speed = 200;
  }

  update(dt) {
    this.x -= this.speed * dt;
    this.y -= this.speed * dt;

    if (this.y - this.radius < 0) {
      this.speed = -this.speed;
      this.y = -this.y;
    }

    if (this.y + this.radius > this.game.paddle.y) {
      this.speed = -this.speed;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
