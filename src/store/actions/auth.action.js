import Api from '../../libs/api';
const layoutApi = new Api();
import {reset} from 'redux-form';

export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    RESET_LOGIN_FORM: 'RESET_LOGIN_FORM'
}

export const postLogin = (payload) => {
    return (dispatch) => layoutApi.post('auth', payload).then((res) => {
        return dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: res });
    }).catch((err) => {
        return dispatch({ type: actionTypes.LOGIN_ERROR, payload: err.data.error})
    });
}

export const login = () => dispatch => {
    dispatch({type: actionTypes.LOGIN});
}

export const resetForm = () => dispatch => {
    dispatch(reset('login'));
};

export const loginSuccess = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: payload})
}

export const loginError = (payload) =>  dispatch => {
    dispatch({ type: actionTypes.LOGIN_ERROR, payload: payload})
}

export const resetLoginForm = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_LOGIN_FORM })
}
