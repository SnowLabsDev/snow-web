import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import EditDetails from './edit-details-components/EditDetails';

import { changeCreateViewStatus } from '../actions';

const mapStateToProps = ({ main }) => {
  const { focusCreateView } = main;

  return {
    focusCreateView
  };
};

export default connect(mapStateToProps, { changeCreateViewStatus })(class ContractView extends Component {

  closeCreateView = () => {
    this.props.changeCreateViewStatus('close');
  }

  render() {
    if (this.props.focusCreateView){
      return (
        <div style={styles.createContainer}>
          <h2>create</h2>
          <div>
            <EditDetails closeFunction={this.closeCreateView} />
          </div>
        </div>
      );
    } else {
        return <div></div>;
    }
  }
});

const styles = {
  createContainer: {
    "display": "flex",
    "flex-direction": "column",
    "position": "absolute",
    "left": "350px",
    "top": "50px",
    "height": "70%",
    "width": "30%",
    "background-color": "white",
    "border-radius": "6px",
  },
  contractHeader: {
    "position": "relative",
    "width": "100%",
    "padding-left": "20px",
  },
};
