import { GET_HEAD_DATA } from './Types';


export const HeadReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_HEAD_DATA:
            return Object.assign({}, state, { ...action.payload })

        default:
            return state
    }
}

export default HeadReducer;