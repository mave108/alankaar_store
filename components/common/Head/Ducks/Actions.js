import axios from '../../../../axios/interceptor';
import { GET_HEAD_DATA } from './Types';




export const getHeadData = () => {
    // return dispatch({ type: GET_HEAD_DATA, paload: { title: "Home Page" } });

    return (dispatch) => {
        //dispatch({ type: actionTypes.POSTS, payload: [] })
        return axios.get('/head')
            .then(({ data }) => {
                dispatch({ type: GET_HEAD_DATA, payload: data })
            })
            .catch(error => {
                dispatch({ type: GET_HEAD_DATA, payload: { error: error } })
            })
    }

}

export const getPosts = () => {
    //return { type: actionTypes.POSTS, payload:[1,2,3,4,5,6]}
    return (dispatch) => {
        //dispatch({ type: actionTypes.POSTS, payload: [] })
        return axios.get('https://www.reddit.com/r/pics.json')
            .then(({ data: { data: { children: posts = [] } = {} } = {} } = {}) => {
                dispatch({ type: GET_HEAD_DATA, payload: posts })
            })
            .catch(error => {

            })
    }
}