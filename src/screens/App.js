import React, { Component } from 'react';
import './App.css';
import logo from './snow-logo.png'
import axios from 'axios';

import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import {
  authPhoneChanged,
  authPinChanged,
} from './actions';


const API_URL = "https://snowlabsdev-api.herokuapp.com/api/";

const mapStateToProps = ({ test }) => {
  const { auth_phone, auth_pin } = test;
  return {
    auth_phone,
    auth_pin,
  };
};


export default connect(mapStateToProps, { authPhoneChanged, authPinChanged })(class AuthScreen extends Component {

  phoneChanged = (text) => {
    this.props.authPhoneChanged(text);
  }

  pinChanged = (text) => {

  }

  tryAPI = async (event) => {
    event.preventDefault();

    const from_url = API_URL + "users/p/" + this.state.inputPhone;
    console.log(from_url);
    const user = await axios.get(from_url);
    console.log(user);
  };

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
              onClick={this.tryAPI}
              >
                Login
            </button>
          </div>

        </div>
      </div>
    );
  }
});
