import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import logo from '../decor/whiteLogo.png';
import background from '../decor/blackmarble.jpg';
import './sign-in.css';

import LoginForm from './login-form';

const sectionStyle = {
    backgroundSize: "100% 100%",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${background})`
  };

function SignIn(props) {
    if(props.loggedIn) {
        return <Redirect to="/home" />;
    }

    return (
        <section style={ sectionStyle }>
            <div className="sign-in">
                <img id="logo" src={logo} alt="lookmark logo" />
                <LoginForm />
                <p></p>
                <Link className="create-link" to="/register">Create an account</Link>
                <br/>
                {/* <div className="tooltip">
                    <span uk-icon="info" className="i"></span>
                    <br/>
                    <span className="tooltipText">
                    An app for makeup artist, by a makeup artist
                    to maintain client info and photos in one place</span>
                    
                </div> */}
                
            </div>              
        </section>
    )
}
    
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})  

export default connect(mapStateToProps)(SignIn);