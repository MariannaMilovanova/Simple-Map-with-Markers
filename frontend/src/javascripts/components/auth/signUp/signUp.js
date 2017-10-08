import React, {Component} from 'react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SignUpForm from './signUpForm';
import * as signUpActions from './signUpActions';
import {Container, Header, Button, Item} from 'semantic-ui-react';
import './signUp.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    handleSignUp = () => {
        this.props.signUp(this.props.signUpState);
    };

    handleChange = (field) => {
        this.props.changeSignUpForm({
                [field.name]: field.value,
            }
        )
    };

    render() {
        return (
            <div className='signUp-wrapper'>
                <Container text textAlign="center" className="sign-up-container">
                    <Container text className="sign-up-form">
                        <h3>Create an account</h3>
                        <SignUpForm onSignUp={this.handleSignUp} onChangeForm={this.handleChange}/>
                    </Container>
                    <div className='signup-footer-wrapper'>
                        <div className='signup-footer-text'>Already have an account?</div>
                        <Link to={'/login'}>
                            <div className='signup-footer-btn'><Button color='green'>Sign up</Button></div>
                        </Link>
                    </div>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        signUpState: state.signUp
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(signUpActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
