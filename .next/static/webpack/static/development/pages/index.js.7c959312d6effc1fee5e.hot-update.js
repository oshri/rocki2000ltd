webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/store/reducers/layout.reducer.js":
/*!**********************************************!*\
  !*** ./src/store/reducers/layout.reducer.js ***!
  \**********************************************/
/*! exports provided: initialPageState, layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPageState", function() { return initialPageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layout", function() { return layout; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/layout.action */ "./src/store/actions/layout.action.js");


var initialPageState = immutable__WEBPACK_IMPORTED_MODULE_0___default.a.fromJS({
  isLoading: false,
  data: undefined
});
var layout = function layout() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPageState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOAD_LAYOUT:
      return Object.assign({}, state, {
        isLoading: true
      });

    case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOAD_LAYOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.payload
      });

    case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOAD_LAYOUT_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        data: undefined
      });

    case _actions_layout_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].RESET_LAYOUT_STORE:
      return Object.assign({}, state, {
        isLoading: false,
        data: undefined
      });

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=index.js.7c959312d6effc1fee5e.hot-update.js.map