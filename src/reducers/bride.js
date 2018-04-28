import{
CREATE_BRIDE_SUCCESS,
CREATE_BRIDE_REQUEST,
CREATE_BRIDE_ERROR,
GET_BRIDE_REQUEST,
GET_BRIDE_SUCCESS,
GET_BRIDE_ERROR,
GET_BRIDES_REQUEST,
GET_BRIDES_SUCCESS,
GET_BRIDES_ERROR,
UPDATE_BRIDE_REQUEST,
UPDATE_BRIDE_SUCCESS,
UPDATE_BRIDE_ERROR
} from '../actions/bride';


const initialState = {
    brides: [],
    currentBride: null,
    loading: false,
    error: null
}

export const brideReducer = (state = initialState, action) => {
    if(action.type === CREATE_BRIDE_SUCCESS) {
        return Object.assign({}, state, {
            brides: [...state.brides, action.bride]
        })
    }
    else if(action.type === CREATE_BRIDE_REQUEST) {
        return Object.assign({}, state, {
            loading: true 
        })
    }
    else if(action.type === CREATE_BRIDE_ERROR) {
        return Object.assign({}, state,{
            loading: false,
            error: action.error
        })
    }
    else if(action.type === GET_BRIDE_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    }
    else if(action.type === GET_BRIDE_SUCCESS){
        return Object.assign({}, state,{
            currentBride: action.bride,
            loading: false
       }) 
    }   
    else if(action.type === GET_BRIDE_ERROR){
        return Object.assign({}, state,{
            loading: false,
            error: action.error
        })
    }    
    else if(action.type === GET_BRIDES_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    }
    else if(action.type === GET_BRIDES_SUCCESS){
        return Object.assign({}, state,{
            brides: action.brides,
            loading: false
       }) 
    }   
    else if(action.type === GET_BRIDES_ERROR){
        return Object.assign({}, state,{
            loading: false,
            error: action.error
        })
    }   
    else if(action.type === UPDATE_BRIDE_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        })
    }
    else if(action.type === UPDATE_BRIDE_SUCCESS){
        return Object.assign({}, state,{
            brides: action.brides,
            loading: false
       }) 
    }   
    else if(action.type === UPDATE_BRIDE_ERROR){
        return Object.assign({}, state,{
            loading: false,
            error: action.error
        })
    }   
    return state

}



