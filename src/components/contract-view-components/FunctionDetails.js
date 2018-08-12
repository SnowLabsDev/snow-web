/* @flow weak */

import React, { PureComponent } from 'react';
import LinkContainer from './LinkContainer';

class FunctionDetails extends PureComponent {

  popFunctions = () => {

    /*
    iterate through the functions stored in contract.solidityContract, show which ones are marked as visibile

    in the future we can probably control which things info we send back by knowing which user is logged in,
    easing the sorting load on the front end
    */
    
    if (this.props.hasOwnProperty('functions')) {
      const inCtr = this.props.functions.map((func) => {

        let output = <LinkContainer item={func.name} focus={(focusedItem) => this.props.focus(focusedItem)} />
        switch(func.visibility) {   // need cleaner state machine for this
          case 'owner':
            if (this.props.user_id === this.props.owner) {
              return output;
            } else {
              return <div></div>;
            }
          case 'participant':
            if (this.props.user_id in this.props.participants) {
              return output;
            } else {
              return <div></div>;
            }
          case 'all':
            return output;
          default:
            return <div></div>;
        }
      });

      return inCtr;

    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div style={styles.functionContent}>
        <p><b>Functions</b></p>
        <ul>
          {this.popFunctions()}
        </ul>
      </div>
    );
  }
}

export default FunctionDetails;

const styles = {
  functionContent: {
    "position": "relative",
    "width": "100%",
    "padding-left": "20px",
  },
  sectionItem: {
    "color": "inherit",
    "text-decoration": "none",
    "cursor": "pointer",
  }
};
