/* @flow weak */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { linkPressed } from '../actions';


const mapStateToProps = ({ test }) => {
  const { user_info } = test;
  return {
    user_info
  };
};

export default connect(mapStateToProps, { linkPressed })(class Sidebar extends Component {
  state = {
    inFocus: null
  }

  linkPressed = (ctr_id) => {
    //console.log(ctr_id)
    this.props.linkPressed(ctr_id);
  }


  mapOwn = () => {

    const user_id = this.props.user._id;
    const output = this.props.user.ownContracts.map((ctr_id) => {
      return (
        <li
          key={ctr_id}
          style={styles.sectionItem}
          onClick={() => this.linkPressed({user_id, ctr_id})}
          >
            {ctr_id}
        </li>
      );
    });

    return output;
  }

  mapIn = () => {

    const user_id = this.props.user._id;
    const output = this.props.user.inContracts.map((ctr_id) => {
      return (
        <li
          key={ctr_id}
          style={styles.sectionItem}
          onClick={() => this.linkPressed({user_id, ctr_id})}
          >
            {ctr_id}
        </li>
      );
    });

    return output;
  }

  render() {
    return (
      <div style={styles.sidebarContainer}>
        <div style={{"display": "flex", "justify-content": "center"}}>
          <img style={styles.image} src="https://i.imgur.com/KegGE75.png" />
        </div>

        <div style={{"display": "flex", "position": "relative", "flex-direction": "column", "width": "100%"}}>
          <div style={{"display": "flex", "flex-direction": "row", "justify-content": "center"}}>
            <p>Hello {this.props.user.name}!</p>
          </div>

          <div style={{"display": "block"}}>
            <div style={styles.sectionHeader}>My Contracts</div>
            <div style={styles.sectionContainer}> {/* contians the contracts, separate into its own component */}
              {this.mapOwn()}
            </div>
          </div>

          <div style={{"display": "block"}}>
            <div style={styles.sectionHeader}>Friend's Contracts</div>
            <div style={styles.sectionContainer}> {/* contians the contracts, separate into its own component */}
              {this.mapIn()}
            </div>
          </div>

        </div>
      </div>
    );
  }
});

const styles = {
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
  },
  sectionHeader: {
    "text-align": "left",
    "font-size": "15px",
    "color": "black",
    "font-weight": "bold",
    "text-transform": "uppercase",
    "padding-top": "10px",
    "padding-left": "10px",
    "padding-right": "10px",
    "padding-bottom": "5px",
    "margin-top": "20px",
  },
  sectionContainer: {
    "position": "relative",
    "display": "flex",
    "padding-left": "20px",
    "font-size": "13px",
    "line-height": "1.8",
    "flex-direction": "column"
  },
  sectionItem: {
    "color": "inherit",
    "text-decoration": "none",
    "cursor": "pointer",
  }
};
