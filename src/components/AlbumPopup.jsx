import React from 'react';

const AlbumPopup = ({ album, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <img src={album.image.url} alt={album.title} className="h-40 w-40 object-cover" />
        <ul className="space-y-2">
          {album.tracks.map((track) => (
            <li className='text-[14px]'><a  key={track.id} href={track.spotifyLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              {track.name}
            </a></li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-3 bg-red-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default AlbumPopup;

