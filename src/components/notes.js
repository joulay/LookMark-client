import React from 'react';
import { Button } from 'antd';

export default function Notes() {
return (
    <form>
        <label>
        NOTES: <br />
        <textarea  rows="10" cols="50">
            ALLERGIES:
         
        </textarea>
        
        </label> <br />
        <Button type="primary" htmlType="submit">Register</Button>
        <button type="submit" class="ant-btn login-form-button ant-btn-primary">SUBMIT</button>
    </form>
    )
}



// {/* <form onSubmit={this.handleSubmit}>
// <label>
// NOTES:
// <textarea value={this.state.value} onChange={this.handleChange} />
// </label>
// <input type="submit" value="Submit" />
// </form> */}