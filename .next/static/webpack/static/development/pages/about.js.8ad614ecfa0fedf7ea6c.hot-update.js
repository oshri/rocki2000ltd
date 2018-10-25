webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/DynamicDropDownMenu/index.js":
/*!*************************************************!*\
  !*** ./components/DynamicDropDownMenu/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DropDowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropDowns */ "./components/DynamicDropDownMenu/DropDowns/index.js");
/* harmony import */ var _DropDownsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDownsContainer */ "./components/DynamicDropDownMenu/DropDownsContainer/index.js");
/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MenuLink */ "./components/MenuLink/index.js");
/* harmony import */ var _DynamicDropDownMenu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DynamicDropDownMenu.scss */ "./components/DynamicDropDownMenu/DynamicDropDownMenu.scss");
/* harmony import */ var _DynamicDropDownMenu_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_DynamicDropDownMenu_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/components/DynamicDropDownMenu/index.js";

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








/**
 * Navigation 
 */

var navigation = [{
  title: "אודות",
  dropdown: _DropDowns__WEBPACK_IMPORTED_MODULE_3__["ProductsDropdown"]
}, {
  title: "ייבוא",
  dropdown: _DropDowns__WEBPACK_IMPORTED_MODULE_3__["DevelopersDropdown"]
}, {
  title: "צור קשר",
  dropdown: _DropDowns__WEBPACK_IMPORTED_MODULE_3__["CompanyDropdown"]
}];

var DynamicDropDownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DynamicDropDownMenu, _React$Component);

  function DynamicDropDownMenu(props) {
    var _this;

    _classCallCheck(this, DynamicDropDownMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DynamicDropDownMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function (event) {
      var currentIndex = Number(event.currentTarget.dataset.index);
      if (_this.state.activeIndices[_this.state.activeIndices.length - 1] === currentIndex) return;

      _this.setState(function (prevState) {
        return {
          activeIndices: prevState.activeIndices.concat(currentIndex)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
      _this.setState({
        activeIndices: []
      });
    });

    _this.state = {
      activeIndices: []
    };
    return _this;
  }

  _createClass(DynamicDropDownMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var CurrentDropdown;
      var PreviousDropdown;
      var previousIndex = this.state.activeIndices[this.state.activeIndices.length - 2];
      var currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1];

      if (typeof currentIndex === "number") {
        CurrentDropdown = navigation[currentIndex].dropdown;
      }

      if (typeof previousIndex === "number") {
        PreviousDropdown = navigation[previousIndex].dropdown;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "DynamicDropDownMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar-el",
        onMouseLeave: this.onMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, navigation.map(function (n, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "navbar-item-el",
          onMouseEnter: _this2.onMouseEnter,
          onFocus: _this2.onMouseEnter,
          "data-index": index,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
          href: n.title,
          theme: _this2.props.theme,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, n.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dropdown-slot",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, currentIndex === index && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropDownsContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          preventDistortion: "[data-prevent-distortion]",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "caret",
          "data-prevent-distortion": true,
          "data-transform-origin": "left bottom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dropdown-background",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, PreviousDropdown && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PreviousDropdown, {
          prev: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentDropdown, {
          current: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }))))));
      }))));
    }
  }]);

  return DynamicDropDownMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(DynamicDropDownMenu, "propTypes", {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
});

_defineProperty(DynamicDropDownMenu, "defaultProps", {
  theme: 'dark'
});

/* harmony default export */ __webpack_exports__["default"] = (DynamicDropDownMenu);

/***/ })

})
//# sourceMappingURL=about.js.8ad614ecfa0fedf7ea6c.hot-update.js.map