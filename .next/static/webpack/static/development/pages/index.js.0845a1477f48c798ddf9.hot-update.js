webpackHotUpdate("static/development/pages/index.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, serverRenderClock, fetchNavigation, navigationLoadSuccess, navigationLoad, resetState, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRenderClock", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNavigation", function() { return fetchNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationLoadSuccess", function() { return navigationLoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationLoad", function() { return navigationLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetState", function() { return resetState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);





var initialState = {
  navigation: []
};
var actionTypes = {
  NAVIGATION_LOAD: 'NAVIGATION_LOAD',
  NAVIGATION_LOAD_SUCCESS: 'NAVIGATION_LOAD_SUCCESS',
  NAVIGATION_LOAD_ERROR: 'NAVIGATION_LOAD_ERROR',
  RESET_STORE: 'RESET_STORE' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.NAVIGATION_LOAD_SUCCESS:
      return Object.assign({}, state, {
        navigation: action.payload
      });

    case actionTypes.RESET_STORE:
      return Object.assign({}, state, {
        navigation: initialState.navigation
      });

    default:
      return state;
  }
}; // ACTIONS

var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.TICK,
      payload: !isServer
    });
  };
};
var fetchNavigation = function fetchNavigation(dispatch) {
  return function (dispatch) {
    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(process.env.API_URL || 'http://localhost:8080/api/', "pages/navigation")).then(function (res) {
      return res.json();
    }).then(function (data) {
      return dispatch({
        type: actionTypes.NAVIGATION_LOAD_SUCCESS,
        payload: data
      });
    });
  };
};
var navigationLoadSuccess = function navigationLoadSuccess(payload) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.NAVIGATION_LOAD_SUCCESS,
      payload: payload
    });
  };
};
var navigationLoad = function navigationLoad() {
  return function (dispatch) {
    dispatch({
      type: actionTypes.NAVIGATION_LOAD
    });
  };
};
var resetState = function resetState() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.RESET_STORE
    });
  };
};
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_logger__WEBPACK_IMPORTED_MODULE_4___default.a, redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"])));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.0845a1477f48c798ddf9.hot-update.js.map