import { GET_TESTIMONIAL_DATA } from './types';


export const TestimonialReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TESTIMONIAL_DATA:
            return Object.assign([], state, [...action.payload])
        default:
            return state
    }
}

export default TestimonialReducer;