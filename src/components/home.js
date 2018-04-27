import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './home.css';
import SignIn from './sign-in';
import RegistrationForm from './registration-form';
import UpcomingWeddings from './upcoming-weddings';
import Client from './client';
import ClientDetail from './client-detail';
import Edit from './edit';
import Photos from './photo-upload';
import Notes from './notes';
import { connect } from 'react-redux';

function Home(props) {
    // props.dispatch(fetchUsers());
    return (
      <Router>
        <div className="Home">
        {/*<Sidebar /> for hamburger*/}

          <main>
            <Switch>
              <Redirect exact from="/" to="/signup" />
              <Route exact path="/signup" component={SignIn} />
              <Route exact path="/register" component={RegistrationForm} />
              <Route exact path="/home" component={UpcomingWeddings} />
              <Route exact path="/newclient" component={Client} />
              <Route exact path="/clientdetail" component={ClientDetail} />
              <Route exact path="/edit" component={Edit} />
              <Route exact path="/photos" component={Photos} />
              <Route exact path="/notes" component={Notes} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  
}

//change to client, not newclient

export default connect()(Home);


