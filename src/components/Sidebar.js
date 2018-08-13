/* @flow weak */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { contractPressed, changeCreateViewStatus } from '../actions';

import LinkContainer from './contract-view-components/LinkContainer';

const mapStateToProps = ({ auth }) => {
  const { user_info } = auth;
  return {
    user_info
  };
};

export default connect(mapStateToProps, { contractPressed, changeCreateViewStatus })(class Sidebar extends Component {

  componentDidMount() {
    console.log(this.props.user_info);
  }

  contractPressed = (contract_id, type) => {
    this.props.contractPressed(contract_id, type);
  }

  createButtonPressed = () => {
    this.props.changeCreateViewStatus('open');
  }

  mapOwn = () => {
    const output = this.props.user_info.ownContracts.map((contract_id) => {
      return (
        <LinkContainer
          key={contract_id}
          style={styles.sectionItem}
          item={contract_id}
          focus={(focusedContract) => this.contractPressed(focusedContract, 'active')}
        />
      );
    });

    return output;
  }

  mapIn = () => {
    const output = this.props.user_info.inContracts.map((contract_id) => {
      return (
        <LinkContainer
          key={contract_id}
          style={styles.sectionItem}
          item={contract_id}
          focus={(focusedContract) => this.contractPressed(focusedContract, 'active')}
        />
      );
    });

    return output;
  }

  mapDrafts = () => {
    if (this.props.user_info.hasOwnProperty('draftContracts')) {
      const output = this.props.user_info.draftContracts.map((contract_id) => {
        return (
          <LinkContainer
            key={contract_id}
            style={styles.sectionItem}
            item={contract_id}
            focus={(focusedContract) => this.contractPressed(focusedContract, 'draft')}
          />
        );
      });

      return output;
    }
  }

  mapInactive = () => {
    if (this.props.user_info.hasOwnProperty('archivedContracts')) {
      const output = this.props.user_info.archivedContracts.map((contract_id) => {
        return (
          <LinkContainer
            key={contract_id}
            style={styles.sectionItem}
            item={contract_id}
            focus={(focusedContract) => this.contractPressed(focusedContract, 'inactive')}
          />
        );
      });

      return output;
    }
  }

  render() {
    return (
      <div style={styles.sidebarContainer}>
        <div style={{"display": "flex", "justify-content": "center"}}>
          <img style={styles.image} src="https://i.imgur.com/KegGE75.png" />
        </div>

        <div style={{"display": "flex", "position": "relative", "flex-direction": "column", "width": "100%"}}>
          <div style={{"display": "flex", "flex-direction": "row", "justify-content": "center"}}>
            <p>Hello {this.props.user_info.name}!</p>
          </div>

          <div style={{"display": "block"}}>
            <div style={styles.sectionHeader}>My Contracts:</div>
            <div style={styles.sectionContainer}>
              {this.mapOwn()}
            </div>
          </div>

          <div style={{"display": "block"}}>
            <div style={styles.sectionHeader}>Contracts You're In:</div>
            <div style={styles.sectionContainer}>
              {this.mapIn()}
            </div>
          </div>

          <div style={{"display": "block"}}>
            <div style={styles.sectionHeader}>Your Drafts:</div>
            <div style={styles.sectionContainer}>
              {this.mapDrafts()}
            </div>
          </div>

          <div style={{"display": "block"}}>
            <div style={styles.sectionHeader}>Your Archived Contracts:</div>
            <div style={styles.sectionContainer}>
              {this.mapInactive()}
            </div>
          </div>

          <button onClick={this.createButtonPressed}>create</button>

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
