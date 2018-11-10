import { actionTypes } from '../../actions/admin/pages.action';


export const initialPageState = {
    isLoading: false,
    data: undefined
};


export const pages = (state = initialPageState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ADMIN_PAGES:
            return Object.assign({}, state, {
            isLoading: true
            });
        case actionTypes.LOAD_ADMIN_PAGES_SUCCESS:
            return Object.assign({}, state, {
            isLoading: false,
            data: action.payload
            });
        case actionTypes.LOAD_ADMIN_PAGES_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                data: undefined
            });
        case actionTypes.RESET_ADMIN_PAGES_STORE:
            return Object.assign({}, state, {
                isLoading: false,
                data: undefined
            });
        default: return state
    }
};