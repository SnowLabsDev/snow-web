import React from 'react';
import HeaderOptions from './HeaderOptions';
import Searchbar from './Searchbar';

const headerContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '50px',
  width: '100%',
  borderBottom: '2px solid #707070',
};


const Header = (props) => {

  return (
    <div style={headerContainer}>
      <Searchbar />
      <HeaderOptions />
    </div>
  );
};

export default Header;
