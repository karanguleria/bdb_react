import { combineReducers } from 'redux'
// import icecreamReducer from './icecream/icecreamReducer'
// import cakeReducer from './cake/cakeReducer'
// import fruitReducer from './fruit/fruitReducer'
// import userReducer from './user/userReducer'
import testimonialReducer from './testimonial/testimonialReducer'
import categoryReducer from './category/categoryReducer'
import loginReducer from './login/loginReducer'

const rootReducer = combineReducers({
    // icecream: icecreamReducer,
    // cake: cakeReducer,
    // fruit: fruitReducer,
    // user: userReducer,
    user:loginReducer,
    testimonial: testimonialReducer,
    category: categoryReducer
})
export default rootReducer