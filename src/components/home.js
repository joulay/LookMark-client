import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './home.css';
import LandingPage from './landing-page';
import RegistrationForm from './registration-form';

export default function Home() {
    return (
      <Router>
        <div className="Home">
          
          <main>
            <Switch>
              <Redirect exact from="/" to="/signup" />
              <Route exact path="/signup" component={LandingPage} />
              <Route exact path="/register" component={RegistrationForm} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  
}



// <Sidebar /> for hamburger
//top level links here 

