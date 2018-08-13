import React, { PureComponent } from 'react';

class EditDetails extends PureComponent {

  state = {
    solidity_info: {
      "constructorArguments": [
          {
              "visibility": "all",
              "_id": "5b6efef8b39f8970d32ffbe2",
              "name": "proposalName",
              "description": "the proposal shown to voting users",
              "value": "String",
              "__v": 0
          },
          {
              "visibility": "all",
              "_id": "5b6efef8b39f8970d32ffbe3",
              "name": "invites",
              "description": "the 'ethAddress' parameter of the User",
              "value": "Array",
              "__v": 0
          }
      ],
      "functions": [
          "5b6efef8b39f8970d32ffbe6",
          "5b6efef8b39f8970d32ffbe7",
          "5b6efef8b39f8970d32ffbe8"
      ],
      "_id": "5b6efef8b39f8970d32ffbe1",
      "type": "SingleIssueBallot",
      "description": "One proposal, N voters, one vote per voter",
      "__v": 0
  }
}

popConstructorArguments = () => {
  const output = this.state.solidity_info.constructorArguments.map((arg) => {
    switch (arg.value) {
      case "String":
        return <p>{arg.description}</p>
      case "Array":
        return <p>{arg.description}</p>
    }
  });

  return output;
}

render() {
    return (
        <div style={styles.contractContent}>
          <p>EditDetails</p>
          {this.popConstructorArguments()}
          <button onClick={() => console.log('save')}>save</button>
          <button onClick={this.props.closeFunction}>close</button>
        </div>
    );
  }
}

export default EditDetails;

const styles = {
  contractContent: {
    "position": "relative",
    "width": "100%",
    "padding-left": "20px",
  }
};
