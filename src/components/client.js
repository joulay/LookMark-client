import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import NewClientForm from './client-form';


function Client(props) {
    return (
        <div className="client">
            <NewClientForm />
            
                      
        </div>
    )
}
        
// const mapStateToProps = state => ({
//     loggedIn: state.auth.currentUser !== null
// })  

export default connect()(Client);