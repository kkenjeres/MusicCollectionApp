import React from 'react';
import SongList from './SongList';

const AlbumPopup = ({ album, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <img src={album.image.url} alt={album.title} className="h-40 w-40 object-cover" />
        <SongList album={album}/>
        <button onClick={onClose} className="mt-3 bg-red-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default AlbumPopup;

