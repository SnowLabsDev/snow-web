import React from 'react';
import Radium from 'radium';

const searchTermStyle = {
  paddingTop: '5px',
  paddingBottom: '5px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#49C6B7',
    color: 'white',
  }
};

const RecentSearches = ({ searches, handleSearchItem }) => {

  const output = searches.map((searchTerm, iter) => {
    return (
      <div style={searchTermStyle} key={`${searchTerm}-${iter}`}>
        <div
          style={{paddingLeft: '10px'}}
          onClick={() => {handleSearchItem(searchTerm)}}
        >
          {`${searchTerm} ${iter}`}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div style={{paddingLeft: '10px'}}>
        <h3>Recent Searches</h3>
      </div>
      <div>
        {output}
      </div>
    </div>
  );
};

export default Radium(RecentSearches);
