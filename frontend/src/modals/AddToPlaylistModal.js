import { useContext, useEffect, useState } from 'react';
import { makeAuthenticateGETRequest, makeAuthenticatePOSTRequest } from '../utils/ServerHelper';
import songContext from '../contexts/songContext';



const AddToPlaylistModal = ({closeModal,cur}) => {
    const {setAddToPlaylistModalOpen} = useContext(songContext);
    const addSongToPlaylist = async (playlistId) => {
        const songId = cur._id
        const payload = {songId,playlistId}
        const response = await makeAuthenticatePOSTRequest("playlist/add/song",payload)
        console.log(response);
        if(response._id){
            setAddToPlaylistModalOpen(false);
        }
    }
  const [playlistDetails,setPlaylistDetails] =useState([])
  useEffect(()=>{
      const getData = async () =>{
      const response = await makeAuthenticateGETRequest("playlist/get/artist/me")
      setPlaylistDetails(response.data)
      };
      getData();
  },[])
  return (
    <div className='absolute bg-black w-screen h-screen bg-opacity-50 drop-shadow-2xl  flex items-center justify-center' onClick={closeModal}>
        <div className="w-1/3 bg-app-black rounded-lg p-4" onClick={(e)=>{e.stopPropagation()}}>
        <div className='font-semibold text-white mb-2'>Select Playlist</div>
        <div className='space-y-4 flex flex-col justify-center items-center overflow-auto'>

        {
            playlistDetails.map(item => {
              return (
                <div className='bg-app-black w-full flex items-center space-x-2 hover:bg-gray-400 hover:bg-opacity-30 p-2 rounded'
                onClick={()=>{
                    addSongToPlaylist(item._id)
                }}
                key = {item._id}
                >
                    <div>
                        <img src={item.thumbnail} className='w-10 h-10 rounded'
                        alt ="thumbnail"/>
                    </div>
                    <div className='text-white font'>{item.name}</div>
                </div>
              )
            })
          }
        
        </div>
        </div>
        </div>
  )
}

export default AddToPlaylistModal