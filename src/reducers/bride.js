import{
GET_BRIDE_REQUEST,
GET_BRIDE_SUCCESS,
GET_BRIDE_ERROR
} from '../actions/newBride';


const initialState = {
    brides: [],
    loading: false,
    error: false,
}

export const brideReducer = (state = initialState, action) => {
    if(action.type === 'CREATE_NEW_BRIDE_SUCCESS') {
        return Object.assign({}, state, {
            
            brides: [...state.brides, action.bride]
        })
    }
    else if(action.type === 'GET_BRIDE_REQUEST') {
        return Object.assign({}, state, {
            loading: true
        })
    }
    else if(action.type === 'GET_BRIDE_SUCCESS'){

        return Object.assign({}, state,{
            brides: action.bride,
            loading: false
       }) 
    }   
    else if(action.type === 'GET_BRIDE_ERROR'){

        return Object.assign({}, state,{
            loading: false,
            error: true
        })
    }    
    return state

}




//asyn action should go to bride endpoint na dbring all bride 
