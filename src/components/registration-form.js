import React from 'react';
import { Link } from 'react-router-dom';
// import { combineUser } from '../reducers/user';
import { Field, reduxForm } from 'redux-form';
import  { newUser } from '../actions/createUser';
import Input from './input';
import './registration-form.css';


class RegistrationForm extends React.Component{
    constructor(props) {
        super(props) 

        this.state={
            msg:""
        }
    }

    onSubmit(values) {    
        const {fullName, email, username, password} = values;
        const user = {fullName, email, username, password};
        return this.props
            .dispatch(newUser(user))
            .then(this.setState({msg: 'Thank you for registering. Please log in'})
            )}

    render() {
        
    return (
        <div className="register-page">
            <Link to="/signup">Back</Link>
            <p>{this.state.msg ? this.state.msg : ''}</p>
            <form 
                className="form" 
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)) }> 

                <Field component={Input}
                    type="text" 
                    name="fullName" 
                    placeholder="FULL NAME"
                /> <br />

                <Field component={Input}
                    type="email" 
                    name="email"  
                    placeholder="EMAIL"
                /> <br />

                <Field component={Input}
                    type="text" 
                    name="username" 
                    placeholder="USERNAME"
                /> <br />

                <Field component={Input}
                    type="text" 
                    name="password" 
                    placeholder="PASSWORD"
                /> <br />

                <button
                    className="form-button"
                    type="submit">
                    REGISTER 
                </button>

                <br />

            </form>
            
        </div>
        )
    }  
}

//validations 


export default reduxForm({
    form: 'registerUser'
})(RegistrationForm);  

