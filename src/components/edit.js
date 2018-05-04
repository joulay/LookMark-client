import React from 'react';
import { connect } from 'react-redux';
import { getBride, updateBride } from '../actions/bride';
import { Link } from 'react-router-dom';
import PhotoUploader from './photo-upload';
import background from '../decor/darkblackmarble.jpg';
import './edit.css';

const sectionStyle = {
    width: "100%",
    height: "100VH",
    backgroundImage: `url(${background})`
  };

class Edit extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            weddingDate: '',
            location:'',
            notes: ''
        }
    }

    componentDidMount() {
        this.props.dispatch(getBride(this.props.match.params.id));
        setTimeout(() => {
            this.setState({     
                firstName: this.props.bride.firstName,     
                lastName: this.props.bride.lastName,     
                phone: this.props.bride.phone,     
                location: this.props.bride.location,     
                weddingDate: this.props.bride.weddingDate,     
                email: this.props.bride.email,   
                notes: this.props.bride.notes,
                id: this.props.bride.id
            }); 
        }, 500);
        // this.props.dispatch(getPhotos()) 
    }

    onSubmit = (e) => { 
        e.preventDefault();
        const {firstName, lastName, email, phone, weddingDate, location, id, notes} = this.state;
        const client = {firstName, lastName, email, phone, weddingDate, location, id, notes};
       //pass photo& id 

            // this.props.dispatch(postPhoto(this.props.location.state.currentBrideId));
            this.props.dispatch(updateBride(client));
            
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
    notesChange=(e => {
        this.setState({notes: e.target.value})});

    render() { 
        // console.log('the id: ' + JSON.stringify(this.props.location.state));
        // console.log(this.props.location.state['currentBrideId']);
    return (
        <section style={ sectionStyle }>
        <Link to="/home">Back</Link>
            <form 
                className="form">
                <label htmlFor="firstName">First Name</label> <br />
                <input onChange={this.firstNameChange}
                    value={this.state.firstName}
                    type="text" 
                    name="firstName" 
                    id="firstName"
                /> <br />
                <label htmlFor="lastName">Last Name</label> <br />
                <input onChange={this.lastNameChange}
                    value={this.state.lastName}
                    type="text" 
                    name="lastName" 
                    id="lastName"
                /> <br />
                <label htmlFor="email">Email</label> <br />
                <input onChange={this.emailChange}
                    value={this.state.email}
                    type="text" 
                    name="email" 
                    id="email"
                /> <br />
                <label htmlFor="phone">Phone</label> <br />
                <input onChange={this.phoneChange}
                    value={this.state.phone}
                    type="text" 
                    name="phone" 
                    id="phone"
                /> <br />
                <label htmlFor="location">Location</label> <br />
                <input onChange={this.locationChange}
                    value={this.state.location}
                    type="text" 
                    name="location" 
                    id="location"
                /> <br />
                <label htmlFor="weddingDate">Wedding Date</label> <br />
                <input onChange={this.weddingDateChange}
                    value={this.state.weddingDate}
                    type="date" 
                    name="weddingDate" 
                    id="weddingDate"
                /> <br />
                <label htmlFor="notes">Notes</label> <br />
                <textarea onChange={this.notesChange}
                    value={this.state.notes}
                     
                    name="notes" 
                    id="notes"
                    placeholder="allergies: "
                /> <br />
 
          
            <button className="form-button" onClick={this.onSubmit}>
                UPDATE CLIENT
            </button>
            </form>

            <PhotoUploader />


        </section>
    )}
}


const mapStateToProps = (state, props) => ({
    bride: state.bride.currentBride
});


export default connect(mapStateToProps)(Edit);

//connects state to component, provides dispatch keys to same object
//this.props = keys inside obj, which repr components 
//dispatch keys = actions 

//mapStateToProps = data better known as STATE 