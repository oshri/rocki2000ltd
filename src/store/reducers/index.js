import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import adminReducers from './admin';

import { page }  from './page.reducer';
import { layout } from './layout.reducer';
import { home } from './home.reducer';
import { auth } from './auth.reducers';

export default combineReducers({
    auth,
    page,
    layout,
    home,
    form: formReducer,
    admin: adminReducers
})