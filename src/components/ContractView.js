/* @flow weak */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = ({ test }) => {
  const { contract } = test;
  return {
    contract
  };
};

export default connect(mapStateToProps, {  })(class ContractView extends Component {

  popParticipants = () => {
    if (this.props.contract.hasOwnProperty('participants')) {
      const inCtr = this.props.contract.participants.map((user) => {
        return <li>{user}</li>
      });

      return inCtr;
    } else {
      return <div></div>
    }
  }

  popContractInfo = () => {
    if (this.props.contract.hasOwnProperty('owner')) {
      return (

        <div style={styles.contractContainer}>
          <div style={styles.contractHeader}>
            <h2>{this.props.contract._id}</h2>
          </div>

          <div style={styles.contractContent}>
              <p><b>Owner:</b> {this.props.contract.owner}</p>
              <p><b>Participants:</b></p>
              <ul>
                {this.popParticipants()}
              </ul>
            <p><b>Contract Type:</b> {this.props.contract.contractType}</p>
            <p><b>Proposal Name:</b> {this.props.contract.arguments[0]}</p>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  render() {
    return (
      <div>
        {this.popContractInfo()}
      </div>
    );
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
    "width": "35%",
    "background-color": "white",
    "border-radius": "6px",
  },
  contractHeader: {
    "position": "relative",
    "width": "100%",
    "padding-left": "20px",
  },
  contractContent: {
    "position": "relative",
    "width": "100%",
    "padding-left": "20px",
  }
};

/*
._19dgx6v {
    bottom: 40px;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 5px 20px;
    display: flex;
    flex-direction: column;
    height: 70vh;
    left: 290px;
    position: static;
    top: 40px;
    width: auto;
    background: white;
    border-radius: 6px;
}

*/
