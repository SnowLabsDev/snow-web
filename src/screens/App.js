import React, { Component } from 'react';
import './App.css';
import logo from '../snow-logo.png'
import axios from 'axios';

import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import {
  authPhoneChanged,
  authPinChanged,
  authSuccess,
} from '../actions';

const TEST_OR_NAH = true;
const API_URL = TEST_OR_NAH ? "http://localhost:3050/api/" : "https://snowlabsdev-api.herokuapp.com/api/";

const mapStateToProps = ({ test }) => {
  const { auth_phone, auth_pin, auth_success, user_info } = test;
  return {
    auth_phone,
    auth_pin,
    auth_success,
    user_info,
  };
};


export default connect(mapStateToProps, { authPhoneChanged, authPinChanged, authSuccess })(class App extends Component {

  phoneChanged = (text) => {
    console.log('phone');
    this.props.authPhoneChanged(text);
  }

  pinChanged = (text) => {
    console.log('pin');
    this.props.authPinChanged(text);
  }

  authSuccess = (user_obj) => {
    console.log('auth');
    this.props.authSuccess(user_obj);
  }

  tryAPI = async (event) => {
    event.preventDefault();

    const from_url = API_URL + "users/p/" + this.state.inputPhone;
    console.log(from_url);
    const user = await axios.get(from_url);
    console.log(user.data);
    this.authSuccess(user);
  };

  fullAuthAPI = async (event) => {
    event.preventDefault();
    const from_url = API_URL + "users/auth/" + this.state.inputPhone + "/"+this.state.inputPin;
    console.log(from_url);

    const user = await axios.get(from_url);
    console.log(user.data);
    this.authSuccess(user);
  }

  render() {
    return (
      <div className="App">
        <div className="user-info">

          <img className="img" src={logo}/>

          <div className="form">
            <input
              className="text-input"
              type="text"
              placeholder="Phone number"
              value={this.props.inputPhone}
              onChange={ event => this.setState({ inputPhone: event.target.value })}
            />

            <input
              className="text-input"
              type="password"
              placeholder="Pin number"
              value={this.props.inputPin}
              onChange={ event => this.setState({ inputPin: event.target.value })}
            />
            <button
              className="button"
              onClick={this.fullAuthAPI}
              >
                Login
            </button>
          </div>

        </div>
      </div>
    );
  }
});
