import React from 'react';

const SearchBar = ({ search, onChange, onSearch }) => {
  return (
    <div className='w-[90%] flex flex-col m-auto mt-10'>
      <input 
        type="text" 
        placeholder='Search'
        className='bg-[#121212] rounded-[40px] p-2 text-white flex-grow'
        onChange={onChange}
        value={search}
      />
      <button
        onClick={onSearch}
        className='underline p-2 text-white'
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
