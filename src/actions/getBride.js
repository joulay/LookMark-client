import {API_BASE_URL} from '../config';


export const GET_BRIDE_REQUEST='GET_BRIDE_REQUEST'
export const brideRequest=()=>({
    type:GET_BRIDE_REQUEST
});

export const GET_BRIDE_SUCCESS='GET_BRIDE_SUCCESS'
export const brideSuccess=(bride)=>({
    type:GET_BRIDE_SUCCESS,
    bride
});

export const GET_BRIDE_ERROR='GET_BRIDE_ERROR'
export const brideError=(error)=>({
    type:GET_BRIDE_ERROR,
    error
});

export const SET_INITIAL_VALUES='SET_INITIAL_VALUES'
export const setInitialValues=(id, firstName) => ({
    type:SET_INITIAL_VALUES,
    id,
    firstName
})

export const showBride =(id)=>(dispatch, getState)=>{
    dispatch(brideRequest());
    const authToken = getState().auth.authToken;
    console.log(authToken);
    fetch(`${API_BASE_URL}/brides/${id}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(bride=> {
            console.log(bride);
            dispatch(brideSuccess(bride))})
        .catch(err=> {
            console.log(err);
            dispatch(brideError(err))
        })
    
}
