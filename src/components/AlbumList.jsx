import React from 'react';
import AlbumCard from './AlbumCard';

const AlbumList = ({ albums, onSave }) => {
  return (
    <section className='w-[90%] mx-auto py-20 grid grid-cols-2 gap-4'>
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} onSave={onSave} />
      ))}
    </section>
  );
}

export default AlbumList;
