import React from 'react';
import { connect } from 'react-redux';

import NewClientForm from './client-form';

function Client(props) {
    return (
        <div className="client">
            <NewClientForm />                    
        </div>
    )
}
        
export default connect()(Client);