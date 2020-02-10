import {
    FETCH_TESTIMONIALS_REQUEST,
    FETCH_TESTIMONIALS_SUCCESS,
    FETCH_TESTIMONIALS_FAILURE
} from './testimonialTypes.js'
import axios from 'axios'

export const fetchTestimonials = () => {

    return (dispatch) => {
        //getting testimonials
        dispatch(fetchTestimonialsRequest())
        axios.get('http://awardselfie.com/bdb/public/api/testimonials')
            .then(response => {
                //Successfully got the testimonials
                // console.log(response.data);
                const testimonials = response.data.data
                dispatch(fetchTestimonialsSuccess(testimonials))
            })
            .catch(error => {
                dispatch(fetchTestimonialsFailure(error.message))
            })

    }
}
export const fetchTestimonialsRequest = () => {
    return {
        type: FETCH_TESTIMONIALS_REQUEST
    }
}
export const fetchTestimonialsSuccess = (testimonials) => {
    return {
        type: FETCH_TESTIMONIALS_SUCCESS,
        payload: testimonials
    }
}
export const fetchTestimonialsFailure = (error) => {
    return {
        type: FETCH_TESTIMONIALS_FAILURE,
        payload: error
    }
}