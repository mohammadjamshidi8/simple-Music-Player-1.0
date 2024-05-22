import React from 'react'
import LibrarySongs from './LibrarySongs'

export default function Library({songs , setCurrentSong}) {
  return (
    <div className='relative'>
        <div className='shadow-xl w-[400px] h-full fixed left-0 top-0 flex flex-col gap-y-4 px-5 pt-5 '>
            {songs.map(song => <LibrarySongs allSongs={songs} song={song} setCurrentSong={setCurrentSong} />)}
        </div>
    </div>
  )
}
