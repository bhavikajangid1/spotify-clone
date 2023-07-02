import React, {  useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/spotify_logo.svg'
import IconText from '../shared/IconText'
import {Icon} from '@iconify/react'
import songContext from '../../contexts/songContext'
const Sidebar = ({curActive}) => {
  const {setCreatePlaylistModalOpen}=
        useContext(songContext);

  return (
    <div className='side-bar-container w-1/6 h-full bg-black flex flex-col justify-between'>
    <div>
    <div>
        <Link to="/home">
            <img src={logo} alt='logo'
            className='p-5 w-3/5'/>
        </Link>
    </div>
    <div className='py-4'>
    <IconText displayText = {"Home" } iconName = {"ic:round-home"} targetLink="/home"
    active={curActive === "home"}/>
    <IconText displayText = {"Search" } iconName = {"iconamoon:search-bold"} targetLink="/search"
    active={curActive === "search"}/>
    <IconText displayText = {"Library" } iconName = {"fluent:library-20-filled"}
    targetLink="/library"
    active={curActive === "library"}
    />
    <IconText displayText = {"My Music" } iconName = {"mdi:music-box"}
    targetLink="/mymusic"
    active={curActive === "myMusic"}/>
    </div>
    <div className='py-4'>
    <IconText displayText = {"Create Playlist" } iconName = {"solar:add-square-bold"}
    active={curActive === "createPlaylist"}
    onClick = {() => {
      setCreatePlaylistModalOpen(true);
  }}/>
    <IconText displayText = {"Liked Songs" } iconName = {"mdi:heart-box"}
    active={curActive === "linkedSongs"}/>
    </div>
    </div>
    <div className='p-4 w-3/4'>
    <div className=' py-1 border flex border-gray-200 hover:border-white  text-white rounded-full text-lg items-center justify-center'> 
    <Icon icon="ph:globe"/>
    <div className='px-1'>English</div>
    </div>
</div>
</div> 
  )
}

export default Sidebar