import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineUser } from './reducers/user';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    combineReducers({user:combineUser
     

}), 
composeWithDevTools(applyMiddleware(thunk)))

export default store;