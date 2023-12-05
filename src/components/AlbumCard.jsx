import React, { useState, useEffect} from 'react';
import AlbumPopup from './AlbumPopup';

const AlbumCard = ({ album }) => {
  const [activeAlbum, setActiveAlbum] = useState(null);

  const openPopup = () => {
    setActiveAlbum(album);
  };
  
 const closePopup = () => {
  setActiveAlbum(null);
  console.log("Popup closed, activeAlbum:", activeAlbum);
  };
  return (
    <div className='flex flex-col justify-center cursor-pointer relative bg-[#282828] p-4 text-white rounded-xl' >
      <img src={album.image.url} alt={album.title} className='h-[300px] transition duration-500 ease-in-out hover:opacity-50 rounded-xl' onClick={openPopup}/>
      <div className='mt-4 flex flex-col'>
        <span>{album.title}</span>
        <span>{album.artist}</span>
      </div>

      {activeAlbum && <AlbumPopup album={activeAlbum} onClose={closePopup} />}

    </div>
  );
}

export default AlbumCard;
