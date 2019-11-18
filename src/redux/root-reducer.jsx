import { combineReducers } from 'redux';

import userRuducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userRuducer,
    cart: cartReducer
})