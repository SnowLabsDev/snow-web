import React, { Component } from 'react';
import axios from 'axios';import 'babel-polyfill';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import ContractView from '../components/ContractView';
import InfoView from '../components/InfoView';
import CreateView from '../components/CreateView';
import DraftView from '../components/DraftView';

const TEST_OR_NAH = true;
const API_URL = TEST_OR_NAH ? "http://localhost:3050/api/" : "https://snowlabsdev-api.herokuapp.com/api/";

const mapStateToProps = ({ auth }) => {
  const { auth_status } = auth;

  return {
    auth_status
  };
};


export default connect(mapStateToProps, {})(class App extends Component {
  render() {
    if (this.props.auth_status) {
      return (
        <div style={styles.homepageContainer}>
          <Sidebar />
          <ContractView />
          <InfoView />
          <CreateView />
          <DraftView />
        </div>
      );
    } else {
      return <div></div>;
    }
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
};
