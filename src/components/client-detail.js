import React from 'react';
import { connect } from 'react-redux';
import { getBride } from '../actions/bride';
import { Link } from 'react-router-dom';
import moment from 'moment';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);


class ClientDetail extends React.Component {
    componentDidMount() {
        this.props.dispatch(getBride(this.props.match.params.id));

    }

    render() {
        let firstName, lastName, date, phone, addy, email, notes, photos;
        if(this.props.bride) {
            firstName = this.props.bride.firstName;
            lastName = this.props.bride.lastName;
            date = this.props.bride.weddingDate;
            phone = this.props.bride.phone;
            addy = this.props.bride.location;
            email = this.props.bride.email;
            notes = this.props.bride.notes;
            photos = this.props.bride.photos;     
    }

    return (  
    <div className="client-detail">
        <div className="home-nav">
            <Link to={`/home`}><span uk-icon="icon: arrow-left; ratio: 1.5"></span></Link> <br />
        </div>
      
    <div className="card">
        <div className="content">
            <div className="deets">
                <h2>{firstName} {lastName}</h2> 
                <p className="date">{moment(date).format('MMM Do YYYY')}</p> <br/>
                {phone} <br />
                {addy} <br />
                {email} <br />
                {notes} <br />
                {photos && photos.map((value, index) => {
                return (
                     <li key={index} className="photo-list">
                         <img className="photo-image" src={`${value.photo}`} alt="client" /> 
                     </li>
                )
            })}     
            </div>
        </div>
    </div>

    <div className="bottom">    
        <Link 
            to= {{    
                pathname: `/edit/${this.props.match.params.id}`
            }}> 
            <button className="edit-button">EDIT</button>
        </Link>
    </div>
    
    </div>
        )       
    }
}



const mapStateToProps = (state, props) => ({
    bride: state.bride.currentBride
});


export default connect(mapStateToProps)(ClientDetail);


