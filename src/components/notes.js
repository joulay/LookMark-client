import React from 'react';

export default function Notes() {
return (
    <form>
        <label>
        NOTES: <br />
        <textarea  rows="10" cols="50">
            ALLERGIES:
         
        </textarea>
        </label> <br />
        
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