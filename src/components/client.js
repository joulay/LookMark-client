import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import ClientForm from './client-form';


function Client(props) {
    return (
        <div className="client">
            <ClientForm />
            <p></p>
            <Link to="/edit">Edit</Link>
                      
        </div>
    )
}
        
// const mapStateToProps = state => ({
//     loggedIn: state.auth.currentUser !== null
// })  

export default connect()(SignIn);