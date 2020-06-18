import {combineReducers} from 'redux';
import cart from './cartReducer'


import yahts from './yahReducer';

export default combineReducers({
    yahts,
    cart
})