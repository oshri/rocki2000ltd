webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MenuLink/MenuLink.js":
/*!*****************************************!*\
  !*** ./components/MenuLink/MenuLink.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MenuLink_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuLink.scss */ "./components/MenuLink/MenuLink.scss");
/* harmony import */ var _MenuLink_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MenuLink_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ok13067/projects/rocki2000ltd/components/MenuLink/MenuLink.js";





var MenuLink = function MenuLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href,
      theme = _ref.theme;
  var active = router.pathname === href ? 'active' : '';

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MenuLink ".concat(active, " ").concat(theme),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "activeItemIndicator ".concat(theme),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

MenuLink.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(MenuLink));

/***/ })

})
//# sourceMappingURL=index.js.e983e3ddc3079a7f2f6a.hot-update.js.map