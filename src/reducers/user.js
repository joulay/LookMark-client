const initialState = {
    data: []
}

const userReducer = (state = initialState, action) => {
    if(action.type === 'FETCH_USERS_SUCCESS') {
        return {
            ...state,
            data: action.users
        }    
    }
    return state
}

export default userReducer;