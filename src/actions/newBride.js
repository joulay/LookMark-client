import { API_BASE_URL } from '../config';
import { loadAuthToken, getBrideId } from '../local-storage';

export const CREATE_BRIDE = 'CREATE_BRIDE'
export const createBride = (bride) => ({
    type:'CREATE_BRIDE',
    newBride: bride
})

export const CREATE_BRIDE_SUCCESS = 'CREATE_BRIDE_SUCCESS'
export const createBrideSuccess = (bride) => ({
    type:'CREATE_USER_BRIDE',
    
})


export const CREATE_BRIDE_ERROR= 'CREATE_BRIDE_ERROR'
export const createBrideError = (error) => dispatch => ({
    type:'CREATE_BRIDE_ERROR',
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
        .then((response)=> {
            //bride id into local storage so bride id can be used to get detail
            const id = response.id;
            console.log(id);
            // window.location= '/clientdetail'  < redirect to path
            // window.location = '/clientdetail';
            return dispatch(createBrideSuccess());
        })
        .catch(err => {
            dispatch(createBrideError(err))
        });
};

