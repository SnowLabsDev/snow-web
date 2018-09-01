import React, { Component } from 'react';

const containerStyle = {
  height: '100%',
  width: '40px',
};

const accountImageStyle = {
  height: '35px',
  width: '35px',
  borderRadius: '20px',
};

const imageContainerStyle = {
  height: '100%',
  width: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const HeaderItem = ({ title, src, dropdownType, setDropdownMenuIntoFocus }) => {
  return (
    <div style={{height: '100%'}}>
      <div style={containerStyle}>
        <div
          style={imageContainerStyle}
          onClick={() => {(dropdownType === title) ?
            setDropdownMenuIntoFocus('', false) : setDropdownMenuIntoFocus(title, true)
          }}
        >
          <img
            style={
                (title === 'Account') ? {...accountImageStyle} : {}
            }
            src={src} />
        </div>
      </div>
    </div>
  );
}

export default HeaderItem;
