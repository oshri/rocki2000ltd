import Api from '../../libs/api';
const layoutApi = new Api();

export const actionTypes = {
    LOAD_LAYOUT: 'LOAD_LAYOUT',
    LOAD_LAYOUT_SUCCESS: 'LOAD_LAYOUT_SUCCESS',
    LOAD_LAYOUT_ERROR: 'LOAD_LAYOUT_ERROR',
    RESET_LAYOUT_STORE: 'RESET_LAYOUT_STORE'
}

export const fetchLayout = (payload) => {
    return (dispatch) => layoutApi.get('pages/navigation').then((res) => {
        return dispatch({ type: actionTypes.LOAD_LAYOUT_SUCCESS, payload: res });
    });
}
  
export const layoutLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOAD_LAYOUT_SUCCESS, payload: payload})
}

export const resetLayoutState = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_LAYOUT_STORE })
}
