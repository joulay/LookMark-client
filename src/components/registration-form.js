import React from 'react';
import { Link } from 'react-router-dom';
// import { combineUser } from '../reducers/user';
import { Field, reduxForm } from 'redux-form';
import  { newUser } from '../actions/createUser';
import Input from './input';
import { Form, Button } from 'antd';
const FormItem = Form.Item;
// import { login } from '../actions/auth';

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
        const { getFieldDecorator } = this.props.form;   
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };     
    return (
        <div>
            <Link to="/signup">Back</Link>
            <p>{this.state.msg ? this.state.msg : ''}</p>
            <form 
                className="registration-form" 
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)) }> 

                 <FormItem
                    {...formItemLayout}
                    label="FULL NAME"
                >    
                {/* <label htmlFor="fullName">FULL NAME</label> <br /> */}



                <Field component={Input}
                    type="text" 
                    name="fullName" 
                /> <br />


                </FormItem>       



                <label htmlFor="email">EMAIL</label> <br />
                <Field component={Input}
                    type="email" 
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

                <br />
                <Button type="primary" htmlType="submit">REGISTER</Button>
            </form>
            
        </div>
        )
    }  
}

//validations 


export default reduxForm({
    form: 'registerUser'
})(RegistrationForm);  

