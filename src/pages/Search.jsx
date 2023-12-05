import { useState } from 'react';
import { data } from '../Data/db';
import AlbumList from '../components/AlbumList';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filteredData = data.filter(album => 
    album.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className='min-h-screen'>
      <input 
        type="text" 
        placeholder='Search'
        className='bg-[#121212] rounded-[40px] p-2 text-white'
        onChange={handleChange}
        value={search}
      />
      <AlbumList albums={filteredData} /> 
    </section>
  );
}

export default Search;
