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
  gameView.start();
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
    this.bgm = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/bgm.mp3");
    this.gom = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/gameover.mp3");
    Object(_page__WEBPACK_IMPORTED_MODULE_2__["setUpModals"])();
  }

  _createClass(GameView, [{
    key: "animate",
    value: function animate(currentTime) {
      this.drawBackground(this.ctx);
      var delta = currentTime - this.lastTime;

      if (this.game.inPlay) {
        this.bgm.play();
        requestAnimationFrame(this.animate);
        this.game.draw(this.ctx);
        this.handleMovement();
        this.game.moveObjects(delta);
        this.lastTime = currentTime;
      } else {
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
    key: "drawGameOver",
    value: function drawGameOver(topTen) {
      ctx.font = "small-caps bold 40px Courier New";
      ctx.fillStyle = "#00FF00";
      ctx.fillText("Final Score: " + this.game.score.score, 300, 40);
      ctx.font = "small-caps 30px Courier New";
      ctx.fillStyle = "#FFFF00";
      ctx.fillText("High Scores", 300, 100);
      ctx.font = "small-caps bold 25px Courier New";
      ctx.fillStyle = "#0095DD";

      for (var i = 0; i < 10; i++) {
        if (topTen[i]) {
          ctx.fillText(i + 1 + "." + topTen[i][0] + ": " + topTen[i][1], 300, 100 + 30 * (i + 1));
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
      var _this = this;

      window.addEventListener('keydown', function (e) {
        e.preventDefault();
        _this.keys = _this.keys || [];
        _this.keys[e.keyCode] = e.type == "keydown";
      });
      window.addEventListener('keyup', function (e) {
        e.preventDefault();
        _this.keys[e.keyCode] = e.type == "keydown";
      });
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
    console.log("made it here");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpYW1vbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zaGFyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJzdGFydCIsIndpbmRvdyIsIkRpYW1vbmQiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJ4IiwieSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZGVsdGEiLCJwbGF5ZXJQb3MiLCJ2ZWxEaXIiLCJ2ZWxNYWciLCJVdGlsIiwibm9ybSIsIkdhbWUiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJkaWFtb25kcyIsImRpYW1vbmRTcGF3blJhdGUiLCJnYXRlcyIsImdhdGVTcGF3blJhdGUiLCJzaGFyZHMiLCJmcmFtZU51bSIsImluUGxheSIsInNjb3JlIiwiU2NvcmUiLCJnYXRlIiwiU291bmQiLCJtdWx0aSIsImRpYW1vbmQiLCJNYXRoIiwicmFuZG9tIiwiZGlzdCIsInB1c2giLCJHYXRlIiwiUEkiLCJzaGFyZCIsIlNoYXJkIiwibW92ZSIsImFkZERpYW1vbmQiLCJhZGRHYXRlIiwiaSIsImxlbmd0aCIsImFicyIsImlzQ29sbGlkZWQiLCJjb2xsaXNpb25DaXJjbGVzIiwiZ29uZVRocm91Z2hHYXRlIiwiZXhwbG9zaW9uIiwiZGlhbW9uZHNUb0tlZXAiLCJtdWx0aXBsaWVyIiwicGxheSIsImFkZFNoYXJkIiwic3BsaWNlIiwic3RvcCIsImRyYXciLCJkcmF3TXVsdCIsImRyYXdTY29yZSIsImdhbWUiLCJsYXN0VGltZSIsImFuaW1hdGUiLCJiaW5kIiwiYmdtIiwiZ29tIiwic2V0VXBNb2RhbHMiLCJjdXJyZW50VGltZSIsImRyYXdCYWNrZ3JvdW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGFuZGxlTW92ZW1lbnQiLCJtb3ZlT2JqZWN0cyIsInNjb3Jlc0FycmF5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIm5ld1Njb3JlT2JqIiwibmFtZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzY29yZXMiLCJjb25zb2xlIiwibG9nIiwidG9wVGVuIiwic29ydCIsImEiLCJiIiwic2xpY2UiLCJkcmF3R2FtZU92ZXIiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJmaWxsUmVjdCIsInByZXZlbnREZWZhdWx0Iiwia2V5cyIsImtleUNvZGUiLCJ0eXBlIiwibW92ZUFuZ2xlIiwic3BlZWQiLCJhbmdsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJyZXN0b3JlIiwicmFuZG9tVmVjIiwic2luIiwiY29zIiwic2NvcmVCdG4iLCJzY29yZUNsb3NlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJldmVudCIsInRhcmdldCIsImFib3V0IiwiYWJvdXRCdG4iLCJhYm91dENsb3NlIiwiY29sbGlzaW9uUG9zIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYmV6aWVyQ3VydmVUbyIsInNyYyIsInNvdW5kIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZvbHVtZSIsInBhdXNlIiwiZGVnIiwic2NhbGUiLCJ2ZWMiLCJtIiwidjEiLCJ2MiIsInNxcnQiLCJvYmoxIiwib2JqMiIsImR4IiwiZHkiLCJkaXN0YW5jZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQUNDLENBQUQsRUFBTztBQUVuRCxNQUFNQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDRyxVQUFULENBQW9CLElBQXBCLENBQVo7QUFFQSxNQUFNQyxRQUFR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LENBQUM1SSxHQUFMLENBQVMsQ0FBVCxJQUFjNkksSUFBSSxDQUFDN0ksR0FBTCxDQUFTLENBQVQsQ0FBdkI7QUFDQSxRQUFJK0ksRUFBRSxHQUFHSCxJQUFJLENBQUM1SSxHQUFMLENBQVMsQ0FBVCxJQUFjNkksSUFBSSxDQUFDN0ksR0FBTCxDQUFTLENBQVQsQ0FBdkI7QUFDQSxRQUFJZ0osUUFBUSxHQUFHL0csSUFBSSxDQUFDMEcsSUFBTCxDQUFVRyxFQUFFLEdBQUdBLEVBQUwsR0FBVUMsRUFBRSxHQUFHQSxFQUF6QixDQUFmOztBQUVBLFFBQUlDLFFBQVEsR0FBR0osSUFBSSxDQUFDMUksTUFBTCxHQUFjMkksSUFBSSxDQUFDM0ksTUFBbEMsRUFBMEM7QUFDeEMsYUFBTyxJQUFQO0FBQ0QsS0FGRCxNQUVLO0FBQ0gsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQTVCVTtBQThCWCtDLGlCQTlCVywyQkE4QksvQixNQTlCTCxFQThCYVcsSUE5QmIsRUE4QmtCO0FBQzNCLFNBQUssSUFBSWUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2YsSUFBSSxDQUFDbUIsZ0JBQUwsQ0FBc0JILE1BQTFDLEVBQWtERCxDQUFDLEVBQW5ELEVBQXNEO0FBQ3BELFVBQUk3QixJQUFJLENBQUNnQyxVQUFMLENBQWdCN0IsTUFBaEIsRUFBd0JXLElBQUksQ0FBQ21CLGdCQUFMLENBQXNCSixDQUF0QixDQUF4QixDQUFKLEVBQXNEO0FBQ3BELGVBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBTyxLQUFQO0FBQ0Q7QUF0Q1UsQ0FBYjtBQTBDZTdCLG1FQUFmLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXdcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY3R4KTtcbiAgZ2FtZVZpZXcuc3RhcnQoKTtcbiAgd2luZG93LmN0eCA9IGN0eDtcbn0pO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuXG5jbGFzcyBEaWFtb25ke1xuICBjb25zdHJ1Y3Rvcihwb3MpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnZlbCA9IDA7XG4gICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBsZXQgeCA9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5ID0gdGhpcy5wb3NbMV07XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KzE1KTtcbiAgICBjdHgubGluZVRvKHggLSA4LCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkgLSAxNSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgOCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5KzE1KTtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzRkZmZmZic7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgbW92ZShkZWx0YSwgcGxheWVyUG9zKXtcbiAgICBjb25zdCB2ZWxEaXIgPSBbcGxheWVyUG9zWzBdLXRoaXMucG9zWzBdLCBwbGF5ZXJQb3NbMV0gLSB0aGlzLnBvc1sxXV07XG4gICAgY29uc3QgdmVsTWFnID0gVXRpbC5ub3JtKHZlbERpcik7XG4gICAgY29uc3QgdmVsID0gW3ZlbERpclswXS8odmVsTWFnKSwgdmVsRGlyWzFdLyh2ZWxNYWcpXTtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHZlbFswXSwgdGhpcy5wb3NbMV0gKyB2ZWxbMV1dO1xuICAgIC8vIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgKHZlbERpclswXSAvICh2ZWxNYWcgKiAxMCkpLCB2ZWxEaXJbMV0gLyAodmVsTWFnICogMTApXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYW1vbmQ7IiwiaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL2dhbWVfdmlld1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBEaWFtb25kIGZyb20gXCIuL2RpYW1vbmRcIjtcbmltcG9ydCBHYXRlIGZyb20gXCIuL2dhdGVcIjtcbmltcG9ydCBTaGFyZCBmcm9tIFwiLi9zaGFyZFwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IFNjb3JlIGZyb20gXCIuL3Njb3JlXCI7XG5pbXBvcnQgU291bmQgZnJvbSBcIi4vc291bmRcIjtcblxuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoWzQ4MCwgMzIwXSk7XG5cbiAgICB0aGlzLmRpYW1vbmRzID0gW107XG4gICAgdGhpcy5kaWFtb25kU3Bhd25SYXRlID0gMTAwO1xuXG4gICAgdGhpcy5nYXRlcyA9IFtdO1xuICAgIHRoaXMuZ2F0ZVNwYXduUmF0ZSA9IDI0MDtcblxuICAgIHRoaXMuc2hhcmRzID0gW107XG5cbiAgICB0aGlzLmZyYW1lTnVtID0gMTtcbiAgICB0aGlzLmluUGxheSA9IHRydWU7XG5cbiAgICB0aGlzLnNjb3JlID0gbmV3IFNjb3JlKCk7XG5cbiAgICB0aGlzLmdhdGUgPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL2dhdGUubXAzXCIpO1xuICAgIHRoaXMubXVsdGkgPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL211bHRpLm1wM1wiKTtcblxuICB9XG5cbiAgYWRkRGlhbW9uZCgpe1xuICAgIGNvbnN0IGRpYW1vbmQgPSBuZXcgRGlhbW9uZChbTWF0aC5yYW5kb20oKSo5NjAsIE1hdGgucmFuZG9tKCkqNjQwXSk7XG4gICAgaWYoVXRpbC5kaXN0KGRpYW1vbmQucG9zLCB0aGlzLnBsYXllci5wb3MpID4gMTUwKXtcbiAgICAgIHRoaXMuZGlhbW9uZHMucHVzaChkaWFtb25kKTtcbiAgICB9XG4gIH1cblxuICBhZGRHYXRlKCl7XG4gICAgY29uc3QgZ2F0ZSA9IG5ldyBHYXRlKFtNYXRoLnJhbmRvbSgpICogOTYwLCBNYXRoLnJhbmRvbSgpICogNjQwXSwgTWF0aC5yYW5kb20oKSogTWF0aC5QSSAvIDIpO1xuICAgIHRoaXMuZ2F0ZXMucHVzaChnYXRlKTtcbiAgfVxuXG5cbiAgYWRkU2hhcmQocG9zKXtcbiAgICBjb25zdCBzaGFyZCA9IG5ldyBTaGFyZChwb3MpXG4gICAgdGhpcy5zaGFyZHMucHVzaChzaGFyZCk7XG4gIH1cblxuICBtb3ZlT2JqZWN0cyhkZWx0YSl7XG4gICAgdGhpcy5wbGF5ZXIubW92ZSgpXG4gICAgaWYgKHRoaXMuZnJhbWVOdW0gJSB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPT09IDApe1xuICAgICAgdGhpcy5hZGREaWFtb25kKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyYW1lTnVtICUgdGhpcy5nYXRlU3Bhd25SYXRlID09PSAwKXtcbiAgICAgIHRoaXMuYWRkR2F0ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmFtZU51bSAlIDYwMCA9PT0gMCAmJiB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPiAxMCl7XG4gICAgICB0aGlzLmRpYW1vbmRTcGF3blJhdGUgLT0gMTA7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRpYW1vbmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHRoaXMuZGlhbW9uZHNbaV0ubW92ZShkZWx0YSwgdGhpcy5wbGF5ZXIucG9zKVxuICAgICAgaWYgKChNYXRoLmFicyh0aGlzLmRpYW1vbmRzW2ldLnBvc1swXSAtIHRoaXMucGxheWVyLnBvc1swXSkgPCA0MCkgJiZcbiAgICAgICAgKE1hdGguYWJzKHRoaXMuZGlhbW9uZHNbaV0ucG9zWzFdIC0gdGhpcy5wbGF5ZXIucG9zWzFdKSA8IDQwKSl7XG4gICAgICAgIGlmKFV0aWwuaXNDb2xsaWRlZCh0aGlzLmRpYW1vbmRzW2ldLCB0aGlzLnBsYXllcikpe1xuICAgICAgICAgIHRoaXMuaW5QbGF5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdhdGVzW2ldLm1vdmUodGhpcy5mcmFtZU51bSwgdGhpcy5wbGF5ZXIpXG4gICAgICBpZiAodGhpcy5nYXRlc1tpXS5jb2xsaXNpb25DaXJjbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZihVdGlsLmdvbmVUaHJvdWdoR2F0ZSh0aGlzLnBsYXllciwgdGhpcy5nYXRlc1tpXSkpe1xuICAgICAgICAgIGNvbnN0IGV4cGxvc2lvbiA9IHtwb3M6dGhpcy5nYXRlc1tpXS5jb2xsaXNpb25DaXJjbGVzWzNdLnBvcywgcmFkaXVzOiAxNTB9XG4gICAgICAgICAgY29uc3QgZGlhbW9uZHNUb0tlZXAgPVtdO1xuICAgICAgICAgIHRoaXMuc2NvcmUuc2NvcmUgKz0gdGhpcy5zY29yZS5tdWx0aXBsaWVyKjEwMDtcbiAgICAgICAgICB0aGlzLnNjb3JlLm11bHRpcGxpZXIgKz0gMjtcbiAgICAgICAgICB0aGlzLmdhdGUucGxheSgpO1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRpYW1vbmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmICghVXRpbC5pc0NvbGxpZGVkKGV4cGxvc2lvbiwgdGhpcy5kaWFtb25kc1tpXSkpe1xuICAgICAgICAgICAgICBkaWFtb25kc1RvS2VlcC5wdXNoKHRoaXMuZGlhbW9uZHNbaV0pO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuc2NvcmUuc2NvcmUgKz0gdGhpcy5zY29yZS5tdWx0aXBsaWVyKjUwO1xuICAgICAgICAgICAgICB0aGlzLmFkZFNoYXJkKHRoaXMuZGlhbW9uZHNbaV0ucG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kaWFtb25kcyA9IGRpYW1vbmRzVG9LZWVwO1xuICAgICAgICAgIHRoaXMuZ2F0ZXMuc3BsaWNlKGksMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXJkcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmICgoTWF0aC5hYnModGhpcy5zaGFyZHNbaV0ucG9zWzBdIC0gdGhpcy5wbGF5ZXIucG9zWzBdKSA8IDQwKSAmJlxuICAgICAgICAgIChNYXRoLmFicyh0aGlzLnNoYXJkc1tpXS5wb3NbMV0gLSB0aGlzLnBsYXllci5wb3NbMV0pIDwgNDApKSB7XG4gICAgICAgICAgaWYgKFV0aWwuaXNDb2xsaWRlZCh0aGlzLnNoYXJkc1tpXSwgdGhpcy5wbGF5ZXIpKXtcbiAgICAgICAgICAgIHRoaXMubXVsdGkuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zY29yZS5tdWx0aXBsaWVyICs9IDE7XG4gICAgICAgICAgICB0aGlzLm11bHRpLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2hhcmRzLnNwbGljZShpLDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMuZnJhbWVOdW0rKztcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICB0aGlzLnBsYXllci5kcmF3KGN0eCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpYW1vbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRpYW1vbmRzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdhdGVzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zaGFyZHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgICB0aGlzLnNjb3JlLmRyYXdNdWx0KGN0eCk7XG4gICAgdGhpcy5zY29yZS5kcmF3U2NvcmUoY3R4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi9zb3VuZFwiO1xuaW1wb3J0IHtzZXRVcE1vZGFsc30gZnJvbSBcIi4vcGFnZVwiO1xuXG5jbGFzcyBHYW1lVmlld3tcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmJnbSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvYmdtLm1wM1wiKTtcbiAgICB0aGlzLmdvbSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvZ2FtZW92ZXIubXAzXCIpO1xuICAgIHNldFVwTW9kYWxzKCk7XG4gIH1cblxuICBhbmltYXRlKGN1cnJlbnRUaW1lKSB7XG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCh0aGlzLmN0eCk7XG4gICAgY29uc3QgZGVsdGEgPSBjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgaWYgKHRoaXMuZ2FtZS5pblBsYXkpe1xuICAgICAgdGhpcy5iZ20ucGxheSgpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgICB0aGlzLmhhbmRsZU1vdmVtZW50KCk7XG4gICAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoZGVsdGEpO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5iZ20uc3RvcCgpO1xuICAgICAgdGhpcy5nb20ucGxheSgpO1xuICAgICAgbGV0IHNjb3Jlc0FycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlcycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmVzJykpIDogW107XG4gICAgICBsZXQgbmV3U2NvcmVPYmo7XG4gICAgICBuZXdTY29yZU9iaiA9IFt0aGlzLmdhbWUuc2NvcmUubmFtZSwgdGhpcy5nYW1lLnNjb3JlLnNjb3JlXTtcbiAgICAgIHNjb3Jlc0FycmF5LnB1c2gobmV3U2NvcmVPYmopO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njb3JlcycsIEpTT04uc3RyaW5naWZ5KHNjb3Jlc0FycmF5KSk7XG4gICAgICBjb25zdCBzY29yZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVzXCIpKTtcbiAgICAgIGNvbnNvbGUubG9nKHNjb3Jlcyk7XG4gICAgICBjb25zdCB0b3BUZW4gPSBzY29yZXMuc29ydCgoYSxiKSA9PiBiWzFdIC0gYVsxXSkuc2xpY2UoMCwxMCk7XG5cblxuICAgICAgdGhpcy5kcmF3R2FtZU92ZXIodG9wVGVuKTtcbiAgICB9XG5cbiAgfVxuXG4gIGRyYXdHYW1lT3Zlcih0b3BUZW4pe1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgNDBweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMEZGMDBcIjtcbiAgICBjdHguZmlsbFRleHQoXCJGaW5hbCBTY29yZTogXCIgKyB0aGlzLmdhbWUuc2NvcmUuc2NvcmUsIDMwMCwgNDApO1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIDMwcHggQ291cmllciBOZXdcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjRkZGRjAwXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiSGlnaCBTY29yZXNcIiwgMzAwLCAxMDApO1xuXG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgYm9sZCAyNXB4IENvdXJpZXIgTmV3XCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgIGlmICh0b3BUZW5baV0pe1xuICAgICAgICBjdHguZmlsbFRleHQoKGkrMSkgKyBcIi5cIiArIHRvcFRlbltpXVswXSArIFwiOiBcIiArIHRvcFRlbltpXVsxXSwgMzAwLCAxMDAgKyAzMCooaSsxKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCA5NjAsIDY0MCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmtleXMgPSAodGhpcy5rZXlzIHx8IFtdKTtcbiAgICAgIHRoaXMua2V5c1tlLmtleUNvZGVdID0gKGUudHlwZSA9PSBcImtleWRvd25cIik7XG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5rZXlzW2Uua2V5Q29kZV0gPSAoZS50eXBlID09IFwia2V5ZG93blwiKTtcbiAgICB9KVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICB9XG5cbiAgaGFuZGxlTW92ZW1lbnQoKXtcbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s2NV0pIHsgIHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gLTU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s2OF0pIHsgIHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gNTsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzg3XSkgeyB0aGlzLmdhbWUucGxheWVyLnNwZWVkID0gLTQ7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s4NF0pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IDQ7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1szN10pIHsgdGhpcy5nYW1lLnBsYXllci5tb3ZlQW5nbGUgPSAtNTsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzM5XSkgeyB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IDU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1szOF0pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IC00OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNDBdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSA0OyB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYXRle1xuICBjb25zdHJ1Y3Rvcihwb3MsIGFuZ2xlKSB7IC8vICgtMSwwKSAoMSwgMCksICgtMSw2MCksICgxLDYwKVxuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMgPSBbXVxuXG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHg9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5PSB0aGlzLnBvc1sxXTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGN0eC5saW5lVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbygwICsgMTAsIDAgLSAxMCk7XG4gICAgY3R4LmxpbmVUbygwIC0gMTAsIDAgLSAxMCk7XG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKDAsIDAgKyA2MCk7XG4gICAgY3R4LmxpbmVUbygwICsgMTAsIDAgKyA3MCk7XG4gICAgY3R4LmxpbmVUbygwIC0gMTAsIDAgKyA3MCk7XG4gICAgY3R4LmxpbmVUbygwLCAwICsgNjApO1xuXG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmE1MDAnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgbW92ZShmcmFtZU51bSwgcGxheWVyKXtcbiAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMgPSBbXTtcbiAgICBpZiAoZnJhbWVOdW0gJSAxMjAgPT09IDApe1xuICAgICAgdGhpcy52ZWwgPSBVdGlsLnJhbmRvbVZlYygwLjEyNSk7XG4gICAgfVxuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0sIHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV1dO1xuICAgIGlmICgoTWF0aC5hYnMocGxheWVyLnBvc1swXSAtIHRoaXMucG9zWzBdKSA8IDcwKSAmJiAoTWF0aC5hYnMocGxheWVyLnBvc1sxXSAtIHRoaXMucG9zWzFdKSA8IDcwKSl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjsgaSsrKXtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25DaXJjbGVzLnB1c2goe3BvczogXG4gICAgICAgICAgW3RoaXMucG9zWzBdIC0gKDUgKyAxMCppKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgICAgICAgICB0aGlzLnBvc1sxXSArICgoNSArIDEwKmkpICogTWF0aC5jb3ModGhpcy5hbmdsZSkpXSxcbiAgICAgICAgICByYWRpdXM6IDVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhpcy5jb2xsaXNpb25Qb3MgPSB7XG5cbiAgICAvLyAgIHRvcExlZnQ6IFsodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpICsgdGhpcy5wb3NbMV0gKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAvLyAgIHRoaXMucG9zWzFdICogTWF0aC5jb3ModGhpcy5hbmdsZSkgLSAoKHRoaXMucG9zWzBdIC0gMSkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSldLFxuICAgIC8vICAgdG9wUmlnaHQ6IFsodGhpcy5wb3NbMF0gKyAxKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpICsgdGhpcy5wb3NbMV0gKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAvLyAgIHRoaXMucG9zWzFdICogTWF0aC5jb3ModGhpcy5hbmdsZSkgLSAoKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSldLFxuICAgIC8vICAgYm90dG9tTGVmdDogWyh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5jb3ModGhpcy5hbmdsZSkgKyAodGhpcy5wb3NbMV0rNjApICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICAodGhpcy5wb3NbMV0rNjApICogTWF0aC5jb3ModGhpcy5hbmdsZSkgLSAoKHRoaXMucG9zWzBdIC0gMSkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSldLFxuICAgIC8vICAgYm90dG9tUmlnaHQ6IFsodGhpcy5wb3NbMF0gKyAxKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpICsgKHRoaXMucG9zWzFdKzYwKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgKHRoaXMucG9zWzFdKzYwKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSArIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXVxuICAgIC8vIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXRlOyIsImV4cG9ydCBjb25zdCBzZXRVcE1vZGFscyA9ICgpID0+IHtcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlTW9kYWxcIik7XG4gIGNvbnN0IHNjb3JlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY29yZS1idG5cIik7XG4gIGNvbnN0IHNjb3JlQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2Utc2NvcmVcIilbMF07XG5cbiAgc2NvcmVCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIm1hZGUgaXQgaGVyZVwiKVxuICAgIHNjb3JlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBzY29yZUNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgc2NvcmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHNjb3JlKSB7XG4gICAgICBzY29yZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRNb2RhbFwiKTtcbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWJ0blwiKTtcbiAgY29uc3QgYWJvdXRDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1hYnRcIilbMF07XG5cbiAgYWJvdXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgYWJvdXRDbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBhYm91dCkge1xuICAgICAgYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxufVxuXG4iLCJjbGFzcyBQbGF5ZXJ7XG4gIGNvbnN0cnVjdG9yKHBvcyl7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5tb3ZlQW5nbGUgPSAwO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuICAgICAgdG9wOiB0aGlzLnBvc1sxXSAtIDUsXG4gICAgICBsZWZ0OiB0aGlzLnBvc1swXSAtIDUsXG4gICAgICBib3R0b206IHRoaXMucG9zWzFdICsgNSxcbiAgICAgIHJpZ2h0OiB0aGlzLnBvc1swXSArIDVcbiAgICB9XG4gICAgdGhpcy5yYWRpdXMgPSA4O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuXG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oLTEwLC0xMClcbiAgICBjdHgubGluZVRvKC0xMCwgNSk7XG4gICAgY3R4LmxpbmVUbygwLCAxNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgLTEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oLTEwLCAtMTApO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICB0aGlzLmFuZ2xlICs9IHRoaXMubW92ZUFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICB0aGlzLnBvcyA9IFtcbiAgICAgIHRoaXMucG9zWzBdICsgdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgICAgdGhpcy5wb3NbMV0gLSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5hbmdsZSlcbiAgICBdXG4gICAgdGhpcy5jb2xsaXNpb25Qb3MgPSB7XG4gICAgICB0b3A6IHRoaXMucG9zWzFdIC0gNSxcbiAgICAgIGxlZnQ6IHRoaXMucG9zWzBdIC0gNSxcbiAgICAgIGJvdHRvbTogdGhpcy5wb3NbMV0gKyA1LFxuICAgICAgcmlnaHQ6IHRoaXMucG9zWzBdICsgNVxuICAgIH1cbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLm1vdmVBbmdsZSA9IDBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjbGFzcyBTY29yZXtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLm11bHRpcGxpZXIgPSAxO1xuICAgIHRoaXMubmFtZSA9IFwiTW9lIFN6eXNsYWtcIjtcbiAgfVxuXG4gIGRyYXdNdWx0KGN0eCkge1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgMjVweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCA3NjAsIDIwKTtcblxuICB9XG5cbiAgZHJhd1Njb3JlKGN0eCkge1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgMjVweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbFRleHQoXCJNdWx0aXBsaWVyOiBcIiArIHRoaXMubXVsdGlwbGllciwgMjAsIDIwKTtcblxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7IiwiY2xhc3MgU2hhcmR7XG4gIGNvbnN0cnVjdG9yKHBvcykge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMucmFkaXVzID0gMjU7XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyAyLCB5IC0gMywgeCArIDQsIHkgLSAzLCB4ICsgNSwgeSAtIDIpO1xuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyAyLCB5ICsgMywgeCArIDQsIHkgKyAzLCB4LCB5KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzM5ZmYxNCc7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJkOyIsImZ1bmN0aW9uIFNvdW5kKHNyYykge1xuICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICB0aGlzLnNvdW5kLnNyYyA9IHNyYztcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XG4gIHRoaXMuc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuICB0aGlzLnNvdW5kLnZvbHVtZSA9IC4xNTtcbiAgdGhpcy5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc291bmQucGxheSgpO1xuICB9XG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNvdW5kOyIsIi8vIFJldHVybiBhIHJhbmRvbWx5IG9yaWVudGVkIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBsZW5ndGguXG5jb25zdCBVdGlsID0ge1xuICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWcpLCBNYXRoLmNvcyhkZWcpXSwgbGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2NhbGUgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciBieSB0aGUgZ2l2ZW4gYW1vdW50LlxuICBzY2FsZSh2ZWMsIG0pIHtcbiAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXSAqIG1dO1xuICB9LFxuXG4gIGRpc3QodjEsIHYyKXtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCgodjFbMF0gLSB2MlswXSkgKiogMikrICgodjFbMV0gLSB2MlsxXSkgKiogMikpXG4gIH0sXG5cbiAgbm9ybSh2ZWMpe1xuICAgIHJldHVybiBVdGlsLmRpc3QoWzAsMF0sIHZlYylcbiAgfSxcblxuICBpc0NvbGxpZGVkKG9iajEsIG9iajIpe1xuICAgIHZhciBkeCA9IG9iajEucG9zWzBdIC0gb2JqMi5wb3NbMF07XG4gICAgdmFyIGR5ID0gb2JqMS5wb3NbMV0gLSBvYmoyLnBvc1sxXTtcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgaWYgKGRpc3RhbmNlIDwgb2JqMS5yYWRpdXMgKyBvYmoyLnJhZGl1cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIGdvbmVUaHJvdWdoR2F0ZShwbGF5ZXIsIGdhdGUpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2F0ZS5jb2xsaXNpb25DaXJjbGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmIChVdGlsLmlzQ29sbGlkZWQocGxheWVyLCBnYXRlLmNvbGxpc2lvbkNpcmNsZXNbaV0pKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiXSwic291cmNlUm9vdCI6IiJ9