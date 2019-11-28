import axios from '../../../axios/interceptor';
import { BLOG_DATA } from './types';

export const getBlogs = () => {
    return (dispatch) => {
        return axios.get('/blog?isPromoted=1&limit=3')
            .then(({ data }) => {
                dispatch({ type: BLOG_DATA, payload: data })
            })
            .catch(error => {
                dispatch({ type: BLOG_DATA, payload: [] })
            })
    }

}
