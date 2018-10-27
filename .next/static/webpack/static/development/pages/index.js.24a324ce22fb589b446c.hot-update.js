webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/MenuLink/MenuLink.js":
/*!*********************************************!*\
  !*** ./src/components/MenuLink/MenuLink.js ***!
  \*********************************************/
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

/***/ })

})
//# sourceMappingURL=index.js.24a324ce22fb589b446c.hot-update.js.map