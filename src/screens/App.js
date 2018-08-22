import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import ActivityScreen from './ActivityScreen';
import ContactsScreen from './ContactsScreen';
import GroupsScreen from './GroupsScreen';
import SettingsScreen from './SettingsScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenFocus: 'activity'
    };
  }

  popScreen = () => {
    switch (this.state.screenFocus) {
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
        <Sidebar focusFunc={(setIntoFocus) => {this.setState({ screenFocus: setIntoFocus })}}/>
        {this.popScreen()}
      </div>
    );
  }
}

export default App;

// going to need a callback function in the Sidebar to switch the state
// make the full router for this
// to do that we're going to need to add the redux components to everything, then re-add the Provider
// to do that we're going to need to add the reducers and action creators for the first

App.defaultProps
