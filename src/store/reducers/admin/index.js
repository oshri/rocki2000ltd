import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { pages }  from './pages.reducers';

const adminReducers = combineReducers({
    pages,
    form: formReducer
});

export default adminReducers;