import axios from '../../../axios/interceptor';
import { POPULAR_PRODUCTS } from './types';

export const getPopularProducts = () => {
    return (dispatch) => {
        return axios.get('product/styles?isPromoted=1&categories=5')
            .then(({ data }) => {
                dispatch({ type: POPULAR_PRODUCTS, payload: data })
            })
            .catch(error => {
                dispatch({ type: POPULAR_PRODUCTS, payload: [] })
            })
    }

}
