import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBrides } from '../actions/bride';
import LogOut from './log-out';
import './upcoming-wedding.css';
import moment from 'moment';

class UpcomingWeddings extends React.Component {
    componentDidMount() {
        this.props.dispatch(getBrides())

    }
    render() {
        const brides = this.props.brides.map((bride, index) => (
            
            <tr key={index}>
                <td>{moment(bride.weddingDate).format('MMM Do')}</td> 
                <td>{bride.firstName} {bride.lastName}</td>
                <td>{bride.location}</td>
                <td><Link to={`/brides/${bride.id}`}>DETAILS</Link></td>
            </tr>
        ))
    return (

    <div className="upcoming-wedding">
        
        <Link to="/newclient"> 
            <button className="new-client-button">+ CLIENT</button>
        </Link>
        <LogOut />
    <h1>Upcoming Weddings</h1>
    <table className="upcoming-wedding-table">
        <tbody>
            <tr>
                <th>Date</th>
                <th>Bride</th>
                <th>Venue</th>
            </tr>
           {brides}
        </tbody>
    </table>
    </div>

    )
  }
}

const mapStateToProps = (state) => ({
    brides: state.bride.brides
})

export default connect(mapStateToProps)(UpcomingWeddings);



// let weddingDate = {moment({bride.weddingDate}).format('MMM do YY')}

