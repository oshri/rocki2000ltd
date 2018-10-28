import { combineReducers } from 'redux';

import { page }  from './page.reducer';
import { layout } from './layout.reducer';

export default combineReducers({
    page,
    layout
})