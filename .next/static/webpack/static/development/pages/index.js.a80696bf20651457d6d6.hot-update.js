webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DropDownNavbar/DropDownsContainer/index.js":
/*!***************************************************************!*\
  !*** ./components/DropDownNavbar/DropDownsContainer/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/components/DropDownNavbar/DropDownsContainer/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var prevBoundingRect = null;
var transition = "all 0.3s cubic-bezier(.785,.135,.15,.86)";
var transformOrigin = "רןעיא top";

var playAnimation = function playAnimation(elements) {
  if (elements.length > 0) {
    elements.forEach(playAnimation);
  } else {
    elements.style.transition = transition;
    elements.style.transform = "none";
  }
};

var DropDownsContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropDownsContainer, _React$Component);

  function DropDownsContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropDownsContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropDownsContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setRef", function (dropDownsWrapper) {
      return _this.dropDownsWrapper = dropDownsWrapper;
    });

    return _this;
  }

  _createClass(DropDownsContainer, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      prevBoundingRect = this.currentDropDown.getBoundingClientRect();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.currentDropDown = this.dropDownsWrapper;

      if (prevBoundingRect) {
        var currentBoundingRect = this.currentDropDown.getBoundingClientRect();
        var deltaLeft = prevBoundingRect.x - currentBoundingRect.x;
        var deltaWidth = prevBoundingRect.width / currentBoundingRect.width;
        var deltaHeight = prevBoundingRect.height / currentBoundingRect.height;
        var inversDeltaWidth = currentBoundingRect.width / prevBoundingRect.width;
        var inverseDeltaHeight = currentBoundingRect.height / prevBoundingRect.height;
        this.currentDropDown.style.transformOrigin = transformOrigin;
        this.currentDropDown.style.transform = "translateX(".concat(deltaLeft, "px) scale(").concat(deltaWidth, ", ").concat(deltaHeight, ")");

        if (this.props.preventDistortion) {
          this.cancelledOutElements = this.currentDropDown.querySelectorAll(this.props.preventDistortion);
          this.cancelledOutElements.forEach(function (dropDownSection) {
            dropDownSection.style.transformOrigin = dropDownSection.dataset.transformOrigin || transformOrigin;
            dropDownSection.style.transform = "scale(".concat(inversDeltaWidth, ", ").concat(inverseDeltaHeight, ")");
          });
        }

        setTimeout(function () {
          return requestAnimationFrame(function () {
            playAnimation(_this2.currentDropDown);
            playAnimation(_this2.cancelledOutElements);
          });
        }, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.setRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return DropDownsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DropDownsContainer);

/***/ })

})
//# sourceMappingURL=index.js.a80696bf20651457d6d6.hot-update.js.map