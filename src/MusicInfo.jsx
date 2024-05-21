import React from 'react'

export default function MusicInfo({data}) {

    console.log('music :' , data);

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
        <div className='w-60 h-60 aspect-square rounded-full overflow-hidden'><img src={data.cover} className='w-full h-full object-contain' alt="" /></div>
        <div>
            <h2>{data.name}</h2>
        </div>
        <div><span>{data.artist}</span></div>
    </div>
    </>
  )
}
