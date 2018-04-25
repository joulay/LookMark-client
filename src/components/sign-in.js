import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';

function SignIn(props) {
    if(props.loggedIn) {
        return <Redirect to="/home" />;
    }
    return (
        <div className="sign-in">
            <LoginForm />
            <p></p>
            <Link to="/register">Create an account</Link>
                      
        </div>
    )
}
        
// const mapStateToProps = state => ({
//     loggedIn: state.auth.currentUser !== null
// })   mapStateToProps

export default connect()(SignIn);