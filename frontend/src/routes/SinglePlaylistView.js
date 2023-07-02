import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../componets/loginhomecomp/Sidebar'
import Navbar from '../componets/loginhomecomp/Navbar'
import { makeAuthenticateGETRequest } from '../utils/ServerHelper'
import { SongPlayer } from '../componets/shared/SongPlayer'
import songContext from '../contexts/songContext'
import CreatePlaylistModal from '../modals/CreatePlaylistModal'
import AddToPlaylistModal from '../modals/AddToPlaylistModal'
import { useParams } from 'react-router-dom'
import InlineSongCard from '../componets/shared/InlineSongCard'

const SinglePlaylistView = () => {
    const {playlistId} = useParams();
    const {currentSong,createPlaylistModalOpen,setCreatePlaylistModalOpen,addToPlaylistModalOpen,setAddToPlaylistModalOpen} = useContext(songContext);
    const [playlistSongs,setPlaylistSongs] = useState({})
    useEffect(()=>{
        const getData = async () =>{
        const response = await makeAuthenticateGETRequest("playlist/get/playlist/"+playlistId)
        setPlaylistSongs(response)
        console.log(response.songs)
        };
        getData();
    },[])
  return (
    <div className='h-full w-full'>
      {
      addToPlaylistModalOpen &&
      <AddToPlaylistModal cur={currentSong} closeModal={()=>{setAddToPlaylistModalOpen(false)}}/>}
      {
      createPlaylistModalOpen &&
      <CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)}}/>}

      <div className={`flex ${currentSong?"h-9/10":"h-full"}`}>
    {/*sidebar */}
    <Sidebar curActive={"library"}/>
    <div className='h-full w-5/6 bg-app-black'>
    <Navbar/>
    {playlistSongs._id && playlistSongs.songs.length > 0 ? (
  <div className='w-full h-9/10 p-4 overflow-auto'>
    <div className='text-white text-2xl m-2 p-2 font-semibold'>{playlistSongs.name}</div>
    <div className='space-y-2'>
      {playlistSongs.songs.map((item) => (
        <InlineSongCard info={item} />
      ))}
    </div>
  </div>
) : (<div></div>
)}
    </div>
    </div>{
      currentSong?(
      <SongPlayer/>):(<div></div>)}
    </div>
    
  )
}

export default SinglePlaylistView
