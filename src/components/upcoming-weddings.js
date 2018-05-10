import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBrides } from '../actions/bride';
import LogOut from './log-out';
import './upcoming-wedding.css';
import background from '../decor/peony.jpg';
import moment from 'moment';



const sectionStyle = {
    width: "100%",
    height: "100VH",
    backgroundImage: `url(${background})`
  };
  //background size-pixel? percent?
  //backgroundSixeCover fill greater of height than width


class UpcomingWeddings extends React.Component {
    componentDidMount() {

        setTimeout(() => this.props.dispatch(getBrides()), 1000)
           
    }

    render() {
        let brides;
        if (this.props.brides.length) {
            brides = this.props.brides.map((bride, index) => (
            <tr key={index}>
                <td>{moment(bride.weddingDate).format('MMM Do')}</td> 
                <td>{bride.firstName} {bride.lastName}</td>
                <td>{bride.location}</td>
                <td><Link className="detail-link" to= {`/brides/${bride.id}`}>DETAILS</Link></td>
            </tr>
        ))
        }
    return (
        <section style={ sectionStyle }>
            <div className="button-container">
                <Link to="/client"> 
                    <button className="new-client-button">+ CLIENT</button>
                </Link>
                <LogOut />
            </div>
            <div className="upcoming-wedding">
            <h1>Upcoming Weddings</h1>
                <table className="upcoming-wedding-table">
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Bride</th>
                            <th>Venue</th>
                        </tr>
                        {this.props.brides.length? brides : ''}
                    </tbody>
                </table>
            </div>
        </section>
    )
  }
}

const mapStateToProps = (state) => ({
    brides: state.bride.brides
})

export default connect(mapStateToProps)(UpcomingWeddings);



// let weddingDate = {moment({bride.weddingDate}).format('MMM do YY')}

// to= {{ 
    //     pathname: `/brides/${bride.id}`,
    //     state: { currentBrideId: bride.id },
    // }}