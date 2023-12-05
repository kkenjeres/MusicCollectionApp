import { useState } from 'react';
import AlbumCard from '../components/AlbumCard';
import { data } from '../Data/db';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filteredData = data.filter(album => 
    album.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='min-h-screen'>
      <input 
        type="text" 
        placeholder='Search'
        className='bg-[#121212] rounded-[40px] p-2 text-white'
        onChange={handleChange}
        value={search}
      />

      <AlbumCard albums={filteredData} /> 
    </div>
  );
}

export default Search;
