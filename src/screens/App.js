import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import ActivityScreen from './ActivityScreen';
import ContactsScreen from './ContactsScreen';
import GroupsScreen from './GroupsScreen';
import SettingsScreen from './SettingsScreen';

import { setScreenIntoFocus } from '../actions';

const mapStateToProps = ({ app }) => {
  const { screenToFocus } = app;

  return {
    screenToFocus
  };
}

class App extends Component {
  popScreen = () => {
    switch (this.props.screenToFocus) {
      case 'activity':
        return <ActivityScreen />;

      case 'contacts':
        return <ContactsScreen />;

      case 'groups':
        return <GroupsScreen />;

      case 'settings':
        return <SettingsScreen />;

      default:
        return <div></div>
    }
  }

  render() {
    return (
      <div className="AppContainer">
        <Sidebar focusFunc={(screenToFocus) => this.props.setScreenIntoFocus(screenToFocus)}/>
        {this.popScreen()}
      </div>
    );
  }
}

export default connect(mapStateToProps, { setScreenIntoFocus })(App);

// going to need a callback function in the Sidebar to switch the state
// make the full router for this
// to do that we're going to need to add the redux components to everything, then re-add the Provider
// to do that we're going to need to add the reducers and action creators for the first

App.defaultProps
