import React, {Component} from 'react';
import './userProfile.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Icon } from 'semantic-ui-react';
import * as UserProfileActions from './userProfileActions';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillMount(){
        this.props.getCurrentUser();
    }
    render() {
        return (
            <div id="user-info">
                {this.props.user && <span>{this.props.user.firstName + ' ' + this.props.user.lastName}</span>}
                <div className="user-profile-logout-wrapper">
                    <Link to={'/logout'} className="logout">
                        <Icon name="log out"/>Logout
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userProfile.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, UserProfileActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);