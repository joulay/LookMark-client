import React, { Component } from 'react';
import logo from './logo.svg';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {users}
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.data 
})

export default connect(mapStateToProps)(App);
