import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineUser } from './reducers/user';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    combineReducers({user:combineUser,
    form: formReducer,
    auth: authReducer,
}), 
composeWithDevTools(applyMiddleware(thunk)))

export default store;