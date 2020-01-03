import { POPULAR_PRODUCTS, PRODUCTS_LIST, SET_FILTER } from './types';


export const ProductlReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULAR_PRODUCTS:
            return Object.assign({}, state, { popular: [...action.payload] });
        case PRODUCTS_LIST:
            return Object.assign({}, state, { list: action.payload });
        case SET_FILTER:
            return Object.assign({}, state, { filter: { ...action.payload } });
        default:
            return state
    }
}

export default ProductlReducer;