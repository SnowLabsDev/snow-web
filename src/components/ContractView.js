import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FunctionDetails from './contract-view-components/FunctionDetails';
import ContractDetails from './contract-view-components/ContractDetails';

import { setIntoFocus } from '../actions';

const mapStateToProps = ({ auth, main }) => {
  const { user_info } = auth;
  const { contract, focusContractView } = main;

  return {
    user_info,
    contract,
    focusContractView,
  };
};

export default connect(mapStateToProps, { setIntoFocus })(class ContractView extends Component {

  setIntoFocus = (focusedItem, type) => {
    let focusedObj = {};

    switch(type) {
      case 'user':
        focusedObj = this.props.contract.participants
          .find(obj => obj.name === focusedItem);

        this.props.setIntoFocus(focusedObj, type);

      case 'function':
        focusedObj = this.props.contract.solidityContract.functions
          .find(obj => obj.name === focusedItem);

        this.props.setIntoFocus(focusedObj, type);

      default:
        focusedObj = {default: ':()'}
    }
  }

  render() {
    if (this.props.focusContractView) {
      return (
        <div style={styles.contractContainer}>
          <div style={styles.contractHeader}>
            <h2>{this.props.contract._id}</h2>
          </div>
          <ContractDetails
            contract={this.props.contract}
            focus={(focusedItem) => this.setIntoFocus(focusedItem, 'user')} />
          <FunctionDetails
            user_id={this.props.user_info._id}
            owner={this.props.contract.owner}
            participants={this.props.participants}
            functions={this.props.contract.solidityContract.functions}
            focus={(focusedItem) => this.setIntoFocus(focusedItem, 'function')} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
});

const styles = {
  contractContainer: {
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
