import React from "react";

const SongList = ({ album }) => {
  return (
    <>
    <div className="space-y-2 p-2 max-h-[400px] overflow-y-auto">
        {album.tracks.map((track) => (
          <a
            key={track.id}
            href={track.spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block flex justify-between gap-10 rounded-lg bg-[#f0f0f0] p-2 text-black hover:text-blue-600"
          >
            <span className="text-[12px]">{track.track_number}</span>
            <span className="text-[12px]">{track.name}</span>
            <span className="text-[12px]">{track.duration}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default SongList;
