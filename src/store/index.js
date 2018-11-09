import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';


import rootReducer from './reducers';

const initialState = {
  layout: undefined,
  page: undefined
}


export function initializeStore (initialState = initialState) {
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(logger, thunkMiddleware)))
}