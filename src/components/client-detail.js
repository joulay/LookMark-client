import React from 'react';
import { connect } from 'react-redux';
import { getBride } from '../actions/bride';
import Edit from './edit';
import { Link } from 'react-router-dom';

class ClientDetail extends React.Component {
    componentDidMount() {
        this.props.dispatch(getBride(this.props.match.params.id));
        console.log(this.props.bride);
    
    }

    render() {
        let firstName, lastName, date, phone, addy, email, notes;
        if(this.props.bride) {
            firstName = this.props.bride.firstName;
            lastName = this.props.bride.lastName;
            date = this.props.bride.weddingDate;
            phone = this.props.bride.phone;
            addy = this.props.bride.location;
            email = this.props.bride.email;
            notes = this.props.bride.notes;
    }

    return (  
    <div className="client-detail">

       <Link to={`/home`}>HOME</Link> <br />
       <Link to={`/edit/${this.props.match.params.id}`}>EDIT</Link> 

        <p> {date} </p>
        <p> {firstName} {lastName} </p>
        <p> {phone} </p>
        <p> {addy} </p>
        <p> {email} </p>
        <p> {notes} </p>
       


    </div>
        )       
    }
}



const mapStateToProps = (state, props) => ({
    bride: state.bride.currentBride
});


export default connect(mapStateToProps)(ClientDetail);
