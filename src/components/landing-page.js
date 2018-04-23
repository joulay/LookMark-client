import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route } from 'react-router-dom';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';

function LandingPage(props) {
    if(props.loggedIn) {
        return <Redirect to="/home" />;
    }
    return (
        <div className="landing-page">
            <LoginForm />
            <Link to="/register">Create an account</Link>
            <Route exact path="/register" component={RegistrationForm} />            
        </div>
    )
}
            // <LoginForm />
            
            // <Link to="/register">Create an account</Link>
            // <RegistrationForm />
// const mapStateToProps = state => ({
//     loggedIn: state.auth.currentUser !== null
// })   mapStateToProps

export default connect()(LandingPage);