import React from 'react';
import { Link } from 'react-router-dom';
import { required } from './validators';
import { Field, reduxForm } from 'redux-form';
import  { newUser } from '../actions/createUser';
import Input from './input';
import background from '../decor/blackmarble.jpg';
import './registration-form.css';

const sectionStyle = {
    backgroundSize: "100% 100%",
    height: "100VH",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${background})`
  };

export class RegistrationForm extends React.Component{
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




export default reduxForm({
    form: 'registerUser'
})(RegistrationForm);  

