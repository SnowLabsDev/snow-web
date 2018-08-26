import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import ActivityScreen from './ActivityScreen';
import DraftsScreen from './DraftsScreen';
import GroupsScreen from './GroupsScreen';
import ImportantScreen from './ImportantScreen';
import Header from '../components/Header';

import { setScreenIntoFocus } from '../actions';

const AppContainer = {
  display: "flex",
  position: "absolute",
  width: "100%",
  height: "100%",
  margin: "auto",
  padding: "auto",
  flexDirection: "row",
};

const AppContainerDimmed = {
  opacity: 0.2,
};



const mapStateToProps = ({ app }) => {
  const { screenToFocus, searchToFocus } = app;

  return {
    screenToFocus,
    searchToFocus,
  };
}

class App extends Component {
  popScreen = () => {
    switch (this.props.screenToFocus) {
      case 'activity':
        return <ActivityScreen style={{opacity: '0.2'}}/>;

      case 'drafts':
        return <DraftsScreen />;

      case 'groups':
        return <GroupsScreen />;

      case 'important':
        return <ImportantScreen />;

      default:
        return <div></div>
    }
  }

  render() {
    let foobar = false;
    let container;
    if (foobar) {
      container = {...AppContainer, ...AppContainerDimmed};
    } else {
      container = {...AppContainer};
    }

    console.log(`screenFocused: ${this.props.screenToFocus}`)
    return (
      <div style={container}>
        <Sidebar
          focusFunc={(screenToFocus) => this.props.setScreenIntoFocus(screenToFocus)}
          currentFocus={this.props.screenToFocus}
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
        }}>
          <Header />
          {this.popScreen()}
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, { setScreenIntoFocus })(App);

// going to need a callback function in the Sidebar to switch the state
// make the full router for this
// to do that we're going to need to add the redux components to everything, then re-add the Provider
// to do that we're going to need to add the reducers and action creators for the first
