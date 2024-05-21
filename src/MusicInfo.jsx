import React from 'react'

export default function MusicInfo({currentSong}) {


  return (
    <>
    <div className='flex flex-col gap-y-4 items-center justify-center'>
        <div className='w-60 h-60 aspect-square rounded-full overflow-hidden'><img src={currentSong.cover} className='w-full h-full object-contain' alt="" /></div>
        <div>
            <h2 className='font-bold text-2xl'>{currentSong.name}</h2>
        </div>
        <div><span className='text-lg font-thin'>{currentSong.artist}</span></div>
    </div>
    </>
  )
}
