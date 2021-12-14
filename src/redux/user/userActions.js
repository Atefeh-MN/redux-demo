import axios from 'axios'
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './userTypes'

function fetchUserRequets() {
    return {
        type: FETCH_USERS_REQUEST,
    }
};
function fetchUserFailure(error) {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
function fetchUserSuccess(Users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: Users
    }
}

//async action creator
export function fetchUsers() {
    return function (dispatch) {
        dispatch(fetchUserRequets());
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                const users = res.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch(error =>
                dispatch(fetchUserFailure(error.message))
            )
    }
}
