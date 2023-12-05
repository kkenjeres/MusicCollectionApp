import React, { useState, useEffect } from 'react';
import AlbumPopup from './AlbumPopup';

const AlbumCard = ({ albums }) => {
  const [activeAlbum, setActiveAlbum] = useState(null);
  useEffect(() => {
    console.log(albums);
  }, [albums]);
  const openPopup = (album) => {
    setActiveAlbum(album);
  };

  const closePopup = () => {
    setActiveAlbum(null);
  };

  return (
    <section className='w-[80%] mx-auto py-20 grid grid-cols-3 gap-4'>
      {albums.map((item) => (
        <div 
          key={item.id} 
          className='flex flex-col justify-center cursor-pointer relative bg-[#282828] p-4 text-white rounded-xl'
          onClick={() => openPopup(item)} // Добавлен обработчик события onClick
        >
          <img src={item.image.url} alt={item.title} className='h-[300px] transition duration-500 ease-in-out hover:opacity-50 rounded-xl'/>
          <div className='mt-4 flex flex-col'>
            <span>{item.title}</span>
            <span>{item.artist}</span>
          </div>
        </div>
      ))}

      {activeAlbum && <AlbumPopup album={activeAlbum} onClose={closePopup} />}
    </section>
  );
}

export default AlbumCard;
