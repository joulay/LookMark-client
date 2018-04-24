import React from 'react';

export default function LoginForm() {
    return(
        <form className="login-form">
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
                LOG IN
            </button>            
        </form>
    )
}



//forgot your password link