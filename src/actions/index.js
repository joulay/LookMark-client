import { API_BASE_URL } from '../config';
// const API_BASE_URL = 'https://lookmarkapp.herokuapp.com/api'

const fetchUsersSuccess = (users) => ({
    type: 'FETCH_USERS_SUCCESS',
    users
})

export const fetchUsers = () => {
    return (dispatch) => {
        fetch(`${API_BASE_URL}/api/users`)
        .then(response => response.json())
        .then(users => dispatch(fetchUsersSuccess(users)))
        .catch(err => console.log(err))
    }
}

