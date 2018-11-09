import Api from '../../libs/api';
const layoutApi = new Api();
import {reset} from 'redux-form';
import setAuthorizationToken from '../../utils/authorizationToken';

export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    SET_USER: 'SET_USER',
    RESET_LOGIN_FORM: 'RESET_LOGIN_FORM'
}

export const postLogin = (payload) => {
    return (dispatch) => layoutApi.post('auth', payload).then((res) => {
        setAuthorizationToken(res.token);
        return dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: res });
    }).catch((err) => {
        return dispatch({ type: actionTypes.LOGIN_ERROR, payload: err.data.error})
    });
}

export const postLogout = (dispatch) => {
    if(localStorage.getItem('token')) {
        return (dispatch) => layoutApi.post('auth/logout').then((res) => {
            localStorage.removeItem('token');
            setAuthorizationToken(false);
            return dispatch({ type: actionTypes.RESET_LOGIN_FORM })
        }).catch((errr) => {
            localStorage.removeItem('token');
            setAuthorizationToken(false);
            return dispatch({ type: actionTypes.RESET_LOGIN_FORM })
        });
    } else {
        return dispatch({ type: actionTypes.RESET_LOGIN_FORM })
    } 
};

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

export const setUser = (payload) => dispatch => {
    dispatch({type: actionTypes.SET_USER, paylaod: payload});
};

export const resetLoginForm = () => dispatch => {
    return dispatch({ type: actionTypes.RESET_LOGIN_FORM })
}
