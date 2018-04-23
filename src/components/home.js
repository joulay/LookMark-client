import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './home.css';
import LandingPage from './landing-page';

export default function Home() {
    return (
      <Router>
        <div className="Home">
          
          <main>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route exact path="/signup" component={LandingPage} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  
}



// <Sidebar /> for hamburger