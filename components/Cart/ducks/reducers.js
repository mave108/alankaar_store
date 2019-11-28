import { ADD_TO_CART } from './types';


export const CartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return Object.assign([], state, [...action.payload])
        default:
            return state
    }
}

export default CartReducer;