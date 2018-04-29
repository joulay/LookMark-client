import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { Form, Icon, Button } from 'antd';
const FormItem = Form.Item;

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
        const { getFieldDecorator } = this.props.form;

        return (    
            <Form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}

                <FormItem>
                    
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="USERNAME"
             
                />
           
                </FormItem>


                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="PASSWORD"
               
                />


                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>

                <Button type="primary" htmlType="submit" className="login-form-button">
            LOG IN
          </Button>


            </Form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
