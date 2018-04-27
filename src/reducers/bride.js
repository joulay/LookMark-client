import {
// CREATE_NEW_BRIDE, 
CREATE_NEW_BRIDE_SUCCESS,
// CREATE_NEW_BRIDE_ERROR 
} from '../actions/newBride';
import{
// GET_BRIDE_REQUEST,
// GET_BRIDE_SUCCESS,
// GET_BRIDE_ERROR, 
SET_INITIAL_VALUES
} from '../actions/getBride';


const initialState = {
    newBride: '',
    initialValues: {
        _id:'',
        firstName: '',
        lastName: '',
        phone:'',
        email:'',
        weddingDate:'',
        location:'',
    }
}

export const brideReducer = (state = initialState, action) => {
    if(action.type === 'CREATE_NEW_BRIDE_SUCCESS') {
        return Object.assign({}, state, {
            newBride: action.newBride
        })
    }
    else if(action.type === 'SET_INITIAL_VALUES'){
        const matchedBride = state.bride.find(obj=>obj._id===action.id)

        return Object.assign({}, state,{
          initialValues: {
              _id: matchedBride._id,
              firstName: matchedBride.firstName,
              lastName: matchedBride.lastName,
              phone: matchedBride.phone,
              email: matchedBride.email,
              weddingDate: matchedBride.weddingDate,
              location: matchedBride.location
          }
       }) 
    }   
    return state

}



