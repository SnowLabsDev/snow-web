import React, { PureComponent } from 'react';


class UserInfo extends PureComponent {
  popContracts = (type) => {
    let output = this.props.user[type].map((contractId) => {
      return <li>{contractId}</li>;
    });

    return output;
  }

  render() {
    return (
      <div style={styles.userContainer}>
        <p><b>Phone:</b> {this.props.user.phone}</p>
        <p><b>Their Contracts:</b></p>
        <ul>
          {this.popContracts('ownContracts')}
        </ul>
        <p><b>Contracts They Belong To: </b></p>
        <ul>
          {this.popContracts('inContracts')}
        </ul>
      </div>
    );
  }
}

export default UserInfo;

const styles = {
  userContainer: {
    "position": "relative",
    "width": "100%",
    "padding-left": "20px",
  }
};
