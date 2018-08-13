import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setIntoFocus } from '../actions';

const mapStateToProps = ({ main }) => {
  const { focusDraftView } = main;

  return {
    focusDraftView
  };
};

export default connect(mapStateToProps, { setIntoFocus })(class ContractView extends Component {


  render() {
    if (this.props.focusDraftView){
      return (
        <div style={styles.draftContainer}>
          <h2>draft</h2>
        </div>
      );
    } else {
        return <div></div>;
    }
  }
});

const styles = {
  draftContainer: {
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
