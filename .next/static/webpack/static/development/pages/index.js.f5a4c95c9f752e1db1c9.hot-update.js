webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui/AppBar */ "./node_modules/material-ui/AppBar/index.js");
/* harmony import */ var material_ui_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu */ "./components/Menu/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Logo */ "./components/Logo/index.js");


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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "navbarHeight", 50);

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

      underscore__WEBPACK_IMPORTED_MODULE_1__["throttle"](this.hasScrolled(), 250);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        id: "navbar",
        className: "Header " + this.state.navClass
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.f5a4c95c9f752e1db1c9.hot-update.js.map