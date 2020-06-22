import Game from "./scripts/game";
import GameView from "./scripts/game_view";

document.addEventListener('DOMContentLoaded', (e) => {
  console.log("webpack is running");

  const canvasEl = document.getElementById("mycanvas");
  const ctx = canvasEl.getContext("2d");

  const gameView = new GameView(ctx);
  gameView.start();
  window.ctx = ctx;
});
