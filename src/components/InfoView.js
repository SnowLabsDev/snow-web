import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import UserInfo from './info-view-components/UserInfo';
import FunctionInfo from './info-view-components/FunctionInfo';

const mapStateToProps = ({ main }) => {
  const { focusInfoView, focusedObj, focusedType } = main;
  return {
    focusInfoView, // boolean, to display or nah
    focusedObj, // the object to display, will change dependant on focusedType
    focusedType, // are we a user or a function
  };
};

export default connect(mapStateToProps, {  })(class InfoView extends Component {
  populate = () => { // replace with case structure when adding a new element
    if (this.props.focusedType === 'user') {
      return <UserInfo user={this.props.focusedObj} />;
    } else {
      return <FunctionInfo function={this.props.focusedObj} />;
    }
  }

  render() {
    if (this.props.focusInfoView) {
      return (
        <div style={styles.infoContainer}>
          <div style={styles.infoHeader}>
            <h2>{this.props.focusedObj.name}</h2>
          </div>
          {this.populate()}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
});

const styles = {
  infoContainer: {
    "display": "flex",
    "flex-direction": "column",
    "position": "absolute",
    "left": "840px",
    "top": "50px",
    "height": "70%",
    "width": "30%",
    "background-color": "white",
    "border-radius": "6px",
  },
  infoHeader: {
    "position": "relative",
    "width": "100%",
    "padding-left": "20px",
  },
};
