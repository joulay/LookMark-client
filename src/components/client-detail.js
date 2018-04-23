import React from 'react';
import Notes from './notes';


export default function ClientDetail() {
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
    </div>
    )
}


//button routes to edit