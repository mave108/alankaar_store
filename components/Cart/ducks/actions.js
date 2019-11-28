import axios from '../../../axios/interceptor';
import { ADD_TO_CART } from './types';

export const addToCart = (nid, user_token) => {
    return (dispatch, getState) => {
        const { cart } = getState();
        cart.push(nid);
        return axios.post('/cart/add', { nid, user_token })
            .then(({ data }) => {
                dispatch({ type: ADD_TO_CART, payload: cart })
            })
            .catch(error => {
                dispatch({ type: ADD_TO_CART, payload: cart })
            })
    }

}
