import React, { Component } from 'react';
import axios from 'axios';import 'babel-polyfill';
import queryString from 'query-string';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import ContractView from '../components/ContractView';

const TEST_OR_NAH = true;
const API_URL = TEST_OR_NAH ? "http://localhost:3050/api/" : "https://snowlabsdev-api.herokuapp.com/api/";

const mapStateToProps = ({ test }) => {
  const { user_info, contract } = test;
  return {
    user_info,
    contract
  };
};


export default connect(mapStateToProps, { })(class App extends Component {

  state = {
    user: {
      ownContracts: ["5b673bc8ba222e5412e940ea", "5b66064942d1a94c6d4c5b99"],
      inContracts: ["5b674730ba222e5412e940eb", "5b67474fba222e5412e940ec"],
      _id: "5b5f827c60770000148d7ca1",
      name: "Tyler",
      phone: "0000000000",
      pin: "0000",
      __v: 0
    },
  }

  render() {
    return (
      <div style={styles.homepageContainer}>
        <Sidebar user={this.state.user} func={this.populate}/>


        <div>
          <ContractView />
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
