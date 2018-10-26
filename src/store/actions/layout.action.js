import fetch from 'isomorphic-fetch';

export const actionTypes = {
    LOAD_LAYOUT: 'LOAD_LAYOUT',
    LOAD_LAYOUT_SUCCESS: 'LOAD_LAYOUT_SUCCESS',
    LOAD_LAYOUT_ERROR: 'LOAD_LAYOUT_ERROR',
    RESET_LAYOUT_STORE: 'RESET_LAYOUT_STORE'
}

export const fetchLayout = (payload) => {
    debugger
    return (dispatch) => fetch(`http://localhost:8080/api/pages/navigation`)
        .then((res) => res.json())
        .then(data => {
            return dispatch({ type: actionTypes.LOAD_LAYOUT_SUCCESS, payload: data });
        });
}
  
export const layoutLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOAD_LAYOUT_SUCCESS, payload: payload})
}

export const resetLayoutState = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_LAYOUT_STORE })
}
