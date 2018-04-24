import React from 'react';
import { Link } from 'react-router-dom';
// import { combineUser } from '../reducers/user';
import { Field, reduxForm } from 'redux-form';
import  { newUser } from '../actions/createUser';
import Input from './input';
// import { login } from '../actions/auth';

class RegistrationForm extends React.Component{
    onSubmit(values) {
        
        const {fullName, email, username, password} = values;
        const user = {fullName, email, username, password};
        console.log(user);
        return this.props
            .dispatch(newUser(user))
            // .then(()=>this.props.dispatch(login(username, password)))
    }
    render() {
    return (
        <div>
            <Link to="/signup">Back</Link>
            <form 
                className="registration-form" 
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)) }> 
                <label htmlFor="fullName">FULL NAME</label> <br />
                <Field component={Input}
                    type="text" 
                    name="fullName" 
                /> <br />
                <label htmlFor="email">EMAIL</label> <br />
                <Field component={Input}
                    type="text" 
                    name="email" 
                /> <br />
                <label htmlFor="username">USERNAME</label> <br />
                <Field component={Input}
                    type="text" 
                    name="username" 
                /> <br />
                <label htmlFor="password">PASSWORD</label> <br />
                <Field component={Input}
                    type="text" 
                    name="password" 
                /> <br />
                <button
                    type="submit">
                    CREATE AN ACCOUNT 
                </button>
            </form>
            
        </div>
        )
    }  
}

//validations 


export default reduxForm({
    form: 'registerUser'
})(RegistrationForm);  

