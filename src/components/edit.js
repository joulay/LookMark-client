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

//look up that specific bride from db
//go through each field 
//query through each 


// this.state.coin = object of all coin
// value = this.state.coin.name
// tagline = this.state.coin.tagline
// summary = this.state.coin.summary
// so all value is populated 

// create bride, save to db, when you want to edit, copy past of component
// query it  get with /client/name
// save it to state 
// put in values for inputs in form
// when you submit, separate put request
