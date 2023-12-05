import React from 'react'

const SongList = ({ album }) => {
  return (
    <>
      <ul className="space-y-2">
        {album.tracks.map((track) => (
          <li key={track.id} className='text-[14px]'><a key={track.id} href={track.spotifyLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            {track.name}
          </a></li>
        ))}
      </ul>
    </>
  )
}

export default SongList