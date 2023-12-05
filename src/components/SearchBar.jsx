import React from 'react';

const SearchBar = ({ search, onChange }) => {
  return (
    <input 
      type="text" 
      placeholder='Search'
      className='w-[60%] bg-[#121212] rounded-[40px] p-2 text-white  flex  m-auto mt-10'
      onChange={onChange}
      value={search}
    />
  );
};

export default SearchBar;
