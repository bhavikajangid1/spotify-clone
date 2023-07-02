import { Icon } from '@iconify/react'
import { Howl } from 'howler';
import React, { useContext, useLayoutEffect, useRef } from 'react'
import songContext from '../../contexts/songContext';

export const SongPlayer = () => {

  const {
    currentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused,
    isLiked,
    setIsLiked,
    setAddToPlaylistModalOpen
} = useContext(songContext);

const firstUpdate = useRef(true);

useLayoutEffect(() => {
    if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
    }

    if (!currentSong) {
        return;
    }
    changeSong(currentSong.track);
}, [currentSong && currentSong.track]);


const playSound = () => {
    if (!soundPlayed) {
        return;
    }
    soundPlayed.play();
};

const changeSong = (songSrc) => {
    if (soundPlayed) {
        soundPlayed.stop();
    }
    let sound = new Howl({
        src: [songSrc],
        html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
};

const pauseSound = () => {
    soundPlayed.pause();
};

const togglePlayPause = () => {
    if (isPaused) {
        playSound();
        setIsPaused(false);
    } else {
        pauseSound();
        setIsPaused(true);
    }
};

  return (
    <div className='h-1/10 
    flex items-center bg-app-black opacity-90 overflow-hidden text-white'>
      <div className='w-2/5 flex px-4'>
      <img src={currentSong.thumbnail} alt='songThumbnail' className='h-14 rounded-sm w-14 my-4'/>
      <div className='p-4 w-3/4 flex flex-col justify-center'>
        <div className='font-semibold text-sm'>{currentSong.name}</div>
        <div className='text-gray-300 text-xs'>{currentSong.artist.firstName} {currentSong.artist.lastName}</div>
      </div>
      <div className='flex items-center w-1/4 m-4'>
      </div>
      </div>
      <div className='h-full w-full flex flex-col justify-center items-center pr-20 pl-0'>
      <div className='w-2/5  flex justify-center items-center h-2/3 space-x-4'>
      <Icon icon="ci:shuffle"  fontSize={22}  color className='cursor-pointer text-gray-400 hover:text-white'/>

      <Icon icon="mingcute:skip-previous-fill"  fontSize={24}  color className='cursor-pointer text-gray-400 hover:text-white'/>

      <Icon icon={isPaused?"icon-park-solid:play":"icon-park-solid:pause-one"}  fontSize={30} color className='cursor-pointer text-gray-400 hover:text-white' onClick={togglePlayPause}/>

      <Icon icon="mingcute:skip-forward-fill"  fontSize={24} color className='cursor-pointer text-gray-400 hover:text-white'/>

      <Icon icon="simple-line-icons:loop" fontSize={20} color className='cursor-pointer text-gray-400 hover:text-white' />
      </div>
      <div className='h-1/3 flex justify-start'>-----------------------</div>
      </div>
      <div className='w-1/5 flex justify-end items-center p-2 mx-10 space-x-4'>
      <Icon icon="tabler:playlist-add" fontSize={28}
      onClick={()=>{setAddToPlaylistModalOpen(true)
    }}
      />
      <Icon icon={isLiked?"bi:heart-fill":"bi:heart"}
      onClick={() =>{
        isLiked? setIsLiked(false):setIsLiked(true)
      }} width="18" height="18" className='m-2'/>
      </div>
    </div>
  )
}

