import Api from '../../../libs/api';
const pagesApi = new Api();

export const actionTypes = {
    LOAD_ADMIN_PAGES: 'LOAD_ADMIN_PAGES',
    LOAD_ADMIN_PAGES_SUCCESS: 'LOAD_ADMIN_PAGES_SUCCESS',
    LOAD_ADMIN_PAGES_ERROR: 'LOAD_ADMIN_PAGES_ERROR',
    UPDATE_PAGE: 'UPDATE_PAGE',
    UPDATE_PAGE_SUCCESS: 'UPDATE_PAGE_SUCCESS',
    CREATE_PAGE: 'CREATE_PAGE',
    CREATE_PAGE_SUCCESS: 'CREATE_PAGE_SUCCESS',
    DELETE_PAGE: 'DELETE_PAGE',
    DELETE_PAGE_SUCCESS: 'DELETE_PAGE_SUCCESS',
    REQUEST_ERROR: 'REQUEST_ERROR',
    RESET_ADMIN_PAGES_STORE: 'RESET_ADMIN_PAGES_STORE'
}

export const fetchPages = () => {
    return (dispatch) => pagesApi.get(`pages/all`).then((res) => {
        return dispatch({ type: actionTypes.LOAD_ADMIN_PAGES_SUCCESS, payload: res });
    });
}

export const updatePage = (payload) => {
    return (dispatch) => pagesApi.put(`pages/${payload.id}`, payload.data).then((res) => {
        return dispatch({type: actionTypes.UPDATE_PAGE_SUCCESS, paylaod: res});
    }).catch((err) => {
        return dispatch({ type: actionTypes.REQUEST_ERROR, payload: err.data.error})
    });
}

export const createPage = (payload) => {
    return (dispatch) => pagesApi.post(`pages`, payload).then((res) => {
        return dispatch({type: actionTypes.CREATE_PAGE_SUCCESS, paylaod: res});
    }).catch((err) => {
        return dispatch({ type: actionTypes.REQUEST_ERROR, payload: err.data.error})
    });
}

export const deletePage = (pageId) => {
    debugger
    return (dispatch) => pagesApi.delete(`pages/${pageId}`).then((res) => {
        return dispatch({type: actionTypes.DELETE_PAGE_SUCCESS, paylaod: res});
    }).catch((err) => {
        return dispatch({ type: actionTypes.REQUEST_ERROR, payload: err.data.error})
    });
}

export const loadingStart = () => (dispatch) => {
    return dispatch({type: actionTypes.UPDATE_PAGE})
};

export const pagesLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOAD_ADMIN_PAGES_SUCCESS, payload: payload})
}
  

export const resetAdminPagesState = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_ADMIN_PAGES_STORE })
}
