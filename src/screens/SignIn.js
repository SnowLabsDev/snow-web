import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  authPhoneChanged,
  authPinChanged,
  trySignIn,
} from '../actions';

const mapStateToProps = ({ auth }) => {
  const { auth_phone, auth_pin } = auth;
  return {
    auth_phone,
    auth_pin,
  };
};

export default connect(mapStateToProps, { authPhoneChanged, authPinChanged, trySignIn })(class SignIn extends Component {

  phoneChanged = (event) => {
    const text = event.target.value;
    this.props.authPhoneChanged(text);
  }

  pinChanged = (event) => {
    const text = event.target.value;
    this.props.authPinChanged(text);
  }


  trySignIn = (event) => {
    this.props.trySignIn({
      "auth_phone": this.props.auth_phone,
      "auth_pin": this.props.auth_pin
    });
  }

  render() {
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
          </div>
        </div>
      </div>
    );
  }
});
