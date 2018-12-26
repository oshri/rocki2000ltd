import Api from '../../../libs/api';
const tagsApi = new Api();

export const actionTypes = {
    LOAD_PAGE_TAGS: 'LOAD_PAGE_TAGS',
    LOAD_PAGE_TAGS_SUCCESS: 'LOAD_PAGE_TAGS_SUCCESS',
    CREATE_TAG: 'CREATE_TAG',
	CREATE_TAG_SUCCESS: 'CREATE_TAG_SUCCESS',
	UPDATE_TAG: 'UPDATE_TAG',
	UPDATE_TAG_SUCCESS: 'UPDATE_TAG_SUCCESS',
	REMOVE_TAG: 'REMOVE_TAG',
	REMOVE_TAG_SUCCESS: 'REMOVE_TAG_SUCCESS',
    REQUEST_ERROR: 'REQUEST_ERROR',
    RESET_TAGS_STORE: 'RESET_ADMIN_PAGES_STORE'
}

export const loadPageTags = (payload) => {
    return (dispatch) => tagsApi.get(`pages/${payload}/tags`).then((res) => {
        return dispatch({ type: actionTypes.LOAD_PAGE_TAGS_SUCCESS, payload: res });
    });
}

export const createTags = (payload) => {
    return (dispatch) => tagsApi.post(`pages/${payload.pageId}/tags`, payload).then((res) => {
        return dispatch({ type: actionTypes.CREATE_TAG_SUCCESS, payload: res });
    }).catch((err) => {
        return dispatch({ type: actionTypes.REQUEST_ERROR, payload: err.data.error})
    });
}

export const removeTag = (payload) => {
    return (dispatch) => tagsApi.delete(`pages/${payload.pageId}/tags?tageName=${payload.name}`).then((res) => {
        return dispatch({type: actionTypes.REMOVE_TAG_SUCCESS, paylaod: res});
    }).catch((err) => {
        return dispatch({ type: actionTypes.REQUEST_ERROR, payload: err.data.error})
    });
}
  
export const loadingStart = () => (dispatch) => {
    return dispatch({type: actionTypes.LOAD_TAGS})
};

export const resetTagsState = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_TAGS_STORE })
}
