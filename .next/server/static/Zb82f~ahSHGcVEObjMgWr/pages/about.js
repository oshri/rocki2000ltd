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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(11);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Header/Header.scss
var Header_Header = __webpack_require__(17);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(1);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(13);

// EXTERNAL MODULE: ./components/MenuLink/MenuLink.scss
var MenuLink_MenuLink = __webpack_require__(18);

// CONCATENATED MODULE: ./components/MenuLink/MenuLink.js





var MenuLink_MenuLink_MenuLink = function MenuLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href,
      theme = _ref.theme;
  var active = router.pathname === href ? 'active' : '';

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  var themeColor = function themeColor(theme) {
    return theme === 'light' ? 'black' : 'white';
  };

  return external_react_default.a.createElement("div", {
    className: "MenuLink ".concat(active),
    style: {
      color: themeColor(theme)
    }
  }, external_react_default.a.createElement("a", {
    href: href,
    onClick: handleClick
  }, children), external_react_default.a.createElement("div", {
    className: "activeItemIndicator",
    style: {
      background: themeColor(theme)
    }
  }));
};

/* harmony default export */ var components_MenuLink_MenuLink = (Object(router_["withRouter"])(MenuLink_MenuLink_MenuLink));
// CONCATENATED MODULE: ./components/MenuLink/index.js

// EXTERNAL MODULE: ./components/Menu/Menu.scss
var Menu_Menu = __webpack_require__(19);

// CONCATENATED MODULE: ./components/Menu/index.js





var components_Menu_Menu = function Menu(props) {
  var direction = props.direction,
      theme = props.theme;
  var style = {
    flexDirection: direction ? direction : 'row'
  };
  return external_react_default.a.createElement("div", {
    className: "menu-wrap",
    style: style
  }, external_react_default.a.createElement(components_MenuLink_MenuLink, {
    href: "/about",
    theme: theme
  }, "\u05D0\u05D5\u05D3\u05D5\u05EA"), external_react_default.a.createElement(components_MenuLink_MenuLink, {
    href: "/",
    theme: theme
  }, "\u05E8\u05D0\u05E9\u05D9"));
};

/* harmony default export */ var components_Menu = (components_Menu_Menu);
// EXTERNAL MODULE: ./components/Logo/Logo.scss
var Logo_Logo = __webpack_require__(20);

// CONCATENATED MODULE: ./components/Logo/index.js





var components_Logo_Logo = function Logo(props) {
  var size = props.size;
  return external_react_default.a.createElement("div", {
    className: "Logo"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, size === 'big' ? external_react_default.a.createElement("img", {
    src: "/static/logo-b.png",
    alt: "logo",
    width: "153px",
    height: "153px"
  }) : external_react_default.a.createElement("img", {
    src: "/static/logo-s.png",
    alt: "logo",
    width: "65px",
    height: "60px"
  })));
};

/* harmony default export */ var components_Logo = (components_Logo_Logo);
// CONCATENATED MODULE: ./components/Header/index.js
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







var components_Header_Header =
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

      external_underscore_["throttle"](this.hasScrolled(), 250);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("header", {
        id: "navbar",
        className: "Header " + this.state.navClass
      }, external_react_default.a.createElement("article", null, external_react_default.a.createElement(components_Logo, null), external_react_default.a.createElement(components_Menu, {
        theme: 'light'
      })));
    }
  }]);

  return Header;
}(external_react_["Component"]);

/* harmony default export */ var components_Header = (components_Header_Header);
// EXTERNAL MODULE: ./components/PhoneNumber/PhoneNumber.scss
var PhoneNumber_PhoneNumber = __webpack_require__(21);

// CONCATENATED MODULE: ./components/PhoneNumber/PhoneNumber.js




var PhoneNumber_PhoneNumber_PhoneNumber = function PhoneNumber(_ref) {
  var theme = _ref.theme,
      number = _ref.number;
  return external_react_default.a.createElement("a", {
    href: "tel:".concat(number),
    className: "PhoneNumber"
  }, external_react_default.a.createElement("span", null, number));
};

/* harmony default export */ var components_PhoneNumber_PhoneNumber = (PhoneNumber_PhoneNumber_PhoneNumber);
// CONCATENATED MODULE: ./components/PhoneNumber/index.js

// EXTERNAL MODULE: ./components/CellNumber/CellNumber.scss
var CellNumber_CellNumber = __webpack_require__(22);

// CONCATENATED MODULE: ./components/CellNumber/CellNumber.js




var CellNumber_CellNumber_CellNumber = function CellNumber(_ref) {
  var theme = _ref.theme,
      number = _ref.number;
  return external_react_default.a.createElement("a", {
    href: "tel:".concat(number),
    className: "CellNumber"
  }, external_react_default.a.createElement("span", null, number));
};

/* harmony default export */ var components_CellNumber_CellNumber = (CellNumber_CellNumber_CellNumber);
// CONCATENATED MODULE: ./components/CellNumber/index.js

// EXTERNAL MODULE: ./components/FaxNumber/FaxNumber.scss
var FaxNumber_FaxNumber = __webpack_require__(23);

// CONCATENATED MODULE: ./components/FaxNumber/FaxNumber.js




var FaxNumber_FaxNumber_FaxNumber = function FaxNumber(_ref) {
  var theme = _ref.theme,
      number = _ref.number;
  return external_react_default.a.createElement("div", {
    className: "FaxNumber"
  }, external_react_default.a.createElement("span", null, number));
};

/* harmony default export */ var components_FaxNumber_FaxNumber = (FaxNumber_FaxNumber_FaxNumber);
// CONCATENATED MODULE: ./components/FaxNumber/index.js

// EXTERNAL MODULE: ./components/Address/Address.scss
var Address_Address = __webpack_require__(24);

// CONCATENATED MODULE: ./components/Address/Address.js




var Address_Address_Address = function Address(_ref) {
  var theme = _ref.theme,
      url = _ref.url;
  return external_react_default.a.createElement("div", {
    className: "Address"
  }, external_react_default.a.createElement("span", null, url));
};

/* harmony default export */ var components_Address_Address = (Address_Address_Address);
// CONCATENATED MODULE: ./components/Address/index.js

// EXTERNAL MODULE: ./components/Footer/Footer.scss
var Footer_Footer = __webpack_require__(25);

// CONCATENATED MODULE: ./components/Footer/Footer.js










var Footer_Footer_Footer = function Footer(props) {
  var theme = props.theme;
  return external_react_default.a.createElement("div", {
    className: "Footer"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "top-level "
  }, external_react_default.a.createElement("div", {
    className: "rocki-logo"
  }, external_react_default.a.createElement(components_Logo, {
    size: 'big'
  })), external_react_default.a.createElement("div", {
    className: "more-info"
  }, external_react_default.a.createElement("div", {
    className: "conatct-info"
  }, external_react_default.a.createElement(components_PhoneNumber_PhoneNumber, {
    number: '08-9461555'
  }), external_react_default.a.createElement(components_CellNumber_CellNumber, {
    number: '054-7272554'
  }), external_react_default.a.createElement(components_FaxNumber_FaxNumber, {
    number: '08-9361574'
  }), external_react_default.a.createElement(components_Address_Address, {
    url: 'היצירה 2 א.ת. קרית רכטמן רחובות'
  }))), external_react_default.a.createElement("div", {
    className: "menu-links-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "menu-links"
  }, external_react_default.a.createElement(components_Menu, {
    direction: 'column'
  })))), external_react_default.a.createElement("div", {
    className: "bottom-level"
  }, external_react_default.a.createElement("div", {
    className: "copyright"
  }, "\xA9 \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \u05DC\u05D9.\u05E8\u05D5\u05E7\u05D9 \u05EA\u05E2\u05E9\u05D9\u05D5\u05EA 2000 \u05D1\u05E2\"\u05DE (\u05DE\u05E8\u05E4\u05D3\u05D9\u05EA \u05E8\u05D5\u05E7\u05D9)"))));
};

Footer_Footer_Footer.defaultProps = {
  theme: 'dark'
};
/* harmony default export */ var components_Footer_Footer = (Footer_Footer_Footer);
// CONCATENATED MODULE: ./components/Footer/index.js

// CONCATENATED MODULE: ./components/Layout/index.js






var Layout_Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Rocki 2000 ltd' : _ref$title;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), external_react_default.a.createElement(components_Header, null), children, external_react_default.a.createElement(components_Footer_Footer, null));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports) {



/***/ }),
/* 21 */
/***/ (function(module, exports) {



/***/ }),
/* 22 */
/***/ (function(module, exports) {



/***/ }),
/* 23 */
/***/ (function(module, exports) {



/***/ }),
/* 24 */
/***/ (function(module, exports) {



/***/ }),
/* 25 */
/***/ (function(module, exports) {



/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    title: "Home mage"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "page-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About Next JS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et eos sit vero ab laborum nulla culpa, quis neque ex, voluptatum, eveniet amet autem obcaecati animi ratione quo officiis at!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Voluptas obcaecati et adipisci quasi omnis dolores odio eos hic modi voluptatum ratione ullam sequi aspernatur ducimus exercitationem possimus, sint rem officiis esse recusandae, eveniet laborum repellat. Ipsum, culpa reprehenderit."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Facilis deleniti dolore neque excepturi hic, tempora dolores repellat ipsum quis nihil! Dolor sapiente asperiores laborum aperiam necessitatibus obcaecati adipisci temporibus itaque optio saepe similique perspiciatis nulla ullam, voluptatibus praesentium?"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })
/******/ ]);