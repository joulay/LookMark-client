import React from 'react';
import { connect } from 'react-redux';
import Notes from './notes';
import { getBride } from '../actions/bride';


class ClientDetail extends React.Component {
    componentDidMount() {
        this.props.dispatch(getBride(this.props.match.params.id));
        // dispatch(bride(id))
    //get id of bride from local storage
    }
    
  
    //dispatch action with that id showBride
      //fetch to GET id
      //server will send back bride into redux state
      //connect to redux, mapState to props get bride from state
    render() {
        let name, date;
        if(this.props.bride) {
            name = this.props.bride.firstName;
            date = this.props.bride.weddingDate;
    }
    return ( 
    <div>
        <button
            type="submit">
            EDIT
        </button>


        <p> {name} </p>
        <p> {date} </p>
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
