import React from 'react';
import './notes.css'

export default function Notes() {
return (
    <form>
        <label>
        Notes: <br />
        <textarea  rows="10" cols="47">
            ALLERGIES:
         
        </textarea>
        
        </label> <br />
        {/* <button type="submit">SUBMIT</button> */}
        
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