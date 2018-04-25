import React from 'react';
import { Link } from 'react-router-dom';

export default class NewClient extends React.Component {
    onSubmit(values) {
        const {firstName, lastName, email, phone, weddingDate, location} = values;
        const client = {firstName, lastName, email, phone, weddingDate, location};
        console.log(client);
        // return this.props
    }
    render() {
    return (
        <div>
            <Link to="/home">Back</Link>
            <form 
                className="client-form"
                onSubmit={this.props.handleSubmit(values => 
                    this.onSubmit(values)) }> 
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
                <label htmlFor="location">LOCATION</label> <br />
                <input 
                    type="text" 
                    name="location" 
                /> <br />
                <label htmlFor="weddingDate">WEDDING DATE</label> <br />
                <input 
                    type="date" 
                    name="weddingDate" 
                /> <br />
                <button
                    type="submit">
                    ADD NEW CLIENT
                </button>
            </form>
        </div>
        )
    }  
}

