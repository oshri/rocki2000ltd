module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout/index.js");
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/pages/about.js";



var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "About Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "page-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "About Rocki"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Address/Address.js":
/*!*******************************************!*\
  !*** ./src/components/Address/Address.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Address_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Address.scss */ "./src/components/Address/Address.scss");
/* harmony import */ var _Address_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Address_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/Address/Address.js";




var Address = function Address(_ref) {
  var theme = _ref.theme,
      url = _ref.url;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, url));
};

Address.propTypes = {
  number: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Address);

/***/ }),

/***/ "./src/components/Address/Address.scss":
/*!*********************************************!*\
  !*** ./src/components/Address/Address.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Address/index.js":
/*!*****************************************!*\
  !*** ./src/components/Address/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Address_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address.js */ "./src/components/Address/Address.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Address_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/CellNumber/CellNumber.js":
/*!*************************************************!*\
  !*** ./src/components/CellNumber/CellNumber.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CellNumber_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellNumber.scss */ "./src/components/CellNumber/CellNumber.scss");
/* harmony import */ var _CellNumber_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CellNumber_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/CellNumber/CellNumber.js";




var CellNumber = function CellNumber(_ref) {
  var theme = _ref.theme,
      number = _ref.number;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:".concat(number),
    className: "CellNumber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, number));
};

CellNumber.propTypes = {
  number: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CellNumber);

/***/ }),

/***/ "./src/components/CellNumber/CellNumber.scss":
/*!***************************************************!*\
  !*** ./src/components/CellNumber/CellNumber.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/CellNumber/index.js":
/*!********************************************!*\
  !*** ./src/components/CellNumber/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellNumber.js */ "./src/components/CellNumber/CellNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CellNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/DynamicDropDownMenu/DropDowns/index.js":
/*!***************************************************************!*\
  !*** ./src/components/DynamicDropDownMenu/DropDowns/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MenuLink */ "./src/components/MenuLink/index.js");
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/DynamicDropDownMenu/DropDowns/index.js";



var Dropdown = function Dropdown(items) {
  return function (_ref) {
    var current = _ref.current,
        prev = _ref.prev;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "products-dropdown-el dropdown-el",
      "data-current": current,
      "data-prev": prev,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-prevent-distortion": true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, items.map(function (link, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "/page?id=".concat(link.id, "&link=").concat(link.link),
        as: "/page/".concat(link.link),
        theme: 'light',
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, link.name);
    })));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./src/components/DynamicDropDownMenu/DropDownsContainer/index.js":
/*!************************************************************************!*\
  !*** ./src/components/DynamicDropDownMenu/DropDownsContainer/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/DynamicDropDownMenu/DropDownsContainer/index.js";

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
var transformOrigin = "left top";

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

/***/ }),

/***/ "./src/components/DynamicDropDownMenu/DynamicDropDownMenu.scss":
/*!*********************************************************************!*\
  !*** ./src/components/DynamicDropDownMenu/DynamicDropDownMenu.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/DynamicDropDownMenu/index.js":
/*!*****************************************************!*\
  !*** ./src/components/DynamicDropDownMenu/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DropDowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropDowns */ "./src/components/DynamicDropDownMenu/DropDowns/index.js");
/* harmony import */ var _DropDownsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropDownsContainer */ "./src/components/DynamicDropDownMenu/DropDownsContainer/index.js");
/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MenuLink */ "./src/components/MenuLink/index.js");
/* harmony import */ var _DynamicDropDownMenu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DynamicDropDownMenu.scss */ "./src/components/DynamicDropDownMenu/DynamicDropDownMenu.scss");
/* harmony import */ var _DynamicDropDownMenu_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_DynamicDropDownMenu_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/DynamicDropDownMenu/index.js";

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

    _this.buildNavigation = _this.buildNavigation.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    if (props.navigation) {
      _this.buildNavigation(props.navigation);
    }

    _this.state = {
      activeIndices: []
    };
    return _this;
  }

  _createClass(DynamicDropDownMenu, [{
    key: "buildNavigation",
    value: function buildNavigation(navigation, theme) {
      var newNav = navigation.map(function (nav) {
        return {
          name: nav.name,
          link: nav.link,
          dropdown: new _DropDowns__WEBPACK_IMPORTED_MODULE_3__["default"](nav.children, theme)
        };
      });
      this.navigation = newNav;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var CurrentDropdown;
      var PreviousDropdown;
      var previousIndex = this.state.activeIndices[this.state.activeIndices.length - 2];
      var currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1];

      if (typeof currentIndex === "number") {
        CurrentDropdown = this.navigation[currentIndex].dropdown;
      }

      if (typeof previousIndex === "number") {
        PreviousDropdown = this.navigation[previousIndex].dropdown;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "DynamicDropDownMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar-el",
        onMouseLeave: this.onMouseLeave,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.navigation.map(function (mainLink, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "navbar-item-el",
          onMouseEnter: _this2.onMouseEnter,
          onFocus: _this2.onMouseEnter,
          "data-index": index,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
          href: mainLink.link,
          theme: _this2.props.theme,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, mainLink.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dropdown-slot",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, currentIndex === index && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DropDownsContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
          preventDistortion: "[data-prevent-distortion]",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "caret",
          "data-prevent-distortion": true,
          "data-transform-origin": "left bottom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "dropdown-background",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, PreviousDropdown && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PreviousDropdown, {
          prev: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CurrentDropdown, {
          current: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
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

/***/ }),

/***/ "./src/components/FaxNumber/FaxNumber.js":
/*!***********************************************!*\
  !*** ./src/components/FaxNumber/FaxNumber.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FaxNumber_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FaxNumber.scss */ "./src/components/FaxNumber/FaxNumber.scss");
/* harmony import */ var _FaxNumber_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FaxNumber_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/FaxNumber/FaxNumber.js";




var FaxNumber = function FaxNumber(_ref) {
  var theme = _ref.theme,
      number = _ref.number;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FaxNumber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, number));
};

FaxNumber.propTypes = {
  number: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (FaxNumber);

/***/ }),

/***/ "./src/components/FaxNumber/FaxNumber.scss":
/*!*************************************************!*\
  !*** ./src/components/FaxNumber/FaxNumber.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/FaxNumber/index.js":
/*!*******************************************!*\
  !*** ./src/components/FaxNumber/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FaxNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FaxNumber.js */ "./src/components/FaxNumber/FaxNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FaxNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _PhoneNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PhoneNumber */ "./src/components/PhoneNumber/index.js");
/* harmony import */ var _CellNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CellNumber */ "./src/components/CellNumber/index.js");
/* harmony import */ var _FaxNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FaxNumber */ "./src/components/FaxNumber/index.js");
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Address */ "./src/components/Address/index.js");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer.scss */ "./src/components/Footer/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _StaticMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StaticMenu */ "./src/components/StaticMenu/index.js");
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/Footer/Footer.js";










var Footer = function Footer(props) {
  var theme = props.theme;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-level ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rocki-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: 'big',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "more-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-links-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StaticMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    direction: 'column',
    theme: 'light',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom-level",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "\xA9 \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \u05DC\u05D9.\u05E8\u05D5\u05E7\u05D9 \u05EA\u05E2\u05E9\u05D9\u05D5\u05EA 2000 \u05D1\u05E2\"\u05DE (\u05DE\u05E8\u05E4\u05D3\u05D9\u05EA \u05E8\u05D5\u05E7\u05D9)"))));
};

Footer.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Footer.defaultProps = {
  theme: 'dark'
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/Footer.scss":
/*!*******************************************!*\
  !*** ./src/components/Footer/Footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.js */ "./src/components/Footer/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Header/Header.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/Header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.scss */ "./src/components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StaticMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StaticMenu */ "./src/components/StaticMenu/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _DynamicDropDownMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DynamicDropDownMenu */ "./src/components/DynamicDropDownMenu/index.js");
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MobileMenu */ "./src/components/MobileMenu/index.js");
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/Header/index.js";

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










var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "delta", 5);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "navbarHeight", 88);

    _this.state = {
      didScroll: true,
      lastScrollTop: 0,
      navClass: 'nav-down'
    };
    _this.hideHeader = _this.hideHeader.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.showHeader = _this.showHeader.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getDocHeight = _this.getDocHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.hasScrolled = _this.hasScrolled.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "hideHeader",
    value: function hideHeader() {
      this.setState({
        navClass: 'nav-up'
      });
    }
  }, {
    key: "showHeader",
    value: function showHeader() {
      this.setState({
        navClass: 'nav-down'
      });
    }
  }, {
    key: "getDocHeight",
    value: function getDocHeight() {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    }
  }, {
    key: "hasScrolled",
    value: function hasScrolled() {
      var st = window.scrollY;
      if (Math.abs(this.state.lastScrollTop - st) <= this.delta) return;

      if (st > this.state.lastScrollTop && st > this.navbarHeight) {
        this.hideHeader();
      } else {
        if (st < this.getDocHeight()) {
          this.showHeader();
        }
      }

      this.setState({
        lastScrollTop: st
      });
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(event) {
      this.setState({
        didScroll: true
      });

      underscore__WEBPACK_IMPORTED_MODULE_2__["throttle"](this.hasScrolled(), 250);
    }
  }, {
    key: "render",
    value: function render() {
      var links = this.props.navigation.map(function (link, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, link.name);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        id: "navbar",
        className: "Header " + this.state.navClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-menu-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DynamicDropDownMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
        theme: 'dark',
        navigation: this.props.navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Header, "propTypes", {
  navigation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
});

_defineProperty(Header, "defaultProps", {
  navigation: []
});

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout/Layout.scss":
/*!*******************************************!*\
  !*** ./src/components/Layout/Layout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_layout_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/layout.action */ "./src/store/actions/layout.action.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Layout.scss */ "./src/components/Layout/Layout.scss");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Layout_scss__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/Layout/index.js";











var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Layout bg-dots-gray-large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    navigation: props.navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Logo/Logo.scss":
/*!***************************************!*\
  !*** ./src/components/Logo/Logo.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Logo/index.js":
/*!**************************************!*\
  !*** ./src/components/Logo/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logo_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo.scss */ "./src/components/Logo/Logo.scss");
/* harmony import */ var _Logo_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Logo_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/Logo/index.js";





var Logo = function Logo(props) {
  var size = props.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, size === 'big' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/logo-b.png",
    alt: "logo",
    width: "153px",
    height: "153px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/logo-s.png",
    alt: "logo",
    width: "65px",
    height: "60px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })));
};

Logo.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/MenuLink/MenuLink.js":
/*!*********************************************!*\
  !*** ./src/components/MenuLink/MenuLink.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MenuLink_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuLink.scss */ "./src/components/MenuLink/MenuLink.scss");
/* harmony import */ var _MenuLink_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MenuLink_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/MenuLink/MenuLink.js";





var MenuLink = function MenuLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href,
      theme = _ref.theme,
      as = _ref.as;
  var active = router.pathname === href ? 'active' : '';

  var handleClick = function handleClick(e) {
    e.preventDefault();

    if (as) {
      router.push("".concat(href), "".concat(as), {
        shallow: true
      });
    } else {
      router.push(href);
    }
  };

  console.log("".concat(as ? as : href));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MenuLink ".concat(active, " ").concat(theme),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    onClick: handleClick,
    as: "".concat(as ? as : href),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activeItemIndicator ".concat(theme),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

MenuLink.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(MenuLink));

/***/ }),

/***/ "./src/components/MenuLink/MenuLink.scss":
/*!***********************************************!*\
  !*** ./src/components/MenuLink/MenuLink.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/MenuLink/index.js":
/*!******************************************!*\
  !*** ./src/components/MenuLink/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuLink.js */ "./src/components/MenuLink/MenuLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuLink_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/MobileMenu/MobileMenu.scss":
/*!***************************************************!*\
  !*** ./src/components/MobileMenu/MobileMenu.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/MobileMenu/index.js":
/*!********************************************!*\
  !*** ./src/components/MobileMenu/index.js ***!
  \********************************************/
/*! exports provided: MobileMenu, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenu", function() { return MobileMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MobileMenu_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileMenu.scss */ "./src/components/MobileMenu/MobileMenu.scss");
/* harmony import */ var _MobileMenu_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MobileMenu_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/MobileMenu/index.js";




var MobileMenu = function MobileMenu(props) {
  var color = props.theme === 'dark' ? 'white' : 'black';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'MobileMenu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-bar-chart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "10",
    stroke: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "4",
    stroke: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "16",
    stroke: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })));
};
MobileMenu.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./src/components/PhoneNumber/PhoneNumber.js":
/*!***************************************************!*\
  !*** ./src/components/PhoneNumber/PhoneNumber.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PhoneNumber_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhoneNumber.scss */ "./src/components/PhoneNumber/PhoneNumber.scss");
/* harmony import */ var _PhoneNumber_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PhoneNumber_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/PhoneNumber/PhoneNumber.js";




var PhoneNumber = function PhoneNumber(_ref) {
  var theme = _ref.theme,
      number = _ref.number;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel:".concat(number),
    className: "PhoneNumber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, number));
};

PhoneNumber.propTypes = {
  number: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PhoneNumber);

/***/ }),

/***/ "./src/components/PhoneNumber/PhoneNumber.scss":
/*!*****************************************************!*\
  !*** ./src/components/PhoneNumber/PhoneNumber.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/PhoneNumber/index.js":
/*!*********************************************!*\
  !*** ./src/components/PhoneNumber/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PhoneNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PhoneNumber.js */ "./src/components/PhoneNumber/PhoneNumber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PhoneNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/StaticMenu/StaticMenu.scss":
/*!***************************************************!*\
  !*** ./src/components/StaticMenu/StaticMenu.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/StaticMenu/index.js":
/*!********************************************!*\
  !*** ./src/components/StaticMenu/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MenuLink */ "./src/components/MenuLink/index.js");
/* harmony import */ var _StaticMenu_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StaticMenu.scss */ "./src/components/StaticMenu/StaticMenu.scss");
/* harmony import */ var _StaticMenu_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_StaticMenu_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/StaticMenu/index.js";





var StaticMenu = function StaticMenu(props) {
  var direction = props.direction,
      theme = props.theme;
  var style = {
    flexDirection: direction ? direction : 'row'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "StaticMenu",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/about",
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\u05D0\u05D5\u05D3\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\u05E8\u05D0\u05E9\u05D9"));
};

StaticMenu.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (StaticMenu);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  env: process && process.env && "development" || "development",
  apiUrl: process && process.env && process.env.API_URL || undefined
});

/***/ }),

/***/ "./src/libs/api.js":
/*!*************************!*\
  !*** ./src/libs/api.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);

    _defineProperty(this, "url", void 0);

    this.url = _config__WEBPACK_IMPORTED_MODULE_1__["default"].env === 'production' ? _config__WEBPACK_IMPORTED_MODULE_1__["default"].apiUrl : 'http://localhost:8080';
  }

  _createClass(Api, [{
    key: "get",
    value: function get(endPoint) {
      var path = "".concat(this.url, "/api/").concat(endPoint);
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(path).then(function (res) {
        return res.data;
      }).catch(function (err) {
        return console.log('err', "".concat(path, ":: ").concat(err));
      });
    }
  }]);

  return Api;
}();

/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./src/store/actions/layout.action.js":
/*!********************************************!*\
  !*** ./src/store/actions/layout.action.js ***!
  \********************************************/
/*! exports provided: actionTypes, fetchLayout, layoutLoadSuccess, resetLayoutState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLayout", function() { return fetchLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutLoadSuccess", function() { return layoutLoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLayoutState", function() { return resetLayoutState; });
/* harmony import */ var _libs_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs/api */ "./src/libs/api.js");

var layoutApi = new _libs_api__WEBPACK_IMPORTED_MODULE_0__["default"]();
var actionTypes = {
  LOAD_LAYOUT: 'LOAD_LAYOUT',
  LOAD_LAYOUT_SUCCESS: 'LOAD_LAYOUT_SUCCESS',
  LOAD_LAYOUT_ERROR: 'LOAD_LAYOUT_ERROR',
  RESET_LAYOUT_STORE: 'RESET_LAYOUT_STORE'
};
var fetchLayout = function fetchLayout(payload) {
  return function (dispatch) {
    return layoutApi.get('pages/navigation').then(function (res) {
      return dispatch({
        type: actionTypes.LOAD_LAYOUT_SUCCESS,
        payload: res
      });
    });
  };
};
var layoutLoadSuccess = function layoutLoadSuccess(payload) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.LOAD_LAYOUT_SUCCESS,
      payload: payload
    });
  };
};
var resetLayoutState = function resetLayoutState() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RESET_LAYOUT_STORE
    });
  };
};

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "underscore":
/*!*****************************!*\
  !*** external "underscore" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map