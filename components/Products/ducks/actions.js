import axios from '../../../axios/interceptor';
import { POPULAR_PRODUCTS, PRODUCTS_LIST, SET_FILTER } from './types';

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

export const getProducts = (filter) => {
    return (dispatch) => {
        return axios.get(`product/styles?${filter}`)
            .then(({ data }) => {
                dispatch({ type: PRODUCTS_LIST, payload: data })
            })
            .catch(error => {
                dispatch({ type: PRODUCTS_LIST, payload: [] })
            })
    }
}

export const setFilter = (filter) => {
    return (dispatch) => {
        dispatch({ type: SET_FILTER, payload: filter })
    }
}