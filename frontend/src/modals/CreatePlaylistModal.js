import React, {  useState } from 'react'
import { TextInput } from '../componets/shared/TextInput'
import { makeAuthenticatePOSTRequest } from '../utils/ServerHelper';

const CreatePlaylistModal = ({closeModal}) => {
  const [playlistName,setPlaylistName] = useState("");
  const [thumbnail,setThumbnail] = useState("");
  const createPLaylist = async () => {
    const data = {name:playlistName,thumbnail}
    console.log(data)
    const response = await makeAuthenticatePOSTRequest("playlist/create",data);
    console.log(response)
    if(response.err){
      alert("Could not create playlist");
    }
    if(response._id){
      closeModal();
    }

  }
  return (
    <div className='absolute bg-black w-screen h-screen bg-opacity-50 flex items-center justify-center' onClick={closeModal}>
        <div className=' w-1/3 bg-app-black rounded-lg p-4' onClick={(e)=>{e.stopPropagation()}}>
          <div className='text-white flex justify-center mt-2'>
            Create a new Playlist
          </div>
          <div>
          <TextInput label={"Name"} 
          labelClassName={'text-white'}
          inputClassName={"text-white bg-black"}placeholder={"Playlist Name" 
          }
          value={playlistName}
          setValue={setPlaylistName}/>
          <TextInput label={"Thumbnail"} 
          labelClassName={'text-white'}
          inputClassName={"text-white bg-black"}
          placeholder={"Thumbnail"}
          value={thumbnail}
          setValue={setThumbnail}/>
          <div className='flex items-center justify-center'>            
          <div className='bg-gray-400 my-4 rounded-full w-1/3 text-app-black font-semibold flex items-center justify-center p-2' onClick={createPLaylist}>Create Playlist</div>
          </div>
          </div>
        </div>
        </div>
  )
}

export default CreatePlaylistModal