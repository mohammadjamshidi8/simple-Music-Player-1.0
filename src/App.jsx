import { useState } from "react"
import MusicInfo from "./MusicInfo"
import Player from "./Player"
import chillHop from "../data"

function App() {

  const [songs , setSongs] = useState(chillHop())
  const [currentSong , setCurrentSong] = useState(songs[0])


  return (
    <>
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <MusicInfo data={currentSong}/>
      <Player/>
    </div>
    </>
  )
}

export default App
