import React, { Component } from 'react';
//import './App.css';
//import logo from '../snow-logo.png'
import axios from 'axios';import 'babel-polyfill';
import queryString from 'query-string';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
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
    contract: 'test'
  }

  componentWillMount () {
    if (this.props.location.hasOwnProperty('search')) {
      console.log('search');
    }
  }

  
  populate = async (t) => {
    console.log('trying');
    if (this.props.location) {
      console.log(this.props.location.search);

      const parsedProps = queryString.parse(this.props.location.search);
      const id = "5b66064942d1a94c6d4c5b99";
      const from_url = `${API_URL}contracts/id/${id}`
      const res = await axios.get(from_url);
      console.log(res.data._id);

      this.setState({contract: res.data._id});

    }
  }

  render() {
    return (
      <div style={styles.homepageContainer}>
        <Sidebar user={this.state.user} func={this.populate}/>


        <div>
          <p>{this.state.contract}</p>
        </div>

        <div>
          expansion two
        </div>
      </div>
    );
  }
});

const styles = {
  homepageContainer: {
    "display": "flex",
    "flex-direction": "row",
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "margin": "0px auto",
    "padding": "0px auto",
    "padding": "0px",
    "background-color": "#494953"
  },
  sidebarContainer: {
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
