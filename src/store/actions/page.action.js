import fetch from 'isomorphic-fetch';

export const actionTypes = {
    LOAD_PAGE: 'LOAD_PAGE',
    LOAD_PAGE_SUCCESS: 'LOAD_PAGE_SUCCESS',
    LOAD_PAGE_ERROR: 'LOAD_PAGE_ERROR',
    RESET_PAGE_STORE: 'RESET_PAGE_STORE'
}

export const fetchPage = (payload) => {
    return (dispatch) => fetch(`http://localhost:8080/api/pages/${payload}`)
        .then((res) => res.json())
        .then(data => {
            return dispatch({ type: actionTypes.LOAD_PAGE_SUCCESS, payload: data });
        });
}
  
export const pageLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOAD_PAGE_SUCCESS, payload: payload})
}

export const resetPageState = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_PAGE_STORE })
}
