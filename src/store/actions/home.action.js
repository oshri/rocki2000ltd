import Api from '../../libs/api';
const layoutApi = new Api();

export const actionTypes = {
    LOAD_HOME: 'LOAD_HOME',
    LOAD_HOME_SUCCESS: 'LOAD_HOME_SUCCESS',
    LOAD_HOME_ERROR: 'LOAD_HOME_ERROR'
}

export const fetchHome = (payload) => {
    return (dispatch) => layoutApi.get('pages/home').then((res) => {
        return dispatch({ type: actionTypes.LOAD_HOME_SUCCESS, payload: res});
    })
}

export const homeLoadSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOAD_HOME_SUCCESS, payload: payload})
}

