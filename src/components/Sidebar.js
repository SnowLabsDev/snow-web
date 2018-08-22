import React from 'react';

const Sidebar = (props) => (
  <div className="SidebarContainer">
    <p>sidebar</p>
    <div className="NavButtonContainer">
      <a className="NavButton" onClick={() => props.focusFunc('activity')}>activity</a>
      <a className="NavButton" onClick={() => props.focusFunc('contacts')}>contacts</a>
      <a className="NavButton" onClick={() => props.focusFunc('groups')}>groups</a>
      <a className="NavButton" onClick={() => props.focusFunc('settings')}>settings</a>
    </div>
  </div>
);

export default Sidebar;
