webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);

var actionTypes = {
  LOAD_LAYOUT: 'LOAD_LAYOUT',
  LOAD_LAYOUT_SUCCESS: 'LOAD_LAYOUT_SUCCESS',
  LOAD_LAYOUT_ERROR: 'LOAD_LAYOUT_ERROR',
  RESET_LAYOUT_STORE: 'RESET_LAYOUT_STORE'
};
var fetchLayout = function fetchLayout(payload) {
  return function (dispatch) {
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("http://localhost:8080/api/pages/navigation").then(function (res) {
      return res.json();
    }).then(function (data) {
      debugger;
      return dispatch({
        type: actionTypes.LOAD_LAYOUT_SUCCESS,
        payload: data
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

/***/ })

})
//# sourceMappingURL=_app.js.8a03b99b5a8b5afc4e2d.hot-update.js.map