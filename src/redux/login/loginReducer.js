import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE
} from './loginType.js'

const initialState = {
    loading: false,
    user: [],
    error: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            }
        case FETCH_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default: return state
    }
}

export default loginReducer