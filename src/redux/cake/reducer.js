import { BUY_CAKE, GET_TESTIMONIALS } from './types'
import { BuyCake, GetTestimonials } from '../helper'
const initialState = {
    numberOfCakes: 10,
    testimonials: [],
    user: {},
    token: ''

}


const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TESTIMONIALS: return GetTestimonials(state)
        case BUY_CAKE: return BuyCake(state)
        default: return state

    }

}
export default cakeReducer;