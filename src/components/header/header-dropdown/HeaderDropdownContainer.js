import React from 'react';
import HeaderDropdown from './HeaderDropdown';

const HeaderDropdownContainer = ({ dropdownType, dropdownToFocus, handleOptionItemClick }) => {

  let output;
  let marginAdjust;

  if ((dropdownToFocus) && (dropdownType !== '') && (dropdownType !== 'Search')) {
    switch (dropdownType) {
      case 'Notifications':
        marginAdjust = {marginLeft: `${window.innerWidth-592}px`};
        break

      case 'Settings':
        marginAdjust = {marginLeft: `${window.innerWidth-552}px`};
        break

      case 'Account':
        marginAdjust = {marginLeft: `${window.innerWidth-512}px`};
        break
    }

    output = (
      <div style={marginAdjust}>
        <HeaderDropdown
          type={dropdownType}
          handleOptionItemClick={(optionItem) => {
            handleOptionItemClick(optionItem)
          }}
        />
      </div>
    );
  } else {
    output = <div></div>;
  }

  return output;
};

export default HeaderDropdownContainer;
