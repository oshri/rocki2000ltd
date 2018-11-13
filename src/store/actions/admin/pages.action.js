import Api from '../../../libs/api';
const pagesApi = new Api();

export const actionTypes = {
    LOAD_ADMIN_PAGES: 'LOAD_ADMIN_PAGES',
    LOAD_ADMIN_PAGES_SUCCESS: 'LOAD_ADMIN_PAGES_SUCCESS',
    LOAD_ADMIN_PAGES_ERROR: 'LOAD_ADMIN_PAGES_ERROR',
    UPDATE_PAGE: 'UPDATE_PAGE',
    UPDATE_PAGE_SUCCESS: 'UPDATE_PAGE_SUCCESS',
    REQUEST_ERROR: 'REQUEST_ERROR',
    RESET_ADMIN_PAGES_STORE: 'RESET_ADMIN_PAGES_STORE'
}

export const fetchPages = () => {
    debugger
    return (dispatch) => pagesApi.get(`pages/all`).then((res) => {
        return dispatch({ type: actionTypes.LOAD_ADMIN_PAGES_SUCCESS, payload: res });
    });
}

export const updatePage = (payload) => {
    return (dispatch) => pagesApi.put(`pages/${payload.id}`, payload).then((res) => {
        return dispatch({type: actionTypes.UPDATE_PAGE_SUCCESS, paylaod: res});
    }).catch((err) => {
        return dispatch({ type: actionTypes.REQUEST_ERROR, payload: err.data.error})
    });
}

export const pagesLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOAD_ADMIN_PAGES_SUCCESS, payload: payload})
}
  

export const resetAdminPagesState = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_ADMIN_PAGES_STORE })
}
