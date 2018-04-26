import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { newBride } from '../actions/newBride';

class NewClientForm extends React.Component {
    onSubmit(values) {

        const {firstName, lastName, email, phone, weddingDate, location} = values;
        const client = {firstName, lastName, email, phone, weddingDate, location};
        console.log(client);
        return this.props
          .dispatch(newBride(client))

    }
    render() {
    return (
        <div>
            <Link to="/home">Back</Link>
            <form 
                className="client-form"
                onSubmit={this.props.handleSubmit(values => 
                    this.onSubmit(values)) }> 
                <label htmlFor="firstName">FIRST NAME</label> <br />
                <Field 
                    component="input" 
                    type="text" 
                    name="firstName" 
                /> <br />
                <label htmlFor="lastName">LAST NAME</label> <br />
                <Field 
                    component="input" 
                    type="text" 
                    name="lastName" 
                /> <br />
                <label htmlFor="email">EMAIL</label> <br />
                <Field 
                    component="input" 
                    type="text" 
                    name="email" 
                /> <br />
                <label htmlFor="phone">PHONE</label> <br />
                <Field 
                    component="input" 
                    type="text" 
                    name="phone" 
                /> <br />
                <label htmlFor="location">LOCATION</label> <br />
                <Field 
                    component="input" 
                    type="text" 
                    name="location" 
                /> <br />
                <label htmlFor="weddingDate">WEDDING DATE</label> <br />
                <Field 
                    component="input" 
                    type="date" 
                    name="weddingDate" 
                /> <br />
                <button
                    type="submit">
                    ADD NEW CLIENT
                </button>
            </form>
        </div>
        )
    }  
}

export default reduxForm ({
    form: 'client',
    // enableReinitialize: true 
})(NewClientForm);

// NewClientForm = connect(
//     state => ({
//         initialValues: state.recipe.initialValues
//     })
// )(NewClientForm)
