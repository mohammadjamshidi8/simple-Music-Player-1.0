import { useState } from "react"
import MusicInfo from "./MusicInfo"
import Player from "./Player"
import chillHop from "../data"

function App() {

  const [songs , setSongs] = useState(chillHop())
  const [currentSong , setCurrentSong] = useState(songs[1])
  const [isPlaying , setIsPlaying ] = useState(true)



  return (
    <>
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <MusicInfo currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
    </div>
    </>
  )
}

export default App
