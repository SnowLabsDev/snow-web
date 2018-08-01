import React, { Component } from 'react';
//import './App.css';
//import logo from '../snow-logo.png'
import axios from 'axios';

import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
/*
import {
  authPhoneChanged,
  authPinChanged,
  trySignIn,
} from '../actions';
*/

const mapStateToProps = ({ test }) => {
  const { user_info } = test;
  return {
    user_info,
  };
};


export default connect(mapStateToProps, {  })(class App extends Component {


  render() {
    return (
      <div id="App">
        Hello
      </div>
    );
  }
});
