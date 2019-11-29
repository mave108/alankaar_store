import { ADD_TO_CART_ITEMS, ADD_TO_CART_ITEM_IDS } from './types';


export const CartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART_ITEMS:
            return Object.assign({}, state, { items: [...action.payload] });
        case ADD_TO_CART_ITEM_IDS:
            return Object.assign({}, state, { item_ids: [...action.payload] })
        default:
            return state
    }
}

export default CartReducer;