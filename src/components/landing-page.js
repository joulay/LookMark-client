import React from 'react';
import RegisterForm from './register-form';
import LoginForm from './login-form';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <RegisterForm />
            <LoginForm />
        </div>
    )
}