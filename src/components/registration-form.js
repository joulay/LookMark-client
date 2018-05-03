import React from 'react';
import { Link } from 'react-router-dom';
// import { combineUser } from '../reducers/user';
import { Field, reduxForm } from 'redux-form';
import  { newUser } from '../actions/createUser';
import Input from './input';
import background from '../decor/blackmarble.jpg';
import './registration-form.css';

const sectionStyle = {
    width: "100%",
    height: "100VH",
    backgroundImage: `url(${background})`
  };


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
        <section style={ sectionStyle }>
            <div className="register-page">
                <Link className="back-link" to="/signup">Back</Link>
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
        </section>
        )
    }  
}

//validations 


export default reduxForm({
    form: 'registerUser'
})(RegistrationForm);  

