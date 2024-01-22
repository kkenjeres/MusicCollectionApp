import React, { useEffect } from "react";
import SongList from "./SongList";

const AlbumPopup = ({ album, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex w-full items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex w-[90%] flex-col items-center rounded-lg bg-white pt-6 shadow-lg">
        <img
          src={album.image.url}
          alt={album.title}
          className="my-10 h-full w-[90%] object-cover object-top"
        />

        <SongList album={album} />
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded bg-red-500 px-2 py-0 text-white"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default AlbumPopup;
