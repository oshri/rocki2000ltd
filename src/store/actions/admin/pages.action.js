import Api from '../../../libs/api';
const pagesApi = new Api();

export const actionTypes = {
    LOAD_ADMIN_PAGES: 'LOAD_ADMIN_PAGES',
    LOAD_ADMIN_PAGES_SUCCESS: 'LOAD_ADMIN_PAGES_SUCCESS',
    LOAD_ADMIN_PAGES_ERROR: 'LOAD_ADMIN_PAGES_ERROR',
    RESET_ADMIN_PAGES_STORE: 'RESET_ADMIN_PAGES_STORE'
}

export const fetchPages = () => {
    return (dispatch) => pagesApi.get(`pages/all`).then((res) => {
        return dispatch({ type: actionTypes.LOAD_ADMIN_PAGES_SUCCESS, payload: res });
    });
}

export const pagesLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOAD_ADMIN_PAGES_SUCCESS, payload: payload})
}
  

export const resetAdminPagesState = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_ADMIN_PAGES_STORE })
}
