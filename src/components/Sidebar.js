import React from 'react';
import SidebarNavButton from './SidebarNavButton';

const SidebarContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#494949',
  position: 'relative',
  width: '280px',
  maxWidth: '280px',
  height: '100%',
};

const SidebarLogoContainer = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '25px',
  paddingBottom: '25px',
};

const SidebarLogo = {
  position: 'relative',
  width: '85%',
  height: '15%',
};

const NavOptionsContainer = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '100%',
  paddingTop: '25px',
};



const Sidebar = (props) => (
  <div style={SidebarContainer}>
    <div style={SidebarLogoContainer}>
      <img style={SidebarLogo} src="https://i.imgur.com/buDAm2L.png"/>
    </div>
    <div className="NavOptionsContainer">
        <SidebarNavButton
          buttonTitle="Activity"
          focusFunc={() => props.focusFunc('activity')}
          numNotifications="6"
          currentFocus={props.currentFocus}
          src="https://raw.githubusercontent.com/google/material-design-icons/master/action/1x_web/ic_view_list_white_24dp.png"
        />
        <SidebarNavButton
          buttonTitle="Important"
          focusFunc={() => props.focusFunc('important')}
          numNotifications="9"
          currentFocus={props.currentFocus}
          src="https://raw.githubusercontent.com/google/material-design-icons/master/action/1x_web/ic_label_white_24dp.png"
        />
        <SidebarNavButton
          buttonTitle="Drafts"
          focusFunc={() => props.focusFunc('drafts')}
          numNotifications="6"
          currentFocus={props.currentFocus}
          src="https://raw.githubusercontent.com/google/material-design-icons/master/av/1x_web/ic_library_books_white_24dp.png"
        />
        <SidebarNavButton
          buttonTitle="Groups"
          focusFunc={() => props.focusFunc('groups')}
          numNotifications="9"
          currentFocus={props.currentFocus}
          src="https://raw.githubusercontent.com/google/material-design-icons/master/social/1x_web/ic_group_white_24dp.png"
        />

      </div>
  </div>
);

export default Sidebar;

const styles = {

};


/*
<SidebarNavButton
  buttonTitle="Contacts"
  focusFunc={() => props.focusFunc('contacts')}
  color={{"background-color": "#6A7EFC"}}
  src="https://raw.githubusercontent.com/google/material-design-icons/master/communication/1x_web/ic_contacts_white_24dp.png"
/>
<SidebarNavButton
  buttonTitle="Groups"
  focusFunc={() => props.focusFunc('groups')}
  color={{"background-color": "#83C8A5"}}
  src="https://raw.githubusercontent.com/google/material-design-icons/master/social/1x_web/ic_group_white_24dp.png"
/>
<SidebarNavButton
  buttonTitle="Settings"
  focusFunc={() => props.focusFunc('settings')}
  color={{"background-color": "#37D5F0"}}
  src="https://raw.githubusercontent.com/google/material-design-icons/master/action/1x_web/ic_settings_white_24dp.png"
/>
*/
