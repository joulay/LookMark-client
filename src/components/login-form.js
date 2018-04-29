import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import './login-form.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }


        return (    
            <div>
                <form
                    className="form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="USERNAME"
                    />

                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="PASSWORD"
                    /> <br />

                    <button disabled={this.props.pristine || this.props.submitting}>
                        LOG IN
                    </button>

                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
