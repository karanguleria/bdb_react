import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_POPULAR_CATEGORIES_SUCCESS,
    FETCH_FEATURED_CATEGORIES_SUCCESS
} from './categoryTypes.js'

const initialState = {
    loading: false,
    categories: [],
    popularCategories: [],
    featuredCategories: [],
    error: ''
}

const categoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case FETCH_POPULAR_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                popularCategories: action.payload
            }
        case FETCH_FEATURED_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                featuredCategories: action.payload
            }
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}
export default categoryReducer