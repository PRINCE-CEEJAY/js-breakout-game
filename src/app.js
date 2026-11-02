import { Game } from './classes/Game.js';

window.addEventListener('load', () => {
  const canvas = document.querySelector('.breakout');
  const game = new Game(canvas);
  game.start();
});
