import React, { useState } from 'react'
import { TextInput } from '../shared/TextInput'
import CloudinaryUpload from '../shared/CoudinaryUpload'
import { makeAuthenticatePOSTRequest } from '../../utils/ServerHelper'
import { useNavigate } from 'react-router-dom'

const UploadSongContent = () => {
  const [name,setName] = useState("")
  const [thumbnail,setThumbnail] = useState("")
  const [songUrl,setSongUrl] = useState("")
  const [songFilename,setSongFilename] = useState("")
  const navigate = useNavigate("")
  const submitSong = async () => {
    const data = {name,thumbnail,track:songUrl}
    const response = await makeAuthenticatePOSTRequest("song/create",data);
    if(response.err){
      alert("Could not Upload Song");
    }
    navigate("/home")
  }

  return (
    <div className='w-full h-9/10 p-8 overflow-auto' >
      <div className='text-2xl font-semibold mb-6 text-white'>
        Upload Your Music
      </div>
      <div className='w-1/3 flex m-2'>
      <TextInput label={"Song Name"} placeholder={"Song Name"} labelClassName={"text-white"} inputClassName={"bg-gray-400 placeholder-white opacity-30 "}
      value={name}
      setValue={setName}/>
      <TextInput label={"Thumbnail"} placeholder={"Upload Thumbnail"} labelClassName={"text-white"} inputClassName={"bg-gray-400 placeholder-white opacity-30 "}
      value={thumbnail}
      setValue={setThumbnail}/>
      </div>
      <div className='m-2 p-2'>
      {
        songFilename?(
        <div className='bg-gray-400 rounded-full p-3 w-1/3 flex items-center justify-center  '>
          Upladed File: {songFilename.substring(0,20)}
        </div>):(
      <CloudinaryUpload label={"Select Song"} setUrl={setSongUrl} filename = {setSongFilename}/>
      )}
      </div>
      <div className='m-4 p-4 bg-gray-400
            text-black  rounded-full font-semibold w-40 flex items-center justify-center hover:bg-gray-100' 
            onClick={submitSong}>
        Submit Song
      </div>

    </div>
  )
}

export default UploadSongContent