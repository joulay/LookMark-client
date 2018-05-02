import { GET_PHOTO_SUCCESS } from '../actions/photos';

const initialState = {
    photos: null
}

export default (state = initialState, action) => {
    if (action.type === GET_PHOTO_SUCCESS) {
        return Object.assign({}, state, {
            photos: [...state.photos, action.photo]
          })   
        } 
    return state;     
}
