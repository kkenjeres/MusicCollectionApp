import React, { useState, useEffect } from "react";
import AlbumPopup from "./AlbumPopup";

const AlbumCard = ({ album, onSave }) => {
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [savedAlbumIds, setSavedAlbumIds] = useState([]);

  const openPopup = () => {
    setActiveAlbum(album);
  };

  const closePopup = () => {
    setActiveAlbum(null);
  };

  const handleSaveClick = (albumId) => {
    console.log("Нажата кнопка Save. Текущий альбом ID:", albumId);

    setSavedAlbumIds((currentSavedAlbums) => {
      let updatedSavedAlbums;
      if (currentSavedAlbums.includes(albumId)) {
        updatedSavedAlbums = currentSavedAlbums.filter((id) => id !== albumId);
      } else {
        updatedSavedAlbums = [...currentSavedAlbums, albumId];
      }

      console.log(
        "Текущее состояние savedAlbumIds после изменения:",
        updatedSavedAlbums,
      );
      return updatedSavedAlbums;
    });
  };

  return (
    <div className="relative flex cursor-pointer flex-col justify-center rounded-xl bg-[#282828] p-4 text-white">
      <img
        src={album.image.url}
        alt={album.title}
        className="h-[150px] rounded-xl transition duration-500 ease-in-out hover:opacity-50"
        onClick={openPopup}
      />
      <div className="mt-4 flex flex-col">
        <span>{album.title}</span>
        <span>{album.artist}</span>
      </div>
      <button onClick={() => handleSaveClick(album.id)}>Save</button>

      {activeAlbum && <AlbumPopup album={activeAlbum} onClose={closePopup} />}
    </div>
  );
};

export default AlbumCard;
