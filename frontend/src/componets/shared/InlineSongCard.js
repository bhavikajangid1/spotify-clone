import { Icon } from '@iconify/react'
import React, { useContext } from 'react'
import songContext from '../../contexts/songContext'

const InlineSongCard = ({info}) => {
  const {setCurrentSong} = useContext(songContext);
  return (
    <div className='flex justify-start items-center hover:bg-gray-300 hover:bg-opacity-30 m-2 px-2 rounded-sm' onClick={()=>{ 
      setCurrentSong(info)}} >
        <div className='w-10 h-10  bg-cover bg-center rounded-sm'
            style={{
                backgroundImage:`url("${info.thumbnail}")`
            }}>

        </div>
        <div className=' w-full flex pr-4 cursor-pointer'>
        <div className='text-white p-2 w-full '>
        <div className='hover:underline w-1/5'>{info.name}</div>
        <div className='text-sm text-gray-200 hover:underline hover:text-decoration-color-white w-1/5'>{info.artist.firstName} {info.artist.lastName}</div>
        </div>
        <div className='w-1/6 text-white flex items-center justify-end space-x-6 '>
        <div>3:45</div>
        <Icon icon="bi:three-dots" color="white" />
        </div>
        
        </div>
    </div>
  )
}

export default InlineSongCard