import Game from "./scripts/game";
import GameView from "./scripts/game_view";

document.addEventListener('DOMContentLoaded', (e) => {

  const canvasEl = document.getElementById("mycanvas");
  const ctx = canvasEl.getContext("2d");

  const gameView = new GameView(ctx);
  gameView.drawGameBegin();
  // gameView.start();
  window.ctx = ctx;
});
