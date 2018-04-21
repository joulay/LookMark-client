import { API_BASE_URL } from '../config';


const fetchUsersSuccess = (users) => ({
    type: 'FETCH_USERS_SUCCESS',
    users
})

export const fetchUsers = () => {
    return (dispatch) => {
        fetch(`${API_BASE_URL}/test`)
        .then(response => response.json())
        .then(users => dispatch(fetchUsersSuccess(users)))
        .catch(err => console.log(err))
    }
}

