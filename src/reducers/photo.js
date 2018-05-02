import GET_PHOTO_SUCCESS from '../actions/photos';

const initialState = {
    photos: [{
        img: ""
    }]
}

export const photoReducer = (state = initialState, action) => {
    if (action.type === actions.GET_PHOTO_SUCCESS) {
        return Object.assign({}, state, {
            entries: sortedEntries
          })   
        } 
    return state;     
}
