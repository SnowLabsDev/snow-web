import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';

// Components
import SearchbarDropdown from './SearchbarDropdown';

// Redux
import { setSearchbarIntoFocus, updateSearchTerm } from '../../../actions';

// Style
import {
  parentContainerStyle,
  childContainerStyle,
  iconStyle,
  searchInputStyle
} from '../../../styles/components/SearchbarStyle';

const mapStateToProps = ({ app }) => {
  const { searchToFocus, searchTerm } = app;

  return {
    searchToFocus,
    searchTerm,
  };
}

class Searchbar extends Component {
  state = {
    toggleHover: false,
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if ((!this.node.contains(e.target)) && this.props.searchToFocus) {
      this.props.setSearchbarIntoFocus(false);
    }
  }

  hoverController = () => {
    this.setState({ toggleHover: !this.state.toggleHover });
  }

  render() {
    let childContainer;
    let parentContainer;

    if (this.state.toggleHover) {
      childContainer = {
        ...childContainerStyle,
        ...{border: '3px solid #65A0D6'}
      };
    } else {
      childContainer = {...childContainerStyle};
    }

    if (this.props.searchToFocus) {
      parentContainer = {
        ...parentContainerStyle,
        ...{width: '500px'}
      };
    } else {
      parentContainer = {...parentContainerStyle};
    }

    return (
      <div ref={node => this.node = node}>
        <div style={parentContainer}>
            <div
              style={childContainer}
              onMouseEnter={this.hoverController}
              onMouseLeave={this.hoverController}
            >
              <div
                style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
                onClick={() => this.props.setSearchbarIntoFocus(true)}
              >

                <div style={iconStyle}>
                  <img src="https://raw.githubusercontent.com/google/material-design-icons/master/action/1x_web/ic_search_black_24dp.png"/>
                </div>

                <input
                  style={searchInputStyle}
                  value={this.props.searchTerm}
                  type='text'
                  placeholder="Search..."
                  onChange={(e) => this.props.updateSearchTerm(e.target.value)}
                />

              </div>

              <div
                style={{
                  ...iconStyle,
                  ...{borderLeft: '1px solid #707070'}
                }}
                onClick={() => this.props.setSearchbarIntoFocus(false)}
              >
                <img src="https://raw.githubusercontent.com/google/material-design-icons/master/navigation/1x_web/ic_close_black_18dp.png" />
              </div>

            </div>
        </div>

        <div>
          {(this.props.searchToFocus) ? <SearchbarDropdown searchTerm={this.props.searchTerm}/> : <div></div>}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { setSearchbarIntoFocus, updateSearchTerm })(Searchbar);
