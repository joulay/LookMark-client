import { createStore, applyMiddleware } from 'redux';
import userReducer from './reducers/user';
import thunk from 'redux-thunk';

const store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)) 

export default store;