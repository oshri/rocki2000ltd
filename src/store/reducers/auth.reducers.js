// import Immutable from 'immutable';
import { actionTypes } from '../actions/auth.action';

// export const initialPageState = Immutable.fromJS({
//   isLoading: false,
//   data: undefined
// });

export const initialPageState = {
    isLoading: false,
    isAuthenticated: false,
    user: null
};


export const auth = (state = initialPageState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state, ...{
                    isLoading: true
                }
            };
            
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state, ... {
                    isLoading: false,
                    isAuthenticated: true,
                    user: action.payload.user
                }
            };
            
        case actionTypes.LOGIN_ERROR:
            return {
                ...state, ...{
                    isLoading: false,
                    isAuthenticated: false,
                    user: null
                }
            };

        case actionTypes.SET_USER:
            return {
                ...state, ...{
                    isLoading: false,
                    isAuthenticated: true,
                    user: action.paylaod
                }
            };

        case actionTypes.RESET_LOGIN_FORM:
            return {
                ...state, ...initialPageState
            };
        default: return state
    }
};