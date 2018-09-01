import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import RecentSearches from './RecentSearches';
import SearchResults from './SearchResults';

const dropdownParentContainer = {
  display: 'flex',
  alignItems: 'flex-start',
  width: '500px',
  marginTop: '0px',
  marginLeft: '40px',
  borderTop: '0px',
  borderLeft:'2px solid #707070',
  borderRight:'2px solid #707070',
  borderBottom: '2px solid #707070',
  position: 'absolute',
  top: '50',
  left: '320',
  zIndex: '100',
  backgroundColor: '#FFFFFF',
  boxShadow: '1px 1px 1px 1px #707070',
  transition: 'height 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)',
};

const SearchbarDropdown = ({ searchTerm }) => {
  const recentSearches = ['test', 'search', 'bar', 'functionality'];

  return (
    <div style={dropdownParentContainer}>
      <div style={{width: '100%', marginBottom: '5px'}}>
        <SearchResults
          searches={recentSearches}
          searchTerm={searchTerm}
          handleSearchItem={(searchItem) => console.log(searchItem) }
        />
        <RecentSearches
          searches={recentSearches}
          handleSearchItem={(searchItem) => console.log(searchItem) }
        />
      </div>
    </div>
  );
}

export default SearchbarDropdown;
