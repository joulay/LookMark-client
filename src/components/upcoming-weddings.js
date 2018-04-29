import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBrides } from '../actions/bride';
import './upcoming-wedding.css';


class UpcomingWeddings extends React.Component {
    componentDidMount() {
        this.props.dispatch(getBrides())

    }
    render() {
        console.log(this.props);
        const brides = this.props.brides.map((bride, index) => (
            <tr key={index}>
                <td>{bride.weddingDate}</td>
                <td>{bride.firstName} {bride.lastName}</td>
                <td>{bride.location}</td>
                <td><Link to={`/brides/${bride.id}`}>DETAIL</Link></td>
            </tr>
        ))
    return (
    <div className="upcoming-wedding">
        <button id="newClient">
        <Link to="/newclient">+ NEW CLIENT</Link>
        </button>
    <h2>Upcoming Weddings</h2>
    <table class="upcoming-wedding-table">
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