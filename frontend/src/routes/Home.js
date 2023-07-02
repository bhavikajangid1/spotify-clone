import React from 'react'
import Sidebar from '../componets/homecomponents/Sidebar'
import Mainsec from '../componets/homecomponents/Mainsec'

const Home = () => {
  return (
    <div className='h-full w-full flex'>
        {/*sidebar */}
        <Sidebar/>
        <Mainsec/>
    </div>
  )
}


export default Home