import React, { Component } from 'react';
import { connect } from 'react-redux';

// Screens
import ActivityScreen from './ActivityScreen';
import DraftsScreen from './DraftsScreen';
import GroupsScreen from './GroupsScreen';
import ImportantScreen from './ImportantScreen';

// Components
import Header from '../components/header/Header';
import HeaderDropdownContainer from '../components/header/header-dropdown/HeaderDropdownContainer';
import Sidebar from '../components/Sidebar';

// Redux
import { setScreenIntoFocus, setDropdownMenuIntoFocus } from '../actions';

const AppContainerStyle = {
  display: "flex",
  position: "absolute",
  width: `${window.outerWidth}px`,
  height: `${window.outerHeight}px`,
  margin: "auto",
  padding: "auto",
  flexDirection: "row",
};

const mapStateToProps = ({ app }) => {
  const { screenToFocus, searchToFocus, dropdownType, dropdownToFocus } = app;

  return {
    screenToFocus,
    dropdownType,
    searchToFocus,
    dropdownToFocus,
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
    return (
      <div style={AppContainerStyle}>
        <Sidebar
          focusFunc={(screenToFocus) => this.props.setScreenIntoFocus(screenToFocus)}
          currentFocus={this.props.screenToFocus}
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: `${window.outerWidth - 280}px`,
          height: '100%',
        }}>
          <Header
            dropdownType={this.props.dropdownType}
            setDropdownMenuIntoFocus={(type, bool) => this.props.setDropdownMenuIntoFocus(type, bool)}
          />

          <HeaderDropdownContainer
            dropdownToFocus={this.props.dropdownToFocus}
            dropdownType={this.props.dropdownType}
            handleOptionItemClick={(optionItem) => console.log(`optionItem: ${optionItem}`)}
          />
          {this.popScreen()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { setScreenIntoFocus, setDropdownMenuIntoFocus })(App);
