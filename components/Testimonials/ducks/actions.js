import axios from '../../../axios/interceptor';
import { GET_TESTIMONIAL_DATA } from './Types';




export const getTestimonials = () => {
    return (dispatch) => {
        return axios.get('/testimonials')
            .then(({ data }) => {
                console.log("testimonials", data);
                dispatch({ type: GET_TESTIMONIAL_DATA, payload: data })
            })
            .catch(error => {
                console.log("testimonials error", error);
                dispatch({ type: GET_TESTIMONIAL_DATA, payload: [] })
            })
    }

}
