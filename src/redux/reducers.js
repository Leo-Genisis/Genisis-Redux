import {combineReducers} from 'redux';
import products from './productsReducers';
import cart from './cartReducer'

export default combineReducers({
    products,
    cart,
})