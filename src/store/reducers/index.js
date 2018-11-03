import { combineReducers } from 'redux';

import { page }  from './page.reducer';
import { layout } from './layout.reducer';
import { home } from './home.reducer';

export default combineReducers({
    page,
    layout,
    home
})