import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';

export const CREATE_NEW_BRIDE = 'CREATE_NEW_BRIDE'
export const createNewBride = (bride) => ({
    type:'CREATE_NEW_BRIDE',
    newBride: bride
})

export const CREATE_NEW_BRIDE_SUCCESS = 'CREATE_NEW_BRIDE_SUCCESS'
export const createNewBrideSuccess = () => ({
    type:'CREATE_NEW_USER_BRIDE',
 
})


export const CREATE_NEW_BRIDE_ERROR= 'CREATE_NEW_BRIDE_ERROR'
export const createNewBrideError = (error) => dispatch => ({
    type:'CREATE_NEW_BRIDE_ERROR',
    error

})


export const newBride = user => dispatch => {
    const authToken = loadAuthToken();
    return fetch(`${API_BASE_URL}/brides`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body: JSON.stringify(user)
    
    })
        .then(res => {
            console.log(res);
            return res.json()})
        .then(()=> {
            return dispatch(createNewBrideSuccess())
            
        })
        .catch(err => {
            dispatch(createNewBrideError(err))
        });
};