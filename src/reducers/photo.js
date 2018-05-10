import { GET_PHOTO_SUCCESS, CREATE_NEW_PHOTO_SUCCESS, CREATE_NEW_PHOTO_REQUEST } from '../actions/photos';

const initialState = {
    photos: [],
    loading: false
}

export default (state = initialState, action) => {
    if (action.type === GET_PHOTO_SUCCESS) {
        return Object.assign({}, state, {
            photos: action.photos
          })   
        } 
    if (action.type === CREATE_NEW_PHOTO_SUCCESS) {
        return Object.assign({}, state, {
            photos: [...state.photos, action.photo],
            loading: false
        })
    }
    if (action.type === CREATE_NEW_PHOTO_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    }
    return state;     
}


