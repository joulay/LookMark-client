import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { required } from './validators';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { newUser } from '../actions/createUser';
import Input from './input';
import {login } from '../actions/auth';
import background from '../decor/blackmarble.jpg';
import './registration-form.css';

const sectionStyle = {
    backgroundSize: "100% 100%",
    height: "100VH",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${background})`
  };

export class RegistrationForm extends React.Component{

    onSubmit(values) {    
        const {fullName, email, username, password} = values;
        const user = {fullName, email, username, password};
        return this.props
            .dispatch(newUser(user))
            .then(() => this.props.dispatch(login(username, password))) }

    render() {
        if(this.props.loggedIn) {
            return <Redirect to="/home" />;
        }
        
    return (
        <section style={ sectionStyle }>
            <div className="register-page">
                <Link className="back-link" to="/signup">Back</Link>
        
                <form 
                    className="form" 
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)) }> 

                    <Field component={Input}
                        type="text" 
                        name="fullName" 
                        placeholder="FULL NAME"
                        validate={[required]}
                    /> <br />

                    <Field component={Input}
                        type="email" 
                        name="email"  
                        placeholder="EMAIL"
                        validate={[required]}
                    /> <br />

                    <Field component={Input}
                        type="text" 
                        name="username" 
                        placeholder="USERNAME"
                        validate={[required]}
                    /> <br />

                    <Field component={Input}
                        type="text" 
                        name="password" 
                        placeholder="PASSWORD"
                        validate={[required]}
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



const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
})  
const connectedRegistrationForm = connect(mapStateToProps)(RegistrationForm);


export default reduxForm({
    form: 'registerUser'
})(connectedRegistrationForm);  

