import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
import { fetchUsers } from './actions';

import RegistrationPage from '../components/registration-page';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }
  
  render() {
    
    // const users = this.props.users.map((user, index) => (
    //   <li key={index}>
    //     {user.name}
    //   </li>
    // ))

    console.log(this.props.users);
  
    return (
      <div className="App">
        <RegistrationPage />


      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.data 
})

export default connect(mapStateToProps)(App);

//export default withRouter(connect(mapStateToProps)(App)); + import withRouter in react-router-dom
