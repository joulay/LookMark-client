import React from 'react';
import { Field, reduxForm} from 'redux-form';

class RegistrationForm extends React.Component {
    onSubmit(values) {
        
    }
    render() {
        return (
            <form className="login-form"> 
                <label htmlFor="fullName">FULL NAME</label> <br />
                <Field 
                    component="input" 
                    type="text" 
                    name="fullName" 
                /> <br />
                <label htmlFor="username">USERNAME</label> <br />
                <Field 
                    component="input" 
                    type="text" 
                    name="username" 
                /> <br />
                <label htmlFor="email">EMAIL</label> <br />
                <Field 
                    component="input" 
                    type="text" 
                    name="email" 
                /> <br />
                <label htmlFor="password">PASSWORD</label> <br />
                <Field 
                    component="input" 
                    type="text" 
                    name="password" 
                /> <br />
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