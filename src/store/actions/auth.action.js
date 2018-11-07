import Api from '../../libs/api';
const layoutApi = new Api();

export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGION_SUCCESS: 'LOGION_SUCCESS',
    LOGION_ERROR: 'LOGION_ERROR',
    RESET_LOGIN_FORM: 'RESET_LOGIN_FORM'
}

export const postLogin = (payload) => {
    return (dispatch) => layoutApi.post('auth', payload).then((res) => {
        return dispatch({ type: actionTypes.LOGION_SUCCESS, payload: res });
    });
}

export const login = () => dispatch => {
    dispatch({type: actionTypes.LOGIN});
}

export const loginSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOGION_SUCCESS, payload: payload})
}

export const loginError = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOGION_ERROR, payload: payload})
}

export const resetLoginForm = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_LOGIN_FORM })
}
