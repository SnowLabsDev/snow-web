import React, { Component } from 'react';
import {
  navButtonContainer,
  navButtonContainerHL,
  navButtonSubcontainer,
  navButtonSubcontainerHL,
  titleContainer,
  titleContainerHL,
  notifContainer,
  notifContainerHL,
  navIcon
} from '../styles/components/SidebarNavButtonStyle';

class SidebarNavButton extends Component {
  state = {
    toggleFocus: false,
    toggleHL: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentFocus === this.props.buttonTitle.toLowerCase()) {
      this.setState({toggleFocus: true, toggleHL: false});
    } else {
      this.setState({toggleFocus: false});
    }
  }
  
  highlightController = () => {
    if (this.state.toggleFocus === false) {
      this.setState({toggleHL: !this.state.toggleHL});
    }
  }

  render() {
    let notifStyle;
    let titleStyle;
    let navContainerParent;
    let navContainerChild;

    if (this.state.toggleFocus) {
      notifStyle = {
        ...notifContainer,
        ...notifContainerHL
      };
      titleStyle = {
        ...titleContainer,
        ...titleContainerHL
      };
      navContainerChild = {
        ...navButtonSubcontainer,
        ...navButtonSubcontainerHL
      };
    } else {
      notifStyle = {...notifContainer};
      titleStyle = {...titleContainer};
      navContainerChild = {...navButtonSubcontainer};
    }

    if ((this.state.toggleHL === true)) {
      navContainerParent = {...navButtonContainer, ...navButtonContainerHL}
    } else {
      navContainerParent = {...navButtonContainer}
    }

    return (
      <div
        style={navContainerParent}
        onMouseEnter={this.highlightController}
        onMouseLeave={this.highlightController}
        onClick={() => this.props.focusFunc()}
      >
        <div style={navContainerChild}>


          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            height: '100%',
            width: '100%',
            paddingLeft: "30px",
          }}>

            <div style={navIcon}>
              <img src={this.props.src} />
            </div>


            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
              width: '100%',

            }}>
              <div style={titleStyle}>
                {this.props.buttonTitle}
              </div>


              <div style={notifStyle}>
                <span >
                  {this.props.numNotifications}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarNavButton;
