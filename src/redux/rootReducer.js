import { combineReducers } from "redux";
import cartReducer from './cart/cartReducer'
import shopReducer from './SHOP_DATA/shop.reducer'

export default combineReducers({
    cart: cartReducer,
    shop: shopReducer,
});