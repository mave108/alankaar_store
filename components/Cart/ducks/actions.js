import axios from '../../../axios/interceptor';
import { ADD_TO_CART_ITEMS, ADD_TO_CART_ITEM_IDS } from './types';

export const addToCart = (nid, user_token) => {
    return (dispatch, getState) => {
        const { cart: { items = [], item_ids } } = getState();
        const itemAlreadyInCart = item_ids.includes(nid);


        item_ids.push(nid);
        return axios.post('/cart/add', { nid, user_token })
            .then(({ data }) => {
                dispatch({ type: ADD_TO_CART_ITEM_IDS, payload: item_ids });
                if (!itemAlreadyInCart) {
                    items.push(data);
                    dispatch({ type: ADD_TO_CART_ITEMS, payload: items });
                }
            })
            .catch(error => {
                //dispatch({ type: ADD_TO_CART_ITEM_IDS, payload: cart })
            })
    }

}

export const getCart = (user_token) => {
    return (dispatch) => {
        return axios.get('/cart/get?user_token=' + user_token)
            .then(({ data }) => {
                const { items, item_ids } = data;
                dispatch({ type: ADD_TO_CART_ITEMS, payload: items });
                dispatch({ type: ADD_TO_CART_ITEM_IDS, payload: item_ids })
            })
            .catch(error => {
                dispatch({ type: ADD_TO_CART, payload: [] })
            })
    }

}