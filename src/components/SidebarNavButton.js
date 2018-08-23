import React from 'react';

const SidebarNavButton = (props) => (
  <a
    className="NavButton"
    onClick={() => props.focusFunc()}
    style={props.style}
  >
    <div className="NavIcon" style={props.color}>
      <img src={props.src} />
    </div>
    <div className="NavText">
      {props.buttonTitle}
    </div>

  </a>
);

export default SidebarNavButton;
