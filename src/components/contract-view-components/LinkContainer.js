import React, { PureComponent } from 'react';

class LinkContainer extends PureComponent {
  render() {
    return (
      <li
        style={styles.sectionItem}
        key={this.props.item[0]}
        onClick={() => this.props.focus(this.props.item)}>
        {this.props.item}
      </li>
    );
  }
}

export default LinkContainer;

const styles = {
  sectionItem: {
    "color": "inherit",
    "text-decoration": "none",
    "cursor": "pointer",
  }
};
