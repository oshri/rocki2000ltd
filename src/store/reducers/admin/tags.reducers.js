import { actionTypes } from '../../actions/admin/tags.action';


export const initialTagsState = {
    isLoading: false,
    data: undefined
};


export const tags = (state = initialTagsState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PAGE_TAGS:
            return Object.assign({}, state, {
            	isLoading: true
            });
		case actionTypes.LOAD_PAGE_TAGS_SUCCESS:
			return Object.assign({}, state, {
            	isLoading: false,
            	data: action.payload
            });
        case actionTypes.REQUEST_ERROR:
            return Object.assign({}, state, {
                isLoading: false
            }); 
			
        default: return state
    }
};