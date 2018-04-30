import React from 'react';
import { connect } from 'react-redux';
import { getBride } from '../actions/bride';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ClientDetail extends React.Component {
    componentDidMount() {
        this.props.dispatch(getBride(this.props.match.params.id));
    }

    render() {
        let firstName, lastName, date, phone, addy, email, notes, id;
        if(this.props.bride) {
            firstName = this.props.bride.firstName;
            lastName = this.props.bride.lastName;
            date = this.props.bride.weddingDate;
            phone = this.props.bride.phone;
            addy = this.props.bride.location;
            email = this.props.bride.email;
            notes = this.props.bride.notes;
            id = this.props.bride.id;
    }

    return (  
    <div className="client-detail">

       <Link to={`/home`}>HOME</Link> <br />
       <Link to={`/edit/${this.props.match.params.id}`}>EDIT</Link> 


    <div className="card">
        <div className="content">
            <div className="deets">
                <h2>{firstName} {lastName}</h2> 
                <p className="date">{moment(date).format('MMM Do YY')}</p> <br/>
                <p><img src='http://localhost:8080/uploads/5ae2206dec046f1a9176c1b2.jpg' height="160" width="160"/> </p>
                <p><img src={`http://localhost:8080/uploads/${id}.jpg`} alt="bride picture" height="160" width="160"/> </p>
                {notes} <br />
                {phone} <br/>
                {addy} <br/>
                {email} <br />
            </div>
        </div>
    </div>





    </div>
        )       
    }
}



const mapStateToProps = (state, props) => ({
    bride: state.bride.currentBride
});


export default connect(mapStateToProps)(ClientDetail);
