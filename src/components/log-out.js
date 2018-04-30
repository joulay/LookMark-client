import React from 'react';
import { connect } from 'react-redux';
import {clearAuth} from '../actions/auth';
import { Link } from 'react-router-dom';
import {clearAuthToken} from '../local-storage';

export class LogOut extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        console.log('Logging out');
    }

    render() {
        return (
            <div className="logout-container">
                <Link to="/signup">
                    <button className="logout-button" onClick={() => this.logOut()}>LOG OUT</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogOut);
