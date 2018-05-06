import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';

export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const createNewUser = user => ({
  type: 'CREATE_NEW_USER',
  newUser: user
});

export const CREATE_NEW_USER_SUCCESS = 'CREATE_NEW_USER_SUCCESS';
export const createNewUserSuccess = () => ({
  type: 'CREATE_NEW_USER_SUCCESS'
});

export const CREATE_NEW_USER_ERROR = 'CREATE_NEW_USER_ERROR';
export const createNewUserError = error => dispatch => ({
  type: 'CREATE_NEW_USER_ERROR',
  error
});

export const newUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(() => {
      return dispatch(createNewUserSuccess());
    })
    .catch(err => {
      dispatch(createNewUserError(err));
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};

//     return fetch(`${API_BASE_URL}/api/users`, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             newUser
//         })
//     })
//         .then(res => res.json())
//         .catch(err => console.log(err))

// export const newUser = (fullname, email, username, password) => {
//     return (dispatch) => {
//         fetch(`${API_BASE_URL}/users`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(fullname, email, username, password)
//         })
//             .then(res => res.json())
//             .then(json => console.log(json))
//             .catch(error => console.log(error))
//     }
// }
