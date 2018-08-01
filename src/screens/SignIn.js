import React, { Component } from 'react';
//import './App.css';
//import logo from '../snow-logo.png'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import {
  authPhoneChanged,
  authPinChanged,
  trySignIn,
} from '../actions';

const mapStateToProps = ({ test }) => {
  const { auth_phone, auth_pin, auth_status, error_message, user_info } = test;
  return {
    auth_phone,
    auth_pin,
    auth_status,
    error_message,
    user_info,
  };
};


export default connect(mapStateToProps, { authPhoneChanged, authPinChanged, trySignIn })(class SignIn extends Component {

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');

  }
  phoneChanged = (event) => {
    const text = event.target.value;
    console.log('phone');
    this.props.authPhoneChanged(text);
  }

  pinChanged = (event) => {
    const text = event.target.value;
    console.log('pin');
    this.props.authPinChanged(text);
  }


  trySignIn = (event) => {
    this.props.trySignIn({
      "auth_phone": this.props.auth_phone,
      "auth_pin": this.props.auth_pin
    });
  }

  test = (event) => {
    if (this.props.error_message !== '') {
      console.log('change the things');
      this.props.history.push('/home');
    }
  }

  render() {
    /*
    if (this.props.auth_status) {
      this.props.router.push('/home');
    }
    */
    return (
      <div id="App">
        <div id="user-info">

          <img id="img" src="https://i.imgur.com/KegGE75.png" />
          <div id="form">
            <input
              id="text-input"
              type="text"
              placeholder="Phone number"
              value={this.props.auth_phone}
              onChange={this.phoneChanged }
            />

            <input
              id="text-input"
              type="password"
              placeholder="Pin number"
              value={this.props.auth_pin}
              onChange={ this.pinChanged }
            />
            <button
              id="button"
              onClick={this.trySignIn}
              >
                Login
            </button>
            <button
              onClick={this.test}>
              plz
            </button>
          </div>

        </div>
      </div>
    );
  }
});
