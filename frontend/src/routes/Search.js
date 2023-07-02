import Sidebar from '../componets/loginhomecomp/Sidebar'
import { SongPlayer } from '../componets/shared/SongPlayer'
import { useContext, useState } from 'react';
import songContext from '../contexts/songContext';
import Navbar from '../componets/loginhomecomp/Navbar';
import { Icon } from '@iconify/react';
import { makeAuthenticateGETRequest } from '../utils/ServerHelper';
import InlineSongCard from '../componets/shared/InlineSongCard';
import CreatePlaylistModal from '../modals/CreatePlaylistModal';
import AddToPlaylistModal from '../modals/AddToPlaylistModal';

const Search = () => {

  const {currentSong,createPlaylistModalOpen,setCreatePlaylistModalOpen,addToPlaylistModalOpen,setAddToPlaylistModalOpen} = useContext(songContext);
  const [isInputFocused,setIsInputFocused] = useState(false);
  const [searchText,setSearchText] = useState("");
  const [searchSongs,setSearchSongs] = useState([]);
  const searchSong =async () =>{
    const response = await makeAuthenticateGETRequest("song/get/song/"+searchText);
    setSearchSongs(response.data);
    setSearchText("")
  }
  return (
    <div className='h-full w-full'>
        {
      addToPlaylistModalOpen &&
      <AddToPlaylistModal 
      cur={currentSong}
      closeModal={()=>{setAddToPlaylistModalOpen(false)}}/>}
        { createPlaylistModalOpen &&
      <CreatePlaylistModal closeModal={()=>{setCreatePlaylistModalOpen(false)}}/>}
        {/*sidebar */}
        <div className={`flex ${currentSong!==null?"h-9/10":"h-full"}`}>
        <Sidebar curActive={"search"}/>
        <div className='h-full w-5/6 bg-app-black'>
        <Navbar/>
        <div className='w-full h-9/10 p-4 overflow-auto'>
        {/*main content*/}
        <div className='w-full p-4'>
        <div className={`w-1/3 p-3 text-sm h-12 bg-opacity-20 bg-gray-700 flex rounded-full justify-start ${isInputFocused?" border-2 border-white":""}`}>
            <div className='w-1/6 flex justify-center items-center'>
            <Icon icon="iconamoon:search-bold" color='white' className='font-bold text-xl'/>
            </div>
            <input className='w-5/5 bg-opacity-0 focus:outline-none bg-gray-700 placeholder-gray-400 font-lg w-full text-white' type='text' placeholder='What do you want to listen to? '
            onFocus={()=>{setIsInputFocused(true)}}
            onBlur={()=>setIsInputFocused(false)}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
                if(e.key==="Enter")
                searchSong();
            }}
            />
        </div>
        {searchSongs? (
                    <div className="pt-10 space-y-3">
                        <div className="text-white">
                            Showing search results for
                            <span className="font-bold"> {searchText}</span>
                        </div>
                        {searchSongs.map((item) => {
                            return (
                                <InlineSongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => {}}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-gray-400 pt-10">
                        Nothing to show here.
                    </div>
                )}
        </div>
        </div>
        </div>
        </div>
        {
          currentSong?(
        <SongPlayer/>):(<div></div>)
}
    </div>
  )
}


export default Search