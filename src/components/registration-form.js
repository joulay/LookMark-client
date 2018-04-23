import React from 'react';
// import { Field, reduxForm} from 'redux-form';

export default function RegistrationForm(){
    return (
        <form className="registration-form"> 
            <label htmlFor="fullName">FULL NAME</label> <br />
            <input 
                type="text" 
                name="fullName" 
            /> <br />
            <label htmlFor="email">EMAIL</label> <br />
            <input 
                type="text" 
                name="email" 
            /> <br />
            <label htmlFor="username">USERNAME</label> <br />
            <input 
                type="text" 
                name="username" 
            /> <br />
            <label htmlFor="password">PASSWORD</label> <br />
            <input 
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

// export default reduxForm({
//     form: 'registerUser'
// })(RegistrationForm);  

//validations