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
    user: {
      ownContracts: ["0", "1", "2"],
      inContracts: ["3", "4", "5"],
      _id: "5b5f827c60770000148d7ca1",
      name: "test 0",
      phone: "0000000000",
      pin: "0000",
      __v: 0
    },
    dispOwn: false,
    dispIn: true
  }

  populateOwnContracts = () => {
    if(this.state.dispOwn) {
      const ownList = this.state.user.ownContracts.map((c) => <p key={c}>{c}</p>);
      return <div>{ownList}</div>;
    }
  }

  populateInContracts = () => {
    if(this.state.dispIn) {
      const inList = this.state.user.inContracts.map((c) => <p key={c}>{c}</p>);
      return <div>{inList}</div>;
    }
  }

  render() {
    return (
      <div style={styles.homepage}>
        <div style={styles.sidebar}>
          <div style={{"display": "flex", "justify-content": "center"}}>
            <img style={styles.image} src="https://i.imgur.com/KegGE75.png" />
          </div>

          <div style={{"display": "flex", "position": "relative", "flex-direction": "column", "width": "100%"}}>
            <div style={{"display": "flex", "flex-direction": "row", "justify-content": "center"}}>
              <p>Hello {this.state.user.name}!</p>
            </div>

            <button
              onClick={(event) => this.setState({dispOwn: !this.state.dispOwn})}
              >
              Contracts I own
            </button>
            {this.populateOwnContracts()}

            <button
              onClick={(event) => this.setState({dispIn: !this.state.dispIn})}
              >
              Contracts I'm in
            </button>
            {this.populateInContracts()}
          </div>
        </div>

        <div>
          expansion one
        </div>

        <div>
          expansion two
        </div>
      </div>
    );
  }
});

const styles = {
  homepage: {
    "display": "flex",
    "flex-direction": "row",
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "margin": "0px auto",
    "padding": "0px",
    "background-color": "#ff5656ff"
  },
  sidebar: {
    "background-color": "white",
    "position": "relative",
    "width": "300px",
    "height": "100%",
  },
  image: {
    "position": "relative",
    "width": "60%",
    "height": "15%",
    "padding-top": "10px"
  }
};
