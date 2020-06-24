/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ "./src/scripts/game_view.js");


document.addEventListener('DOMContentLoaded', function (e) {
  var canvasEl = document.getElementById("mycanvas");
  var ctx = canvasEl.getContext("2d");
  var gameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
  gameView.drawGameBegin(); // gameView.start();

  window.ctx = ctx;
});

/***/ }),

/***/ "./src/scripts/diamond.js":
/*!********************************!*\
  !*** ./src/scripts/diamond.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Diamond = /*#__PURE__*/function () {
  function Diamond(pos) {
    _classCallCheck(this, Diamond);

    this.pos = pos;
    this.vel = 0;
    this.radius = 10;
  }

  _createClass(Diamond, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1];
      ctx.beginPath();
      ctx.moveTo(x, y + 15);
      ctx.lineTo(x - 8, y);
      ctx.lineTo(x, y - 15);
      ctx.lineTo(x + 8, y);
      ctx.lineTo(x, y + 15);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#4dffff';
      ctx.stroke();
    }
  }, {
    key: "move",
    value: function move(delta, playerPos) {
      var velDir = [playerPos[0] - this.pos[0], playerPos[1] - this.pos[1]];
      var velMag = _util__WEBPACK_IMPORTED_MODULE_0__["default"].norm(velDir);
      var vel = [velDir[0] / velMag, velDir[1] / velMag];
      this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]]; // this.pos = [this.pos[0] + (velDir[0] / (velMag * 10)), velDir[1] / (velMag * 10)]
    }
  }]);

  return Diamond;
}();

/* harmony default export */ __webpack_exports__["default"] = (Diamond);

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ "./src/scripts/game_view.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
/* harmony import */ var _diamond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diamond */ "./src/scripts/diamond.js");
/* harmony import */ var _gate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gate */ "./src/scripts/gate.js");
/* harmony import */ var _shard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shard */ "./src/scripts/shard.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./score */ "./src/scripts/score.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sound */ "./src/scripts/sound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]([480, 320]);
    this.diamonds = [];
    this.diamondSpawnRate = 100;
    this.gates = [];
    this.gateSpawnRate = 240;
    this.shards = [];
    this.frameNum = 1;
    this.inPlay = true;
    this.score = new _score__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.gate = new _sound__WEBPACK_IMPORTED_MODULE_7__["default"]("../../assets/sounds/gate.mp3");
    this.multi = new _sound__WEBPACK_IMPORTED_MODULE_7__["default"]("../../assets/sounds/multi.mp3");
  }

  _createClass(Game, [{
    key: "addDiamond",
    value: function addDiamond() {
      var diamond = new _diamond__WEBPACK_IMPORTED_MODULE_2__["default"]([Math.random() * 960, Math.random() * 640]);

      if (_util__WEBPACK_IMPORTED_MODULE_5__["default"].dist(diamond.pos, this.player.pos) > 150) {
        this.diamonds.push(diamond);
      }
    }
  }, {
    key: "addGate",
    value: function addGate() {
      var gate = new _gate__WEBPACK_IMPORTED_MODULE_3__["default"]([Math.random() * 960, Math.random() * 640], Math.random() * Math.PI / 2);
      this.gates.push(gate);
    }
  }, {
    key: "addShard",
    value: function addShard(pos) {
      var shard = new _shard__WEBPACK_IMPORTED_MODULE_4__["default"](pos);
      this.shards.push(shard);
    }
  }, {
    key: "moveObjects",
    value: function moveObjects(delta) {
      this.player.move();

      if (this.frameNum % this.diamondSpawnRate === 0) {
        this.addDiamond();
      }

      if (this.frameNum % this.gateSpawnRate === 0) {
        this.addGate();
      }

      if (this.frameNum % 600 === 0 && this.diamondSpawnRate > 10) {
        this.diamondSpawnRate -= 10;
      }

      for (var i = 0; i < this.diamonds.length; i++) {
        this.diamonds[i].move(delta, this.player.pos);

        if (Math.abs(this.diamonds[i].pos[0] - this.player.pos[0]) < 40 && Math.abs(this.diamonds[i].pos[1] - this.player.pos[1]) < 40) {
          if (_util__WEBPACK_IMPORTED_MODULE_5__["default"].isCollided(this.diamonds[i], this.player)) {
            this.inPlay = false;
          }
        }
      }

      for (var _i = 0; _i < this.gates.length; _i++) {
        this.gates[_i].move(this.frameNum, this.player);

        if (this.gates[_i].collisionCircles.length !== 0) {
          if (_util__WEBPACK_IMPORTED_MODULE_5__["default"].goneThroughGate(this.player, this.gates[_i])) {
            this.gate.stop();
            var explosion = {
              pos: this.gates[_i].collisionCircles[3].pos,
              radius: 150
            };
            var diamondsToKeep = [];
            this.score.score += this.score.multiplier * 100;
            this.score.multiplier += 2;
            this.gate.play();

            for (var _i2 = 0; _i2 < this.diamonds.length; _i2++) {
              if (!_util__WEBPACK_IMPORTED_MODULE_5__["default"].isCollided(explosion, this.diamonds[_i2])) {
                diamondsToKeep.push(this.diamonds[_i2]);
              } else {
                this.score.score += this.score.multiplier * 50;
                this.addShard(this.diamonds[_i2].pos);
              }
            }

            this.diamonds = diamondsToKeep;
            this.gates.splice(_i, 1);
          }
        }

        for (var _i3 = 0; _i3 < this.shards.length; _i3++) {
          if (Math.abs(this.shards[_i3].pos[0] - this.player.pos[0]) < 40 && Math.abs(this.shards[_i3].pos[1] - this.player.pos[1]) < 40) {
            if (_util__WEBPACK_IMPORTED_MODULE_5__["default"].isCollided(this.shards[_i3], this.player)) {
              this.multi.stop();
              this.score.multiplier += 1;
              this.multi.play();
              this.shards.splice(_i3, 1);
            }
          }
        }
      }

      this.frameNum++;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.player.draw(ctx);

      for (var i = 0; i < this.diamonds.length; i++) {
        this.diamonds[i].draw(ctx);
      }

      for (var _i4 = 0; _i4 < this.gates.length; _i4++) {
        this.gates[_i4].draw(ctx);
      }

      for (var _i5 = 0; _i5 < this.shards.length; _i5++) {
        this.shards[_i5].draw(ctx);
      }

      this.score.drawMult(ctx);
      this.score.drawScore(ctx);
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound */ "./src/scripts/sound.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/scripts/page.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var GameView = /*#__PURE__*/function () {
  function GameView(ctx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.lastTime = 0;
    this.animate = this.animate.bind(this);
    this.start = this.start.bind(this);
    this.started = false;
    this.bgi = new Image();
    this.bgi.src = "../../assets/images/bg.jpg";
    this.bgm = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/bgm.mp3");
    this.gom = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/gameover.mp3");
    Object(_page__WEBPACK_IMPORTED_MODULE_2__["setUpModals"])();
  }

  _createClass(GameView, [{
    key: "animate",
    value: function animate(currentTime) {
      var _this = this;

      this.drawBackground(this.ctx);
      this.ctx.drawImage(this.bgi, 0, 0);
      var delta = currentTime - this.lastTime;

      if (this.game.inPlay) {
        this.bgm.play();
        requestAnimationFrame(this.animate);
        this.game.draw(this.ctx);
        this.handleMovement();
        this.game.moveObjects(delta);
        this.lastTime = currentTime;
      } else {
        var playAgainBtn = document.getElementsByClassName("play-again-btn")[0];
        playAgainBtn.classList.toggle("hidden");

        playAgainBtn.onclick = function () {
          _this.restart();

          playAgainBtn.classList.toggle("hidden");
        };

        this.bgm.stop();
        this.gom.play();
        var scoresArray = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];
        var newScoreObj;
        newScoreObj = [this.game.score.name, this.game.score.score];
        scoresArray.push(newScoreObj);
        localStorage.setItem('scores', JSON.stringify(scoresArray));
        var scores = JSON.parse(localStorage.getItem("scores"));
        console.log(scores);
        var topTen = scores.sort(function (a, b) {
          return b[1] - a[1];
        }).slice(0, 10);
        this.drawGameOver(topTen);
      }
    }
  }, {
    key: "drawGameBegin",
    value: function drawGameBegin() {
      var _this2 = this;

      this.ctx.drawImage(this.bgi, 0, 0);
      this.ctx.font = "small-caps bold 40px Courier New";
      this.ctx.fillStyle = "#00FF00";
      this.ctx.fillText("Click to Play", 350, 300);
      var cvs = document.getElementById("mycanvas");

      cvs.onclick = function () {
        if (!_this2.started) {
          _this2.start();
        }
      };
    }
  }, {
    key: "drawGameOver",
    value: function drawGameOver(topTen) {
      ctx.font = "small-caps bold 40px Courier New";
      ctx.fillStyle = "#00FF00";
      ctx.fillText("Final Score: " + this.game.score.score, 350, 40);
      ctx.font = "small-caps 30px Courier New";
      ctx.fillStyle = "#FFFF00";
      ctx.fillText("High Scores", 410, 100);
      ctx.font = "small-caps bold 25px Courier New";
      ctx.fillStyle = "#0095DD";

      for (var i = 0; i < 10; i++) {
        if (topTen[i]) {
          ctx.fillText(i + 1 + "." + topTen[i][0] + ": " + topTen[i][1], 350, 120 + 30 * (i + 1));
        }
      }
    }
  }, {
    key: "drawBackground",
    value: function drawBackground() {
      this.ctx.fillStyle = "#000000";
      this.ctx.fillRect(0, 0, 960, 640);
    }
  }, {
    key: "start",
    value: function start() {
      var _this3 = this;

      this.started = true;
      window.addEventListener('keydown', function (e) {
        e.preventDefault();
        _this3.keys = _this3.keys || [];
        _this3.keys[e.keyCode] = e.type == "keydown";
      });
      window.addEventListener('keyup', function (e) {
        e.preventDefault();
        _this3.keys[e.keyCode] = e.type == "keydown";
      });
      requestAnimationFrame(this.animate);
    }
  }, {
    key: "restart",
    value: function restart() {
      console.log("what's happenin");
      this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
      requestAnimationFrame(this.animate);
    }
  }, {
    key: "handleMovement",
    value: function handleMovement() {
      if (this.keys && this.keys[65]) {
        this.game.player.moveAngle = -5;
      }

      if (this.keys && this.keys[68]) {
        this.game.player.moveAngle = 5;
      }

      if (this.keys && this.keys[87]) {
        this.game.player.speed = -4;
      }

      if (this.keys && this.keys[84]) {
        this.game.player.speed = 4;
      }

      if (this.keys && this.keys[37]) {
        this.game.player.moveAngle = -5;
      }

      if (this.keys && this.keys[39]) {
        this.game.player.moveAngle = 5;
      }

      if (this.keys && this.keys[38]) {
        this.game.player.speed = -4;
      }

      if (this.keys && this.keys[40]) {
        this.game.player.speed = 4;
      }
    }
  }]);

  return GameView;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/scripts/gate.js":
/*!*****************************!*\
  !*** ./src/scripts/gate.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Gate = /*#__PURE__*/function () {
  function Gate(pos, angle) {
    _classCallCheck(this, Gate);

    // (-1,0) (1, 0), (-1,60), (1,60)
    this.pos = pos;
    this.angle = angle;
    this.collisionCircles = [];
  }

  _createClass(Gate, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1];
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(this.angle);
      ctx.beginPath();
      ctx.lineTo(0, 0);
      ctx.lineTo(0 + 10, 0 - 10);
      ctx.lineTo(0 - 10, 0 - 10);
      ctx.lineTo(0, 0);
      ctx.lineTo(0, 0 + 60);
      ctx.lineTo(0 + 10, 0 + 70);
      ctx.lineTo(0 - 10, 0 + 70);
      ctx.lineTo(0, 0 + 60);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffa500';
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "move",
    value: function move(frameNum, player) {
      this.collisionCircles = [];

      if (frameNum % 120 === 0) {
        this.vel = _util__WEBPACK_IMPORTED_MODULE_0__["default"].randomVec(0.125);
      }

      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];

      if (Math.abs(player.pos[0] - this.pos[0]) < 70 && Math.abs(player.pos[1] - this.pos[1]) < 70) {
        for (var i = 0; i < 6; i++) {
          this.collisionCircles.push({
            pos: [this.pos[0] - (5 + 10 * i) * Math.sin(this.angle), this.pos[1] + (5 + 10 * i) * Math.cos(this.angle)],
            radius: 5
          });
        }
      } // this.collisionPos = {
      //   topLeft: [(this.pos[0] - 1) * Math.cos(this.angle) + this.pos[1] * Math.sin(this.angle),
      //   this.pos[1] * Math.cos(this.angle) - ((this.pos[0] - 1) * Math.sin(this.angle))],
      //   topRight: [(this.pos[0] + 1) * Math.cos(this.angle) + this.pos[1] * Math.sin(this.angle),
      //   this.pos[1] * Math.cos(this.angle) - ((this.pos[0] + 1) * Math.sin(this.angle))],
      //   bottomLeft: [(this.pos[0] - 1) * Math.cos(this.angle) + (this.pos[1]+60) * Math.sin(this.angle),
      //   (this.pos[1]+60) * Math.cos(this.angle) - ((this.pos[0] - 1) * Math.sin(this.angle))],
      //   bottomRight: [(this.pos[0] + 1) * Math.cos(this.angle) + (this.pos[1]+60) * Math.sin(this.angle),
      //   (this.pos[1]+60) * Math.cos(this.angle) - ((this.pos[0] + 1) * Math.sin(this.angle))]
      // }

    }
  }]);

  return Gate;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gate);

/***/ }),

/***/ "./src/scripts/page.js":
/*!*****************************!*\
  !*** ./src/scripts/page.js ***!
  \*****************************/
/*! exports provided: setUpModals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpModals", function() { return setUpModals; });
var setUpModals = function setUpModals() {
  var score = document.getElementById("scoreModal");
  var scoreBtn = document.getElementById("score-btn");
  var scoreClose = document.getElementsByClassName("close-score")[0];

  scoreBtn.onclick = function () {
    score.style.display = "block";
  };

  scoreClose.onclick = function () {
    score.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == score) {
      score.style.display = "none";
    }
  };

  var about = document.getElementById("aboutModal");
  var aboutBtn = document.getElementById("about-btn");
  var aboutClose = document.getElementsByClassName("close-abt")[0];

  aboutBtn.onclick = function () {
    about.style.display = "block";
  };

  aboutClose.onclick = function () {
    about.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == about) {
      about.style.display = "none";
    }
  };
};

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player(pos) {
    _classCallCheck(this, Player);

    this.pos = pos;
    this.speed = 0;
    this.moveAngle = 0;
    this.angle = 0;
    this.draw = this.draw.bind(this);
    this.collisionPos = {
      top: this.pos[1] - 5,
      left: this.pos[0] - 5,
      bottom: this.pos[1] + 5,
      right: this.pos[0] + 5
    };
    this.radius = 8;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1];
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(this.angle);
      ctx.beginPath(); // ctx.moveTo(x, y);

      ctx.lineTo(-10, -10);
      ctx.lineTo(-10, 5);
      ctx.lineTo(0, 15);
      ctx.lineTo(10, 5);
      ctx.lineTo(10, -10);
      ctx.lineTo(0, 0);
      ctx.lineTo(-10, -10);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.restore();
    }
  }, {
    key: "move",
    value: function move() {
      this.angle += this.moveAngle * Math.PI / 180;
      this.pos = [this.pos[0] + this.speed * Math.sin(this.angle), this.pos[1] - this.speed * Math.cos(this.angle)];
      this.collisionPos = {
        top: this.pos[1] - 5,
        left: this.pos[0] - 5,
        bottom: this.pos[1] + 5,
        right: this.pos[0] + 5
      };
      this.speed = 0;
      this.moveAngle = 0;
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/scripts/score.js":
/*!******************************!*\
  !*** ./src/scripts/score.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Score = /*#__PURE__*/function () {
  function Score() {
    _classCallCheck(this, Score);

    this.score = 0;
    this.multiplier = 1;
    this.name = "Moe Szyslak";
  }

  _createClass(Score, [{
    key: "drawMult",
    value: function drawMult(ctx) {
      ctx.font = "small-caps bold 25px Courier New";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Score: " + this.score, 760, 20);
    }
  }, {
    key: "drawScore",
    value: function drawScore(ctx) {
      ctx.font = "small-caps bold 25px Courier New";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Multiplier: " + this.multiplier, 20, 20);
    }
  }]);

  return Score;
}();

/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ }),

/***/ "./src/scripts/shard.js":
/*!******************************!*\
  !*** ./src/scripts/shard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shard = /*#__PURE__*/function () {
  function Shard(pos) {
    _classCallCheck(this, Shard);

    this.pos = pos;
    this.radius = 25;
  }

  _createClass(Shard, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1];
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x + 2, y - 3, x + 4, y - 3, x + 5, y - 2);
      ctx.bezierCurveTo(x + 2, y + 3, x + 4, y + 3, x, y);
      ctx.strokeStyle = '#39ff14';
      ctx.stroke();
    }
  }]);

  return Shard;
}();

/* harmony default export */ __webpack_exports__["default"] = (Shard);

/***/ }),

/***/ "./src/scripts/sound.js":
/*!******************************!*\
  !*** ./src/scripts/sound.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.sound.volume = .15;

  this.play = function () {
    this.sound.play();
  };

  this.stop = function () {
    this.sound.pause();
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Sound);

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Return a randomly oriented vector with the given length.
var Util = {
  randomVec: function randomVec(length) {
    var deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale: function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  dist: function dist(v1, v2) {
    return Math.sqrt(Math.pow(v1[0] - v2[0], 2) + Math.pow(v1[1] - v2[1], 2));
  },
  norm: function norm(vec) {
    return Util.dist([0, 0], vec);
  },
  isCollided: function isCollided(obj1, obj2) {
    var dx = obj1.pos[0] - obj2.pos[0];
    var dy = obj1.pos[1] - obj2.pos[1];
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < obj1.radius + obj2.radius) {
      return true;
    } else {
      return false;
    }
  },
  goneThroughGate: function goneThroughGate(player, gate) {
    for (var i = 0; i < gate.collisionCircles.length; i++) {
      if (Util.isCollided(player, gate.collisionCircles[i])) {
        return true;
      }
    }

    return false;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpYW1vbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zaGFyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJkcmF3R2FtZUJlZ2luIiwid2luZG93IiwiRGlhbW9uZCIsInBvcyIsInZlbCIsInJhZGl1cyIsIngiLCJ5IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJkZWx0YSIsInBsYXllclBvcyIsInZlbERpciIsInZlbE1hZyIsIlV0aWwiLCJub3JtIiwiR2FtZSIsInBsYXllciIsIlBsYXllciIsImRpYW1vbmRzIiwiZGlhbW9uZFNwYXduUmF0ZSIsImdhdGVzIiwiZ2F0ZVNwYXduUmF0ZSIsInNoYXJkcyIsImZyYW1lTnVtIiwiaW5QbGF5Iiwic2NvcmUiLCJTY29yZSIsImdhdGUiLCJTb3VuZCIsIm11bHRpIiwiZGlhbW9uZCIsIk1hdGgiLCJyYW5kb20iLCJkaXN0IiwicHVzaCIsIkdhdGUiLCJQSSIsInNoYXJkIiwiU2hhcmQiLCJtb3ZlIiwiYWRkRGlhbW9uZCIsImFkZEdhdGUiLCJpIiwibGVuZ3RoIiwiYWJzIiwiaXNDb2xsaWRlZCIsImNvbGxpc2lvbkNpcmNsZXMiLCJnb25lVGhyb3VnaEdhdGUiLCJzdG9wIiwiZXhwbG9zaW9uIiwiZGlhbW9uZHNUb0tlZXAiLCJtdWx0aXBsaWVyIiwicGxheSIsImFkZFNoYXJkIiwic3BsaWNlIiwiZHJhdyIsImRyYXdNdWx0IiwiZHJhd1Njb3JlIiwiZ2FtZSIsImxhc3RUaW1lIiwiYW5pbWF0ZSIsImJpbmQiLCJzdGFydCIsInN0YXJ0ZWQiLCJiZ2kiLCJJbWFnZSIsInNyYyIsImJnbSIsImdvbSIsInNldFVwTW9kYWxzIiwiY3VycmVudFRpbWUiLCJkcmF3QmFja2dyb3VuZCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhhbmRsZU1vdmVtZW50IiwibW92ZU9iamVjdHMiLCJwbGF5QWdhaW5CdG4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwib25jbGljayIsInJlc3RhcnQiLCJzY29yZXNBcnJheSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJuZXdTY29yZU9iaiIsIm5hbWUiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2NvcmVzIiwiY29uc29sZSIsImxvZyIsInRvcFRlbiIsInNvcnQiLCJhIiwiYiIsInNsaWNlIiwiZHJhd0dhbWVPdmVyIiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0IiwiY3ZzIiwiZmlsbFJlY3QiLCJwcmV2ZW50RGVmYXVsdCIsImtleXMiLCJrZXlDb2RlIiwidHlwZSIsIm1vdmVBbmdsZSIsInNwZWVkIiwiYW5nbGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicmVzdG9yZSIsInJhbmRvbVZlYyIsInNpbiIsImNvcyIsInNjb3JlQnRuIiwic2NvcmVDbG9zZSIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiYWJvdXQiLCJhYm91dEJ0biIsImFib3V0Q2xvc2UiLCJjb2xsaXNpb25Qb3MiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJiZXppZXJDdXJ2ZVRvIiwic291bmQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwidm9sdW1lIiwicGF1c2UiLCJkZWciLCJzY2FsZSIsInZlYyIsIm0iLCJ2MSIsInYyIiwic3FydCIsIm9iajEiLCJvYmoyIiwiZHgiLCJkeSIsImRpc3RhbmNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBQ0MsQ0FBRCxFQUFPO0FBRW5ELE1BQU1DLFFBQVEsR0FBR0gs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QUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXdcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY3R4KTtcbiAgZ2FtZVZpZXcuZHJhd0dhbWVCZWdpbigpO1xuICAvLyBnYW1lVmlldy5zdGFydCgpO1xuICB3aW5kb3cuY3R4ID0gY3R4O1xufSk7XG4iLCJpbXBvcnQgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5cbmNsYXNzIERpYW1vbmR7XG4gIGNvbnN0cnVjdG9yKHBvcykge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMudmVsID0gMDtcbiAgICB0aGlzLnJhZGl1cyA9IDEwO1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGxldCB4ID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHkgPSB0aGlzLnBvc1sxXTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkrMTUpO1xuICAgIGN0eC5saW5lVG8oeCAtIDgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSAtIDE1KTtcbiAgICBjdHgubGluZVRvKHggKyA4LCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkrMTUpO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjNGRmZmZmJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBtb3ZlKGRlbHRhLCBwbGF5ZXJQb3Mpe1xuICAgIGNvbnN0IHZlbERpciA9IFtwbGF5ZXJQb3NbMF0tdGhpcy5wb3NbMF0sIHBsYXllclBvc1sxXSAtIHRoaXMucG9zWzFdXTtcbiAgICBjb25zdCB2ZWxNYWcgPSBVdGlsLm5vcm0odmVsRGlyKTtcbiAgICBjb25zdCB2ZWwgPSBbdmVsRGlyWzBdLyh2ZWxNYWcpLCB2ZWxEaXJbMV0vKHZlbE1hZyldO1xuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdmVsWzBdLCB0aGlzLnBvc1sxXSArIHZlbFsxXV07XG4gICAgLy8gdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyAodmVsRGlyWzBdIC8gKHZlbE1hZyAqIDEwKSksIHZlbERpclsxXSAvICh2ZWxNYWcgKiAxMCldXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbW9uZDsiLCJpbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vZ2FtZV92aWV3XCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IERpYW1vbmQgZnJvbSBcIi4vZGlhbW9uZFwiO1xuaW1wb3J0IEdhdGUgZnJvbSBcIi4vZ2F0ZVwiO1xuaW1wb3J0IFNoYXJkIGZyb20gXCIuL3NoYXJkXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgU2NvcmUgZnJvbSBcIi4vc2NvcmVcIjtcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi9zb3VuZFwiO1xuXG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihbNDgwLCAzMjBdKTtcblxuICAgIHRoaXMuZGlhbW9uZHMgPSBbXTtcbiAgICB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPSAxMDA7XG5cbiAgICB0aGlzLmdhdGVzID0gW107XG4gICAgdGhpcy5nYXRlU3Bhd25SYXRlID0gMjQwO1xuXG4gICAgdGhpcy5zaGFyZHMgPSBbXTtcblxuICAgIHRoaXMuZnJhbWVOdW0gPSAxO1xuICAgIHRoaXMuaW5QbGF5ID0gdHJ1ZTtcblxuICAgIHRoaXMuc2NvcmUgPSBuZXcgU2NvcmUoKTtcblxuICAgIHRoaXMuZ2F0ZSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvZ2F0ZS5tcDNcIik7XG4gICAgdGhpcy5tdWx0aSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvbXVsdGkubXAzXCIpO1xuXG4gIH1cblxuICBhZGREaWFtb25kKCl7XG4gICAgY29uc3QgZGlhbW9uZCA9IG5ldyBEaWFtb25kKFtNYXRoLnJhbmRvbSgpKjk2MCwgTWF0aC5yYW5kb20oKSo2NDBdKTtcbiAgICBpZihVdGlsLmRpc3QoZGlhbW9uZC5wb3MsIHRoaXMucGxheWVyLnBvcykgPiAxNTApe1xuICAgICAgdGhpcy5kaWFtb25kcy5wdXNoKGRpYW1vbmQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEdhdGUoKXtcbiAgICBjb25zdCBnYXRlID0gbmV3IEdhdGUoW01hdGgucmFuZG9tKCkgKiA5NjAsIE1hdGgucmFuZG9tKCkgKiA2NDBdLCBNYXRoLnJhbmRvbSgpKiBNYXRoLlBJIC8gMik7XG4gICAgdGhpcy5nYXRlcy5wdXNoKGdhdGUpO1xuICB9XG5cblxuICBhZGRTaGFyZChwb3Mpe1xuICAgIGNvbnN0IHNoYXJkID0gbmV3IFNoYXJkKHBvcylcbiAgICB0aGlzLnNoYXJkcy5wdXNoKHNoYXJkKTtcbiAgfVxuXG4gIG1vdmVPYmplY3RzKGRlbHRhKXtcbiAgICB0aGlzLnBsYXllci5tb3ZlKClcbiAgICBpZiAodGhpcy5mcmFtZU51bSAlIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA9PT0gMCl7XG4gICAgICB0aGlzLmFkZERpYW1vbmQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnJhbWVOdW0gJSB0aGlzLmdhdGVTcGF3blJhdGUgPT09IDApe1xuICAgICAgdGhpcy5hZGRHYXRlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyYW1lTnVtICUgNjAwID09PSAwICYmIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA+IDEwKXtcbiAgICAgIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSAtPSAxMDtcbiAgICB9XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5kaWFtb25kc1tpXS5tb3ZlKGRlbHRhLCB0aGlzLnBsYXllci5wb3MpXG4gICAgICBpZiAoKE1hdGguYWJzKHRoaXMuZGlhbW9uZHNbaV0ucG9zWzBdIC0gdGhpcy5wbGF5ZXIucG9zWzBdKSA8IDQwKSAmJlxuICAgICAgICAoTWF0aC5hYnModGhpcy5kaWFtb25kc1tpXS5wb3NbMV0gLSB0aGlzLnBsYXllci5wb3NbMV0pIDwgNDApKXtcbiAgICAgICAgaWYoVXRpbC5pc0NvbGxpZGVkKHRoaXMuZGlhbW9uZHNbaV0sIHRoaXMucGxheWVyKSl7XG4gICAgICAgICAgdGhpcy5pblBsYXkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ2F0ZXNbaV0ubW92ZSh0aGlzLmZyYW1lTnVtLCB0aGlzLnBsYXllcilcbiAgICAgIGlmICh0aGlzLmdhdGVzW2ldLmNvbGxpc2lvbkNpcmNsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmKFV0aWwuZ29uZVRocm91Z2hHYXRlKHRoaXMucGxheWVyLCB0aGlzLmdhdGVzW2ldKSl7XG4gICAgICAgICAgdGhpcy5nYXRlLnN0b3AoKTtcbiAgICAgICAgICBjb25zdCBleHBsb3Npb24gPSB7cG9zOnRoaXMuZ2F0ZXNbaV0uY29sbGlzaW9uQ2lyY2xlc1szXS5wb3MsIHJhZGl1czogMTUwfVxuICAgICAgICAgIGNvbnN0IGRpYW1vbmRzVG9LZWVwID1bXTtcbiAgICAgICAgICB0aGlzLnNjb3JlLnNjb3JlICs9IHRoaXMuc2NvcmUubXVsdGlwbGllcioxMDA7XG4gICAgICAgICAgdGhpcy5zY29yZS5tdWx0aXBsaWVyICs9IDI7XG4gICAgICAgICAgdGhpcy5nYXRlLnBsYXkoKTtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kaWFtb25kcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoIVV0aWwuaXNDb2xsaWRlZChleHBsb3Npb24sIHRoaXMuZGlhbW9uZHNbaV0pKXtcbiAgICAgICAgICAgICAgZGlhbW9uZHNUb0tlZXAucHVzaCh0aGlzLmRpYW1vbmRzW2ldKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0aGlzLnNjb3JlLnNjb3JlICs9IHRoaXMuc2NvcmUubXVsdGlwbGllcio1MDtcbiAgICAgICAgICAgICAgdGhpcy5hZGRTaGFyZCh0aGlzLmRpYW1vbmRzW2ldLnBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGlhbW9uZHMgPSBkaWFtb25kc1RvS2VlcDtcbiAgICAgICAgICB0aGlzLmdhdGVzLnNwbGljZShpLDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFyZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoKE1hdGguYWJzKHRoaXMuc2hhcmRzW2ldLnBvc1swXSAtIHRoaXMucGxheWVyLnBvc1swXSkgPCA0MCkgJiZcbiAgICAgICAgICAoTWF0aC5hYnModGhpcy5zaGFyZHNbaV0ucG9zWzFdIC0gdGhpcy5wbGF5ZXIucG9zWzFdKSA8IDQwKSkge1xuICAgICAgICAgIGlmIChVdGlsLmlzQ29sbGlkZWQodGhpcy5zaGFyZHNbaV0sIHRoaXMucGxheWVyKSl7XG4gICAgICAgICAgICB0aGlzLm11bHRpLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUubXVsdGlwbGllciArPSAxO1xuICAgICAgICAgICAgdGhpcy5tdWx0aS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNoYXJkcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmZyYW1lTnVtKys7XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgdGhpcy5wbGF5ZXIuZHJhdyhjdHgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaWFtb25kcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5kaWFtb25kc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5nYXRlc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc2hhcmRzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgdGhpcy5zY29yZS5kcmF3TXVsdChjdHgpO1xuICAgIHRoaXMuc2NvcmUuZHJhd1Njb3JlKGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgU291bmQgZnJvbSBcIi4vc291bmRcIjtcbmltcG9ydCB7c2V0VXBNb2RhbHN9IGZyb20gXCIuL3BhZ2VcIjtcblxuY2xhc3MgR2FtZVZpZXd7XG4gIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5iZ2kgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmJnaS5zcmMgPSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnXCI7XG5cbiAgICB0aGlzLmJnbSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvYmdtLm1wM1wiKTtcbiAgICB0aGlzLmdvbSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvZ2FtZW92ZXIubXAzXCIpO1xuICAgIHNldFVwTW9kYWxzKCk7XG4gIH1cblxuICBhbmltYXRlKGN1cnJlbnRUaW1lKSB7XG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCh0aGlzLmN0eCk7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmdpLDAsIDApO1xuXG4gICAgY29uc3QgZGVsdGEgPSBjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgaWYgKHRoaXMuZ2FtZS5pblBsYXkpe1xuICAgICAgdGhpcy5iZ20ucGxheSgpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgICB0aGlzLmhhbmRsZU1vdmVtZW50KCk7XG4gICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoZGVsdGEpO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIH1lbHNle1xuICAgICAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBsYXktYWdhaW4tYnRuXCIpWzBdO1xuICAgICAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICBwbGF5QWdhaW5CdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgIHBsYXlBZ2FpbkJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5iZ20uc3RvcCgpO1xuICAgICAgdGhpcy5nb20ucGxheSgpO1xuICAgICAgbGV0IHNjb3Jlc0FycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlcycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmVzJykpIDogW107XG4gICAgICBsZXQgbmV3U2NvcmVPYmo7XG4gICAgICBuZXdTY29yZU9iaiA9IFt0aGlzLmdhbWUuc2NvcmUubmFtZSwgdGhpcy5nYW1lLnNjb3JlLnNjb3JlXTtcbiAgICAgIHNjb3Jlc0FycmF5LnB1c2gobmV3U2NvcmVPYmopO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlcycsIEpTT04uc3RyaW5naWZ5KHNjb3Jlc0FycmF5KSk7XG4gICAgICBjb25zdCBzY29yZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVzXCIpKTtcbiAgICAgIGNvbnNvbGUubG9nKHNjb3Jlcyk7XG4gICAgICBjb25zdCB0b3BUZW4gPSBzY29yZXMuc29ydCgoYSxiKSA9PiBiWzFdIC0gYVsxXSkuc2xpY2UoMCwxMCk7XG4gICAgICB0aGlzLmRyYXdHYW1lT3Zlcih0b3BUZW4pO1xuXG4gICAgfVxuXG4gIH1cblxuICBkcmF3R2FtZUJlZ2luKCl7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmdpLCAwLCAwKTtcbiAgICB0aGlzLmN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgNDBweCBDb3VyaWVyIE5ld1wiO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwRkYwMFwiO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiQ2xpY2sgdG8gUGxheVwiLCAzNTAsIDMwMCk7XG4gICAgY29uc3QgY3ZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKVxuICAgIGN2cy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpe1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0dhbWVPdmVyKHRvcFRlbil7XG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgYm9sZCA0MHB4IENvdXJpZXIgTmV3XCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwRkYwMFwiO1xuICAgIGN0eC5maWxsVGV4dChcIkZpbmFsIFNjb3JlOiBcIiArIHRoaXMuZ2FtZS5zY29yZS5zY29yZSwgMzUwLCA0MCk7XG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgMzBweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZGMDBcIjtcbiAgICBjdHguZmlsbFRleHQoXCJIaWdoIFNjb3Jlc1wiLCA0MTAsIDEwMCk7XG5cbiAgICBjdHguZm9udCA9IFwic21hbGwtY2FwcyBib2xkIDI1cHggQ291cmllciBOZXdcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgaWYgKHRvcFRlbltpXSl7XG4gICAgICAgIGN0eC5maWxsVGV4dCgoaSsxKSArIFwiLlwiICsgdG9wVGVuW2ldWzBdICsgXCI6IFwiICsgdG9wVGVuW2ldWzFdLCAzNTAsIDEyMCArIDMwKihpKzEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDk2MCwgNjQwKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5rZXlzID0gKHRoaXMua2V5cyB8fCBbXSk7XG4gICAgICB0aGlzLmtleXNbZS5rZXlDb2RlXSA9IChlLnR5cGUgPT0gXCJrZXlkb3duXCIpO1xuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMua2V5c1tlLmtleUNvZGVdID0gKGUudHlwZSA9PSBcImtleWRvd25cIik7XG4gICAgfSlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgfVxuXG4gIHJlc3RhcnQoKXtcbiAgICBjb25zb2xlLmxvZyhcIndoYXQncyBoYXBwZW5pblwiKVxuICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG5cbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50KCl7XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNjVdKSB7ICB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IC01OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNjhdKSB7ICB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IDU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s4N10pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IC00OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbODRdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSA0OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbMzddKSB7IHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gLTU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1szOV0pIHsgdGhpcy5nYW1lLnBsYXllci5tb3ZlQW5nbGUgPSA1OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbMzhdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSAtNDsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzQwXSkgeyB0aGlzLmdhbWUucGxheWVyLnNwZWVkID0gNDsgfVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXc7IiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuY2xhc3MgR2F0ZXtcbiAgY29uc3RydWN0b3IocG9zLCBhbmdsZSkgeyAvLyAoLTEsMCkgKDEsIDApLCAoLTEsNjApLCAoMSw2MClcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG4gICAgdGhpcy5jb2xsaXNpb25DaXJjbGVzID0gW11cblxuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGxldCB4PSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeT0gdGhpcy5wb3NbMV07XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xuICAgIGN0eC5yb3RhdGUodGhpcy5hbmdsZSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oMCArIDEwLCAwIC0gMTApO1xuICAgIGN0eC5saW5lVG8oMCAtIDEwLCAwIC0gMTApO1xuICAgIGN0eC5saW5lVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbygwLCAwICsgNjApO1xuICAgIGN0eC5saW5lVG8oMCArIDEwLCAwICsgNzApO1xuICAgIGN0eC5saW5lVG8oMCAtIDEwLCAwICsgNzApO1xuICAgIGN0eC5saW5lVG8oMCwgMCArIDYwKTtcblxuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZhNTAwJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoZnJhbWVOdW0sIHBsYXllcil7XG4gICAgdGhpcy5jb2xsaXNpb25DaXJjbGVzID0gW107XG4gICAgaWYgKGZyYW1lTnVtICUgMTIwID09PSAwKXtcbiAgICAgIHRoaXMudmVsID0gVXRpbC5yYW5kb21WZWMoMC4xMjUpO1xuICAgIH1cbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdLCB0aGlzLnBvc1sxXSArIHRoaXMudmVsWzFdXTtcbiAgICBpZiAoKE1hdGguYWJzKHBsYXllci5wb3NbMF0gLSB0aGlzLnBvc1swXSkgPCA3MCkgJiYgKE1hdGguYWJzKHBsYXllci5wb3NbMV0gLSB0aGlzLnBvc1sxXSkgPCA3MCkpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDY7IGkrKyl7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcy5wdXNoKHtwb3M6IFxuICAgICAgICAgIFt0aGlzLnBvc1swXSAtICg1ICsgMTAqaSkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAgICAgICAgdGhpcy5wb3NbMV0gKyAoKDUgKyAxMCppKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpKV0sXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuXG4gICAgLy8gICB0b3BMZWZ0OiBbKHRoaXMucG9zWzBdIC0gMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArIHRoaXMucG9zWzFdICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICB0aGlzLnBvc1sxXSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIHRvcFJpZ2h0OiBbKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArIHRoaXMucG9zWzFdICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICB0aGlzLnBvc1sxXSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSArIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIGJvdHRvbUxlZnQ6IFsodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpICsgKHRoaXMucG9zWzFdKzYwKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgKHRoaXMucG9zWzFdKzYwKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIGJvdHRvbVJpZ2h0OiBbKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAvLyAgICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gKyAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV1cbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2F0ZTsiLCJleHBvcnQgY29uc3Qgc2V0VXBNb2RhbHMgPSAoKSA9PiB7XG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZU1vZGFsXCIpO1xuICBjb25zdCBzY29yZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmUtYnRuXCIpO1xuICBjb25zdCBzY29yZUNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLXNjb3JlXCIpWzBdO1xuXG4gIHNjb3JlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgc2NvcmUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIHNjb3JlQ2xvc2Uub25jbGljayA9ICgpID0+IHtcbiAgICBzY29yZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICB3aW5kb3cub25jbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gc2NvcmUpIHtcbiAgICAgIHNjb3JlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH1cblxuXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dE1vZGFsXCIpO1xuICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtYnRuXCIpO1xuICBjb25zdCBhYm91dENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlLWFidFwiKVswXTtcblxuICBhYm91dEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBhYm91dENsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IGFib3V0KSB7XG4gICAgICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG59XG4iLCJjbGFzcyBQbGF5ZXJ7XG4gIGNvbnN0cnVjdG9yKHBvcyl7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5tb3ZlQW5nbGUgPSAwO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuICAgICAgdG9wOiB0aGlzLnBvc1sxXSAtIDUsXG4gICAgICBsZWZ0OiB0aGlzLnBvc1swXSAtIDUsXG4gICAgICBib3R0b206IHRoaXMucG9zWzFdICsgNSxcbiAgICAgIHJpZ2h0OiB0aGlzLnBvc1swXSArIDVcbiAgICB9XG4gICAgdGhpcy5yYWRpdXMgPSA4O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuXG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oLTEwLC0xMClcbiAgICBjdHgubGluZVRvKC0xMCwgNSk7XG4gICAgY3R4LmxpbmVUbygwLCAxNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgLTEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oLTEwLCAtMTApO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICB0aGlzLmFuZ2xlICs9IHRoaXMubW92ZUFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICB0aGlzLnBvcyA9IFtcbiAgICAgIHRoaXMucG9zWzBdICsgdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgICAgdGhpcy5wb3NbMV0gLSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5hbmdsZSlcbiAgICBdXG4gICAgdGhpcy5jb2xsaXNpb25Qb3MgPSB7XG4gICAgICB0b3A6IHRoaXMucG9zWzFdIC0gNSxcbiAgICAgIGxlZnQ6IHRoaXMucG9zWzBdIC0gNSxcbiAgICAgIGJvdHRvbTogdGhpcy5wb3NbMV0gKyA1LFxuICAgICAgcmlnaHQ6IHRoaXMucG9zWzBdICsgNVxuICAgIH1cbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLm1vdmVBbmdsZSA9IDBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjbGFzcyBTY29yZXtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLm11bHRpcGxpZXIgPSAxO1xuICAgIHRoaXMubmFtZSA9IFwiTW9lIFN6eXNsYWtcIjtcbiAgfVxuXG4gIGRyYXdNdWx0KGN0eCkge1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgMjVweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCA3NjAsIDIwKTtcblxuICB9XG5cbiAgZHJhd1Njb3JlKGN0eCkge1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgMjVweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbFRleHQoXCJNdWx0aXBsaWVyOiBcIiArIHRoaXMubXVsdGlwbGllciwgMjAsIDIwKTtcblxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7IiwiY2xhc3MgU2hhcmR7XG4gIGNvbnN0cnVjdG9yKHBvcykge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMucmFkaXVzID0gMjU7XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyAyLCB5IC0gMywgeCArIDQsIHkgLSAzLCB4ICsgNSwgeSAtIDIpO1xuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyAyLCB5ICsgMywgeCArIDQsIHkgKyAzLCB4LCB5KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzM5ZmYxNCc7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJkOyIsImZ1bmN0aW9uIFNvdW5kKHNyYykge1xuICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICB0aGlzLnNvdW5kLnNyYyA9IHNyYztcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XG4gIHRoaXMuc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuICB0aGlzLnNvdW5kLnZvbHVtZSA9IC4xNTtcbiAgdGhpcy5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc291bmQucGxheSgpO1xuICB9XG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNvdW5kOyIsIi8vIFJldHVybiBhIHJhbmRvbWx5IG9yaWVudGVkIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBsZW5ndGguXG5jb25zdCBVdGlsID0ge1xuICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWcpLCBNYXRoLmNvcyhkZWcpXSwgbGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2NhbGUgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciBieSB0aGUgZ2l2ZW4gYW1vdW50LlxuICBzY2FsZSh2ZWMsIG0pIHtcbiAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXSAqIG1dO1xuICB9LFxuXG4gIGRpc3QodjEsIHYyKXtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCgodjFbMF0gLSB2MlswXSkgKiogMikrICgodjFbMV0gLSB2MlsxXSkgKiogMikpXG4gIH0sXG5cbiAgbm9ybSh2ZWMpe1xuICAgIHJldHVybiBVdGlsLmRpc3QoWzAsMF0sIHZlYylcbiAgfSxcblxuICBpc0NvbGxpZGVkKG9iajEsIG9iajIpe1xuICAgIHZhciBkeCA9IG9iajEucG9zWzBdIC0gb2JqMi5wb3NbMF07XG4gICAgdmFyIGR5ID0gb2JqMS5wb3NbMV0gLSBvYmoyLnBvc1sxXTtcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgaWYgKGRpc3RhbmNlIDwgb2JqMS5yYWRpdXMgKyBvYmoyLnJhZGl1cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIGdvbmVUaHJvdWdoR2F0ZShwbGF5ZXIsIGdhdGUpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2F0ZS5jb2xsaXNpb25DaXJjbGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmIChVdGlsLmlzQ29sbGlkZWQocGxheWVyLCBnYXRlLmNvbGxpc2lvbkNpcmNsZXNbaV0pKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiXSwic291cmNlUm9vdCI6IiJ9