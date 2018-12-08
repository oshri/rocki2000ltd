import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { pages }  from './pages.reducers';
import { tags } from './tags.reducers';

const adminReducers = combineReducers({
    pages,
    tags
});

export default adminReducers;