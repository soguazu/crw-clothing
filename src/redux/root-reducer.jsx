import { combineReducers } from 'redux';

import userRuducer from './user/user.reducer';

export default combineReducers({
    user: userRuducer,
})