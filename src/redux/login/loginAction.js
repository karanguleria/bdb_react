import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE
} from './loginType'
import axios from 'axios'

// export const fetchUser = (username, password, remember_me) => {
//     console.log("ASDsss");
//     return (dispatch) => {
//         // dispatch(fetchLoginRequest())
//         axios.get('http://awardselfie.com/bdb/public/api/listingCategory/')
//             .then(response => {
//                 //Successfully got the categories
//                 console.log("ASd");
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//         axios.post('http://awardselfie.com/bdb/public/api/auth/login', {
//             username: username,
//             password: password,
//             remember_me: remember_me
//         }).then(response => {
//             const user = response.data
//             console.log(user);
//             dispatch(fetchLoginSuccess(user))
//         })
//             .catch(error => {
//                 dispatch(fetchLoginFailure(error.message))
//             });
//     }
// }

export const fetchUser = () => {

    console.log("asd");
    return (dispatch) => {
        //getting categories
        // dispatch(fetchLoginRequest())
        axios.get('http://awardselfie.com/bdb/public/api/listingCategory/')
            .then(response => {
                console.log("ASDasdasasd");
                //Successfully got the categories
                // const categories = response.data.data
               
            })
            .catch(error => {
                console.log("ASDasdasasd");
                // dispatch(fetchCategoriesFailure(error.message))
            })

    }
}
export const fetchLoginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST
    }
}
export const fetchLoginSuccess = (user) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: user
    }
}
export const fetchLoginFailure = (error) => {
    return {
        type: FETCH_LOGIN_FAILURE,
        payload: error
    }
}

