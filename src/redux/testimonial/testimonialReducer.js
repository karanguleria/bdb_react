import {
    FETCH_TESTIMONIALS_REQUEST,
    FETCH_TESTIMONIALS_SUCCESS,
    FETCH_TESTIMONIALS_FAILURE
} from './testimonialTypes.js'

const initialState = {
    loading: false,
    testimonials: [],
    error: ''
}

const testimonialReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TESTIMONIALS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TESTIMONIALS_SUCCESS:
            return {
                ...state,
                loading: false,
                testimonials: action.payload
            }
        case FETCH_TESTIMONIALS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}
export default testimonialReducer