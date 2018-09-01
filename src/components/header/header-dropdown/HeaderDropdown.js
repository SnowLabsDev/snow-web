import React from 'react';
import { Notifications, Settings, Account } from './header-dropdown-menus';
import Radium from 'radium';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'absolute',
  width: '200px',
  zIndex: '100',
  paddingBottom: '5px',
  borderTop: '0px',
  borderLeft:'2px solid #707070',
  borderRight:'2px solid #707070',
  borderBottom: '2px solid #707070',
  backgroundColor: '#FFFFFF',
  boxShadow: '1px 1px 1px 1px #707070',
};

const optionStyle = {
  width: '100%',
  paddingTop: '5px',
  paddingBottom: '5px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#49C6B7',
    color: 'white',
  }
};

const HeaderDropdown = (props) => {

  let optionsArray;

  switch (props.type) {
    case 'Notifications':

      optionsArray = Notifications;
      break

    case 'Settings':
      optionsArray = Settings;
      break

    case 'Account':

      optionsArray = Account;
      break
  }

  const output = optionsArray.map((option, iter) => {
    return (
      <div style={optionStyle} key={`${option}-${iter}`}>
        <div
          onClick={() => {props.handleOptionItemClick(option)}}
        >
          <div style={{paddingLeft: '10px'}}>
            {`${option}`}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div style={containerStyle}>
      <div style={{paddingLeft: '10px'}}>
        <h3>{props.type}</h3>
      </div>

      {output}
    </div>
  );
};

export default Radium(HeaderDropdown);
