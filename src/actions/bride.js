import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';


export const CREATE_BRIDE_REQUEST = 'CREATE_BRIDE_REQUEST'
export const createBrideRequest = (bride) => ({
    type:'CREATE_BRIDE_REQUEST',
    newBride: bride
})

export const CREATE_BRIDE_SUCCESS = 'CREATE_BRIDE_SUCCESS'
export const createBrideSuccess = (bride) => ({
    type:'CREATE_BRIDE_SUCCESS',
    newBride: bride
})

export const CREATE_BRIDE_ERROR = 'CREATE_BRIDE_ERROR'
export const createBrideError = (error) => ({
    type:'CREATE_BRIDE_ERROR',
    error
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

export const GET_BRIDES_REQUEST = 'GET_BRIDES_REQUEST'
export const getBridesRequest = () => ({
    type:'GET_BRIDES_REQUEST',
})


export const GET_BRIDES_SUCCESS = 'GET_BRIDES_SUCCESS'
export const getBridesSuccess = (brides) => ({
    type:'GET_BRIDES_SUCCESS',
    brides: brides
})


export const GET_BRIDES_ERROR= 'GET_BRIDES_ERROR'
export const getBridesError = (error) => dispatch => ({
    type:'GET_BRIDES_ERROR',
    error
})

export const UPDATE_BRIDE_REQUEST = 'UPDATE_BRIDE_REQUEST'
export const updateBrideRequest = (bride) => ({
    type:'UPDATE_BRIDE_REQUEST',
    newBride: bride
})

export const UPDATE_BRIDE_SUCCESS = 'UPDATE_BRIDE_SUCCESS'
export const updateBrideSuccess = (bride) => ({
    type:'UPDATE_BRIDE_SUCCESS',
    newBride: bride
})

export const UPDATE_BRIDE_ERROR = 'UPDATE_BRIDE_ERROR'
export const updateBrideError = (error) => ({
    type:'UPDATE_BRIDE_ERROR',
    error
})


// export const DELETE_BRIDE_REQUEST = 'DELETE_BRIDE_REQUEST'
// export const deleteBrideRequest = (id) => ({
//     type:'DELETE_BRIDE_REQUEST',
//     id
// })


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
        .then(res => res.json())
            .then(response=> {
            const id = response.id;
            window.location = `/brides/${id}`;
            return dispatch(createBrideRequest(response));
        })
        .catch(err => {
            dispatch(createBrideError(err))
        });
};

export const getBride =(id)=>(dispatch, getState)=>{
    dispatch(getBrideRequest());
    const authToken = localStorage.getItem('authToken');
    fetch(`${API_BASE_URL}/brides/${id}`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(bride=> dispatch(getBrideSuccess(bride)))
        .catch(err=> dispatch(getBrideError(err))) 
}

export const getBrides =() => (dispatch, getState) => {
    dispatch(getBridesRequest());
    console.log('checking as;dja;skjdhaklsjdhlaksjhd');
    const authToken = localStorage.getItem('authToken');
    fetch(`${API_BASE_URL}/brides`, {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(brides => dispatch(getBridesSuccess(brides)))
        .catch(err=> {
            console.log(err);
            dispatch(getBridesError(err))
        })
}


export const updateBride = user => dispatch => {
    console.log(user);
    const authToken = loadAuthToken();
    return fetch(`${API_BASE_URL}/brides/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${authToken}`
        },
        body: JSON.stringify(user)
    
    })
        .then(res => res.json())
            .then(response=> {
            const id = response.id;
            window.location = `/brides/${id}`;
            return dispatch(updateBrideRequest(response));
        })
        .catch(err => {
            dispatch(updateBrideError(err))
        });
};

// export const deleteBride = user => dispatch => {
//     const authToken = loadAuthToken();
//     return fetch(`${API_BASE_URL}/brides/${user.id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization' : `Bearer ${authToken}`
//         },
//     })
//     .then(res => {
//         if (!res.ok) {
//           return Promise.reject(res.status);
//         }
//         return dispatch(deleteBrideRequest());
//       });
//     };