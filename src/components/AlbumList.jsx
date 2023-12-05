import React from 'react';
import AlbumCard from './AlbumCard';

const AlbumList = ({ albums }) => {
  return (
    <section className='w-[80%] mx-auto py-20 grid grid-cols-3 gap-4'>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </section>
  );
}

export default AlbumList;
