import React from 'react';
import { connect } from 'react-redux';
import {clearAuth} from '../actions/auth';
import { Link } from 'react-router-dom';
import {clearAuthToken} from '../local-storage';
import './log-out.css';

export class LogOut extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <div className="logout-container">
                <Link to="/signup">
                    <button className="button" onClick={() => this.logOut()}>LOG OUT</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogOut);
