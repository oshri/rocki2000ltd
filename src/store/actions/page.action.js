import Api from '../../libs/api';
const pageApi = new Api();

export const actionTypes = {
    LOAD_PAGE: 'LOAD_PAGE',
    LOAD_PAGE_SUCCESS: 'LOAD_PAGE_SUCCESS',
    LOAD_PAGE_ERROR: 'LOAD_PAGE_ERROR',
    RESET_PAGE_STORE: 'RESET_PAGE_STORE'
}

export const fetchPage = (payload) => {
    return (dispatch) => pageApi.get(`pages/${payload}`).then((res) => {
        return dispatch({ type: actionTypes.LOAD_PAGE_SUCCESS, payload: res });
    });
}
  
export const pageLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOAD_PAGE_SUCCESS, payload: payload})
}

export const resetPageState = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_PAGE_STORE })
}
