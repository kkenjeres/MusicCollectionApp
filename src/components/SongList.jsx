import React from 'react'

const SongList = ({ album }) => {
  return (
    <>
  <div className="space-y-2">
    {album.tracks.map((track) => (
      <a 
        key={track.id}
        href={track.spotifyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-between bg-[#f0f0f0] p-2 rounded-lg gap-10 block text-black hover:text-blue-600"
      >
        <span className='text-[14px]'>
          {track.track_number}
        </span>
        <span>
          {track.name}
        </span>
        <span className='text-[14px]'>
          {track.duration}
        </span>
      </a>
    ))}
  </div>

</>

  )
}

export default SongList