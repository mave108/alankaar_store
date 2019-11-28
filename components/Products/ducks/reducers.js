import { POPULAR_PRODUCTS } from './types';


export const ProductlReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULAR_PRODUCTS:
            return Object.assign({}, state, { popular: [...action.payload] });
        default:
            return state
    }
}

export default ProductlReducer;