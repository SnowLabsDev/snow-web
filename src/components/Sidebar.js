/* @flow weak */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  state = {
    inFocus: null
  }

  componentWillMount () {
    console.log('mounting');

    console.log(this.props.location);

  }
  handleFocus = (key) => {
    this.setState({inFocus: key});
    console.log(this.state.inFocus);
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
            <div style={styles.sectionContainer}> {/* contions the contracts, separate into its own component */}

              <Link
                to={`/test/users/id/${this.props.user._id}/contracts/id/?id=${this.props.user.ownContracts[0]}`}
                style={styles.sectionItem}
                onClick={this.props.func}

                >TEST</Link>

              {/*<a
                style={styles.sectionItem}
                value={"0"}
                onClick={() => this.handleFocus(value)}>test test test</a>
              <p>test test test</p>
              <p>test test test</p>
              */}
            </div>
          </div>

          <div style={{"display": "block"}}>
            <div style={styles.sectionHeader}>Friend's Contracts</div>
          </div>

        </div>
      </div>
    );
  }
}

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
    "display": "block",
    "padding-left": "20px",
    "font-size": "13px",
    "line-height": "1.8",
    "box-sizing": "border-box"
  },
  sectionItem: {
    "color": "inherit",
    "text-decoration": "none",
    "cursor": "pointer",
  }
};
