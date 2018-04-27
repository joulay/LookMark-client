import React from 'react';
import Notes from './notes';


export default class ClientDetail extends React.Component {
    componentDidMount() {

    }
    
    //get id of bride from local storage
    //dispatch action with that id showBride(rename to bride)
      //fetch to GET id
      //server will send back bride into redux state
      //connect to redux, mapState to props get bride from state
    render() {
    return ( 
    <div>
        <button
            type="submit">
            EDIT
        </button>

        <p> Image.jpg </p>
        <Notes />

        <p> FIRST NAME LAST NAME </p>
        <p> EMAIL </p>
        <p> PHONE NUMBER </p>
        <p> WEDDING DATE </p>
        {/* <Edit />
        <Image />  */}

        <p> props.firstName </p>

    </div>
        )       
    }
}

//button routes to edit