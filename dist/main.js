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
      var vel = [velDir[0] / (velMag * 3), velDir[1] / (velMag * 3)];
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

      for (var _i2 = 0; _i2 < this.gates.length; _i2++) {
        this.gates[_i2].draw(ctx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpYW1vbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2hhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsIkdhbWVWaWV3Iiwic3RhcnQiLCJ3aW5kb3ciLCJEaWFtb25kIiwicG9zIiwidmVsIiwiY29sbGlzaW9uUG9zIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwicmFkaXVzIiwieCIsInkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImRlbHRhIiwicGxheWVyUG9zIiwidmVsRGlyIiwidmVsTWFnIiwiVXRpbCIsIm5vcm0iLCJHYW1lIiwicGxheWVyIiwiUGxheWVyIiwiZGlhbW9uZHMiLCJkaWFtb25kU3Bhd25SYXRlIiwiZ2F0ZXMiLCJnYXRlU3Bhd25SYXRlIiwic2hhcmRzIiwiZnJhbWVOdW0iLCJpblBsYXkiLCJkaWFtb25kIiwiTWF0aCIsInJhbmRvbSIsInB1c2giLCJnYXRlIiwiR2F0ZSIsIlBJIiwibW92ZSIsImFkZERpYW1vbmQiLCJhZGRHYXRlIiwiaSIsImxlbmd0aCIsImFicyIsImlzQ29sbGlkZWQiLCJjb2xsaXNpb25DaXJjbGVzIiwiZ29uZVRocm91Z2hHYXRlIiwic3BsaWNlIiwiZHJhdyIsImdhbWUiLCJsYXN0VGltZSIsImFuaW1hdGUiLCJiaW5kIiwiY3VycmVudFRpbWUiLCJkcmF3QmFja2dyb3VuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhhbmRsZU1vdmVtZW50IiwibW92ZU9iamVjdHMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInByZXZlbnREZWZhdWx0Iiwia2V5cyIsImtleUNvZGUiLCJ0eXBlIiwibW92ZUFuZ2xlIiwic3BlZWQiLCJhbmdsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJyZXN0b3JlIiwicmFuZG9tVmVjIiwiY29uc29sZSIsImxvZyIsInNpbiIsImNvcyIsIlNoYXJkIiwiYmV6aWVyQ3VydmVUbyIsImRlZyIsInNjYWxlIiwidmVjIiwibSIsImRpc3QiLCJ2MSIsInYyIiwic3FydCIsIm9iajEiLCJvYmoyIiwiZHgiLCJkeSIsImRpc3RhbmNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFB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RDtBQUNGLEdBNUJVO0FBOEJYd0MsaUJBOUJXLDJCQThCS3hCLE1BOUJMLEVBOEJhYSxJQTlCYixFQThCa0I7QUFDM0IsU0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixJQUFJLENBQUNVLGdCQUFMLENBQXNCSCxNQUExQyxFQUFrREQsQ0FBQyxFQUFuRCxFQUFzRDtBQUNwRCtCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZdEMsSUFBSSxDQUFDVSxnQkFBakI7QUFDQTJCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZbkQsTUFBTSxDQUFDdkIsR0FBbkI7O0FBQ0EsVUFBSW9CLElBQUksQ0FBQ3lCLFVBQUwsQ0FBZ0J0QixNQUFoQixFQUF3QmEsSUFBSSxDQUFDVSxnQkFBTCxDQUFzQkosQ0FBdEIsQ0FBeEIsQ0FBSixFQUFzRDtBQUNwRCxlQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFdBQU8sS0FBUDtBQUNEO0FBeENVLENBQWI7QUE0Q2V0QixtRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZV92aWV3XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuXG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGN0eCk7XG4gIGdhbWVWaWV3LnN0YXJ0KCk7XG4gIHdpbmRvdy5jdHggPSBjdHg7XG59KTtcbiIsImltcG9ydCBVdGlsIGZyb20gXCIuL3V0aWxcIjtcblxuY2xhc3MgRGlhbW9uZHtcbiAgY29uc3RydWN0b3IocG9zKSB7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy52ZWwgPSAwO1xuICAgIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuICAgICAgdG9wOiB0aGlzLnBvc1sxXSAtIDE1LFxuICAgICAgbGVmdDogdGhpcy5wb3NbMF0gLSA1LFxuICAgICAgYm90dG9tOiB0aGlzLnBvc1sxXSxcbiAgICAgIHJpZ2h0OiB0aGlzLnBvc1swXSArIDVcbiAgICB9XG4gICAgdGhpcy5yYWRpdXMgPSA1O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGxldCB4ID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHkgPSB0aGlzLnBvc1sxXSAtIDEwO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSsxMCk7XG4gICAgY3R4LmxpbmVUbyh4IC0gNSwgeSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5IC0gMTApO1xuICAgIGN0eC5saW5lVG8oeCArIDUsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSsxMCk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyM0ZGZmZmYnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIG1vdmUoZGVsdGEsIHBsYXllclBvcyl7XG4gICAgY29uc3QgdmVsRGlyID0gW3BsYXllclBvc1swXS10aGlzLnBvc1swXSwgcGxheWVyUG9zWzFdIC0gdGhpcy5wb3NbMV1dO1xuICAgIGNvbnN0IHZlbE1hZyA9IFV0aWwubm9ybSh2ZWxEaXIpO1xuICAgIGNvbnN0IHZlbCA9IFt2ZWxEaXJbMF0vKHZlbE1hZyozKSwgdmVsRGlyWzFdLyh2ZWxNYWcqMyldO1xuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdmVsWzBdLCB0aGlzLnBvc1sxXSArIHZlbFsxXV07XG4gICAgLy8gdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyAodmVsRGlyWzBdIC8gKHZlbE1hZyAqIDEwKSksIHZlbERpclsxXSAvICh2ZWxNYWcgKiAxMCldXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbW9uZDsiLCJpbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vZ2FtZV92aWV3XCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IERpYW1vbmQgZnJvbSBcIi4vZGlhbW9uZFwiO1xuaW1wb3J0IEdhdGUgZnJvbSBcIi4vZ2F0ZVwiO1xuaW1wb3J0IFNoYXJkIGZyb20gXCIuL3NoYXJkXCI7XG5pbXBvcnQgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5cblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKFs0ODAsIDMyMF0pO1xuXG4gICAgdGhpcy5kaWFtb25kcyA9IFtdO1xuICAgIHRoaXMuZGlhbW9uZFNwYXduUmF0ZSA9IDkwO1xuXG4gICAgdGhpcy5nYXRlcyA9IFtdO1xuICAgIHRoaXMuZ2F0ZVNwYXduUmF0ZSA9IDM2MDtcblxuICAgIHRoaXMuc2hhcmRzID0gW107XG5cblxuICAgIHRoaXMuZnJhbWVOdW0gPSAxO1xuXG4gICAgdGhpcy5pblBsYXkgPSB0cnVlO1xuXG4gIH1cblxuICBhZGREaWFtb25kKCl7XG4gICAgY29uc3QgZGlhbW9uZCA9IG5ldyBEaWFtb25kKFtNYXRoLnJhbmRvbSgpKjk2MCwgTWF0aC5yYW5kb20oKSo2NDBdKTtcbiAgICB0aGlzLmRpYW1vbmRzLnB1c2goZGlhbW9uZCk7XG4gIH1cblxuICBhZGRHYXRlKCl7XG4gICAgY29uc3QgZ2F0ZSA9IG5ldyBHYXRlKFtNYXRoLnJhbmRvbSgpICogOTYwLCBNYXRoLnJhbmRvbSgpICogNjQwXSwgTWF0aC5yYW5kb20oKSogTWF0aC5QSSAvIDIpO1xuICAgIHRoaXMuZ2F0ZXMucHVzaChnYXRlKTtcbiAgfVxuXG5cbiAgYWRkU2hhcmQoKXtcblxuICB9XG5cbiAgZGlhbW9uZFBsYXllckNvbGxpc2lvbihkaWFtb25kKXtcblxuICB9XG5cbiAgbW92ZU9iamVjdHMoZGVsdGEpe1xuICAgIHRoaXMucGxheWVyLm1vdmUoKVxuICAgIGlmICh0aGlzLmZyYW1lTnVtICUgdGhpcy5kaWFtb25kU3Bhd25SYXRlID09PSAwKXtcbiAgICAgIHRoaXMuYWRkRGlhbW9uZCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmFtZU51bSAlIHRoaXMuZ2F0ZVNwYXduUmF0ZSA9PT0gMCl7XG4gICAgICB0aGlzLmFkZEdhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnJhbWVOdW0gJSA2MDAgPT09IDAgJiYgdGhpcy5kaWFtb25kU3Bhd25SYXRlID4gMjApe1xuICAgICAgdGhpcy5kaWFtb25kU3Bhd25SYXRlIC0tO1xuICAgIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kaWFtb25kcy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmRpYW1vbmRzW2ldLm1vdmUoZGVsdGEsIHRoaXMucGxheWVyLnBvcylcbiAgICAgIGlmICgoTWF0aC5hYnModGhpcy5kaWFtb25kc1tpXS5wb3NbMF0gLSB0aGlzLnBsYXllci5wb3NbMF0pIDwgNDApICYmXG4gICAgICAgIChNYXRoLmFicyh0aGlzLmRpYW1vbmRzW2ldLnBvc1sxXSAtIHRoaXMucGxheWVyLnBvc1sxXSkgPCA0MCkpe1xuICAgICAgICBpZihVdGlsLmlzQ29sbGlkZWQodGhpcy5kaWFtb25kc1tpXSwgdGhpcy5wbGF5ZXIpKXtcbiAgICAgICAgICB0aGlzLmluUGxheSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5nYXRlc1tpXS5tb3ZlKHRoaXMuZnJhbWVOdW0sIHRoaXMucGxheWVyKVxuICAgICAgaWYgKHRoaXMuZ2F0ZXNbaV0uY29sbGlzaW9uQ2lyY2xlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYoVXRpbC5nb25lVGhyb3VnaEdhdGUodGhpcy5wbGF5ZXIsIHRoaXMuZ2F0ZXNbaV0pKXtcbiAgICAgICAgICB0aGlzLmdhdGVzLnNwbGljZShpLDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5mcmFtZU51bSsrO1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIHRoaXMucGxheWVyLmRyYXcoY3R4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZGlhbW9uZHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ2F0ZXNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuY2xhc3MgR2FtZVZpZXd7XG4gIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKVxuICB9XG5cbiAgYW5pbWF0ZShjdXJyZW50VGltZSkge1xuICAgIHRoaXMuZHJhd0JhY2tncm91bmQodGhpcy5jdHgpO1xuICAgIGNvbnN0IGRlbHRhID0gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIGlmICh0aGlzLmdhbWUuaW5QbGF5KXtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIH1cbiAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5oYW5kbGVNb3ZlbWVudCgpO1xuICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cyhkZWx0YSk7XG4gICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgOTYwLCA2NDApO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5rZXlzID0gKHRoaXMua2V5cyB8fCBbXSk7XG4gICAgICB0aGlzLmtleXNbZS5rZXlDb2RlXSA9IChlLnR5cGUgPT0gXCJrZXlkb3duXCIpO1xuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMua2V5c1tlLmtleUNvZGVdID0gKGUudHlwZSA9PSBcImtleWRvd25cIik7XG4gICAgfSlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50KCl7XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNjVdKSB7ICB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IC0zOyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNjhdKSB7ICB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IDM7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s4N10pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IC00OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbODNdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSA0OyB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYXRle1xuICBjb25zdHJ1Y3Rvcihwb3MsIGFuZ2xlKSB7IC8vICgtMSwwKSAoMSwgMCksICgtMSw2MCksICgxLDYwKVxuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMgPSBbXVxuXG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHg9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5PSB0aGlzLnBvc1sxXTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGN0eC5saW5lVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbygwICsgMTAsIDAgLSAxMCk7XG4gICAgY3R4LmxpbmVUbygwIC0gMTAsIDAgLSAxMCk7XG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKDAsIDAgKyA2MCk7XG4gICAgY3R4LmxpbmVUbygwICsgMTAsIDAgKyA3MCk7XG4gICAgY3R4LmxpbmVUbygwIC0gMTAsIDAgKyA3MCk7XG4gICAgY3R4LmxpbmVUbygwLCAwICsgNjApO1xuXG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmE1MDAnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgbW92ZShmcmFtZU51bSwgcGxheWVyKXtcbiAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMgPSBbXTtcbiAgICBpZiAoZnJhbWVOdW0gJSAxMjAgPT09IDApe1xuICAgICAgdGhpcy52ZWwgPSBVdGlsLnJhbmRvbVZlYygwLjEyNSk7XG4gICAgfVxuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0sIHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV1dO1xuICAgIGlmICgoTWF0aC5hYnMocGxheWVyLnBvc1swXSAtIHRoaXMucG9zWzBdKSA8IDcwKSAmJiAoTWF0aC5hYnMocGxheWVyLnBvc1sxXSAtIHRoaXMucG9zWzFdKSA8IDcwKSl7XG4gICAgICBjb25zb2xlLmxvZyhwbGF5ZXIucG9zWzFdIC0gdGhpcy5wb3NbMV0pO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDY7IGkrKyl7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcy5wdXNoKHtwb3M6IFxuICAgICAgICAgIFt0aGlzLnBvc1swXSAtICg1ICsgMTAqaSkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAgICAgICAgdGhpcy5wb3NbMV0gKyAoKDUgKyAxMCppKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpKV0sXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuXG4gICAgLy8gICB0b3BMZWZ0OiBbKHRoaXMucG9zWzBdIC0gMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArIHRoaXMucG9zWzFdICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICB0aGlzLnBvc1sxXSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIHRvcFJpZ2h0OiBbKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArIHRoaXMucG9zWzFdICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICB0aGlzLnBvc1sxXSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSArIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIGJvdHRvbUxlZnQ6IFsodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpICsgKHRoaXMucG9zWzFdKzYwKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgKHRoaXMucG9zWzFdKzYwKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIGJvdHRvbVJpZ2h0OiBbKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAvLyAgICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gKyAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV1cbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2F0ZTsiLCJjbGFzcyBQbGF5ZXJ7XG4gIGNvbnN0cnVjdG9yKHBvcyl7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5tb3ZlQW5nbGUgPSAwO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuICAgICAgdG9wOiB0aGlzLnBvc1sxXSAtIDUsXG4gICAgICBsZWZ0OiB0aGlzLnBvc1swXSAtIDUsXG4gICAgICBib3R0b206IHRoaXMucG9zWzFdICsgNSxcbiAgICAgIHJpZ2h0OiB0aGlzLnBvc1swXSArIDVcbiAgICB9XG4gICAgdGhpcy5yYWRpdXMgPSA4O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuXG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oLTEwLC0xMClcbiAgICBjdHgubGluZVRvKC0xMCwgNSk7XG4gICAgY3R4LmxpbmVUbygwLCAxNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgLTEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oLTEwLCAtMTApO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICB0aGlzLmFuZ2xlICs9IHRoaXMubW92ZUFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICB0aGlzLnBvcyA9IFtcbiAgICAgIHRoaXMucG9zWzBdICsgdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgICAgdGhpcy5wb3NbMV0gLSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5hbmdsZSlcbiAgICBdXG4gICAgdGhpcy5jb2xsaXNpb25Qb3MgPSB7XG4gICAgICB0b3A6IHRoaXMucG9zWzFdIC0gNSxcbiAgICAgIGxlZnQ6IHRoaXMucG9zWzBdIC0gNSxcbiAgICAgIGJvdHRvbTogdGhpcy5wb3NbMV0gKyA1LFxuICAgICAgcmlnaHQ6IHRoaXMucG9zWzBdICsgNVxuICAgIH1cbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLm1vdmVBbmdsZSA9IDBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjbGFzcyBTaGFyZHtcbiAgY29uc3RydWN0b3IocG9zLCB2ZWwpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnZlbCA9IHZlbDtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSAtIDMsIHggKyA0LCB5IC0gMywgeCArIDUsIHkgLSAyKTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSArIDMsIHggKyA0LCB5ICsgMywgeCwgeSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyMzOWZmMTQnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZDsiLCIvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuY29uc3QgVXRpbCA9IHtcbiAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgIGNvbnN0IGRlZyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICByZXR1cm4gVXRpbC5zY2FsZShbTWF0aC5zaW4oZGVnKSwgTWF0aC5jb3MoZGVnKV0sIGxlbmd0aCk7XG4gIH0sXG4gIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgc2NhbGUodmVjLCBtKSB7XG4gICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgfSxcblxuICBkaXN0KHYxLCB2Mil7XG4gICAgcmV0dXJuIE1hdGguc3FydCgoKHYxWzBdIC0gdjJbMF0pICoqIDIpKyAoKHYxWzFdIC0gdjJbMV0pICoqIDIpKVxuICB9LFxuXG4gIG5vcm0odmVjKXtcbiAgICByZXR1cm4gVXRpbC5kaXN0KFswLDBdLCB2ZWMpXG4gIH0sXG5cbiAgaXNDb2xsaWRlZChvYmoxLCBvYmoyKXtcbiAgICB2YXIgZHggPSBvYmoxLnBvc1swXSAtIG9iajIucG9zWzBdO1xuICAgIHZhciBkeSA9IG9iajEucG9zWzFdIC0gb2JqMi5wb3NbMV07XG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgIGlmIChkaXN0YW5jZSA8IG9iajEucmFkaXVzICsgb2JqMi5yYWRpdXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBnb25lVGhyb3VnaEdhdGUocGxheWVyLCBnYXRlKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhdGUuY29sbGlzaW9uQ2lyY2xlcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zb2xlLmxvZyhnYXRlLmNvbGxpc2lvbkNpcmNsZXMpO1xuICAgICAgY29uc29sZS5sb2cocGxheWVyLnBvcylcbiAgICAgIGlmIChVdGlsLmlzQ29sbGlkZWQocGxheWVyLCBnYXRlLmNvbGxpc2lvbkNpcmNsZXNbaV0pKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiXSwic291cmNlUm9vdCI6IiJ9