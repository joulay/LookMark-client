import React from 'react';

// import { Route } from 'react-router-dom';

import './home.css';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';

export default function Home() {

  
  
    return (
      <div className="Home">
        <RegistrationForm />
        <LoginForm />
      </div>
    );
  
}



