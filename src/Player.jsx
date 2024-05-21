import { useRef , useState} from 'react';
import React from 'react'
import { CiPlay1 , CiPause1  } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

export default function Player({currentSong , isPlaying , setIsPlaying}) {

    const audioRef = useRef(null)
    const [songTime , setSongTime ] = useState({
        currentTime : 0,
        duration : 0
    })


    // play and pause song
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }
    }

    // update time handler
    const timeUpdateHandler = (e) => {

        const currentTime = e.target.currentTime;
        const duration = e.target.duration

        setSongTime({...songTime,currentTime,duration})
    }

    // format time function

    const formatTime = (time) => {
        return (
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }

    // drag song handler 
    const dragHandler = (ev) => {
        setSongTime({...songTime, currentTime : ev.target.value})
        audioRef.current.currentTime = ev.target.value
    }

  return (
    <div className='flex flex-col gap-y-5 mt-10'>
        <div className='flex items-center gap-x-5 w-[300px] lg:w-[500px]'>
            <span>{formatTime(songTime.currentTime)}</span>
            <input min={0} max={songTime.duration} value={songTime.currentTime} type="range" className='w-full' onChange={dragHandler} />
            <span>{formatTime(songTime.duration)}</span>
        </div>

        <div className='flex justify-center gap-x-10 items-center'>
            <GrFormPrevious className='w-6 h-6 cursor-pointer'/>
            {isPlaying ? <CiPlay1 onClick={playSongHandler} className='w-6 h-6 cursor-pointer'/> : <CiPause1 onClick={playSongHandler} className='w-6 h-6 cursor-pointer'/>}
            <GrFormNext className='w-6 h-6 cursor-pointer'/>
        </div>

        <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>

    </div>
  )
}
