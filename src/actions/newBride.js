import { API_BASE_URL } from '../config';
import { loadAuthToken, getBrideId } from '../local-storage';



export const CREATE_BRIDE = 'CREATE_BRIDE'
export const createBride = (bride) => ({
    type:'CREATE_BRIDE',
    newBride: bride
})

export const GET_BRIDE_REQUEST = 'GET_BRIDE_REQUEST'
export const getBrideRequest = () => ({
    type:'GET_BRIDE_REQUEST',
})


export const GET_BRIDE_SUCCESS = 'GET_BRIDE_SUCCESS'
export const getBrideSuccess = (bride) => ({
    type:'GET_BRIDE_SUCCESS',
    bride: bride
})


export const GET_BRIDE_ERROR= 'GET_BRIDE_ERROR'
export const getBrideError = (error) => dispatch => ({
    type:'GET_BRIDE_ERROR',
    error

})
// another asyn action to get from brides to hit get brides endpoint


//(rename to bride)
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
            return res.json()})
            .then((response)=> {
            console.log(response);
            //bride id into local storage so bride id can be used to get detail
            const id = response.id;
            console.log(id);
            // window.location= '/clientdetail'  < redirect to path
            // window.location = '/clientdetail';
            return dispatch(getBrideSuccess(response));
        })
        .catch(err => {
            dispatch(getBrideError(err))
        });
};


