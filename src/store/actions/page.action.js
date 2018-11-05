import Api from '../../libs/api';
const pageApi = new Api();

export const actionTypes = {
    LOAD_PAGE: 'LOAD_PAGE',
    LOAD_PAGE_SUCCESS: 'LOAD_PAGE_SUCCESS',
    LOAD_PAGE_ERROR: 'LOAD_PAGE_ERROR',
    RESET_PAGE_STORE: 'RESET_PAGE_STORE',
    LOAD_TAGS: 'LOAD_TAGS',
    LOAD_TAGS_SUCCESS: 'LOAD_TAGS_SUCCESS',
    LOAD_TAGS_ERROR: 'LOAD_TAGS_ERROR',
}

export const fetchPage = (payload) => {
    return (dispatch) => pageApi.get(`pages/${payload}`).then((res) => {
        return dispatch({ type: actionTypes.LOAD_PAGE_SUCCESS, payload: res });
    });
}

export const pageLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOAD_PAGE_SUCCESS, payload: payload})
}

export const fetchTags = (payload) => {
    return (dispatch) => pageApi.post(`instagram/tags`, {tags: payload}).then((res) => {
        return dispatch({ type: actionTypes.LOAD_TAGS_SUCCESS, payload: res });
    });
}

export const tagsLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOAD_PAGE_SUCCESS, payload: payload})
}
  

export const resetPageState = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_PAGE_STORE })
}
