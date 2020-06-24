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
    this.bgi = new Image();
    this.bgi.src = "../../assets/images/bg.jpg";
    this.bgm = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/bgm.mp3");
    this.gom = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/gameover.mp3");
    Object(_page__WEBPACK_IMPORTED_MODULE_2__["setUpModals"])();
  }

  _createClass(GameView, [{
    key: "animate",
    value: function animate(currentTime) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpYW1vbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zaGFyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJzdGFydCIsIndpbmRvdyIsIkRpYW1vbmQiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJ4IiwieSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZGVsdGEiLCJwbGF5ZXJQb3MiLCJ2ZWxEaXIiLCJ2ZWxNYWciLCJVdGlsIiwibm9ybSIsIkdhbWUiLCJwbGF5ZXIiLCJQbGF5ZXIiLCJkaWFtb25kcyIsImRpYW1vbmRTcGF3blJhdGUiLCJnYXRlcyIsImdhdGVTcGF3blJhdGUiLCJzaGFyZHMiLCJmcmFtZU51bSIsImluUGxheSIsInNjb3JlIiwiU2NvcmUiLCJnYXRlIiwiU291bmQiLCJtdWx0aSIsImRpYW1vbmQiLCJNYXRoIiwicmFuZG9tIiwiZGlzdCIsInB1c2giLCJHYXRlIiwiUEkiLCJzaGFyZCIsIlNoYXJkIiwibW92ZSIsImFkZERpYW1vbmQiLCJhZGRHYXRlIiwiaSIsImxlbmd0aCIsImFicyIsImlzQ29sbGlkZWQiLCJjb2xsaXNpb25DaXJjbGVzIiwiZ29uZVRocm91Z2hHYXRlIiwiZXhwbG9zaW9uIiwiZGlhbW9uZHNUb0tlZXAiLCJtdWx0aXBsaWVyIiwicGxheSIsImFkZFNoYXJkIiwic3BsaWNlIiwic3RvcCIsImRyYXciLCJkcmF3TXVsdCIsImRyYXdTY29yZSIsImdhbWUiLCJsYXN0VGltZSIsImFuaW1hdGUiLCJiaW5kIiwiYmdpIiwiSW1hZ2UiLCJzcmMiLCJiZ20iLCJnb20iLCJzZXRVcE1vZGFscyIsImN1cnJlbnRUaW1lIiwiZHJhd0JhY2tncm91bmQiLCJkcmF3SW1hZ2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoYW5kbGVNb3ZlbWVudCIsIm1vdmVPYmplY3RzIiwic2NvcmVzQXJyYXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibmV3U2NvcmVPYmoiLCJuYW1lIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNjb3JlcyIsImNvbnNvbGUiLCJsb2ciLCJ0b3BUZW4iLCJzb3J0IiwiYSIsImIiLCJzbGljZSIsImRyYXdHYW1lT3ZlciIsImZvbnQiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsImZpbGxSZWN0IiwicHJldmVudERlZmF1bHQiLCJrZXlzIiwia2V5Q29kZSIsInR5cGUiLCJtb3ZlQW5nbGUiLCJzcGVlZCIsImFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsInJlc3RvcmUiLCJyYW5kb21WZWMiLCJzaW4iLCJjb3MiLCJzY29yZUJ0biIsInNjb3JlQ2xvc2UiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiYWJvdXQiLCJhYm91dEJ0biIsImFib3V0Q2xvc2UiLCJjb2xsaXNpb25Qb3MiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJiZXppZXJDdXJ2ZVRvIiwic291bmQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwidm9sdW1lIiwicGF1c2UiLCJkZWciLCJzY2FsZSIsInZlYyIsIm0iLCJ2MSIsInYyIiwic3FydCIsIm9iajEiLCJvYmoyIiwiZHgiLCJkeSIsImRpc3RhbmNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBQ0MsQ0FBRCxFQUFPO0FBRW5ELE1BQU1DLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRixRQUFRLENBQUNHLFVBQVQsQ0FBb0Is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Y2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXdcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY3R4KTtcbiAgZ2FtZVZpZXcuc3RhcnQoKTtcbiAgd2luZG93LmN0eCA9IGN0eDtcbn0pO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuXG5jbGFzcyBEaWFtb25ke1xuICBjb25zdHJ1Y3Rvcihwb3MpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnZlbCA9IDA7XG4gICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBsZXQgeCA9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5ID0gdGhpcy5wb3NbMV07XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KzE1KTtcbiAgICBjdHgubGluZVRvKHggLSA4LCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkgLSAxNSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgOCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5KzE1KTtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzRkZmZmZic7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgbW92ZShkZWx0YSwgcGxheWVyUG9zKXtcbiAgICBjb25zdCB2ZWxEaXIgPSBbcGxheWVyUG9zWzBdLXRoaXMucG9zWzBdLCBwbGF5ZXJQb3NbMV0gLSB0aGlzLnBvc1sxXV07XG4gICAgY29uc3QgdmVsTWFnID0gVXRpbC5ub3JtKHZlbERpcik7XG4gICAgY29uc3QgdmVsID0gW3ZlbERpclswXS8odmVsTWFnKSwgdmVsRGlyWzFdLyh2ZWxNYWcpXTtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHZlbFswXSwgdGhpcy5wb3NbMV0gKyB2ZWxbMV1dO1xuICAgIC8vIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgKHZlbERpclswXSAvICh2ZWxNYWcgKiAxMCkpLCB2ZWxEaXJbMV0gLyAodmVsTWFnICogMTApXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYW1vbmQ7IiwiaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL2dhbWVfdmlld1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBEaWFtb25kIGZyb20gXCIuL2RpYW1vbmRcIjtcbmltcG9ydCBHYXRlIGZyb20gXCIuL2dhdGVcIjtcbmltcG9ydCBTaGFyZCBmcm9tIFwiLi9zaGFyZFwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IFNjb3JlIGZyb20gXCIuL3Njb3JlXCI7XG5pbXBvcnQgU291bmQgZnJvbSBcIi4vc291bmRcIjtcblxuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoWzQ4MCwgMzIwXSk7XG5cbiAgICB0aGlzLmRpYW1vbmRzID0gW107XG4gICAgdGhpcy5kaWFtb25kU3Bhd25SYXRlID0gMTAwO1xuXG4gICAgdGhpcy5nYXRlcyA9IFtdO1xuICAgIHRoaXMuZ2F0ZVNwYXduUmF0ZSA9IDI0MDtcblxuICAgIHRoaXMuc2hhcmRzID0gW107XG5cbiAgICB0aGlzLmZyYW1lTnVtID0gMTtcbiAgICB0aGlzLmluUGxheSA9IHRydWU7XG5cbiAgICB0aGlzLnNjb3JlID0gbmV3IFNjb3JlKCk7XG5cbiAgICB0aGlzLmdhdGUgPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL2dhdGUubXAzXCIpO1xuICAgIHRoaXMubXVsdGkgPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL211bHRpLm1wM1wiKTtcblxuICB9XG5cbiAgYWRkRGlhbW9uZCgpe1xuICAgIGNvbnN0IGRpYW1vbmQgPSBuZXcgRGlhbW9uZChbTWF0aC5yYW5kb20oKSo5NjAsIE1hdGgucmFuZG9tKCkqNjQwXSk7XG4gICAgaWYoVXRpbC5kaXN0KGRpYW1vbmQucG9zLCB0aGlzLnBsYXllci5wb3MpID4gMTUwKXtcbiAgICAgIHRoaXMuZGlhbW9uZHMucHVzaChkaWFtb25kKTtcbiAgICB9XG4gIH1cblxuICBhZGRHYXRlKCl7XG4gICAgY29uc3QgZ2F0ZSA9IG5ldyBHYXRlKFtNYXRoLnJhbmRvbSgpICogOTYwLCBNYXRoLnJhbmRvbSgpICogNjQwXSwgTWF0aC5yYW5kb20oKSogTWF0aC5QSSAvIDIpO1xuICAgIHRoaXMuZ2F0ZXMucHVzaChnYXRlKTtcbiAgfVxuXG5cbiAgYWRkU2hhcmQocG9zKXtcbiAgICBjb25zdCBzaGFyZCA9IG5ldyBTaGFyZChwb3MpXG4gICAgdGhpcy5zaGFyZHMucHVzaChzaGFyZCk7XG4gIH1cblxuICBtb3ZlT2JqZWN0cyhkZWx0YSl7XG4gICAgdGhpcy5wbGF5ZXIubW92ZSgpXG4gICAgaWYgKHRoaXMuZnJhbWVOdW0gJSB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPT09IDApe1xuICAgICAgdGhpcy5hZGREaWFtb25kKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyYW1lTnVtICUgdGhpcy5nYXRlU3Bhd25SYXRlID09PSAwKXtcbiAgICAgIHRoaXMuYWRkR2F0ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmFtZU51bSAlIDYwMCA9PT0gMCAmJiB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPiAxMCl7XG4gICAgICB0aGlzLmRpYW1vbmRTcGF3blJhdGUgLT0gMTA7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRpYW1vbmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHRoaXMuZGlhbW9uZHNbaV0ubW92ZShkZWx0YSwgdGhpcy5wbGF5ZXIucG9zKVxuICAgICAgaWYgKChNYXRoLmFicyh0aGlzLmRpYW1vbmRzW2ldLnBvc1swXSAtIHRoaXMucGxheWVyLnBvc1swXSkgPCA0MCkgJiZcbiAgICAgICAgKE1hdGguYWJzKHRoaXMuZGlhbW9uZHNbaV0ucG9zWzFdIC0gdGhpcy5wbGF5ZXIucG9zWzFdKSA8IDQwKSl7XG4gICAgICAgIGlmKFV0aWwuaXNDb2xsaWRlZCh0aGlzLmRpYW1vbmRzW2ldLCB0aGlzLnBsYXllcikpe1xuICAgICAgICAgIHRoaXMuaW5QbGF5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdhdGVzW2ldLm1vdmUodGhpcy5mcmFtZU51bSwgdGhpcy5wbGF5ZXIpXG4gICAgICBpZiAodGhpcy5nYXRlc1tpXS5jb2xsaXNpb25DaXJjbGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZihVdGlsLmdvbmVUaHJvdWdoR2F0ZSh0aGlzLnBsYXllciwgdGhpcy5nYXRlc1tpXSkpe1xuICAgICAgICAgIGNvbnN0IGV4cGxvc2lvbiA9IHtwb3M6dGhpcy5nYXRlc1tpXS5jb2xsaXNpb25DaXJjbGVzWzNdLnBvcywgcmFkaXVzOiAxNTB9XG4gICAgICAgICAgY29uc3QgZGlhbW9uZHNUb0tlZXAgPVtdO1xuICAgICAgICAgIHRoaXMuc2NvcmUuc2NvcmUgKz0gdGhpcy5zY29yZS5tdWx0aXBsaWVyKjEwMDtcbiAgICAgICAgICB0aGlzLnNjb3JlLm11bHRpcGxpZXIgKz0gMjtcbiAgICAgICAgICB0aGlzLmdhdGUucGxheSgpO1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRpYW1vbmRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmICghVXRpbC5pc0NvbGxpZGVkKGV4cGxvc2lvbiwgdGhpcy5kaWFtb25kc1tpXSkpe1xuICAgICAgICAgICAgICBkaWFtb25kc1RvS2VlcC5wdXNoKHRoaXMuZGlhbW9uZHNbaV0pO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuc2NvcmUuc2NvcmUgKz0gdGhpcy5zY29yZS5tdWx0aXBsaWVyKjUwO1xuICAgICAgICAgICAgICB0aGlzLmFkZFNoYXJkKHRoaXMuZGlhbW9uZHNbaV0ucG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kaWFtb25kcyA9IGRpYW1vbmRzVG9LZWVwO1xuICAgICAgICAgIHRoaXMuZ2F0ZXMuc3BsaWNlKGksMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXJkcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmICgoTWF0aC5hYnModGhpcy5zaGFyZHNbaV0ucG9zWzBdIC0gdGhpcy5wbGF5ZXIucG9zWzBdKSA8IDQwKSAmJlxuICAgICAgICAgIChNYXRoLmFicyh0aGlzLnNoYXJkc1tpXS5wb3NbMV0gLSB0aGlzLnBsYXllci5wb3NbMV0pIDwgNDApKSB7XG4gICAgICAgICAgaWYgKFV0aWwuaXNDb2xsaWRlZCh0aGlzLnNoYXJkc1tpXSwgdGhpcy5wbGF5ZXIpKXtcbiAgICAgICAgICAgIHRoaXMubXVsdGkuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5zY29yZS5tdWx0aXBsaWVyICs9IDE7XG4gICAgICAgICAgICB0aGlzLm11bHRpLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2hhcmRzLnNwbGljZShpLDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMuZnJhbWVOdW0rKztcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICB0aGlzLnBsYXllci5kcmF3KGN0eCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpYW1vbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRpYW1vbmRzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdhdGVzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zaGFyZHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgICB0aGlzLnNjb3JlLmRyYXdNdWx0KGN0eCk7XG4gICAgdGhpcy5zY29yZS5kcmF3U2NvcmUoY3R4KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi9zb3VuZFwiO1xuaW1wb3J0IHtzZXRVcE1vZGFsc30gZnJvbSBcIi4vcGFnZVwiO1xuXG5jbGFzcyBHYW1lVmlld3tcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJnaSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuYmdpLnNyYyA9IFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5qcGdcIjtcblxuICAgIHRoaXMuYmdtID0gbmV3IFNvdW5kKFwiLi4vLi4vYXNzZXRzL3NvdW5kcy9iZ20ubXAzXCIpO1xuICAgIHRoaXMuZ29tID0gbmV3IFNvdW5kKFwiLi4vLi4vYXNzZXRzL3NvdW5kcy9nYW1lb3Zlci5tcDNcIik7XG4gICAgc2V0VXBNb2RhbHMoKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3VycmVudFRpbWUpIHtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKHRoaXMuY3R4KTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iZ2ksMCwgMCk7XG5cbiAgICBjb25zdCBkZWx0YSA9IGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgICBpZiAodGhpcy5nYW1lLmluUGxheSl7XG4gICAgICB0aGlzLmJnbS5wbGF5KCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgIHRoaXMuaGFuZGxlTW92ZW1lbnQoKTtcbiAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cyhkZWx0YSk7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gY3VycmVudFRpbWU7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmJnbS5zdG9wKCk7XG4gICAgICB0aGlzLmdvbS5wbGF5KCk7XG4gICAgICBsZXQgc2NvcmVzQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmVzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZXMnKSkgOiBbXTtcbiAgICAgIGxldCBuZXdTY29yZU9iajtcbiAgICAgIG5ld1Njb3JlT2JqID0gW3RoaXMuZ2FtZS5zY29yZS5uYW1lLCB0aGlzLmdhbWUuc2NvcmUuc2NvcmVdO1xuICAgICAgc2NvcmVzQXJyYXkucHVzaChuZXdTY29yZU9iaik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmVzJywgSlNPTi5zdHJpbmdpZnkoc2NvcmVzQXJyYXkpKTtcbiAgICAgIGNvbnN0IHNjb3JlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZXNcIikpO1xuICAgICAgY29uc29sZS5sb2coc2NvcmVzKTtcbiAgICAgIGNvbnN0IHRvcFRlbiA9IHNjb3Jlcy5zb3J0KChhLGIpID0+IGJbMV0gLSBhWzFdKS5zbGljZSgwLDEwKTtcblxuXG4gICAgICB0aGlzLmRyYXdHYW1lT3Zlcih0b3BUZW4pO1xuICAgIH1cblxuICB9XG5cbiAgZHJhd0dhbWVPdmVyKHRvcFRlbil7XG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgYm9sZCA0MHB4IENvdXJpZXIgTmV3XCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwRkYwMFwiO1xuICAgIGN0eC5maWxsVGV4dChcIkZpbmFsIFNjb3JlOiBcIiArIHRoaXMuZ2FtZS5zY29yZS5zY29yZSwgMzUwLCA0MCk7XG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgMzBweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZGMDBcIjtcbiAgICBjdHguZmlsbFRleHQoXCJIaWdoIFNjb3Jlc1wiLCA0MTAsIDEwMCk7XG5cbiAgICBjdHguZm9udCA9IFwic21hbGwtY2FwcyBib2xkIDI1cHggQ291cmllciBOZXdcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgaWYgKHRvcFRlbltpXSl7XG4gICAgICAgIGN0eC5maWxsVGV4dCgoaSsxKSArIFwiLlwiICsgdG9wVGVuW2ldWzBdICsgXCI6IFwiICsgdG9wVGVuW2ldWzFdLCAzNTAsIDEyMCArIDMwKihpKzEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDk2MCwgNjQwKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMua2V5cyA9ICh0aGlzLmtleXMgfHwgW10pO1xuICAgICAgdGhpcy5rZXlzW2Uua2V5Q29kZV0gPSAoZS50eXBlID09IFwia2V5ZG93blwiKTtcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmtleXNbZS5rZXlDb2RlXSA9IChlLnR5cGUgPT0gXCJrZXlkb3duXCIpO1xuICAgIH0pXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gIH1cblxuICBoYW5kbGVNb3ZlbWVudCgpe1xuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzY1XSkgeyAgdGhpcy5nYW1lLnBsYXllci5tb3ZlQW5nbGUgPSAtNTsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzY4XSkgeyAgdGhpcy5nYW1lLnBsYXllci5tb3ZlQW5nbGUgPSA1OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbODddKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSAtNDsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzg0XSkgeyB0aGlzLmdhbWUucGxheWVyLnNwZWVkID0gNDsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzM3XSkgeyB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IC01OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbMzldKSB7IHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gNTsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzM4XSkgeyB0aGlzLmdhbWUucGxheWVyLnNwZWVkID0gLTQ7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s0MF0pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IDQ7IH1cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVWaWV3OyIsImltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5cbmNsYXNzIEdhdGV7XG4gIGNvbnN0cnVjdG9yKHBvcywgYW5nbGUpIHsgLy8gKC0xLDApICgxLCAwKSwgKC0xLDYwKSwgKDEsNjApXG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcyA9IFtdXG5cbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBsZXQgeD0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHk9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKDAgKyAxMCwgMCAtIDEwKTtcbiAgICBjdHgubGluZVRvKDAgLSAxMCwgMCAtIDEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oMCwgMCArIDYwKTtcbiAgICBjdHgubGluZVRvKDAgKyAxMCwgMCArIDcwKTtcbiAgICBjdHgubGluZVRvKDAgLSAxMCwgMCArIDcwKTtcbiAgICBjdHgubGluZVRvKDAsIDAgKyA2MCk7XG5cbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ZmYTUwMCc7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBtb3ZlKGZyYW1lTnVtLCBwbGF5ZXIpe1xuICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcyA9IFtdO1xuICAgIGlmIChmcmFtZU51bSAlIDEyMCA9PT0gMCl7XG4gICAgICB0aGlzLnZlbCA9IFV0aWwucmFuZG9tVmVjKDAuMTI1KTtcbiAgICB9XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSwgdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXV07XG4gICAgaWYgKChNYXRoLmFicyhwbGF5ZXIucG9zWzBdIC0gdGhpcy5wb3NbMF0pIDwgNzApICYmIChNYXRoLmFicyhwbGF5ZXIucG9zWzFdIC0gdGhpcy5wb3NbMV0pIDwgNzApKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2OyBpKyspe1xuICAgICAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMucHVzaCh7cG9zOiBcbiAgICAgICAgICBbdGhpcy5wb3NbMF0gLSAoNSArIDEwKmkpICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgICAgICAgIHRoaXMucG9zWzFdICsgKCg1ICsgMTAqaSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSldLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLmNvbGxpc2lvblBvcyA9IHtcblxuICAgIC8vICAgdG9wTGVmdDogWyh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5jb3ModGhpcy5hbmdsZSkgKyB0aGlzLnBvc1sxXSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgdGhpcy5wb3NbMV0gKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV0sXG4gICAgLy8gICB0b3BSaWdodDogWyh0aGlzLnBvc1swXSArIDEpICogTWF0aC5jb3ModGhpcy5hbmdsZSkgKyB0aGlzLnBvc1sxXSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgdGhpcy5wb3NbMV0gKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gKyAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV0sXG4gICAgLy8gICBib3R0b21MZWZ0OiBbKHRoaXMucG9zWzBdIC0gMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAvLyAgICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV0sXG4gICAgLy8gICBib3R0b21SaWdodDogWyh0aGlzLnBvc1swXSArIDEpICogTWF0aC5jb3ModGhpcy5hbmdsZSkgKyAodGhpcy5wb3NbMV0rNjApICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICAodGhpcy5wb3NbMV0rNjApICogTWF0aC5jb3ModGhpcy5hbmdsZSkgLSAoKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSldXG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhdGU7IiwiZXhwb3J0IGNvbnN0IHNldFVwTW9kYWxzID0gKCkgPT4ge1xuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVNb2RhbFwiKTtcbiAgY29uc3Qgc2NvcmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlLWJ0blwiKTtcbiAgY29uc3Qgc2NvcmVDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1zY29yZVwiKVswXTtcblxuICBzY29yZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHNjb3JlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBzY29yZUNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgc2NvcmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHNjb3JlKSB7XG4gICAgICBzY29yZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRNb2RhbFwiKTtcbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWJ0blwiKTtcbiAgY29uc3QgYWJvdXRDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1hYnRcIilbMF07XG5cbiAgYWJvdXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgYWJvdXRDbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBhYm91dCkge1xuICAgICAgYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxufVxuXG4iLCJjbGFzcyBQbGF5ZXJ7XG4gIGNvbnN0cnVjdG9yKHBvcyl7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5tb3ZlQW5nbGUgPSAwO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuICAgICAgdG9wOiB0aGlzLnBvc1sxXSAtIDUsXG4gICAgICBsZWZ0OiB0aGlzLnBvc1swXSAtIDUsXG4gICAgICBib3R0b206IHRoaXMucG9zWzFdICsgNSxcbiAgICAgIHJpZ2h0OiB0aGlzLnBvc1swXSArIDVcbiAgICB9XG4gICAgdGhpcy5yYWRpdXMgPSA4O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuXG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oLTEwLC0xMClcbiAgICBjdHgubGluZVRvKC0xMCwgNSk7XG4gICAgY3R4LmxpbmVUbygwLCAxNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgLTEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oLTEwLCAtMTApO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICB0aGlzLmFuZ2xlICs9IHRoaXMubW92ZUFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICB0aGlzLnBvcyA9IFtcbiAgICAgIHRoaXMucG9zWzBdICsgdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgICAgdGhpcy5wb3NbMV0gLSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5hbmdsZSlcbiAgICBdXG4gICAgdGhpcy5jb2xsaXNpb25Qb3MgPSB7XG4gICAgICB0b3A6IHRoaXMucG9zWzFdIC0gNSxcbiAgICAgIGxlZnQ6IHRoaXMucG9zWzBdIC0gNSxcbiAgICAgIGJvdHRvbTogdGhpcy5wb3NbMV0gKyA1LFxuICAgICAgcmlnaHQ6IHRoaXMucG9zWzBdICsgNVxuICAgIH1cbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLm1vdmVBbmdsZSA9IDBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjbGFzcyBTY29yZXtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLm11bHRpcGxpZXIgPSAxO1xuICAgIHRoaXMubmFtZSA9IFwiTW9lIFN6eXNsYWtcIjtcbiAgfVxuXG4gIGRyYXdNdWx0KGN0eCkge1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgMjVweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyB0aGlzLnNjb3JlLCA3NjAsIDIwKTtcblxuICB9XG5cbiAgZHJhd1Njb3JlKGN0eCkge1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgMjVweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICBjdHguZmlsbFRleHQoXCJNdWx0aXBsaWVyOiBcIiArIHRoaXMubXVsdGlwbGllciwgMjAsIDIwKTtcblxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7IiwiY2xhc3MgU2hhcmR7XG4gIGNvbnN0cnVjdG9yKHBvcykge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMucmFkaXVzID0gMjU7XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyAyLCB5IC0gMywgeCArIDQsIHkgLSAzLCB4ICsgNSwgeSAtIDIpO1xuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyAyLCB5ICsgMywgeCArIDQsIHkgKyAzLCB4LCB5KTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzM5ZmYxNCc7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJkOyIsImZ1bmN0aW9uIFNvdW5kKHNyYykge1xuICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICB0aGlzLnNvdW5kLnNyYyA9IHNyYztcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XG4gIHRoaXMuc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuICB0aGlzLnNvdW5kLnZvbHVtZSA9IC4xNTtcbiAgdGhpcy5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc291bmQucGxheSgpO1xuICB9XG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNvdW5kOyIsIi8vIFJldHVybiBhIHJhbmRvbWx5IG9yaWVudGVkIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBsZW5ndGguXG5jb25zdCBVdGlsID0ge1xuICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWcpLCBNYXRoLmNvcyhkZWcpXSwgbGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2NhbGUgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciBieSB0aGUgZ2l2ZW4gYW1vdW50LlxuICBzY2FsZSh2ZWMsIG0pIHtcbiAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXSAqIG1dO1xuICB9LFxuXG4gIGRpc3QodjEsIHYyKXtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCgodjFbMF0gLSB2MlswXSkgKiogMikrICgodjFbMV0gLSB2MlsxXSkgKiogMikpXG4gIH0sXG5cbiAgbm9ybSh2ZWMpe1xuICAgIHJldHVybiBVdGlsLmRpc3QoWzAsMF0sIHZlYylcbiAgfSxcblxuICBpc0NvbGxpZGVkKG9iajEsIG9iajIpe1xuICAgIHZhciBkeCA9IG9iajEucG9zWzBdIC0gb2JqMi5wb3NbMF07XG4gICAgdmFyIGR5ID0gb2JqMS5wb3NbMV0gLSBvYmoyLnBvc1sxXTtcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgaWYgKGRpc3RhbmNlIDwgb2JqMS5yYWRpdXMgKyBvYmoyLnJhZGl1cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIGdvbmVUaHJvdWdoR2F0ZShwbGF5ZXIsIGdhdGUpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2F0ZS5jb2xsaXNpb25DaXJjbGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmIChVdGlsLmlzQ29sbGlkZWQocGxheWVyLCBnYXRlLmNvbGxpc2lvbkNpcmNsZXNbaV0pKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiXSwic291cmNlUm9vdCI6IiJ9