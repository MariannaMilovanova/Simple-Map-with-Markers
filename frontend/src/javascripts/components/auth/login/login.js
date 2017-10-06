import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import {Form, Label, Button} from 'semantic-ui-react';
import R from 'ramda';
import * as LoginActions from './loginActions';
import './login.scss';

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.redirectLoggedInUser();
    }

    changeUserData=(event)=> {
        const field = event.target.name;
        const user = {};
        user[field] = event.target.value;
        this.props.changeUserData(user);
    }

    processForm=(e)=> {
        e.preventDefault();
        this.props.performLogin({
            email: this.props.login.email,
            password: this.props.login.password
        });
    }

    render() {
        return (
                <div className="login-wrapper">
                    <div className="login-header">
                        <div>Login</div>
                    </div>
                    <div className="login-form">
                        <Form onSubmit={this.processForm} onChange={this.changeUserData}>
                            <Form.Input required size='large' icon='mail' type="text" placeholder="Email" name="email"/>
                            <Form.Input required size='large' icon='lock' placeholder="Password" type="password" name="password"/>
                            <Button className="loginBtn" type="submit" color='green' fluid>Sign in </Button>
                        </Form>
                    </div>
                    <div className='login-footer-wrapper'>
                        <div className='login-footer-text'>Don’t have an account?</div>
                        <Link to={'/signup'}>
                            <div className='login-footer-btn'><Button color='blue'>Sign up</Button></div>
                        </Link>
                    </div>
                 </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LoginActions),  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
                       
                        {/* 
                    <Grid verticalAlign="middle" centered columns={1} textAlign="center" relaxed>
                        <Grid.Row>
                            <Grid.Column>
                                <Form action="/" size="big"
                                    onSubmit={this.processForm}
                                    onChange={this.changeUserData}>
                                    {(!R.isEmpty(this.props.login.errors) ||
                                      !this.props.login.success) &&
                                    <Label color="red" className="error">
                                        {this.props.login.message}
                                    </Label>}
                                    <div className="field input">
                                        <Form.Input required size='large' icon='mail' type="text" placeholder="Email" name="email"
                                        />
                                        {this.props.login.errors.email &&
                                        <Label pointing color="red" className="error">
                                            {this.props.login.errors.email}
                                        </Label>}
                                    </div>
                                    <div className="field input">
                                        <Form.Input required size='large' icon='lock' placeholder="Password" type="password" name="password"
                                        />
                                        {this.props.login.errors.password &&
                                        <Label pointing color="red" className="error">
                                            {this.props.login.errors.password}
                                        </Label>}
                                    </div>
                                    <Button id="loginBtn" type="submit" color='orange' fluid>
                                        Sign in
                                    </Button>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                        <div id="login-footer">
                            <p>Don’t have an account?</p>
                            <Link to={'/signup'}>Sign up for free</Link>
                        </div>
                    </div>
                </div>
            </Grid> */}