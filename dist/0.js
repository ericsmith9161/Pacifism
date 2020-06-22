(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MovingObject = /*#__PURE__*/function () {
  function MovingObject(pos, vel, type) {
    _classCallCheck(this, MovingObject);

    this.pos = pos;
    this.vel = vel;
    this.type = type;
  }

  _createClass(MovingObject, [{
    key: "draw",
    value: function draw(ctx) {
      switch (this.type) {
        case "player":
          var x = this.pos[0];
          var y = this.pos[1];
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + 20);
          ctx.lineTo(x + 15, y + 35);
          ctx.lineTo(x + 30, y + 20);
          ctx.lineTo(x + 30, y);
          ctx.lineTo(x + 15, y + 10);
          ctx.lineTo(x, y);
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#4dffff';
          ctx.stroke();
      }
    }
  }]);

  return MovingObject;
}();

/* harmony default export */ __webpack_exports__["default"] = (MovingObject);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsInBvcyIsInZlbCIsInR5cGUiLCJjdHgiLCJ4IiwieSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxZO0FBQ0osd0JBQVlDLEdBQVosRUFBaUJDLEdBQWpCLEVBQXNCQyxJQUF0QixFQUEyQjtBQUFBOztBQUN6QixTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7Ozt5QkFFSUMsRyxFQUFJO0FBQ1AsY0FBTyxLQUFLRCxJQUFaO0FBQ0UsYUFBSyxRQUFMO0FBQ0UsY0FBSUUsQ0FBQyxHQUFHLEtBQUtKLEdBQUwsQ0FBUyxDQUFULENBQVI7QUFDQSxjQUFJSyxDQUFDLEdBQUcsS0FBS0wsR0FBTCxDQUFTLENBQVQsQ0FBUjtBQUNBRyxhQUFHLENBQUNHLFNBQUo7QUFDQUgsYUFBRyxDQUFDSSxNQUFKLENBQVdILENBQVgsRUFBY0MsQ0FBZDtBQUNBRixhQUFHLENBQUNLLE1BQUosQ0FBV0osQ0FBWCxFQUFjQyxDQUFDLEdBQUMsRUFBaEI7QUFDQUYsYUFBRyxDQUFDSyxNQUFKLENBQVdKLENBQUMsR0FBQyxFQUFiLEVBQWlCQyxDQUFDLEdBQUMsRUFBbkI7QUFDQUYsYUFBRyxDQUFDSyxNQUFKLENBQVdKLENBQUMsR0FBQyxFQUFiLEVBQWlCQyxDQUFDLEdBQUMsRUFBbkI7QUFDQUYsYUFBRyxDQUFDSyxNQUFKLENBQVdKLENBQUMsR0FBQyxFQUFiLEVBQWlCQyxDQUFqQjtBQUNBRixhQUFHLENBQUNLLE1BQUosQ0FBV0osQ0FBQyxHQUFDLEVBQWIsRUFBaUJDLENBQUMsR0FBQyxFQUFuQjtBQUNBRixhQUFHLENBQUNLLE1BQUosQ0FBV0osQ0FBWCxFQUFhQyxDQUFiO0FBQ0FGLGFBQUcsQ0FBQ00sU0FBSixHQUFlLENBQWY7QUFDQU4sYUFBRyxDQUFDTyxXQUFKLEdBQWtCLFNBQWxCO0FBQ0FQLGFBQUcsQ0FBQ1EsTUFBSjtBQWRKO0FBa0JEOzs7Ozs7QUFHWVosMkVBQWYsRSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aW5nT2JqZWN0e1xuICBjb25zdHJ1Y3Rvcihwb3MsIHZlbCwgdHlwZSl7XG4gICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgdGhpcy52ZWwgPSB2ZWw7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBzd2l0Y2godGhpcy50eXBlKXtcbiAgICAgIGNhc2UgXCJwbGF5ZXJcIjpcbiAgICAgICAgbGV0IHggPSB0aGlzLnBvc1swXTtcbiAgICAgICAgbGV0IHkgPSB0aGlzLnBvc1sxXTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkrMjApO1xuICAgICAgICBjdHgubGluZVRvKHgrMTUsIHkrMzUpO1xuICAgICAgICBjdHgubGluZVRvKHgrMzAsIHkrMjApO1xuICAgICAgICBjdHgubGluZVRvKHgrMzAsIHkpO1xuICAgICAgICBjdHgubGluZVRvKHgrMTUsIHkrMTApO1xuICAgICAgICBjdHgubGluZVRvKHgseSk7XG4gICAgICAgIGN0eC5saW5lV2lkdGg9IDI7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjNGRmZmZmJztcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=