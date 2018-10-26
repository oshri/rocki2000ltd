import Immutable from 'immutable';
import { actionTypes } from '../actions/page.action';

export const initialPageState = Immutable.fromJS({
  isLoading: false,
  data: undefined
});


export const page = (state = initialPageState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PAGE:
            return Object.assign({}, state, {
            isLoading: true
            });
        case actionTypes.LOAD_PAGE_SUCCESS:
            return Object.assign({}, state, {
            isLoading: false,
            data: action.payload
            });
        case actionTypes.LOAD_PAGE_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                data: undefined
            });
        case actionTypes.RESET_PAGE_STORE:
            return Object.assign({}, state, {
                isLoading: false,
                data: undefined
            });
        default: return state
    }
};