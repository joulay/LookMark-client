import React from 'react';



export default function ClientDetail() {
return (
    <div>
        <button
            type="submit">
            EDIT
        </button>

        <p> Image.jpg </p>
        <textarea rows="10" cols="50">
            ALLERGIES:
            PRODUCTS USED:
        </textarea>

        <p> FIRST NAME LAST NAME </p>
        <p> EMAIL </p>
        <p> PHONE NUMBER </p>
        <p> WEDDING DATE </p>
        {/* <Edit />
        <Image />
        <Notes />  */}
    </div>
    )
}