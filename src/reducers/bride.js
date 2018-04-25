const initialState = {
    newBride: ''
}

export const brideReducer = (state = initialState, action) => {
    if(action.type === 'CREATE_NEW_BRIDE_SUCCESS') {
        return Object.assign({}, state, {
            newBride: action.newBride
        })
    }
    return state
}