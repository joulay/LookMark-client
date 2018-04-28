import React from 'react';
import Photos from './photo-upload';
import Notes from './notes';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getBride, updateBride } from '../actions/bride';

class Edit extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            weddingDate: '',
            location:''
        }
    }

    componentDidMount() {
        this.props.dispatch(getBride(this.props.match.params.id));
        setTimeout(() => {(
            this.props.bride);
            this.setState({     
                firstName: this.props.bride.firstName,     
                lastName: this.props.bride.lastName,     
                phone: this.props.bride.phone,     
                location: this.props.bride.location,     
                weddingDate: this.props.bride.weddingDate,     
                email: this.props.bride.email,   
                id: this.props.bride.id
            }); 
        }, 500); //without will be undefined
    }

    onSubmit = () => { 
        const {firstName, lastName, email, phone, weddingDate, location, id} = this.state;
        const client = {firstName, lastName, email, phone, weddingDate, location, id};
        console.log(client);
        return this.props
            .dispatch(updateBride(client))
    }

    firstNameChange=(e => {
        this.setState({firstName: e.target.value})});
    lastNameChange=(e => {
        this.setState({lastName: e.target.value})});
    emailChange=(e => {
        this.setState({email: e.target.value})});
    phoneChange=(e => {
        this.setState({phone: e.target.value})});
    weddingDateChange=(e => {
        this.setState({weddingDate: e.target.value})});
    locationChange=(e => {
        this.setState({location: e.target.value})});

    render() { 

    return (
        <form
            className="client-form">
            <label htmlFor="firstName">FIRST NAME</label> <br />
            <input onChange={this.firstNameChange}
                value={this.state.firstName}
                type="text" 
                name="firstName" 
            /> <br />
            <label htmlFor="lastName">LAST NAME</label> <br />
            <input onChange={this.lastNameChange}
                value={this.state.lastName}
                type="text" 
                name="lastName" 
            /> <br />
            <label htmlFor="email">EMAIL</label> <br />
            <input onChange={this.emailChange}
                value={this.state.email}
                type="text" 
                name="email" 
            /> <br />
            <label htmlFor="phone">PHONE</label> <br />
            <input onChange={this.phoneChange}
                value={this.state.phone}
                type="text" 
                name="phone" 
            /> <br />
            <label htmlFor="location">LOCATION</label> <br />
            <input onChange={this.locationChange}
                value={this.state.location}
                type="text" 
                name="location" 
            /> <br />
            <label htmlFor="weddingDate">WEDDING DATE</label> <br />
            <input onChange={this.dateChange}
                value={this.state.weddingDate}
                type="date" 
                name="weddingDate" 
            /> <br />

            <div className='button' onClick={this.onSubmit}>
                UPDATE CLIENT
            </div>
        </form>
   
    )}
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


const mapStateToProps = (state, props) => ({
    bride: state.bride.currentBride
});


export default connect(mapStateToProps)(Edit);