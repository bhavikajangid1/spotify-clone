import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../componets/loginhomecomp/Sidebar'
import Navbar from '../componets/loginhomecomp/Navbar'
import InlineSongCard from '../componets/shared/InlineSongCard'
import { makeAuthenticateGETRequest } from '../utils/ServerHelper'
import { SongPlayer } from '../componets/shared/SongPlayer'
import songContext from '../contexts/songContext'
import CreatePlaylistModal from '../modals/CreatePlaylistModal'
import AddToPlaylistModal from '../modals/AddToPlaylistModal'

const Mymusic = () => {
    const {currentSong,createPlaylistModalOpen,setCreatePlaylistModalOpen,addToPlaylistModalOpen,setAddToPlaylistModalOpen} = useContext(songContext);
    const [songDetails,setSongDetails]  = useState([])
    useEffect(()=>{
        const getData = async () =>{
        const response = await makeAuthenticateGETRequest("song/get/mysongs")
        setSongDetails(response)
        };
        getData();
    },[])
  return (
    <div className='h-full w-full'>
      {
      addToPlaylistModalOpen &&
      <AddToPlaylistModal cur={currentSong}
      closeModal={()=>{setAddToPlaylistModalOpen(false)}}/>}
      {
      createPlaylistModalOpen &&
      <CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)}}/>}
      <div className={`flex ${currentSong?"h-9/10":"h-full"}`}>
    {/*sidebar */}
    <Sidebar curActive={"myMusic"}/>
    <div className='h-full w-5/6 bg-app-black'>
    <Navbar/>
    <div className='w-full h-9/10 p-4 overflow-auto'>
    <div className=' text-white text-2xl m-2 p-2 font-semibold '>My Songs</div>
      <div className='w-full flex justify-between space-x-4'></div>
    <div className='space-y-2'>
        {
            songDetails.map((item)=>{
                return <InlineSongCard key={item._id} info={item}/>;
            })
        }
    </div>
    </div>
    </div> 
    </div>{
      currentSong?(
      <SongPlayer/>):(<div></div>)}
    </div>
    
  )
}


export default Mymusic
