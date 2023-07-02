import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Mainsec = () => {
  return (
    <div className='h-full w-5/6 bg-app-black'>
        <Navbar/>
        <Content/>        
    </div>
  )
}

export default Mainsec