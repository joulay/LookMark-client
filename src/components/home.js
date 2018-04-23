import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
// import { Route } from 'react-router-dom';
// import { fetchUsers } from './actions';



class Home extends Component {

  
  render() {
  
    return (
      <div className="App">
        

      </div>
    );
  }
}



export default connect()(Home);

//export default withRouter(connect(mapStateToProps)(App)); + import withRouter in react-router-dom
