webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/dist/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _src_store_actions_layout_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store/actions/layout.action */ "./src/store/actions/layout.action.js");
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_scss_style_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_Splash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Splash */ "./src/components/Splash/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/pages/index.js";











var Home = function Home(props) {
  var PAGE_SEO = {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Home page",
    navigation: props.navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_seo__WEBPACK_IMPORTED_MODULE_2___default.a, {
    config: PAGE_SEO,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Splash__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    outline: true,
    color: "primary",
    onClick: props.fetchLayout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    icon: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), "get Layout"));
}; // Home.getInitialProps = async ({ store }) => {
// 	await store.dispatch(fetchLayout());
// };
// Passing data to props from Store


function mapStateToProps(state) {
  return {
    navigation: state.layout.navigation
  };
} // Passing Dispatch function to props


function mapDispatchToProps(dispatch) {
  return {
    fetchLayout: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_src_store_actions_layout_action__WEBPACK_IMPORTED_MODULE_6__["fetchLayout"], dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Home)); // export default Home;
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.e95874bc0a07f6c3d755.hot-update.js.map