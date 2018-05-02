import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import logo from './logo.png';
import './sign-in.css';

import LoginForm from './login-form';

function SignIn(props) {
    if(props.loggedIn) {
        return <Redirect to="/home" />;
    }
    return (
        <div className="sign-in">
            {/* <img id="logo" src={logo} alt="lookmark logo" /> */}
            <LoginForm />
            <p></p>
            <Link className="link" to="/register">Create an account</Link>
                      
        </div>
    )
}
        
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})  

export default connect(mapStateToProps)(SignIn);