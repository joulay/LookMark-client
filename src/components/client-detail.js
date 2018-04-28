import React from 'react';
import { connect } from 'react-redux';
import Notes from './notes';
import { getBride } from '../actions/bride';


class ClientDetail extends React.Component {
    componentDidMount() {
        this.props.dispatch(getBride(this.props.match.params.id));
    }
    
    render() {
        let firstName, lastName, date, phone, addy;
        if(this.props.bride) {
            firstName = this.props.bride.firstName;
            lastName = this.props.bride.lastName;
            date = this.props.bride.weddingDate;
            phone = this.props.bride.phone;
            addy = this.props.bride.location;

    }
    return ( 
    <div>
        <button
            type="submit">
            EDIT
        </button>


        <p> {date} </p>
        <p> {firstName} {lastName} </p>
        <p> {addy} </p>
        <Notes />


    </div>
        )       
    }
}

//button routes to edit

const mapStateToProps = (state, props) => ({
    bride: state.bride.currentBride
});


export default connect(mapStateToProps)(ClientDetail);
