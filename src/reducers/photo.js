import { GET_PHOTO_SUCCESS } from '../actions/photos';

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
    return state;     
}
