// import Immutable from 'immutable';
import { actionTypes } from '../actions/auth.action';

// export const initialPageState = Immutable.fromJS({
//   isLoading: false,
//   data: undefined
// });

export const initialPageState = {
    isLoading: false,
    data: null
};


export const auth = (state = initialPageState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return Object.assign({}, state, {
                isLoading: true
            });
        case actionTypes.LOGION_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.payload
            });
        case actionTypes.LOGION_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                data: null
            });
        case actionTypes.LOAD_TAGS_SUCCESS:
            return LoadTags(state, action.payload);

        case actionTypes.RESET_LOGIN_FORM:
            return Object.assign({}, state, {
                isLoading: false,
                data: null
            });
        default: return state
    }
};