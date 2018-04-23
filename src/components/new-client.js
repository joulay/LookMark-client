import React from 'react';

export default function NewClient() {
    return (
        <form className="registration-form"> 
            <label htmlFor="firstName">FIRST NAME</label> <br />
            <input 
                type="text" 
                name="firstName" 
            /> <br />
            <label htmlFor="lastName">LAST NAME</label> <br />
            <input 
                type="text" 
                name="lastName" 
            /> <br />
            <label htmlFor="email">EMAIL</label> <br />
            <input 
                type="text" 
                name="email" 
            /> <br />
            <label htmlFor="phone">PHONE</label> <br />
            <input 
                type="text" 
                name="phone" 
            /> <br />
            <label htmlFor="date">WEDDING DATE</label> <br />
            <input 
                type="date" 
                name="date" 
            /> <br />
            <button
                type="submit">
                ADD NEW CLIENT
            </button>
        </form>
        )
    }  