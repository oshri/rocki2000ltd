import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import fetch from 'isomorphic-fetch';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'

const initialState = {
  navigation: []
}

export const actionTypes = {
  NAVIGATION_LOAD: 'NAVIGATION_LOAD',
  NAVIGATION_LOAD_SUCCESS: 'NAVIGATION_LOAD_SUCCESS',
  NAVIGATION_LOAD_ERROR: 'NAVIGATION_LOAD_ERROR',
  RESET_STORE: 'RESET_STORE'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NAVIGATION_LOAD_SUCCESS:
      return Object.assign({}, state, {
        navigation: action.payload
      })
    case actionTypes.RESET_STORE:
      return Object.assign({}, state, {
        navigation: initialState.navigation
      })
    default: return state
  }
}

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, payload: !isServer })
}

export const fetchNavigation = (dispatch) => {
  return (dispatch) => fetch(`${process.env.API_URL || 'http://localhost:8080/api/'}pages/navigation`)
        .then((res) => res.json())
        .then(data => {
          return dispatch({ type: actionTypes.NAVIGATION_LOAD_SUCCESS, payload: data })
        });
}

export const navigationLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.NAVIGATION_LOAD_SUCCESS, payload: payload})
}

export const navigationLoad = () =>  dispatch => {
  dispatch({ type: actionTypes.NAVIGATION_LOAD})
}

export const resetState = () => dispatch => {
  return dispatch({ type: actionTypes.RESET_STORE })
}

export function initializeStore (initialState = initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(logger, thunkMiddleware)))
}