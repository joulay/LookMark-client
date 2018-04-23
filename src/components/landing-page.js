import React from 'react';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <RegistrationForm />
            <LoginForm />
        </div>
    )
}

//add redirect registration-page.js