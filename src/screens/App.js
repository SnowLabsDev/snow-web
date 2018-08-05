import React, { Component } from 'react';
//import './App.css';
//import logo from '../snow-logo.png'
import axios from 'axios';

import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';

/*
import {
  populateContracts
} from '../actions';
*/

const TEST_OR_NAH = true;
const API_URL = TEST_OR_NAH ? "http://localhost:3050/api/" : "https://snowlabsdev-api.herokuapp.com/api/";

const mapStateToProps = ({ test }) => {
  const { user_info } = test;
  return {
    user_info,
  };
};


export default connect(mapStateToProps, { })(class App extends Component {

  state = {
    user_info: {},
  }

  componentWillMount () {
    console.log('mounting');
    if (this.props.location) {
      console.log(this.props.location.pathname);
    }
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  componentWillMount() {
    //const user_info = this.props.location.state.user_info;

    this.setState({user_info: this.props.location.state.user_info});
  }


  button = () => {

  }
  render() {
    return (
      <div>
        <div>
          <h1>Owned Contracts</h1>
          {this.populateOwnedContracts()}
        </div>
        <div>
          <h1>Participating Contracts</h1>
          {this.populateInContracts()}
        </div>
        <div>
          <h1>Create NEW Contract??!??</h1>
          <input
            type="text"
            placeholder="Proposal Name"
          />
          <input
            type="text"
            placeholder="Comma separated phone numbers"
          />
          <button onClick={this.button}>
            submit
          </button>

        </div>
      </div>
    );
  }
});
