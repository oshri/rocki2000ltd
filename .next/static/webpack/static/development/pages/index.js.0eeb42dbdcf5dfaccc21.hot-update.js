webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _store_actions_layout_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/layout.action */ "./src/store/actions/layout.action.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Layout.scss */ "./src/components/Layout/Layout.scss");
/* harmony import */ var _Layout_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Layout_scss__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/src/components/Layout/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "PAGE_SEO", void 0);

    debugger;
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.PAGE_SEO = {
        title: 'Rocki 2000 ltd | Page',
        description: 'page description',
        openGraph: {
          type: 'website',
          locale: 'en_US',
          url: 'https://www.rocki2000ltd.co.il/page',
          title: 'Rocki 2000 ltd | Page',
          description: 'page description Open Graph',
          image: '',
          site_name: 'rocki2000ltd.co.il',
          imageWidth: 1200,
          imageHeight: 1200
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "Layout bg-dots-gray-large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        navigation: this.props.navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "page-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store;
                debugger;
                _context.next = 4;
                return store.dispatch(Object(_store_actions_layout_action__WEBPACK_IMPORTED_MODULE_5__["fetchLayout"])());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // Passing data to props from Store


function mapStateToProps(state) {
  return {
    navigation: state.data
  };
} // Passing Dispatch function to props


function mapDispatchToProps(dispatch) {
  return {
    fetchLayout: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_store_actions_layout_action__WEBPACK_IMPORTED_MODULE_5__["fetchLayout"], dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Layout));

/***/ })

})
//# sourceMappingURL=index.js.0eeb42dbdcf5dfaccc21.hot-update.js.map