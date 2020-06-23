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
      left: this.pos[0] - 7,
      bottom: this.pos[1] + 15,
      right: this.pos[0] + 7
    };
    this.radius = 8;
  }

  _createClass(Diamond, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.pos[0];
      var y = this.pos[1] - 10;
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
        this.diamondSpawnRate -= 5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpYW1vbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2hhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsIkdhbWVWaWV3Iiwic3RhcnQiLCJ3aW5kb3ciLCJEaWFtb25kIiwicG9zIiwidmVsIiwiY29sbGlzaW9uUG9zIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwicmFkaXVzIiwieCIsInkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImRlbHRhIiwicGxheWVyUG9zIiwidmVsRGlyIiwidmVsTWFnIiwiVXRpbCIsIm5vcm0iLCJHYW1lIiwicGxheWVyIiwiUGxheWVyIiwiZGlhbW9uZHMiLCJkaWFtb25kU3Bhd25SYXRlIiwiZ2F0ZXMiLCJnYXRlU3Bhd25SYXRlIiwic2hhcmRzIiwiZnJhbWVOdW0iLCJpblBsYXkiLCJkaWFtb25kIiwiTWF0aCIsInJhbmRvbSIsInB1c2giLCJnYXRlIiwiR2F0ZSIsIlBJIiwibW92ZSIsImFkZERpYW1vbmQiLCJhZGRHYXRlIiwiaSIsImxlbmd0aCIsImFicyIsImlzQ29sbGlkZWQiLCJjb2xsaXNpb25DaXJjbGVzIiwiZ29uZVRocm91Z2hHYXRlIiwiZXhwbG9zaW9uIiwiZGlhbW9uZHNUb0tlZXAiLCJzcGxpY2UiLCJkcmF3IiwiZ2FtZSIsImxhc3RUaW1lIiwiYW5pbWF0ZSIsImJpbmQiLCJjdXJyZW50VGltZSIsImRyYXdCYWNrZ3JvdW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGFuZGxlTW92ZW1lbnQiLCJtb3ZlT2JqZWN0cyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicHJldmVudERlZmF1bHQiLCJrZXlzIiwia2V5Q29kZSIsInR5cGUiLCJtb3ZlQW5nbGUiLCJzcGVlZCIsImFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsInJlc3RvcmUiLCJyYW5kb21WZWMiLCJjb25zb2xlIiwibG9nIiwic2luIiwiY29zIiwiU2hhcmQiLCJiZXppZXJDdXJ2ZVRvIiwiZGVnIiwic2NhbGUiLCJ2ZWMiLCJtIiwiZGlzdCIsInYxIiwidjIiLCJzcXJ0Iiwib2JqMSIsIm9iajIiLCJkeCIsImR5IiwiZGlzdGFuY2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FB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bUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9zY3JpcHRzL2dhbWVfdmlld1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcblxuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjdHgpO1xuICBnYW1lVmlldy5zdGFydCgpO1xuICB3aW5kb3cuY3R4ID0gY3R4O1xufSk7XG4iLCJpbXBvcnQgVXRpbCBmcm9tIFwiLi91dGlsXCI7XG5cbmNsYXNzIERpYW1vbmR7XG4gIGNvbnN0cnVjdG9yKHBvcykge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMudmVsID0gMDtcbiAgICB0aGlzLmNvbGxpc2lvblBvcyA9IHtcbiAgICAgIHRvcDogdGhpcy5wb3NbMV0gLSAxNSxcbiAgICAgIGxlZnQ6IHRoaXMucG9zWzBdIC0gNyxcbiAgICAgIGJvdHRvbTogdGhpcy5wb3NbMV0gKyAxNSxcbiAgICAgIHJpZ2h0OiB0aGlzLnBvc1swXSArIDdcbiAgICB9XG4gICAgdGhpcy5yYWRpdXMgPSA4O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGxldCB4ID0gdGhpcy5wb3NbMF07XG4gICAgbGV0IHkgPSB0aGlzLnBvc1sxXSAtIDEwO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSsxNSk7XG4gICAgY3R4LmxpbmVUbyh4IC0gOCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4LCB5IC0gMTUpO1xuICAgIGN0eC5saW5lVG8oeCArIDgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCwgeSsxNSk7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyM0ZGZmZmYnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIG1vdmUoZGVsdGEsIHBsYXllclBvcyl7XG4gICAgY29uc3QgdmVsRGlyID0gW3BsYXllclBvc1swXS10aGlzLnBvc1swXSwgcGxheWVyUG9zWzFdIC0gdGhpcy5wb3NbMV1dO1xuICAgIGNvbnN0IHZlbE1hZyA9IFV0aWwubm9ybSh2ZWxEaXIpO1xuICAgIGNvbnN0IHZlbCA9IFt2ZWxEaXJbMF0vKHZlbE1hZyksIHZlbERpclsxXS8odmVsTWFnKV07XG4gICAgdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyB2ZWxbMF0sIHRoaXMucG9zWzFdICsgdmVsWzFdXTtcbiAgICAvLyB0aGlzLnBvcyA9IFt0aGlzLnBvc1swXSArICh2ZWxEaXJbMF0gLyAodmVsTWFnICogMTApKSwgdmVsRGlyWzFdIC8gKHZlbE1hZyAqIDEwKV1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFtb25kOyIsImltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9nYW1lX3ZpZXdcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgRGlhbW9uZCBmcm9tIFwiLi9kaWFtb25kXCI7XG5pbXBvcnQgR2F0ZSBmcm9tIFwiLi9nYXRlXCI7XG5pbXBvcnQgU2hhcmQgZnJvbSBcIi4vc2hhcmRcIjtcbmltcG9ydCBVdGlsIGZyb20gXCIuL3V0aWxcIjtcblxuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoWzQ4MCwgMzIwXSk7XG5cbiAgICB0aGlzLmRpYW1vbmRzID0gW107XG4gICAgdGhpcy5kaWFtb25kU3Bhd25SYXRlID0gOTA7XG5cbiAgICB0aGlzLmdhdGVzID0gW107XG4gICAgdGhpcy5nYXRlU3Bhd25SYXRlID0gMzYwO1xuXG4gICAgdGhpcy5zaGFyZHMgPSBbXTtcblxuXG4gICAgdGhpcy5mcmFtZU51bSA9IDE7XG5cbiAgICB0aGlzLmluUGxheSA9IHRydWU7XG5cbiAgfVxuXG4gIGFkZERpYW1vbmQoKXtcbiAgICBjb25zdCBkaWFtb25kID0gbmV3IERpYW1vbmQoW01hdGgucmFuZG9tKCkqOTYwLCBNYXRoLnJhbmRvbSgpKjY0MF0pO1xuICAgIHRoaXMuZGlhbW9uZHMucHVzaChkaWFtb25kKTtcbiAgfVxuXG4gIGFkZEdhdGUoKXtcbiAgICBjb25zdCBnYXRlID0gbmV3IEdhdGUoW01hdGgucmFuZG9tKCkgKiA5NjAsIE1hdGgucmFuZG9tKCkgKiA2NDBdLCBNYXRoLnJhbmRvbSgpKiBNYXRoLlBJIC8gMik7XG4gICAgdGhpcy5nYXRlcy5wdXNoKGdhdGUpO1xuICB9XG5cblxuICBhZGRTaGFyZCgpe1xuXG4gIH1cblxuICBkaWFtb25kUGxheWVyQ29sbGlzaW9uKGRpYW1vbmQpe1xuXG4gIH1cblxuICBtb3ZlT2JqZWN0cyhkZWx0YSl7XG4gICAgdGhpcy5wbGF5ZXIubW92ZSgpXG4gICAgaWYgKHRoaXMuZnJhbWVOdW0gJSB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPT09IDApe1xuICAgICAgdGhpcy5hZGREaWFtb25kKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyYW1lTnVtICUgdGhpcy5nYXRlU3Bhd25SYXRlID09PSAwKXtcbiAgICAgIHRoaXMuYWRkR2F0ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmFtZU51bSAlIDYwMCA9PT0gMCAmJiB0aGlzLmRpYW1vbmRTcGF3blJhdGUgPiAyMCl7XG4gICAgICB0aGlzLmRpYW1vbmRTcGF3blJhdGUgLT0gNTtcbiAgICB9XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5kaWFtb25kc1tpXS5tb3ZlKGRlbHRhLCB0aGlzLnBsYXllci5wb3MpXG4gICAgICBpZiAoKE1hdGguYWJzKHRoaXMuZGlhbW9uZHNbaV0ucG9zWzBdIC0gdGhpcy5wbGF5ZXIucG9zWzBdKSA8IDQwKSAmJlxuICAgICAgICAoTWF0aC5hYnModGhpcy5kaWFtb25kc1tpXS5wb3NbMV0gLSB0aGlzLnBsYXllci5wb3NbMV0pIDwgNDApKXtcbiAgICAgICAgaWYoVXRpbC5pc0NvbGxpZGVkKHRoaXMuZGlhbW9uZHNbaV0sIHRoaXMucGxheWVyKSl7XG4gICAgICAgICAgdGhpcy5pblBsYXkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ2F0ZXNbaV0ubW92ZSh0aGlzLmZyYW1lTnVtLCB0aGlzLnBsYXllcilcbiAgICAgIGlmICh0aGlzLmdhdGVzW2ldLmNvbGxpc2lvbkNpcmNsZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmKFV0aWwuZ29uZVRocm91Z2hHYXRlKHRoaXMucGxheWVyLCB0aGlzLmdhdGVzW2ldKSl7XG4gICAgICAgICAgY29uc3QgZXhwbG9zaW9uID0ge3Bvczp0aGlzLmdhdGVzW2ldLmNvbGxpc2lvbkNpcmNsZXNbM10ucG9zLCByYWRpdXM6IDE1MH1cbiAgICAgICAgICBjb25zdCBkaWFtb25kc1RvS2VlcCA9W107XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKCFVdGlsLmlzQ29sbGlkZWQoZXhwbG9zaW9uLCB0aGlzLmRpYW1vbmRzW2ldKSl7XG4gICAgICAgICAgICAgIGRpYW1vbmRzVG9LZWVwLnB1c2godGhpcy5kaWFtb25kc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGlhbW9uZHMgPSBkaWFtb25kc1RvS2VlcDtcbiAgICAgICAgICB0aGlzLmdhdGVzLnNwbGljZShpLDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5mcmFtZU51bSsrO1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIHRoaXMucGxheWVyLmRyYXcoY3R4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGlhbW9uZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZGlhbW9uZHNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ2F0ZXNbaV0uZHJhdyhjdHgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuY2xhc3MgR2FtZVZpZXd7XG4gIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKVxuICB9XG5cbiAgYW5pbWF0ZShjdXJyZW50VGltZSkge1xuICAgIHRoaXMuZHJhd0JhY2tncm91bmQodGhpcy5jdHgpO1xuICAgIGNvbnN0IGRlbHRhID0gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgIGlmICh0aGlzLmdhbWUuaW5QbGF5KXtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICAgIH1cbiAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5oYW5kbGVNb3ZlbWVudCgpO1xuICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cyhkZWx0YSk7XG4gICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xuICB9XG5cbiAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgOTYwLCA2NDApO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5rZXlzID0gKHRoaXMua2V5cyB8fCBbXSk7XG4gICAgICB0aGlzLmtleXNbZS5rZXlDb2RlXSA9IChlLnR5cGUgPT0gXCJrZXlkb3duXCIpO1xuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMua2V5c1tlLmtleUNvZGVdID0gKGUudHlwZSA9PSBcImtleWRvd25cIik7XG4gICAgfSlcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50KCl7XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNjVdKSB7ICB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IC0zOyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbNjhdKSB7ICB0aGlzLmdhbWUucGxheWVyLm1vdmVBbmdsZSA9IDM7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s4N10pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IC00OyB9XG4gICAgaWYgKHRoaXMua2V5cyAmJiB0aGlzLmtleXNbODNdKSB7IHRoaXMuZ2FtZS5wbGF5ZXIuc3BlZWQgPSA0OyB9XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG5jbGFzcyBHYXRle1xuICBjb25zdHJ1Y3Rvcihwb3MsIGFuZ2xlKSB7IC8vICgtMSwwKSAoMSwgMCksICgtMSw2MCksICgxLDYwKVxuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMgPSBbXVxuXG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgbGV0IHg9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5PSB0aGlzLnBvc1sxXTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgY3R4LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGN0eC5saW5lVG8oMCwgMCk7XG4gICAgY3R4LmxpbmVUbygwICsgMTAsIDAgLSAxMCk7XG4gICAgY3R4LmxpbmVUbygwIC0gMTAsIDAgLSAxMCk7XG4gICAgY3R4LmxpbmVUbygwLCAwKTtcbiAgICBjdHgubGluZVRvKDAsIDAgKyA2MCk7XG4gICAgY3R4LmxpbmVUbygwICsgMTAsIDAgKyA3MCk7XG4gICAgY3R4LmxpbmVUbygwIC0gMTAsIDAgKyA3MCk7XG4gICAgY3R4LmxpbmVUbygwLCAwICsgNjApO1xuXG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmE1MDAnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgbW92ZShmcmFtZU51bSwgcGxheWVyKXtcbiAgICB0aGlzLmNvbGxpc2lvbkNpcmNsZXMgPSBbXTtcbiAgICBpZiAoZnJhbWVOdW0gJSAxMjAgPT09IDApe1xuICAgICAgdGhpcy52ZWwgPSBVdGlsLnJhbmRvbVZlYygwLjEyNSk7XG4gICAgfVxuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0sIHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV1dO1xuICAgIGlmICgoTWF0aC5hYnMocGxheWVyLnBvc1swXSAtIHRoaXMucG9zWzBdKSA8IDcwKSAmJiAoTWF0aC5hYnMocGxheWVyLnBvc1sxXSAtIHRoaXMucG9zWzFdKSA8IDcwKSl7XG4gICAgICBjb25zb2xlLmxvZyhwbGF5ZXIucG9zWzFdIC0gdGhpcy5wb3NbMV0pO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDY7IGkrKyl7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uQ2lyY2xlcy5wdXNoKHtwb3M6IFxuICAgICAgICAgIFt0aGlzLnBvc1swXSAtICg1ICsgMTAqaSkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAgICAgICAgdGhpcy5wb3NbMV0gKyAoKDUgKyAxMCppKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpKV0sXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuXG4gICAgLy8gICB0b3BMZWZ0OiBbKHRoaXMucG9zWzBdIC0gMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArIHRoaXMucG9zWzFdICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICB0aGlzLnBvc1sxXSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIHRvcFJpZ2h0OiBbKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArIHRoaXMucG9zWzFdICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgLy8gICB0aGlzLnBvc1sxXSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSArIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIGJvdHRvbUxlZnQ6IFsodGhpcy5wb3NbMF0gLSAxKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpICsgKHRoaXMucG9zWzFdKzYwKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgIC8vICAgKHRoaXMucG9zWzFdKzYwKSAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gKCh0aGlzLnBvc1swXSAtIDEpICogTWF0aC5zaW4odGhpcy5hbmdsZSkpXSxcbiAgICAvLyAgIGJvdHRvbVJpZ2h0OiBbKHRoaXMucG9zWzBdICsgMSkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSArICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSxcbiAgICAvLyAgICh0aGlzLnBvc1sxXSs2MCkgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAtICgodGhpcy5wb3NbMF0gKyAxKSAqIE1hdGguc2luKHRoaXMuYW5nbGUpKV1cbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2F0ZTsiLCJjbGFzcyBQbGF5ZXJ7XG4gIGNvbnN0cnVjdG9yKHBvcyl7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5tb3ZlQW5nbGUgPSAwO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29sbGlzaW9uUG9zID0ge1xuICAgICAgdG9wOiB0aGlzLnBvc1sxXSAtIDUsXG4gICAgICBsZWZ0OiB0aGlzLnBvc1swXSAtIDUsXG4gICAgICBib3R0b206IHRoaXMucG9zWzFdICsgNSxcbiAgICAgIHJpZ2h0OiB0aGlzLnBvc1swXSArIDVcbiAgICB9XG4gICAgdGhpcy5yYWRpdXMgPSA4O1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuXG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oLTEwLC0xMClcbiAgICBjdHgubGluZVRvKC0xMCwgNSk7XG4gICAgY3R4LmxpbmVUbygwLCAxNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgLTEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oLTEwLCAtMTApO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICB0aGlzLmFuZ2xlICs9IHRoaXMubW92ZUFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbiAgICB0aGlzLnBvcyA9IFtcbiAgICAgIHRoaXMucG9zWzBdICsgdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMuYW5nbGUpLFxuICAgICAgdGhpcy5wb3NbMV0gLSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy5hbmdsZSlcbiAgICBdXG4gICAgdGhpcy5jb2xsaXNpb25Qb3MgPSB7XG4gICAgICB0b3A6IHRoaXMucG9zWzFdIC0gNSxcbiAgICAgIGxlZnQ6IHRoaXMucG9zWzBdIC0gNSxcbiAgICAgIGJvdHRvbTogdGhpcy5wb3NbMV0gKyA1LFxuICAgICAgcmlnaHQ6IHRoaXMucG9zWzBdICsgNVxuICAgIH1cbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLm1vdmVBbmdsZSA9IDBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjbGFzcyBTaGFyZHtcbiAgY29uc3RydWN0b3IocG9zLCB2ZWwpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnZlbCA9IHZlbDtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSAtIDMsIHggKyA0LCB5IC0gMywgeCArIDUsIHkgLSAyKTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSArIDMsIHggKyA0LCB5ICsgMywgeCwgeSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyMzOWZmMTQnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZDsiLCIvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuY29uc3QgVXRpbCA9IHtcbiAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgIGNvbnN0IGRlZyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICByZXR1cm4gVXRpbC5zY2FsZShbTWF0aC5zaW4oZGVnKSwgTWF0aC5jb3MoZGVnKV0sIGxlbmd0aCk7XG4gIH0sXG4gIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgc2NhbGUodmVjLCBtKSB7XG4gICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgfSxcblxuICBkaXN0KHYxLCB2Mil7XG4gICAgcmV0dXJuIE1hdGguc3FydCgoKHYxWzBdIC0gdjJbMF0pICoqIDIpKyAoKHYxWzFdIC0gdjJbMV0pICoqIDIpKVxuICB9LFxuXG4gIG5vcm0odmVjKXtcbiAgICByZXR1cm4gVXRpbC5kaXN0KFswLDBdLCB2ZWMpXG4gIH0sXG5cbiAgaXNDb2xsaWRlZChvYmoxLCBvYmoyKXtcbiAgICB2YXIgZHggPSBvYmoxLnBvc1swXSAtIG9iajIucG9zWzBdO1xuICAgIHZhciBkeSA9IG9iajEucG9zWzFdIC0gb2JqMi5wb3NbMV07XG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgIGlmIChkaXN0YW5jZSA8IG9iajEucmFkaXVzICsgb2JqMi5yYWRpdXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSxcblxuICBnb25lVGhyb3VnaEdhdGUocGxheWVyLCBnYXRlKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhdGUuY29sbGlzaW9uQ2lyY2xlcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zb2xlLmxvZyhnYXRlLmNvbGxpc2lvbkNpcmNsZXMpO1xuICAgICAgY29uc29sZS5sb2cocGxheWVyLnBvcylcbiAgICAgIGlmIChVdGlsLmlzQ29sbGlkZWQocGxheWVyLCBnYXRlLmNvbGxpc2lvbkNpcmNsZXNbaV0pKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiXSwic291cmNlUm9vdCI6IiJ9