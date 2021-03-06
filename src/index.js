import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './components/home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import './index.css';


ReactDOM.render(

  <Provider store = {store}>
    <Router>
      <Home />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
