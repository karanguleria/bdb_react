import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_POPULAR_CATEGORIES_SUCCESS,
    FETCH_FEATURED_CATEGORIES_SUCCESS
} from './categoryTypes.js'
import axios from 'axios'

export const fetchCategories = (CategoryType, count) => {
    console.log(CategoryType);
    return (dispatch) => {
        //getting categories
        dispatch(fetchCategoriesRequest())
        axios.get('http://awardselfie.com/bdb/public/api/listingCategory/' + CategoryType + '/' + count)
            .then(response => {
                //Successfully got the categories
                const categories = response.data.data
                if (CategoryType == "popular") {
                    dispatch(fetchPopularCategoriesSuccess(categories))
                } else if (CategoryType == "featured") {
                    dispatch(fetchFeaturedCategoriesSuccess(categories))
                } else {
                    dispatch(fetchCategoriesSuccess(categories))
                }
            })
            .catch(error => {
                dispatch(fetchCategoriesFailure(error.message))
            })

    }
}
export const fetchCategoriesRequest = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST
    }
}
export const fetchCategoriesSuccess = (categories) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}
export const fetchPopularCategoriesSuccess = (categories) => {
    return {
        type: FETCH_POPULAR_CATEGORIES_SUCCESS,
        payload: categories
    }
}
export const fetchFeaturedCategoriesSuccess = (categories) => {
    return {
        type: FETCH_FEATURED_CATEGORIES_SUCCESS,
        payload: categories
    }
}
export const fetchCategoriesFailure = (error) => {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}