import React from 'react';
import { Field, reduxForm} from 'redux-form';



class RegistrationForm extends React.Component {
    onSubmit(values) {
        
    }
    render() {
        return (
            <form className="login-form">
                <label htmlFor="fullName">FULL NAME</label>
                <Field 
                    component="input" 
                    type="text" 
                    name="fullName" 
                />
                <label htmlFor="username">USERNAME</label>
                <Field 
                    component="input" 
                    type="text" 
                    name="username" 
                />
                <label htmlFor="email">EMAIL</label>
                <Field 
                    component="input" 
                    type="text" 
                    name="email" 
                />
                <label htmlFor="password">PASSWORD</label>
                <Field 
                    component="input" 
                    type="text" 
                    name="password" 
                />
                <button
                    type="submit">
                    CREATE AN ACCOUNT 
                </button>
            </form>
        )
    }
}  

export default reduxForm({
    form: 'registerUser'
})(RegistrationForm);  