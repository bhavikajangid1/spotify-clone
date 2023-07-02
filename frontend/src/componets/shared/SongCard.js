import React from 'react'
import { useNavigate } from 'react-router-dom'

const SongCard = ({title,desc,imgsrc,playlistId}) => {
  const navigate = useNavigate("")
  return (
    <div className='bg-black bg-opacity-50 w-full cursor-pointer p-4 rounded-lg ' onClick={()=>{
      navigate("/playlist/"+playlistId)
    }}>
    <div className='py-2'>
        <img src={imgsrc} alt='label' className='w-full rounded-lg'/>
    </div>
    <div className='text-white text-sm font-semibold py-3'>
        {title}
    </div>
    <div className='text-gray-500 text-sm'>{desc}</div>
    </div>
  )
}

export default SongCard