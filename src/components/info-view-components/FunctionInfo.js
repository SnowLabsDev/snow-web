import React, { PureComponent } from 'react';


class FunctionInfo extends PureComponent {
  render() {
    return (
      <div style={styles.functionContainer}>
        <p><b>Description: </b></p>
        <ul>
          {this.props.function.description}
        </ul>
        <button>Execute action?</button>
      </div>
    );
  }
}

export default FunctionInfo;

const styles = {
  functionContainer: {
    "position": "relative",
    "width": "100%",
    "padding-left": "20px",
  }
};
