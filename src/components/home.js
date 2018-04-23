import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './home.css';
import LandingPage from './landing-page';
import RegistrationForm from './registration-form';
import UpcomingWeddings from './upcoming-weddings';
import NewClient from './client-form';
import ClientDetail from './client-detail';

export default function Home() {
    return (
      <Router>
        <div className="Home">
        {/*<Sidebar /> for hamburger*/}
          <main>
            <Switch>
              <Redirect exact from="/" to="/signup" />
              <Route exact path="/signup" component={LandingPage} />
              <Route exact path="/register" component={RegistrationForm} />
              <Route exact path="/home" component={UpcomingWeddings} />
              <Route exact path="/newclient" component={NewClient} />
              <Route exact path="/clientdetail" component={ClientDetail} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  
}




//top level links here 

