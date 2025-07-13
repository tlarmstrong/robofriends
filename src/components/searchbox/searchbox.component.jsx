import React from 'react';
import './searchbox.styles.css';

const Searchbox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue searchbox'
        type='search' 
        placeholder='search for robofriends' 
        onChange={searchChange}
      />
    </div>
  );
}

export default Searchbox;
