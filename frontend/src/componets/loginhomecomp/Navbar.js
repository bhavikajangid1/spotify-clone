import React from 'react'
import TextHoverButton from '../shared/TextHoverButton'
import { Link } from 'react-router-dom'
 
const Navbar = () => {
  return (
    <div className='w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end overflow-auto' >
        <div className='w-1/2 flex h-full'>
        <div className='w-2/3 flex justify-around items-center h-full'>
        <TextHoverButton displayText={"Premium"}/>
        <TextHoverButton displayText={"Support"}/>
        <TextHoverButton displayText={"Download"} targetLink={"/download"}/>
        <div className='h-1/2 border-r-2 border-gray-400 rounded-lg'></div>
        </div>
        <div className='w-1/3 flex justify-around items-center h-full pr-2'>
        <TextHoverButton displayText={"Upload Song"}
        targetLink=
        {"/uploadsong"}/>
        <Link className="bg-white rounded-full w-10 h-10 p-2 flex items-center font-semibold">BJ</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar