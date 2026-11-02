export class Stats {
  constructor(score) {
    this.x = 5;
    this.y = 30;
    this.score = score;
    this.lives = 5;
  }

  update(dt) {}

  draw(ctx) {
    ctx.font = '40px Changa One';
    ctx.fillStyle = 'white';
    ctx.fillText(this.score, this.x, this.y);

    ctx.font = '40px Changa One';
    ctx.fillStyle = 'white';
    ctx.fillText(`Lives: ${this.lives}`, this.x + 30, this.y);
  }
}
