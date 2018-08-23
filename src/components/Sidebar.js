import React from 'react';
import SidebarNavButton from './SidebarNavButton';

const Sidebar = (props) => (
  <div className="SidebarContainer">

    <div className="SidebarLogoContainer">
      <img className="SidebarLogo"src="https://i.imgur.com/KegGE75.png"/>
    </div>
    <div className="NavOptionsContainer">
        <SidebarNavButton
          buttonTitle="Activity"
          focusFunc={() => props.focusFunc('activity')}
          color={{"background-color": "#FF5656"}}

          src="https://raw.githubusercontent.com/google/material-design-icons/master/action/1x_web/ic_view_list_white_36dp.png"
        />
        <SidebarNavButton
          buttonTitle="Contacts"
          focusFunc={() => props.focusFunc('contacts')}
          color={{"background-color": "#6A7EFC"}}
          src="https://raw.githubusercontent.com/google/material-design-icons/master/communication/1x_web/ic_contacts_white_36dp.png"
        />
        <SidebarNavButton
          buttonTitle="Groups"
          focusFunc={() => props.focusFunc('groups')}
          color={{"background-color": "#83C8A5"}}
          src="https://raw.githubusercontent.com/google/material-design-icons/master/social/1x_web/ic_group_white_36dp.png"
        />
        <SidebarNavButton
          buttonTitle="Settings"
          focusFunc={() => props.focusFunc('settings')}
          color={{"background-color": "#37D5F0"}}
          style={{"borderBottom": "3px solid #464953"}}
          src="https://raw.githubusercontent.com/google/material-design-icons/master/action/1x_web/ic_settings_white_36dp.png"
        />
      </div>
  </div>
);

export default Sidebar;

/*
<a className="NavButton" onClick={() => props.focusFunc('activity')}>Activity</a>
<a className="NavButton" onClick={() => props.focusFunc('contacts')}>Contacts</a>
<a className="NavButton" onClick={() => props.focusFunc('groups')}>Groups</a>
<a className="NavButton" onClick={() => props.focusFunc('settings')}>Settings</a>
 */
