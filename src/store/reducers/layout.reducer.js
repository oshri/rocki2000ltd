import Immutable from 'immutable';
import { actionTypes } from '../actions/layout.action';

export const initialPageState = Immutable.fromJS({
  isLoading: false,
  data: undefined
});


export const layout = (state = initialPageState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_LAYOUT:
            return Object.assign({}, state, {
            isLoading: true
            });
        case actionTypes.LOAD_LAYOUT_SUCCESS:
            return Object.assign({}, state, {
            isLoading: false,
            data: action.payload
            });
        case actionTypes.LOAD_LAYOUT_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                data: undefined
            });
        case actionTypes.RESET_LAYOUT_STORE:
            return Object.assign({}, state, {
                isLoading: false,
                data: undefined
            });
        default: return state
    }
};