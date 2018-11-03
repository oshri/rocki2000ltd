// import Immutable from 'immutable';
import { actionTypes } from '../actions/page.action';

// export const initialPageState = Immutable.fromJS({
//   isLoading: false,
//   data: undefined
// });

export const initialPageState = {
    isLoading: false,
    data: undefined,
    instagram: undefined
};


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
        case actionTypes.LOAD_TAGS_SUCCESS:
            return LoadTags(state, action.payload);
        case actionTypes.RESET_PAGE_STORE:
            return Object.assign({}, state, {
                isLoading: false,
                data: undefined
            });
        default: return state
    }
};

function LoadTags(state, payload) {
    const images = payload.map((t) => t.data[0]);
    return {...state, ...{ isLoading: false,
        instagram: images}}
}