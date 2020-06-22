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
  console.log("webpack is running");
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Diamond = /*#__PURE__*/function () {
  function Diamond(pos, vel) {
    _classCallCheck(this, Diamond);

    this.pos = pos;
    this.vel = vel;
  }

  _createClass(Diamond, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 5, y - 10);
      ctx.lineTo(x, y - 20);
      ctx.lineTo(x + 5, y - 10);
      ctx.lineTo(x, y);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#4dffff';
      ctx.stroke();
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]([480, 320]);
    this.diamonds = [];
    this.gates = [];
    this.shards = [];
  }

  _createClass(Game, [{
    key: "addDiamond",
    value: function addDiamond() {}
  }, {
    key: "addGate",
    value: function addGate() {}
  }, {
    key: "addShard",
    value: function addShard() {}
  }, {
    key: "moveObjects",
    value: function moveObjects(delta) {
      this.player.move();
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.player.draw(ctx);
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
      console.log(this);
      this.drawBackground(this.ctx);
      var delta = currentTime - this.lastTime;
      requestAnimationFrame(this.animate);
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
        debugger;
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
        this.game.player.speed = -5;
      }

      if (this.keys && this.keys[83]) {
        this.game.player.speed = 5;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gate = /*#__PURE__*/function () {
  function Gate(pos, vel) {
    _classCallCheck(this, Gate);

    this.pos = pos;
    this.vel = vel;
  }

  _createClass(Gate, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 10, y - 10);
      ctx.lineTo(x - 10, y - 10);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y + 60);
      ctx.lineTo(x + 10, y + 70);
      ctx.lineTo(x - 10, y + 70);
      ctx.lineTo(x, y + 60);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffa500';
      ctx.stroke();
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
      console.log(this);
      this.angle += this.moveAngle * Math.PI / 180;
      this.pos = [this.pos[0] + this.speed * Math.sin(this.angle), this.pos[1] - this.speed * Math.cos(this.angle)];
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RpYW1vbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2F0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2hhcmQuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJzdGFydCIsIndpbmRvdyIsIkRpYW1vbmQiLCJwb3MiLCJ2ZWwiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJ4IiwieSIsImxpbmVUbyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiR2FtZSIsInBsYXllciIsIlBsYXllciIsImRpYW1vbmRzIiwiZ2F0ZXMiLCJzaGFyZHMiLCJkZWx0YSIsIm1vdmUiLCJkcmF3IiwiZ2FtZSIsImxhc3RUaW1lIiwiYW5pbWF0ZSIsImJpbmQiLCJjdXJyZW50VGltZSIsImRyYXdCYWNrZ3JvdW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGFuZGxlTW92ZW1lbnQiLCJtb3ZlT2JqZWN0cyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicHJldmVudERlZmF1bHQiLCJrZXlzIiwia2V5Q29kZSIsInR5cGUiLCJtb3ZlQW5nbGUiLCJzcGVlZCIsIkdhdGUiLCJhbmdsZSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJyZXN0b3JlIiwiTWF0aCIsIlBJIiwic2luIiwiY29z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QUksQ0FBQ0UsR0FBTCxDQUFTLEtBQUtQLEtBQWQsQ0FEbEIsRUFFVCxLQUFLckMsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLbUMsS0FBTCxHQUFhTyxJQUFJLENBQUNHLEdBQUwsQ0FBUyxLQUFLUixLQUFkLENBRmxCLENBQVg7QUFJQSxXQUFLRixLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtELFNBQUwsR0FBaUIsQ0FBakI7QUFDRDs7Ozs7O0FBSVl0QixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDNUNNa0MsSztBQUNKLGlCQUFZOUMsR0FBWixFQUFpQkMsR0FBakIsRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7Ozs7eUJBRUlSLEcsRUFBSTtBQUNQQSxTQUFHLENBQUNTLFNBQUo7QUFDQVQsU0FBRyxDQUFDVSxNQUFKLENBQVdDLENBQVgsRUFBY0MsQ0FBZDtBQUNBWixTQUFHLENBQUNzRCxhQUFKLENBQWtCM0MsQ0FBQyxHQUFHLENBQXRCLEVBQXlCQyxDQUFDLEdBQUcsQ0FBN0IsRUFBZ0NELENBQUMsR0FBRyxDQUFwQyxFQUF1Q0MsQ0FBQyxHQUFHLENBQTNDLEVBQThDRCxDQUFDLEdBQUcsQ0FBbEQsRUFBcURDLENBQUMsR0FBRyxDQUF6RDtBQUNBWixTQUFHLENBQUNzRCxhQUFKLENBQWtCM0MsQ0FBQyxHQUFHLENBQXRCLEVBQXlCQyxDQUFDLEdBQUcsQ0FBN0IsRUFBZ0NELENBQUMsR0FBRyxDQUFwQyxFQUF1Q0MsQ0FBQyxHQUFHLENBQTNDLEVBQThDRCxDQUE5QyxFQUFpREMsQ0FBakQ7QUFDQVosU0FBRyxDQUFDZSxXQUFKLEdBQWtCLFNBQWxCO0FBQ0FmLFNBQUcsQ0FBQ2dCLE1BQUo7QUFDRDs7Ozs7O0FBR1lxQyxvRUFBZixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZV92aWV3XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICBjb25zb2xlLmxvZyhcIndlYnBhY2sgaXMgcnVubmluZ1wiKTtcblxuICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXljYW52YXNcIik7XG4gIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcblxuICBjb25zdCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjdHgpO1xuICBnYW1lVmlldy5zdGFydCgpO1xuICB3aW5kb3cuY3R4ID0gY3R4O1xufSk7XG4iLCJjbGFzcyBEaWFtb25ke1xuICBjb25zdHJ1Y3Rvcihwb3MsIHZlbCkge1xuICAgIHRoaXMucG9zID0gcG9zO1xuICAgIHRoaXMudmVsID0gdmVsO1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oeCAtIDUsIHkgLSAxMCk7XG4gICAgY3R4LmxpbmVUbyh4LCB5IC0gMjApO1xuICAgIGN0eC5saW5lVG8oeCArIDUsIHkgLSAxMCk7XG4gICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzRkZmZmZic7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYW1vbmQ7IiwiaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL2dhbWVfdmlld1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBEaWFtb25kIGZyb20gXCIuL2RpYW1vbmRcIjtcbmltcG9ydCBHYXRlIGZyb20gXCIuL2dhdGVcIjtcbmltcG9ydCBTaGFyZCBmcm9tIFwiLi9zaGFyZFwiO1xuXG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihbNDgwLCAzMjBdKTtcbiAgICB0aGlzLmRpYW1vbmRzID0gW107XG4gICAgdGhpcy5nYXRlcyA9IFtdO1xuICAgIHRoaXMuc2hhcmRzID0gW107XG5cbiAgfVxuXG4gIGFkZERpYW1vbmQoKXtcblxuICB9XG5cbiAgYWRkR2F0ZSgpe1xuXG4gIH1cblxuICBhZGRTaGFyZCgpe1xuXG4gIH1cblxuICBtb3ZlT2JqZWN0cyhkZWx0YSl7XG4gICAgdGhpcy5wbGF5ZXIubW92ZSgpXG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgdGhpcy5wbGF5ZXIuZHJhdyhjdHgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5jbGFzcyBHYW1lVmlld3tcbiAgY29uc3RydWN0b3IoY3R4KXtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpXG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpXG4gIH1cblxuICBhbmltYXRlKGN1cnJlbnRUaW1lKSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCh0aGlzLmN0eCk7XG4gICAgY29uc3QgZGVsdGEgPSBjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XG4gICAgdGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpO1xuICAgIHRoaXMuaGFuZGxlTW92ZW1lbnQoKTtcbiAgICB0aGlzLmdhbWUubW92ZU9iamVjdHMoZGVsdGEpO1xuICAgIHRoaXMubGFzdFRpbWUgPSBjdXJyZW50VGltZTtcbiAgfVxuXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIDk2MCwgNjQwKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRlYnVnZ2VyXG4gICAgICB0aGlzLmtleXMgPSAodGhpcy5rZXlzIHx8IFtdKTtcbiAgICAgIHRoaXMua2V5c1tlLmtleUNvZGVdID0gKGUudHlwZSA9PSBcImtleWRvd25cIik7XG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5rZXlzW2Uua2V5Q29kZV0gPSAoZS50eXBlID09IFwia2V5ZG93blwiKTtcbiAgICB9KVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICB9XG5cbiAgaGFuZGxlTW92ZW1lbnQoKXtcbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s2NV0pIHsgIHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gLTM7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s2OF0pIHsgIHRoaXMuZ2FtZS5wbGF5ZXIubW92ZUFuZ2xlID0gMzsgfVxuICAgIGlmICh0aGlzLmtleXMgJiYgdGhpcy5rZXlzWzg3XSkgeyB0aGlzLmdhbWUucGxheWVyLnNwZWVkID0gLTU7IH1cbiAgICBpZiAodGhpcy5rZXlzICYmIHRoaXMua2V5c1s4M10pIHsgdGhpcy5nYW1lLnBsYXllci5zcGVlZCA9IDU7IH1cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVWaWV3OyIsImNsYXNzIEdhdGV7XG4gIGNvbnN0cnVjdG9yKHBvcywgdmVsKSB7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy52ZWwgPSB2ZWw7XG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgY3R4LmxpbmVUbyh4ICsgMTAsIHkgLSAxMCk7XG4gICAgY3R4LmxpbmVUbyh4IC0gMTAsIHkgLSAxMCk7XG4gICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICBjdHgubGluZVRvKHgsIHkgKyA2MCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgMTAsIHkgKyA3MCk7XG4gICAgY3R4LmxpbmVUbyh4IC0gMTAsIHkgKyA3MCk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgNjApO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZhNTAwJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2F0ZTsiLCJjbGFzcyBQbGF5ZXJ7XG4gIGNvbnN0cnVjdG9yKHBvcyl7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgdGhpcy5tb3ZlQW5nbGUgPSAwO1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuXG4gICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKHgsIHkpO1xuICAgIGN0eC5saW5lVG8oLTEwLC0xMClcbiAgICBjdHgubGluZVRvKC0xMCwgNSk7XG4gICAgY3R4LmxpbmVUbygwLCAxNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgNSk7XG4gICAgY3R4LmxpbmVUbygxMCwgLTEwKTtcbiAgICBjdHgubGluZVRvKDAsIDApO1xuICAgIGN0eC5saW5lVG8oLTEwLCAtMTApO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmZmZmJztcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIHRoaXMuYW5nbGUgKz0gdGhpcy5tb3ZlQW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xuICAgIHRoaXMucG9zID0gW1xuICAgICAgdGhpcy5wb3NbMF0gKyB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy5hbmdsZSksXG4gICAgICB0aGlzLnBvc1sxXSAtIHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlKVxuICAgIF1cbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLm1vdmVBbmdsZSA9IDBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjbGFzcyBTaGFyZHtcbiAgY29uc3RydWN0b3IocG9zLCB2ZWwpIHtcbiAgICB0aGlzLnBvcyA9IHBvcztcbiAgICB0aGlzLnZlbCA9IHZlbDtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSAtIDMsIHggKyA0LCB5IC0gMywgeCArIDUsIHkgLSAyKTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMiwgeSArIDMsIHggKyA0LCB5ICsgMywgeCwgeSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyMzOWZmMTQnO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZDsiXSwic291cmNlUm9vdCI6IiJ9