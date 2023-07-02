import React from 'react'
import TextHoverButton from '../shared/TextHoverButton'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end ' >
        <div className='w-1/2 flex h-full '>
        <div className='w-3/5 flex justify-around items-center h-full'>
        <TextHoverButton displayText={"Premium"} targetLink={"/premium"}/>
        <TextHoverButton displayText={"Support"} targetLink={"/support"}/>
        <TextHoverButton displayText={"Download"} targetLink={"/download"}/>
        <div className='h-1/2 border-r-2 border-gray-400 rounded-lg'></div>
        </div>
        <div className='w-2/5 flex justify-around items-center h-full pr-2'>
        <TextHoverButton displayText={"Sign up"} targetLink={"/signup"}/>
        <Link className="bg-white rounded-full h-2/3 px-8 flex items-center font-semibold" to={"/login"}>Log in</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar