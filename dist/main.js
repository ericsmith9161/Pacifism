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

/***/ "./src/scripts/explosion.js":
/*!**********************************!*\
  !*** ./src/scripts/explosion.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Explosion = /*#__PURE__*/function () {
  function Explosion(pos, radius) {
    _classCallCheck(this, Explosion);

    this.pos = pos;
    this.radius = radius;
    this.color = ['#FFFF00', '#FFFF33', '#F2EA02', '#E6FB04', '#FF0000', '#FD1C03', '#FF3302', '#FF6600', '#00FFFF', '#099FFF', '#0062FF', '#0033FF', '#FF00FF', '#FF00CC', '#FF0099', '#CC00FF', '#9D00FF', '#CC00FF', '#6E0DD0', '#9900FF'][Math.floor(Math.random() * 20)];
  }

  _createClass(Explosion, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1];
      var r = this.radius;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.strokeStyle = this.color;
      ctx.stroke();
    }
  }]);

  return Explosion;
}();

/* harmony default export */ __webpack_exports__["default"] = (Explosion);

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
/* harmony import */ var _explosion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explosion */ "./src/scripts/explosion.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./src/scripts/util.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./score */ "./src/scripts/score.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sound */ "./src/scripts/sound.js");
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
    this.explosions = [];
    this.explosionFrames = 0;
    this.frameNum = 1;
    this.inPlay = true;
    this.score = new _score__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.gate = new _sound__WEBPACK_IMPORTED_MODULE_8__["default"]("../../assets/sounds/gate.mp3");
    this.gate.sound.volume = .3;
    this.multi = new _sound__WEBPACK_IMPORTED_MODULE_8__["default"]("../../assets/sounds/multi.mp3");
    this.multi.sound.volume = .3;
    this.diamond = new _sound__WEBPACK_IMPORTED_MODULE_8__["default"]("../../assets/sounds/diamondspawn.mp3");
    this.diamond.sound.volume = .05;
  }

  _createClass(Game, [{
    key: "addDiamond",
    value: function addDiamond() {
      var diamond = new _diamond__WEBPACK_IMPORTED_MODULE_2__["default"]([Math.random() * 960, Math.random() * 640]);

      if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].dist(diamond.pos, this.player.pos) > 150) {
        this.diamond.play();
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
        this.gateSpawnRate -= 10;
      }

      for (var i = 0; i < this.diamonds.length; i++) {
        this.diamonds[i].move(delta, this.player.pos);

        if (Math.abs(this.diamonds[i].pos[0] - this.player.pos[0]) < 40 && Math.abs(this.diamonds[i].pos[1] - this.player.pos[1]) < 40) {
          if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollided(this.diamonds[i], this.player)) {
            this.inPlay = false;
          }
        }
      }

      for (var _i = 0; _i < this.gates.length; _i++) {
        this.gates[_i].move(this.frameNum, this.player);

        if (this.gates[_i].collisionCircles.length !== 0) {
          if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].goneThroughGate(this.player, this.gates[_i])) {
            var explosion = {
              pos: this.gates[_i].collisionCircles[3].pos,
              radius: 150
            };
            var expPos = this.gates[_i].collisionCircles[3].pos;

            for (var _i2 = 1; _i2 < 16; _i2++) {
              this.explosions.push(new _explosion__WEBPACK_IMPORTED_MODULE_5__["default"](expPos, _i2 * 10));
            }

            this.explosionFrames = 15;
            this.score.score += this.score.multiplier * 100;
            this.score.multiplier += 2;

            if (this.gate.paused) {
              this.gate.play();
            } else {
              this.gate.sound.currentTime = 0;
              this.gate.play();
            }

            var diamondsToKeep = [];

            for (var _i3 = 0; _i3 < this.diamonds.length; _i3++) {
              if (!_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollided(explosion, this.diamonds[_i3])) {
                diamondsToKeep.push(this.diamonds[_i3]);
              } else {
                this.score.score += this.score.multiplier * 50;
                this.addShard(this.diamonds[_i3].pos);
              }
            }

            this.diamonds = diamondsToKeep;
            this.gates.splice(_i, 1);
          }
        }

        for (var _i4 = 0; _i4 < this.shards.length; _i4++) {
          if (Math.abs(this.shards[_i4].pos[0] - this.player.pos[0]) < 40 && Math.abs(this.shards[_i4].pos[1] - this.player.pos[1]) < 40) {
            if (_util__WEBPACK_IMPORTED_MODULE_6__["default"].isCollided(this.shards[_i4], this.player)) {
              this.multi.stop();
              this.score.multiplier += 1;
              this.multi.play();
              this.shards.splice(_i4, 1);
            }
          }
        }
      }

      this.frameNum++;

      if (this.explosionFrames > 0) {
        this.explosionFrames--;
      } else {
        this.explosions = [];
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.player.draw(ctx);

      for (var i = 0; i < this.diamonds.length; i++) {
        this.diamonds[i].draw(ctx);
      }

      for (var _i5 = 0; _i5 < this.gates.length; _i5++) {
        this.gates[_i5].draw(ctx);
      }

      for (var _i6 = 0; _i6 < this.shards.length; _i6++) {
        this.shards[_i6].draw(ctx);
      }

      for (var _i7 = 0; _i7 < this.explosions.length; _i7++) {
        this.explosions[_i7].draw(ctx);
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
    this.bgm.sound.volume = .15;
    this.bgm.sound.classList.add("background-music");
    this.gom = new _sound__WEBPACK_IMPORTED_MODULE_1__["default"]("../../assets/sounds/gameover.mp3");
    this.gom.sound.volume = .15;
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
        var topTen = scoresArray.sort(function (a, b) {
          return b[1] - a[1];
        }).slice(0, 10);
        this.drawGameOver(topTen);
        localStorage.setItem('scores', JSON.stringify(topTen));
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
      this.toggleSoundSetup();
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
      ctx.textAlign = "center";
      ctx.fillText("Final Score: " + this.game.score.score, 480, 40);
      ctx.font = "small-caps 30px Courier New";
      ctx.fillStyle = "#FFFF00";
      ctx.fillText("High Scores", 480, 100);
      ctx.font = "small-caps bold 25px Courier New";
      ctx.fillStyle = "#0095DD";

      for (var i = 0; i < 10; i++) {
        if (topTen[i]) {
          ctx.fillText(i + 1 + "." + topTen[i][0] + ": " + topTen[i][1], 480, 120 + 30 * (i + 1));
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
    key: "toggleSoundSetup",
    value: function toggleSoundSetup() {
      var soundIcons = document.getElementsByClassName("sound-icon");

      for (var i = 0; i < soundIcons.length; i++) {
        soundIcons[i].onclick = function () {
          soundIcons[0].classList.toggle("hidden");
          soundIcons[1].classList.toggle("hidden");
          var sounds = document.getElementsByTagName("audio");

          for (var _i = 0; _i < sounds.length; _i++) {
            if (sounds[_i].muted) {
              sounds[_i].muted = false;
            } else {
              sounds[_i].muted = true;
            }
          }
        };
      }
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
    this.vel = [0, 0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpYW1vbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZXhwbG9zaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2hhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsIkdhbWVWaWV3IiwiZHJhd0dhbWVCZWdpbiIsIndpbmRvdyIsIkRpYW1vbmQiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJ4IiwieSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZGVsdGEiLCJwbGF5ZXJQb3MiLCJ2ZWxEaXIiLCJ2ZWxNYWciLCJVdGlsIiwibm9ybSIsIkV4cGxvc2lvbiIsImNvbG9yIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiciIsImFyYyIsIlBJIiwiR2FtZSIsInBsYXllciIsIlBsYXllciIsImRpYW1vbmRzIiwiZGlhbW9uZFNwYXduUmF0ZSIsImdhdGVzIiwiZ2F0ZVNwYXduUmF0ZSIsInNoYXJkcyIsImV4cGxvc2lvbnMiLCJleHBsb3Npb25GcmFtZXMiLCJmcmFtZU51bSIsImluUGxheSIsInNjb3JlIiwiU2NvcmUiLCJnYXRlIiwiU291bmQiLCJzb3VuZCIsInZvbHVtZSIsIm11bHRpIiwiZGlhbW9uZCIsImRpc3QiLCJwbGF5IiwicHVzaCIsIkdhdGUiLCJzaGFyZCIsIlNoYXJkIiwibW92ZSIsImFkZERpYW1vbmQiLCJhZGRHYXRlIiwiaSIsImxlbmd0aCIsImFicyIsImlzQ29sbGlkZWQiLCJjb2xsaXNpb25DaXJjbGVzIiwiZ29uZVRocm91Z2hHYXRlIiwiZXhwbG9zaW9uIiwiZXhwUG9zIiwibXVsdGlwbGllciIsInBhdXNlZCIsImN1cnJlbnRUaW1lIiwiZGlhbW9uZHNUb0tlZXAiLCJhZGRTaGFyZCIsInNwbGljZSIsInN0b3AiLCJkcmF3IiwiZHJhd011bHQiLCJkcmF3U2NvcmUiLCJnYW1lIiwibGFzdFRpbWUiLCJhbmltYXRlIiwiYmluZCIsInN0YXJ0Iiwic3RhcnRlZCIsImJnaSIsIkltYWdlIiwic3JjIiwiYmdtIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ29tIiwic2V0VXBNb2RhbHMiLCJkcmF3QmFja2dyb3VuZCIsImRyYXdJbWFnZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhhbmRsZU1vdmVtZW50IiwibW92ZU9iamVjdHMiLCJwbGF5QWdhaW5CdG4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidG9nZ2xlIiwib25jbGljayIsInJlc3RhcnQiLCJzY29yZXNBcnJheSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJuZXdTY29yZU9iaiIsIm5hbWUiLCJ0b3BUZW4iLCJzb3J0IiwiYSIsImIiLCJzbGljZSIsImRyYXdHYW1lT3ZlciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJ0b2dnbGVTb3VuZFNldHVwIiwiY3ZzIiwidGV4dEFsaWduIiwiZmlsbFJlY3QiLCJwcmV2ZW50RGVmYXVsdCIsImtleXMiLCJrZXlDb2RlIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJzb3VuZEljb25zIiwic291bmRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJtdXRlZCIsIm1vdmVBbmdsZSIsInNwZWVkIiwiYW5nbGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicmVzdG9yZSIsInJhbmRvbVZlYyIsInNpbiIsImNvcyIsInNjb3JlQnRuIiwic2NvcmVDbG9zZSIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiYWJvdXQiLCJhYm91dEJ0biIsImFib3V0Q2xvc2UiLCJjb2xsaXNpb25Qb3MiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJiZXppZXJDdXJ2ZVRvIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhdXNlIiwiZGVnIiwic2NhbGUiLCJ2ZWMiLCJtIiwidjEiLCJ2MiIsInNxcnQiLCJvYmoxIiwib2JqMiIsImR4IiwiZHkiLCJkaXN0YW5jZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBC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Qi9CLE1BQWhCLEVBQXdCYSxJQUFJLENBQUNtQixnQkFBTCxDQUFzQkosQ0FBdEIsQ0FBeEIsQ0FBSixFQUFzRDtBQUNwRCxlQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFdBQU8sS0FBUDtBQUNEO0FBdENVLENBQWI7QUEwQ2V2QyxtRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZV92aWV3XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuXG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGN0eCk7XG4gIGdhbWVWaWV3LmRyYXdHYW1lQmVnaW4oKTtcbiAgLy8gZ2FtZVZpZXcuc3RhcnQoKTtcbiAgd2luZG93LmN0eCA9IGN0eDtcbn0pO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuXG5jbGFzcyBEaWFtb25ke1xuICBjb25zdHJ1Y3Rvcihwb3MpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnZlbCA9IDA7XG4gICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBsZXQgeCA9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5ID0gdGhpcy5wb3NbMV07XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KzE1KTtcbiAgICBjdHgubGluZVRvKHggLSA4LCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkgLSAxNSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgOCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5KzE1KTtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzRkZmZmZic7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgbW92ZShkZWx0YSwgcGxheWVyUG9zKXtcbiAgICBjb25zdCB2ZWxEaXIgPSBbcGxheWVyUG9zWzBdLXRoaXMucG9zWzBdLCBwbGF5ZXJQb3NbMV0gLSB0aGlzLnBvc1sxXV07XG4gICAgY29uc3QgdmVsTWFnID0gVXRpbC5ub3JtKHZlbERpcik7XG4gICAgY29uc3QgdmVsID0gW3ZlbERpclswXS8odmVsTWFnKSwgdmVsRGlyWzFdLyh2ZWxNYWcpXTtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHZlbFswXSwgdGhpcy5wb3NbMV0gKyB2ZWxbMV1dO1xuICAgIC8vIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgKHZlbERpclswXSAvICh2ZWxNYWcgKiAxMCkpLCB2ZWxEaXJbMV0gLyAodmVsTWFnICogMTApXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYW1vbmQ7IiwiY2xhc3MgRXhwbG9zaW9uIHtcbiAgY29uc3RydWN0b3IocG9zLCByYWRpdXMpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICB0aGlzLmNvbG9yID0gW1xuICAgICAgJyNGRkZGMDAnLCcjRkZGRjMzJywnI0YyRUEwMicsJyNFNkZCMDQnLFxuICAgICAgJyNGRjAwMDAnLCAnI0ZEMUMwMycsICcjRkYzMzAyJywgJyNGRjY2MDAnLFxuICAgICAgJyMwMEZGRkYnLCAnIzA5OUZGRicsICcjMDA2MkZGJywgJyMwMDMzRkYnLFxuICAgICAgJyNGRjAwRkYnLCAnI0ZGMDBDQycsICcjRkYwMDk5JywgJyNDQzAwRkYnLFxuICAgICAgJyM5RDAwRkYnLCAnI0NDMDBGRicsICcjNkUwREQwJywgJyM5OTAwRkYnLFxuICAgIF1cbiAgICAgIFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCldXG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGxldCB4ID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHkgPSB0aGlzLnBvc1sxXTtcbiAgICBsZXQgciA9IHRoaXMucmFkaXVzO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCx5LHIsIDAgLCAyKk1hdGguUEkpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGxvc2lvbjsiLCJpbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vZ2FtZV92aWV3XCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IERpYW1vbmQgZnJvbSBcIi4vZGlhbW9uZFwiO1xuaW1wb3J0IEdhdGUgZnJvbSBcIi4vZ2F0ZVwiO1xuaW1wb3J0IFNoYXJkIGZyb20gXCIuL3NoYXJkXCI7XG5pbXBvcnQgRXhwbG9zaW9uIGZyb20gXCIuL2V4cGxvc2lvblwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IFNjb3JlIGZyb20gXCIuL3Njb3JlXCI7XG5pbXBvcnQgU291bmQgZnJvbSBcIi4vc291bmRcIjtcblxuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoWzQ4MCwgMzIwXSk7XG5cbiAgICB0aGlzLmRpYW1vbmRzID0gW107XG4gICAgdGhpcy5kaWFtb25kU3Bhd25SYXRlID0gMTAwO1xuXG4gICAgdGhpcy5nYXRlcyA9IFtdO1xuICAgIHRoaXMuZ2F0ZVNwYXduUmF0ZSA9IDI0MDtcblxuICAgIHRoaXMuc2hhcmRzID0gW107XG5cbiAgICB0aGlzLmV4cGxvc2lvbnMgPSBbXTtcbiAgICB0aGlzLmV4cGxvc2lvbkZyYW1lcyA9IDA7XG5cbiAgICB0aGlzLmZyYW1lTnVtID0gMTtcbiAgICB0aGlzLmluUGxheSA9IHRydWU7XG5cbiAgICB0aGlzLnNjb3JlID0gbmV3IFNjb3JlKCk7XG5cbiAgICB0aGlzLmdhdGUgPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL2dhdGUubXAzXCIpO1xuICAgIHRoaXMuZ2F0ZS5zb3VuZC52b2x1bWUgPSAuMztcbiAgICB0aGlzLm11bHRpID0gbmV3IFNvdW5kKFwiLi4vLi4vYXNzZXRzL3NvdW5kcy9tdWx0aS5tcDNcIik7XG4gICAgdGhpcy5tdWx0aS5zb3VuZC52b2x1bWUgPSAuMztcbiAgICB0aGlzLmRpYW1vbmQgPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL2RpYW1vbmRzcGF3bi5tcDNcIik7XG4gICAgdGhpcy5kaWFtb25kLnNvdW5kLnZvbHVtZSA9IC4wNTtcblxuICB9XG5cbiAgYWRkRGlhbW9uZCgpe1xuICAgIGNvbnN0IGRpYW1vbmQgPSBuZXcgRGlhbW9uZChbTWF0aC5yYW5kb20oKSo5NjAsIE1hdGgucmFuZG9tKCkqNjQwXSk7XG4gICAgaWYoVXRpbC5kaXN0KGRpYW1vbmQucG9zLCB0aGlzLnBsYXllci5wb3MpID4gMTUwKXtcbiAgICAgIHRoaXMuZGlhbW9uZC5wbGF5KCk7XG4gICAgICB0aGlzLmRpYW1vbmRzLnB1c2goZGlhbW9uZCk7XG4gICAgfVxuICB9XG5cbiAgYWRkR2F0ZSgpe1xuICAgIGNvbnN0IGdhdGUgPSBuZXcgR2F0ZShbTWF0aC5yYW5kb20oKSAqIDk2MCwgTWF0aC5yYW5kb20oKSAqIDY0MF0sIE1hdGgucmFuZG9tKCkqIE1hdGguUEkgLyAyKTtcbiAgICB0aGlzLmdhdGVzLnB1c2goZ2F0ZSk7XG4gIH1cblxuXG4gIGFkZFNoYXJkKHBvcyl7XG4gICAgY29uc3Qgc2hhcmQgPSBuZXcgU2hhcmQocG9zKVxuICAgIHRoaXMuc2hhcmRzLnB1c2goc2hhcmQpO1xuICB9XG5cbiAgbW92ZU9iamVjdHMoZGVsdGEpe1xuICAgIHRoaXMucGxheWVyLm1vdmUoKVxuICAgIGlmICh0aGlzLmZyYW1lTnVtICUgdGhpcy5kaWFtb25kU3Bhd25SYXRlID09PSAwKXtcbiAgICAgIHRoaXMuYWRkRGlhbW9uZCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmFtZU51bSAlIHRoaXMuZ2F0ZVNwYXduUmF0ZSA9PT0gMCl7XG4gICAgICB0aGlzLmFkZEdhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnJhbWVOdW0gJSA2MDAgPT09IDAgJiYgdGhpcy5kaWFtb25kU3Bhd25SYXRlID4gMTApe1xuICAgICAgdGhpcy5kaWFtb25kU3Bhd25SYXRlIC09IDEwO1xuICAgICAgdGhpcy5nYXRlU3Bhd25SYXRlIC09IDEwO1xuICAgIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kaWFtb25kcy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmRpYW1vbmRzW2ldLm1vdmUoZGVsdGEsIHRoaXMucGxheWVyLnBvcylcbiAgICAgIGlmICgoTWF0aC5hYnModGhpcy5kaWFtb25kc1tpXS5wb3NbMF0gLSB0aGlzLnBsYXllci5wb3NbMF0pIDwgNDApICYmXG4gICAgICAgIChNYXRoLmFicyh0aGlzLmRpYW1vbmRzW2ldLnBvc1sxXSAtIHRoaXMucGxheWVyLnBvc1sxXSkgPCA0MCkpe1xuICAgICAgICBpZihVdGlsLmlzQ29sbGlkZWQodGhpcy5kaWFtb25kc1tpXSwgdGhpcy5wbGF5ZXIpKXtcbiAgICAgICAgICB0aGlzLmluUGxheSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5nYXRlc1tpXS5tb3ZlKHRoaXMuZnJhbWVOdW0sIHRoaXMucGxheWVyKVxuICAgICAgaWYgKHRoaXMuZ2F0ZXNbaV0uY29sbGlzaW9uQ2lyY2xlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYoVXRpbC5nb25lVGhyb3VnaEdhdGUodGhpcy5wbGF5ZXIsIHRoaXMuZ2F0ZXNbaV0pKXtcblxuICAgICAgICAgIGNvbnN0IGV4cGxvc2lvbiA9IHtwb3M6dGhpcy5nYXRlc1tpXS5jb2xsaXNpb25DaXJjbGVzWzNdLnBvcywgcmFkaXVzOiAxNTB9XG4gICAgICAgICAgY29uc3QgZXhwUG9zID0gdGhpcy5nYXRlc1tpXS5jb2xsaXNpb25DaXJjbGVzWzNdLnBvc1xuICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCAxNjsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9ucy5wdXNoKG5ldyBFeHBsb3Npb24oZXhwUG9zLCBpKjEwKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5leHBsb3Npb25GcmFtZXMgPSAxNTtcblxuICAgICAgICAgIHRoaXMuc2NvcmUuc2NvcmUgKz0gdGhpcy5zY29yZS5tdWx0aXBsaWVyKjEwMDtcbiAgICAgICAgICB0aGlzLnNjb3JlLm11bHRpcGxpZXIgKz0gMjtcbiAgICAgICAgICBpZiAodGhpcy5nYXRlLnBhdXNlZCl7XG4gICAgICAgICAgICB0aGlzLmdhdGUucGxheSgpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5nYXRlLnNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgICAgIHRoaXMuZ2F0ZS5wbGF5KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGlhbW9uZHNUb0tlZXAgPSBbXTtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kaWFtb25kcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoIVV0aWwuaXNDb2xsaWRlZChleHBsb3Npb24sIHRoaXMuZGlhbW9uZHNbaV0pKXtcbiAgICAgICAgICAgICAgZGlhbW9uZHNUb0tlZXAucHVzaCh0aGlzLmRpYW1vbmRzW2ldKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0aGlzLnNjb3JlLnNjb3JlICs9IHRoaXMuc2NvcmUubXVsdGlwbGllcio1MDtcbiAgICAgICAgICAgICAgdGhpcy5hZGRTaGFyZCh0aGlzLmRpYW1vbmRzW2ldLnBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGlhbW9uZHMgPSBkaWFtb25kc1RvS2VlcDtcbiAgICAgICAgICB0aGlzLmdhdGVzLnNwbGljZShpLDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGFyZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoKE1hdGguYWJzKHRoaXMuc2hhcmRzW2ldLnBvc1swXSAtIHRoaXMucGxheWVyLnBvc1swXSkgPCA0MCkgJiZcbiAgICAgICAgICAoTWF0aC5hYnModGhpcy5zaGFyZHNbaV0ucG9zWzFdIC0gdGhpcy5wbGF5ZXIucG9zWzFdKSA8IDQwKSkge1xuICAgICAgICAgIGlmIChVdGlsLmlzQ29sbGlkZWQodGhpcy5zaGFyZHNbaV0sIHRoaXMucGxheWVyKSl7XG4gICAgICAgICAgICB0aGlzLm11bHRpLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUubXVsdGlwbGllciArPSAxO1xuICAgICAgICAgICAgdGhpcy5tdWx0aS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNoYXJkcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmZyYW1lTnVtKys7XG4gICAgaWYgKHRoaXMuZXhwbG9zaW9uRnJhbWVzID4gMCl7XG4gICAgICB0aGlzLmV4cGxvc2lvbkZyYW1lcyAtLTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuZXhwbG9zaW9ucyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICB0aGlzLnBsYXllci5kcmF3KGN0eCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpYW1vbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRpYW1vbmRzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdhdGVzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zaGFyZHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZXhwbG9zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5leHBsb3Npb25zW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gICAgdGhpcy5zY29yZS5kcmF3TXVsdChjdHgpO1xuICAgIHRoaXMuc2NvcmUuZHJhd1Njb3JlKGN0eCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgU291bmQgZnJvbSBcIi4vc291bmRcIjtcbmltcG9ydCB7c2V0VXBNb2RhbHN9IGZyb20gXCIuL3BhZ2VcIjtcblxuY2xhc3MgR2FtZVZpZXd7XG4gIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5iZ2kgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmJnaS5zcmMgPSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcuanBnXCI7XG5cbiAgICB0aGlzLmJnbSA9IG5ldyBTb3VuZChcIi4uLy4uL2Fzc2V0cy9zb3VuZHMvYmdtLm1wM1wiKTtcbiAgICB0aGlzLmJnbS5zb3VuZC52b2x1bWUgPSAuMTU7XG4gICAgdGhpcy5iZ20uc291bmQuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmQtbXVzaWNcIik7XG4gICAgdGhpcy5nb20gPSBuZXcgU291bmQoXCIuLi8uLi9hc3NldHMvc291bmRzL2dhbWVvdmVyLm1wM1wiKTtcbiAgICB0aGlzLmdvbS5zb3VuZC52b2x1bWUgPSAuMTU7XG4gICAgc2V0VXBNb2RhbHMoKTtcbiAgfVxuXG4gIGFuaW1hdGUoY3VycmVudFRpbWUpIHtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKHRoaXMuY3R4KTtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5iZ2ksMCwgMCk7XG5cbiAgICBjb25zdCBkZWx0YSA9IGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgICBpZiAodGhpcy5nYW1lLmluUGxheSl7XG4gICAgICB0aGlzLmJnbS5wbGF5KCk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgIHRoaXMuaGFuZGxlTW92ZW1lbnQoKTtcbiAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cyhkZWx0YSk7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gY3VycmVudFRpbWU7XG4gICAgfWVsc2V7XG4gICAgICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGxheS1hZ2Fpbi1idG5cIilbMF07XG4gICAgICBwbGF5QWdhaW5CdG4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIHBsYXlBZ2FpbkJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICB9XG4gICAgICB0aGlzLmJnbS5zdG9wKCk7XG4gICAgICB0aGlzLmdvbS5wbGF5KCk7XG4gICAgICBsZXQgc2NvcmVzQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2NvcmVzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzY29yZXMnKSkgOiBbXTtcbiAgICAgIGxldCBuZXdTY29yZU9iajtcbiAgICAgIG5ld1Njb3JlT2JqID0gW3RoaXMuZ2FtZS5zY29yZS5uYW1lLCB0aGlzLmdhbWUuc2NvcmUuc2NvcmVdO1xuICAgICAgc2NvcmVzQXJyYXkucHVzaChuZXdTY29yZU9iaik7XG4gICAgICBjb25zdCB0b3BUZW4gPSBzY29yZXNBcnJheS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSkuc2xpY2UoMCwgMTApO1xuICAgICAgdGhpcy5kcmF3R2FtZU92ZXIodG9wVGVuKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzY29yZXMnLCBKU09OLnN0cmluZ2lmeSh0b3BUZW4pKTtcblxuICAgIH1cblxuICB9XG5cbiAgZHJhd0dhbWVCZWdpbigpe1xuICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmJnaSwgMCwgMCk7XG4gICAgdGhpcy5jdHguZm9udCA9IFwic21hbGwtY2FwcyBib2xkIDQwcHggQ291cmllciBOZXdcIjtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMEZGMDBcIjtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChcIkNsaWNrIHRvIFBsYXlcIiwgMzUwLCAzMDApO1xuICAgIHRoaXMudG9nZ2xlU291bmRTZXR1cCgpO1xuICAgIGNvbnN0IGN2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIilcbiAgICBjdnMub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGFydGVkKXtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdHYW1lT3Zlcih0b3BUZW4pe1xuICAgIGN0eC5mb250ID0gXCJzbWFsbC1jYXBzIGJvbGQgNDBweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMEZGMDBcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuICAgIGN0eC5maWxsVGV4dChcIkZpbmFsIFNjb3JlOiBcIiArIHRoaXMuZ2FtZS5zY29yZS5zY29yZSwgNDgwLCA0MCk7XG4gICAgY3R4LmZvbnQgPSBcInNtYWxsLWNhcHMgMzBweCBDb3VyaWVyIE5ld1wiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGRkZGMDBcIjtcbiAgICBjdHguZmlsbFRleHQoXCJIaWdoIFNjb3Jlc1wiLCA0ODAsIDEwMCk7XG5cbiAgICBjdHguZm9udCA9IFwic21hbGwtY2FwcyBib2xkIDI1cHggQ291cmllciBOZXdcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgaWYgKHRvcFRlbltpXSl7XG4gICAgICAgIGN0eC5maWxsVGV4dCgoaSsxKSArIFwiLlwiICsgdG9wVGVuW2ldWzBdICsgXCI6IFwiICsgdG9wVGVuW2ldWzFdLCA0ODAsIDEyMCArIDMwKihpKzEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDk2MCwgNjQwKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5rZXlzID0gKHRoaXMua2V5cyB8fCBbXSk7XG4gICAgICB0aGlzLmtleXNbZS5rZXlDb2RlXSA9IChlLnR5cGUgPT0gXCJrZXlkb3duXCIpO1xuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMua2V5c1tlLmtleUNvZGVdID0gKGUudHlwZSA9PSBcImtleWRvd25cIik7XG4gICAgfSlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgfVxuXG4gIHJlc3RhcnQoKXtcbiAgICBjb25zb2xlLmxvZyhcIndoYXQncyBoYXBwZW5pblwiKVxuICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG5cbiAgfVxuXG4gIHRvZ2dsZVNvdW5kU2V0dXAoKXtcbiAgICBjb25zdCBzb3VuZEljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvdW5kLWljb25cIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VuZEljb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgIHNvdW5kSWNvbnNbaV0ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgc291bmRJY29uc1swXS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICBzb3VuZEljb25zWzFdLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnN0IHNvdW5kcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXVkaW9cIilcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNvdW5kcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgaWYgKHNvdW5kc1tpXS5tdXRlZCl7XG4gICAgICAgICAgICBzb3VuZHNbaV0ubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNvdW5kc1tpXS5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW92ZW1lbnQoKXtcbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s2NV0pIHsgIHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gLTU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s2OF0pIHsgIHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gNTsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzg3XSkgeyB0aGlzLmdhbWUucGxheWVyLnNwZWVkID0gLTQ7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s4NF0pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IDQ7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1szN10pIHsgdGhpcy5nYW1lLnBsYXllci5tb3ZlQW5nbGUgPSAtNTsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzM5XSkgeyB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IDU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1szOF0pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IC00OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNDBdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSA0OyB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYXRle1xuICBjb25zdHJ1Y3Rvcihwb3MsIGFuZ2xlKSB7IC8vICgtMSwwKSAoMSwgMCksICgtMSw2MCksICgxLDYwKVxuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB0aGlzLnZlbCA9IFswLDBdO1xuICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcyA9IFtdXG5cbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBsZXQgeD0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHk9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKDAgKyAxMCwgMCAtIDEwKTtcbiAgICBjdHgubGluZVRvKDAgLSAxMCwgMCAtIDEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oMCwgMCArIDYwKTtcbiAgICBjdHgubGluZVRvKDAgKyAxMCwgMCArIDcwKTtcbiAgICBjdHgubGluZVRvKDAgLSAxMCwgMCArIDcwKTtcbiAgICBjdHgubGluZVRvKDAsIDAgKyA2MCk7XG5cbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ZmYTUwMCc7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBtb3ZlKGZyYW1lTnVtLCBwbGF5ZXIpe1xuICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcyA9IFtdO1xuICAgIGlmIChmcmFtZU51bSAlIDEyMCA9PT0gMCl7XG4gICAgICB0aGlzLnZlbCA9IFV0aWwucmFuZG9tVmVjKDAuMTI1KTtcbiAgICB9XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSwgdGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXV07XG4gICAgaWYgKChNYXRoLmFicyhwbGF5ZXIucG9zWzBdIC0gdGhpcy5wb3NbMF0pIDwgNzApICYmIChNYXRoLmFicyhwbGF5ZXIucG9zWzFdIC0gdGhpcy5wb3NbMV0pIDwgNzApKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2OyBpKyspe1xuICAgICAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMucHVzaCh7cG9zOiBcbiAgICAgICAgICBbdGhpcy5wb3NbMF0gLSAoNSArIDEwKmkpICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgICAgICAgIHRoaXMucG9zWzFdICsgKCg1ICsgMTAqaSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSldLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLmNvbGxpc2lvblBvcyA9IHtcblxuICAgIC8vICAgdG9wTGVmdDogWyh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5jb3ModGhpcy5hbmdsZSkgKyB0aGlzLnBvc1sxXSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgdGhpcy5wb3NbMV0gKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV0sXG4gICAgLy8gICB0b3BSaWdodDogWyh0aGlzLnBvc1swXSArIDEpICogTWF0aC5jb3ModGhpcy5hbmdsZSkgKyB0aGlzLnBvc1sxXSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgdGhpcy5wb3NbMV0gKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gKyAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV0sXG4gICAgLy8gICBib3R0b21MZWZ0OiBbKHRoaXMucG9zWzBdIC0gMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAvLyAgICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV0sXG4gICAgLy8gICBib3R0b21SaWdodDogWyh0aGlzLnBvc1swXSArIDEpICogTWF0aC5jb3ModGhpcy5hbmdsZSkgKyAodGhpcy5wb3NbMV0rNjApICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICAodGhpcy5wb3NbMV0rNjApICogTWF0aC5jb3ModGhpcy5hbmdsZSkgLSAoKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSldXG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhdGU7IiwiZXhwb3J0IGNvbnN0IHNldFVwTW9kYWxzID0gKCkgPT4ge1xuICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NvcmVNb2RhbFwiKTtcbiAgY29uc3Qgc2NvcmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjb3JlLWJ0blwiKTtcbiAgY29uc3Qgc2NvcmVDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1zY29yZVwiKVswXTtcblxuICBzY29yZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHNjb3JlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICBzY29yZUNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgc2NvcmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgd2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHNjb3JlKSB7XG4gICAgICBzY29yZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRNb2RhbFwiKTtcbiAgY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWJ0blwiKTtcbiAgY29uc3QgYWJvdXRDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZS1hYnRcIilbMF07XG5cbiAgYWJvdXRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBhYm91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgYWJvdXRDbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGFib3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHdpbmRvdy5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBhYm91dCkge1xuICAgICAgYWJvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxufVxuIiwiY2xhc3MgUGxheWVye1xuICBjb25zdHJ1Y3Rvcihwb3Mpe1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIHRoaXMubW92ZUFuZ2xlID0gMDtcbiAgICB0aGlzLmFuZ2xlID0gMDtcbiAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbGxpc2lvblBvcyA9IHtcbiAgICAgIHRvcDogdGhpcy5wb3NbMV0gLSA1LFxuICAgICAgbGVmdDogdGhpcy5wb3NbMF0gLSA1LFxuICAgICAgYm90dG9tOiB0aGlzLnBvc1sxXSArIDUsXG4gICAgICByaWdodDogdGhpcy5wb3NbMF0gKyA1XG4gICAgfVxuICAgIHRoaXMucmFkaXVzID0gODtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcblxuICAgIGxldCB4ID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHkgPSB0aGlzLnBvc1sxXTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKC0xMCwtMTApXG4gICAgY3R4LmxpbmVUbygtMTAsIDUpO1xuICAgIGN0eC5saW5lVG8oMCwgMTUpO1xuICAgIGN0eC5saW5lVG8oMTAsIDUpO1xuICAgIGN0eC5saW5lVG8oMTAsIC0xMCk7XG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKC0xMCwgLTEwKTtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBtb3ZlKCl7XG4gICAgdGhpcy5hbmdsZSArPSB0aGlzLm1vdmVBbmdsZSAqIE1hdGguUEkgLyAxODA7XG4gICAgdGhpcy5wb3MgPSBbXG4gICAgICB0aGlzLnBvc1swXSArIHRoaXMuc3BlZWQgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAgIHRoaXMucG9zWzFdIC0gdGhpcy5zcGVlZCAqIE1hdGguY29zKHRoaXMuYW5nbGUpXG4gICAgXVxuICAgIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuICAgICAgdG9wOiB0aGlzLnBvc1sxXSAtIDUsXG4gICAgICBsZWZ0OiB0aGlzLnBvc1swXSAtIDUsXG4gICAgICBib3R0b206IHRoaXMucG9zWzFdICsgNSxcbiAgICAgIHJpZ2h0OiB0aGlzLnBvc1swXSArIDVcbiAgICB9XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5tb3ZlQW5nbGUgPSAwXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY2xhc3MgU2NvcmV7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5tdWx0aXBsaWVyID0gMTtcbiAgICB0aGlzLm5hbWUgPSBcIk1vZSBTenlzbGFrXCI7XG4gIH1cblxuICBkcmF3TXVsdChjdHgpIHtcbiAgICBjdHguZm9udCA9IFwic21hbGwtY2FwcyBib2xkIDI1cHggQ291cmllciBOZXdcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgdGhpcy5zY29yZSwgNzYwLCAyMCk7XG5cbiAgfVxuXG4gIGRyYXdTY29yZShjdHgpIHtcbiAgICBjdHguZm9udCA9IFwic21hbGwtY2FwcyBib2xkIDI1cHggQ291cmllciBOZXdcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiTXVsdGlwbGllcjogXCIgKyB0aGlzLm11bHRpcGxpZXIsIDIwLCAyMCk7XG5cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlOyIsImNsYXNzIFNoYXJke1xuICBjb25zdHJ1Y3Rvcihwb3MpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnJhZGl1cyA9IDI1O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGxldCB4ID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHkgPSB0aGlzLnBvc1sxXTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSAtIDMsIHggKyA0LCB5IC0gMywgeCArIDUsIHkgLSAyKTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSArIDMsIHggKyA0LCB5ICsgMywgeCwgeSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyMzOWZmMTQnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZDsiLCJmdW5jdGlvbiBTb3VuZChzcmMpIHtcbiAgdGhpcy5zb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgdGhpcy5zb3VuZC5zcmMgPSBzcmM7XG4gIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XG4gIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xuICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kKTtcbiAgdGhpcy5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc291bmQucGxheSgpO1xuICB9XG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNvdW5kOyIsIi8vIFJldHVybiBhIHJhbmRvbWx5IG9yaWVudGVkIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBsZW5ndGguXG5jb25zdCBVdGlsID0ge1xuICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWcpLCBNYXRoLmNvcyhkZWcpXSwgbGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2NhbGUgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciBieSB0aGUgZ2l2ZW4gYW1vdW50LlxuICBzY2FsZSh2ZWMsIG0pIHtcbiAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXSAqIG1dO1xuICB9LFxuXG4gIGRpc3QodjEsIHYyKXtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KCgodjFbMF0gLSB2MlswXSkgKiogMikrICgodjFbMV0gLSB2MlsxXSkgKiogMikpXG4gIH0sXG5cbiAgbm9ybSh2ZWMpe1xuICAgIHJldHVybiBVdGlsLmRpc3QoWzAsMF0sIHZlYylcbiAgfSxcblxuICBpc0NvbGxpZGVkKG9iajEsIG9iajIpe1xuICAgIHZhciBkeCA9IG9iajEucG9zWzBdIC0gb2JqMi5wb3NbMF07XG4gICAgdmFyIGR5ID0gb2JqMS5wb3NbMV0gLSBvYmoyLnBvc1sxXTtcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgaWYgKGRpc3RhbmNlIDwgb2JqMS5yYWRpdXMgKyBvYmoyLnJhZGl1cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIGdvbmVUaHJvdWdoR2F0ZShwbGF5ZXIsIGdhdGUpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2F0ZS5jb2xsaXNpb25DaXJjbGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmIChVdGlsLmlzQ29sbGlkZWQocGxheWVyLCBnYXRlLmNvbGxpc2lvbkNpcmNsZXNbaV0pKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiXSwic291cmNlUm9vdCI6IiJ9