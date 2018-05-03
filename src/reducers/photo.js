import { GET_PHOTO_SUCCESS, CREATE_NEW_PHOTO_SUCCESS } from '../actions/photos';

const initialState = {
    photos: [],
}

export default (state = initialState, action) => {
    if (action.type === GET_PHOTO_SUCCESS) {
        console.log()
        return Object.assign({}, state, {
            photos: action.photos
          })   
        } 
    if (action.type === CREATE_NEW_PHOTO_SUCCESS) {
        return Object.assign({}, state, {
            photos: [...state.photos, action.photo]
        })
    }
    return state;     
}

