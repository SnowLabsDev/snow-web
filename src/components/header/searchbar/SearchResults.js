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

const SearchResults = ({ searchTerm, handleSearchItem }) => {
  let output;
  let results;

  if (searchTerm !== '') {
    results = [];
    for (let i=0; i<4; i++) {
      let string = `${searchTerm} ${i}`;
      results.push(
        <div style={searchTermStyle} key={string}>
          <div
            style={{paddingLeft: '10px'}}
            onClick={() => {handleSearchItem(string)}}
          >
            {string}
          </div>
        </div>
      );
    }
    output = [
      <div key={`header`} style={{paddingLeft: '10px'}}>
        <h3>Search Results</h3>
      </div>,
      ...results
    ];
  } else {
    output = <div></div>;
  }

  return (
      <div>
        {output}
      </div>
  );
};

export default Radium(SearchResults);
