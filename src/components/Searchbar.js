import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchbarIntoFocus } from '../actions';

const searchbarParentContainer = {
  display: 'flex',
  height: '100%',
  width: '500px',
  alignItems: 'center',
  marginLeft: '40px',
  backgroundColor: 'white',
};

const searchbarChildContainer = {
  display: 'flex',
  alignItems: 'center',
  height: '35px',
  width: '100%',
  border: '2px solid #707070',
  borderRadius: '10px',
};

const searchIcon = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '35px',
};

const searchInput = {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '3px',
  width: '100%',
  border: '0px',
  fontSize: '16px',
  outlineStyle: 'none',
};

const mapStateToProps = ({ app }) => {
  const { searchToFocus } = app;

  return {
    searchToFocus,
  };
}


class Searchbar extends Component {
  state = {
    toggleHover: false,
    toggleFocus: false,
    windowWidth: '0px',
    windowHeight: '0px',
  }

  componentDidMount() {
    this.updateWindowParameters();

  }


  hoverController = () => {
    this.setState({ toggleHover: !this.state.toggleHover });
  }

  updateWindowParameters = () => {
    this.setState({
      windowWidth: window.innerWidth + 'px',
      windowHeight: window.innerHeight + 'px'
    });
  }

  handleClickAndExpand = () => {
    this.setState({toggleFocus: true})
  }

  render() {
    let childContainer;
    let parentContainer;

    let test = {border: '2px solid #65A0D6'};
    let resizeTest = {
      height: "500px",
      width: "700px",
      boxShadow: "2px 2px 2px #9E9E9E",
      border: '1px solid #707070',

    };


    /*
    What if we just had the child component extend out and drop down? Then
    we have an animation of the bar growing out to the right, then that same outlineStyle
    is dropped further down?
    */

    if (this.state.toggleHover) {
      childContainer = {...searchbarChildContainer, ...test}
    } else {
      childContainer = {...searchbarChildContainer};
    }

    if (this.props.searchToFocus) {
      parentContainer = {...searchbarParentContainer, ...resizeTest};
    }

    return (
        <div style={parentContainer}>
          <div
            style={childContainer}
            onMouseEnter={this.hoverController}
            onMouseLeave={this.hoverController}
            onClick={() => this.props.setSearchbarIntoFocus(true)}
          >
            <div style={searchIcon}>
              <img src="https://raw.githubusercontent.com/google/material-design-icons/master/action/1x_web/ic_search_black_24dp.png"/>
            </div>

              <input
                style={searchInput}
                type='text'
                placeholder="Search..."
              />


          </div>
        </div>
    );
  }

}

export default connect(mapStateToProps, { setSearchbarIntoFocus })(Searchbar);
