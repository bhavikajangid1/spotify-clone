import Sidebar from '../componets/loginhomecomp/Sidebar'
import Mainsec from '../componets/loginhomecomp/Mainsec'
import { SongPlayer } from '../componets/shared/SongPlayer'
import { useContext } from 'react';
import songContext from '../contexts/songContext';
import CreatePlaylistModal from '../modals/CreatePlaylistModal';
import AddToPlaylistModal from '../modals/AddToPlaylistModal';

const LoggedinHome = () => {

  const {currentSong,createPlaylistModalOpen,setCreatePlaylistModalOpen,addToPlaylistModalOpen,setAddToPlaylistModalOpen} = useContext(songContext);
  return (
    <div className='h-full w-full'>
      {
      addToPlaylistModalOpen &&
      <AddToPlaylistModal cur={currentSong} closeModal={()=>{setAddToPlaylistModalOpen(false)}}/>}
     { createPlaylistModalOpen &&
      <CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)}}/>}
        {/*sidebar */}
        <div className={`flex ${currentSong!==null?"h-9/10":"h-full"}`}>
        <Sidebar curActive={"home"}/>
        <Mainsec/> 
        </div>
        {
          currentSong?(
        <SongPlayer/>):(<div></div>)
}
    </div>
  )
}


export default LoggedinHome