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
    this.collisionPos = {
      top: this.pos[1] - 15,
      left: this.pos[0] - 5,
      bottom: this.pos[1],
      right: this.pos[0] + 5
    };
    this.radius = 5;
  }

  _createClass(Diamond, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1] - 10;
      ctx.beginPath();
      ctx.moveTo(x, y + 10);
      ctx.lineTo(x - 5, y);
      ctx.lineTo(x, y - 10);
      ctx.lineTo(x + 5, y);
      ctx.lineTo(x, y + 10);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]([480, 320]);
    this.diamonds = [];
    this.diamondSpawnRate = 90;
    this.gates = [];
    this.gateSpawnRate = 360;
    this.shards = [];
    this.frameNum = 1;
    this.inPlay = true;
  }

  _createClass(Game, [{
    key: "addDiamond",
    value: function addDiamond() {
      var diamond = new _diamond__WEBPACK_IMPORTED_MODULE_2__["default"]([Math.random() * 960, Math.random() * 640]);
      this.diamonds.push(diamond);
    }
  }, {
    key: "addGate",
    value: function addGate() {
      var gate = new _gate__WEBPACK_IMPORTED_MODULE_3__["default"]([Math.random() * 960, Math.random() * 640], Math.random() * Math.PI / 2);
      this.gates.push(gate);
    }
  }, {
    key: "addShard",
    value: function addShard() {}
  }, {
    key: "diamondPlayerCollision",
    value: function diamondPlayerCollision(diamond) {}
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

      if (this.frameNum % 600 === 0 && this.diamondSpawnRate > 20) {
        this.diamondSpawnRate--;
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

            for (var _i2 = 0; _i2 < this.diamonds.length; _i2++) {
              if (!_util__WEBPACK_IMPORTED_MODULE_5__["default"].isCollided(explosion, this.diamonds[_i2])) {
                diamondsToKeep.push(this.diamonds[_i2]);
              }
            }

            this.diamonds = diamondsToKeep;
            this.gates.splice(_i, 1);
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

      for (var _i3 = 0; _i3 < this.gates.length; _i3++) {
        this.gates[_i3].draw(ctx);
      }
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
  }

  _createClass(GameView, [{
    key: "animate",
    value: function animate(currentTime) {
      this.drawBackground(this.ctx);
      var delta = currentTime - this.lastTime;

      if (this.game.inPlay) {
        requestAnimationFrame(this.animate);
      }

      this.game.draw(this.ctx);
      this.handleMovement();
      this.game.moveObjects(delta);
      this.lastTime = currentTime;
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
        this.game.player.moveAngle = -3;
      }

      if (this.keys && this.keys[68]) {
        this.game.player.moveAngle = 3;
      }

      if (this.keys && this.keys[87]) {
        this.game.player.speed = -4;
      }

      if (this.keys && this.keys[83]) {
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
        console.log(player.pos[1] - this.pos[1]);

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
  function Shard(pos, vel) {
    _classCallCheck(this, Shard);

    this.pos = pos;
    this.vel = vel;
  }

  _createClass(Shard, [{
    key: "draw",
    value: function draw(ctx) {
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
      console.log(gate.collisionCircles);
      console.log(player.pos);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpYW1vbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2hhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsIkdhbWVWaWV3Iiwic3RhcnQiLCJ3aW5kb3ciLCJEaWFtb25kIiwicG9zIiwidmVsIiwiY29sbGlzaW9uUG9zIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwicmFkaXVzIiwieCIsInkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImRlbHRhIiwicGxheWVyUG9zIiwidmVsRGlyIiwidmVsTWFnIiwiVXRpbCIsIm5vcm0iLCJHYW1lIiwicGxheWVyIiwiUGxheWVyIiwiZGlhbW9uZHMiLCJkaWFtb25kU3Bhd25SYXRlIiwiZ2F0ZXMiLCJnYXRlU3Bhd25SYXRlIiwic2hhcmRzIiwiZnJhbWVOdW0iLCJpblBsYXkiLCJkaWFtb25kIiwiTWF0aCIsInJhbmRvbSIsInB1c2giLCJnYXRlIiwiR2F0ZSIsIlBJIiwibW92ZSIsImFkZERpYW1vbmQiLCJhZGRHYXRlIiwiaSIsImxlbmd0aCIsImFicyIsImlzQ29sbGlkZWQiLCJjb2xsaXNpb25DaXJjbGVzIiwiZ29uZVRocm91Z2hHYXRlIiwiZXhwbG9zaW9uIiwiZGlhbW9uZHNUb0tlZXAiLCJzcGxpY2UiLCJkcmF3IiwiZ2FtZSIsImxhc3RUaW1lIiwiYW5pbWF0ZSIsImJpbmQiLCJjdXJyZW50VGltZSIsImRyYXdCYWNrZ3JvdW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGFuZGxlTW92ZW1lbnQiLCJtb3ZlT2JqZWN0cyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicHJldmVudERlZmF1bHQiLCJrZXlzIiwia2V5Q29kZSIsInR5cGUiLCJtb3ZlQW5nbGUiLCJzcGVlZCIsImFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsInJlc3RvcmUiLCJyYW5kb21WZWMiLCJjb25zb2xlIiwibG9nIiwic2luIiwiY29zIiwiU2hhcmQiLCJiZXppZXJDdXJ2ZVRvIiwiZGVnIiwic2NhbGUiLCJ2ZWMiLCJtIiwiZGlzdCIsInYxIiwidjIiLCJzcXJ0Iiwib2JqMSIsIm9iajIiLCJkeCIsImR5IiwiZGlzdGFuY2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FB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bWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXdcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY3R4KTtcbiAgZ2FtZVZpZXcuc3RhcnQoKTtcbiAgd2luZG93LmN0eCA9IGN0eDtcbn0pO1xuIiwiaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuXG5jbGFzcyBEaWFtb25ke1xuICBjb25zdHJ1Y3Rvcihwb3MpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnZlbCA9IDA7XG4gICAgdGhpcy5jb2xsaXNpb25Qb3MgPSB7XG4gICAgICB0b3A6IHRoaXMucG9zWzFdIC0gMTUsXG4gICAgICBsZWZ0OiB0aGlzLnBvc1swXSAtIDUsXG4gICAgICBib3R0b206IHRoaXMucG9zWzFdLFxuICAgICAgcmlnaHQ6IHRoaXMucG9zWzBdICsgNVxuICAgIH1cbiAgICB0aGlzLnJhZGl1cyA9IDU7XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdIC0gMTA7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KzEwKTtcbiAgICBjdHgubGluZVRvKHggLSA1LCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkgLSAxMCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgNSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5KzEwKTtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzRkZmZmZic7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgbW92ZShkZWx0YSwgcGxheWVyUG9zKXtcbiAgICBjb25zdCB2ZWxEaXIgPSBbcGxheWVyUG9zWzBdLXRoaXMucG9zWzBdLCBwbGF5ZXJQb3NbMV0gLSB0aGlzLnBvc1sxXV07XG4gICAgY29uc3QgdmVsTWFnID0gVXRpbC5ub3JtKHZlbERpcik7XG4gICAgY29uc3QgdmVsID0gW3ZlbERpclswXS8odmVsTWFnKSwgdmVsRGlyWzFdLyh2ZWxNYWcpXTtcbiAgICB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArIHZlbFswXSwgdGhpcy5wb3NbMV0gKyB2ZWxbMV1dO1xuICAgIC8vIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgKHZlbERpclswXSAvICh2ZWxNYWcgKiAxMCkpLCB2ZWxEaXJbMV0gLyAodmVsTWFnICogMTApXVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYW1vbmQ7IiwiaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL2dhbWVfdmlld1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBEaWFtb25kIGZyb20gXCIuL2RpYW1vbmRcIjtcbmltcG9ydCBHYXRlIGZyb20gXCIuL2dhdGVcIjtcbmltcG9ydCBTaGFyZCBmcm9tIFwiLi9zaGFyZFwiO1xuaW1wb3J0IFV0aWwgZnJvbSBcIi4vdXRpbFwiO1xuXG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihbNDgwLCAzMjBdKTtcblxuICAgIHRoaXMuZGlhbW9uZHMgPSBbXTtcbiAgICB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPSA5MDtcblxuICAgIHRoaXMuZ2F0ZXMgPSBbXTtcbiAgICB0aGlzLmdhdGVTcGF3blJhdGUgPSAzNjA7XG5cbiAgICB0aGlzLnNoYXJkcyA9IFtdO1xuXG5cbiAgICB0aGlzLmZyYW1lTnVtID0gMTtcblxuICAgIHRoaXMuaW5QbGF5ID0gdHJ1ZTtcblxuICB9XG5cbiAgYWRkRGlhbW9uZCgpe1xuICAgIGNvbnN0IGRpYW1vbmQgPSBuZXcgRGlhbW9uZChbTWF0aC5yYW5kb20oKSo5NjAsIE1hdGgucmFuZG9tKCkqNjQwXSk7XG4gICAgdGhpcy5kaWFtb25kcy5wdXNoKGRpYW1vbmQpO1xuICB9XG5cbiAgYWRkR2F0ZSgpe1xuICAgIGNvbnN0IGdhdGUgPSBuZXcgR2F0ZShbTWF0aC5yYW5kb20oKSAqIDk2MCwgTWF0aC5yYW5kb20oKSAqIDY0MF0sIE1hdGgucmFuZG9tKCkqIE1hdGguUEkgLyAyKTtcbiAgICB0aGlzLmdhdGVzLnB1c2goZ2F0ZSk7XG4gIH1cblxuXG4gIGFkZFNoYXJkKCl7XG5cbiAgfVxuXG4gIGRpYW1vbmRQbGF5ZXJDb2xsaXNpb24oZGlhbW9uZCl7XG5cbiAgfVxuXG4gIG1vdmVPYmplY3RzKGRlbHRhKXtcbiAgICB0aGlzLnBsYXllci5tb3ZlKClcbiAgICBpZiAodGhpcy5mcmFtZU51bSAlIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA9PT0gMCl7XG4gICAgICB0aGlzLmFkZERpYW1vbmQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnJhbWVOdW0gJSB0aGlzLmdhdGVTcGF3blJhdGUgPT09IDApe1xuICAgICAgdGhpcy5hZGRHYXRlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyYW1lTnVtICUgNjAwID09PSAwICYmIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA+IDIwKXtcbiAgICAgIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSAtLTtcbiAgICB9XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5kaWFtb25kc1tpXS5tb3ZlKGRlbHRhLCB0aGlzLnBsYXllci5wb3MpXG4gICAgICBpZiAoKE1hdGguYWJzKHRoaXMuZGlhbW9uZHNbaV0ucG9zWzBdIC0gdGhpcy5wbGF5ZXIucG9zWzBdKSA8IDQwKSAmJlxuICAgICAgICAoTWF0aC5hYnModGhpcy5kaWFtb25kc1tpXS5wb3NbMV0gLSB0aGlzLnBsYXllci5wb3NbMV0pIDwgNDApKXtcbiAgICAgICAgaWYoVXRpbC5pc0NvbGxpZGVkKHRoaXMuZGlhbW9uZHNbaV0sIHRoaXMucGxheWVyKSl7XG4gICAgICAgICAgdGhpcy5pblBsYXkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ2F0ZXNbaV0ubW92ZSh0aGlzLmZyYW1lTnVtLCB0aGlzLnBsYXllcilcbiAgICAgIGlmICh0aGlzLmdhdGVzW2ldLmNvbGxpc2lvbkNpcmNsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmKFV0aWwuZ29uZVRocm91Z2hHYXRlKHRoaXMucGxheWVyLCB0aGlzLmdhdGVzW2ldKSl7XG4gICAgICAgICAgY29uc3QgZXhwbG9zaW9uID0ge3Bvczp0aGlzLmdhdGVzW2ldLmNvbGxpc2lvbkNpcmNsZXNbM10ucG9zLCByYWRpdXM6IDE1MH1cbiAgICAgICAgICBjb25zdCBkaWFtb25kc1RvS2VlcCA9W107XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKCFVdGlsLmlzQ29sbGlkZWQoZXhwbG9zaW9uLCB0aGlzLmRpYW1vbmRzW2ldKSl7XG4gICAgICAgICAgICAgIGRpYW1vbmRzVG9LZWVwLnB1c2godGhpcy5kaWFtb25kc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGlhbW9uZHMgPSBkaWFtb25kc1RvS2VlcDtcbiAgICAgICAgICB0aGlzLmdhdGVzLnNwbGljZShpLDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5mcmFtZU51bSsrO1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIHRoaXMucGxheWVyLmRyYXcoY3R4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZGlhbW9uZHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ2F0ZXNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuY2xhc3MgR2FtZVZpZXd7XG4gIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKVxuICB9XG5cbiAgYW5pbWF0ZShjdXJyZW50VGltZSkge1xuICAgIHRoaXMuZHJhd0JhY2tncm91bmQodGhpcy5jdHgpO1xuICAgIGNvbnN0IGRlbHRhID0gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIGlmICh0aGlzLmdhbWUuaW5QbGF5KXtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIH1cbiAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5oYW5kbGVNb3ZlbWVudCgpO1xuICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cyhkZWx0YSk7XG4gICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgOTYwLCA2NDApO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5rZXlzID0gKHRoaXMua2V5cyB8fCBbXSk7XG4gICAgICB0aGlzLmtleXNbZS5rZXlDb2RlXSA9IChlLnR5cGUgPT0gXCJrZXlkb3duXCIpO1xuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMua2V5c1tlLmtleUNvZGVdID0gKGUudHlwZSA9PSBcImtleWRvd25cIik7XG4gICAgfSlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50KCl7XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNjVdKSB7ICB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IC0zOyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNjhdKSB7ICB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IDM7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s4N10pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IC00OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbODNdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSA0OyB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYXRle1xuICBjb25zdHJ1Y3Rvcihwb3MsIGFuZ2xlKSB7IC8vICgtMSwwKSAoMSwgMCksICgtMSw2MCksICgxLDYwKVxuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMgPSBbXVxuXG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHg9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5PSB0aGlzLnBvc1sxXTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGN0eC5saW5lVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbygwICsgMTAsIDAgLSAxMCk7XG4gICAgY3R4LmxpbmVUbygwIC0gMTAsIDAgLSAxMCk7XG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKDAsIDAgKyA2MCk7XG4gICAgY3R4LmxpbmVUbygwICsgMTAsIDAgKyA3MCk7XG4gICAgY3R4LmxpbmVUbygwIC0gMTAsIDAgKyA3MCk7XG4gICAgY3R4LmxpbmVUbygwLCAwICsgNjApO1xuXG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmE1MDAnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgbW92ZShmcmFtZU51bSwgcGxheWVyKXtcbiAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMgPSBbXTtcbiAgICBpZiAoZnJhbWVOdW0gJSAxMjAgPT09IDApe1xuICAgICAgdGhpcy52ZWwgPSBVdGlsLnJhbmRvbVZlYygwLjEyNSk7XG4gICAgfVxuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0sIHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV1dO1xuICAgIGlmICgoTWF0aC5hYnMocGxheWVyLnBvc1swXSAtIHRoaXMucG9zWzBdKSA8IDcwKSAmJiAoTWF0aC5hYnMocGxheWVyLnBvc1sxXSAtIHRoaXMucG9zWzFdKSA8IDcwKSl7XG4gICAgICBjb25zb2xlLmxvZyhwbGF5ZXIucG9zWzFdIC0gdGhpcy5wb3NbMV0pO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDY7IGkrKyl7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcy5wdXNoKHtwb3M6IFxuICAgICAgICAgIFt0aGlzLnBvc1swXSAtICg1ICsgMTAqaSkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAgICAgICAgdGhpcy5wb3NbMV0gKyAoKDUgKyAxMCppKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpKV0sXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuXG4gICAgLy8gICB0b3BMZWZ0OiBbKHRoaXMucG9zWzBdIC0gMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArIHRoaXMucG9zWzFdICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICB0aGlzLnBvc1sxXSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIHRvcFJpZ2h0OiBbKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArIHRoaXMucG9zWzFdICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICB0aGlzLnBvc1sxXSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSArIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIGJvdHRvbUxlZnQ6IFsodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpICsgKHRoaXMucG9zWzFdKzYwKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgKHRoaXMucG9zWzFdKzYwKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIGJvdHRvbVJpZ2h0OiBbKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAvLyAgICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gKyAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV1cbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2F0ZTsiLCJjbGFzcyBQbGF5ZXJ7XG4gIGNvbnN0cnVjdG9yKHBvcyl7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5tb3ZlQW5nbGUgPSAwO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuICAgICAgdG9wOiB0aGlzLnBvc1sxXSAtIDUsXG4gICAgICBsZWZ0OiB0aGlzLnBvc1swXSAtIDUsXG4gICAgICBib3R0b206IHRoaXMucG9zWzFdICsgNSxcbiAgICAgIHJpZ2h0OiB0aGlzLnBvc1swXSArIDVcbiAgICB9XG4gICAgdGhpcy5yYWRpdXMgPSA4O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuXG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oLTEwLC0xMClcbiAgICBjdHgubGluZVRvKC0xMCwgNSk7XG4gICAgY3R4LmxpbmVUbygwLCAxNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgLTEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oLTEwLCAtMTApO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICB0aGlzLmFuZ2xlICs9IHRoaXMubW92ZUFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICB0aGlzLnBvcyA9IFtcbiAgICAgIHRoaXMucG9zWzBdICsgdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgICAgdGhpcy5wb3NbMV0gLSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5hbmdsZSlcbiAgICBdXG4gICAgdGhpcy5jb2xsaXNpb25Qb3MgPSB7XG4gICAgICB0b3A6IHRoaXMucG9zWzFdIC0gNSxcbiAgICAgIGxlZnQ6IHRoaXMucG9zWzBdIC0gNSxcbiAgICAgIGJvdHRvbTogdGhpcy5wb3NbMV0gKyA1LFxuICAgICAgcmlnaHQ6IHRoaXMucG9zWzBdICsgNVxuICAgIH1cbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLm1vdmVBbmdsZSA9IDBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjbGFzcyBTaGFyZHtcbiAgY29uc3RydWN0b3IocG9zLCB2ZWwpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnZlbCA9IHZlbDtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSAtIDMsIHggKyA0LCB5IC0gMywgeCArIDUsIHkgLSAyKTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSArIDMsIHggKyA0LCB5ICsgMywgeCwgeSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyMzOWZmMTQnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZDsiLCIvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuY29uc3QgVXRpbCA9IHtcbiAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgIGNvbnN0IGRlZyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICByZXR1cm4gVXRpbC5zY2FsZShbTWF0aC5zaW4oZGVnKSwgTWF0aC5jb3MoZGVnKV0sIGxlbmd0aCk7XG4gIH0sXG4gIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgc2NhbGUodmVjLCBtKSB7XG4gICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgfSxcblxuICBkaXN0KHYxLCB2Mil7XG4gICAgcmV0dXJuIE1hdGguc3FydCgoKHYxWzBdIC0gdjJbMF0pICoqIDIpKyAoKHYxWzFdIC0gdjJbMV0pICoqIDIpKVxuICB9LFxuXG4gIG5vcm0odmVjKXtcbiAgICByZXR1cm4gVXRpbC5kaXN0KFswLDBdLCB2ZWMpXG4gIH0sXG5cbiAgaXNDb2xsaWRlZChvYmoxLCBvYmoyKXtcbiAgICB2YXIgZHggPSBvYmoxLnBvc1swXSAtIG9iajIucG9zWzBdO1xuICAgIHZhciBkeSA9IG9iajEucG9zWzFdIC0gb2JqMi5wb3NbMV07XG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgIGlmIChkaXN0YW5jZSA8IG9iajEucmFkaXVzICsgb2JqMi5yYWRpdXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBnb25lVGhyb3VnaEdhdGUocGxheWVyLCBnYXRlKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhdGUuY29sbGlzaW9uQ2lyY2xlcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zb2xlLmxvZyhnYXRlLmNvbGxpc2lvbkNpcmNsZXMpO1xuICAgICAgY29uc29sZS5sb2cocGxheWVyLnBvcylcbiAgICAgIGlmIChVdGlsLmlzQ29sbGlkZWQocGxheWVyLCBnYXRlLmNvbGxpc2lvbkNpcmNsZXNbaV0pKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiXSwic291cmNlUm9vdCI6IiJ9