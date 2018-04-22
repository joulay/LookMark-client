import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchUsers } from './actions';

class App extends Component {
  //when component loads
  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }
  
  render() {

    const users = this.props.users.map((user, index) => (
      <li key={index}>
        {user.name}
      </li>
    ))

    console.log(this.props.users);
  
    return (
      <div className="App">

        <ul>
          {users}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.data 
})

export default connect(mapStateToProps)(App);
