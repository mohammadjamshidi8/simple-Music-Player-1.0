import React from "react";

export default function LibrarySongs({allSongs,song , setCurrentSong}) {

    const selectSongHandler = (ev) => {
        const search = allSongs.findIndex(item => (
            item.id === song.id
        ))

        setCurrentSong(allSongs[search])
    }

  return (
    <div onClick={selectSongHandler} className="flex items-center gap-x-4 cursor-pointer transition duration-150 hover:bg-gray-100">
      <img src={song.cover} className="w-24 h-24 aspect-square object-contain" alt={song.name} />
      <div className="flex flex-col gap-y-2">
        <h3 className="font-bold text-lg">{song.name}</h3>
        <h4 className="font-thin">{song.artist}</h4>
      </div>
    </div>
  );
}
