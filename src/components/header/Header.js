import React from 'react';
import Searchbar from './searchbar/Searchbar';
import HeaderItem from './HeaderItem';

const headerContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '50px',
  width: '100%',
  borderBottom: '2px solid #707070',
};

const headerOptions = {
  marginRight: '15px',
  height: '100%',
  width: '150px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

const Header = (props) => {
  return (
    <div style={headerContainer}>
      <Searchbar />
      <div style={headerOptions}>
        <HeaderItem
          src="https://raw.githubusercontent.com/google/material-design-icons/master/social/1x_web/ic_notifications_black_24dp.png"
          title="Notifications"
          dropdownType={props.dropdownType}
          setDropdownMenuIntoFocus={props.setDropdownMenuIntoFocus}
        />

        <HeaderItem
          src="https://raw.githubusercontent.com/google/material-design-icons/master/action/1x_web/ic_settings_black_24dp.png"
          title="Settings"
          dropdownType={props.dropdownType}
          setDropdownMenuIntoFocus={props.setDropdownMenuIntoFocus}
        />

        <HeaderItem
          title="Account"
          src="https://pbs.twimg.com/profile_images/927912849837506561/sX4f0VMK_400x400.jpg"
          dropdownType={props.dropdownType}
          setDropdownMenuIntoFocus={props.setDropdownMenuIntoFocus}
        />
      </div>
    </div>
  );
};

export default Header;
