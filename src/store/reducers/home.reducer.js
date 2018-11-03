// import Immutable from 'immutable';
import { actionTypes } from '../actions/home.action';

// export const initialPageState = Immutable.fromJS({
//   isLoading: false,
//   navigation: []
// });


export const initialHomeState = {
    isLoading: false,
    parents: [],
    pages: []
  };

export const home = (state = initialHomeState, action) => {

    switch (action.type) {
        case actionTypes.LOAD_HOME:
            return Object.assign({}, state, {
                isLoading: true
            });
        case actionTypes.LOAD_HOME_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                parents: action.payload.parents,
                pages: action.payload.homePages
            });
        case actionTypes.LOAD_LAYOUT_ERROR:
            return Object.assign({}, state, {
                isLoading: false
            });
        case actionTypes.RESET_LAYOUT_STORE:
            return Object.assign({}, state, initialHomeState);
        default: return state
    }
};