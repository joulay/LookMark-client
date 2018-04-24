import React from 'react';
import Photos from './photo-upload';
import Notes from './notes';
import NewClient from './client-form';

export default function Edit() {

    return (
        <div>
            <Photos />
            <Notes />
            <NewClient />
        </div>
    )
}

//submit put request endpoint reflecting the route 