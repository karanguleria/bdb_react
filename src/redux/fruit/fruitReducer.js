import {BUY_FRUIT} from './fruitType'

const initialState = {
    numberOfFruits: 10
}
const fruitReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_FRUIT:
            return {
                ...state,
                numberOfFruits: state.numberOfFruits - action.payload
            }
        default:
            return state
    }
}
export default fruitReducer