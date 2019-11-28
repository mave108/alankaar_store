import { BLOG_DATA } from './types';


export const BloglReducer = (state = {}, action) => {
    switch (action.type) {
        case BLOG_DATA:
            return Object.assign([], state, [...action.payload])
        default:
            return state
    }
}

export default BloglReducer;