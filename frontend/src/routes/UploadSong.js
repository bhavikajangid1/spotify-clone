import React, { useContext } from 'react'
import Sidebar from '../componets/loginhomecomp/Sidebar'
import Navbar from '../componets/loginhomecomp/Navbar'
import UploadSongContent from '../componets/loginhomecomp/UploadSongContent'
import { SongPlayer } from '../componets/shared/SongPlayer'
import songContext from '../contexts/songContext'
import CreatePlaylistModal from '../modals/CreatePlaylistModal'
import AddToPlaylistModal from '../modals/AddToPlaylistModal'

const UploadSong = () => {
  const {currentSong,createPlaylistModalOpen,setCreatePlaylistModalOpen,addToPlaylistModalOpen,setAddToPlaylistModalOpen} = useContext(songContext);
  return (
    <div className="h-full w-full">
      {
      addToPlaylistModalOpen &&
      <AddToPlaylistModal 
      cur={currentSong}
      closeModal={()=>{setAddToPlaylistModalOpen(false)}}/>}
      { createPlaylistModalOpen &&
      <CreatePlaylistModal closeModel={()=>setCreatePlaylistModalOpen(false)}/>}
        <div className={`flex ${currentSong!==null?"h-9/10":"h-full"}`}>
        <Sidebar/>
        <div className='flex flex-col bg-app-black w-full'>
        <Navbar/>
        <UploadSongContent/>
        </div>
        </div>{
          currentSong?(
        <SongPlayer/>):(<div></div>)
}
    </div>
  )
}

export default UploadSong