import axios from 'axios';

/*** Check if user is login or not and set state accordingly***/


const reducer = (state, action) => {
    switch (action.type) {
        case 'COUNTER':
            console.log(state.count);
            return {
                ...state,
                count: state.count + 1
            }
        default: return state;

    }
}
export default reducer;
