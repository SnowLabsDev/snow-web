/* @flow weak */

import React, { PureComponent } from 'react';
import LinkContainer from './LinkContainer';

class ContractDetails extends PureComponent {

  popParticipants = () => {
    if (this.props.contract.hasOwnProperty('participants')) {
      const usersInContract = this.props.contract.participants.map((user) => {
        return <LinkContainer key={user._id} item={user.name} focus={(focusedItem) => this.props.focus(focusedItem)} />
      });

      return usersInContract;
    } else {
      return <div></div>
    }
  }

  render() {
    return (
        <div style={styles.contractContent}>
            <p><b>Owner:</b> {this.props.contract.owner._id}</p>
            <p><b>Participants:</b></p>
            <ul>
              {this.popParticipants()}
            </ul>
          <p><b>Contract Type:</b> {this.props.contract.contractType}</p>
          <p><b>Proposal Name:</b> {this.props.contract.arguments[0]}</p>
        </div>
    );
  }
}

export default ContractDetails;

const styles = {
  contractContent: {
    "position": "relative",
    "width": "100%",
    "padding-left": "20px",
  }
};
