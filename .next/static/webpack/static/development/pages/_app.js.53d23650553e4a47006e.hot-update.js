webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _actions_layout_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/layout.action */ "./src/store/actions/layout.action.js");
// import Immutable from 'immutable';
 // export const initialPageState = Immutable.fromJS({
//   isLoading: false,
//   navigation: []
// });

var initialPageState = {
  isLoading: false,
  navigation: []
};
var layout = function layout() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPageState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_layout_action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_LAYOUT:
      return Object.assign({}, state, {
        isLoading: true
      });

    case _actions_layout_action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_LAYOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        navigation: action.payload
      });

    case _actions_layout_action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOAD_LAYOUT_ERROR:
      return Object.assign({}, state, {
        isLoading: false
      });

    case _actions_layout_action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].RESET_LAYOUT_STORE:
      return Object.assign({}, state, initialPageState);

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.53d23650553e4a47006e.hot-update.js.map