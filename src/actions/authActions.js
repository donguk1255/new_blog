import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types"


//

export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
};

export const loginUser = (userData) => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => console.log(res))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}