import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import './output.css'
import { Login } from './routes/Login';
import {Signup} from './routes/Signup'
import Home from './routes/Home';
import { useCookies } from 'react-cookie';
import LoggedinHome from './routes/LoggedinHome';
import UploadSong from './routes/UploadSong';
import Mymusic from './routes/Mymusic';
import songContext from './contexts/songContext';
import { useState } from 'react';
import Search from './routes/Search';
import CreatePlaylistModal from './modals/CreatePlaylistModal';
import Library from './routes/Library';
import SinglePlaylistView from './routes/SinglePlaylistView';


function App() {
  
  const [cookie,setCookie] = useCookies(["token"])
  const [currentSong,setCurrentSong] = useState(null)
  const [soundPlayed,setSoundPlayed] = useState(null);
  const [isPaused,setIsPaused] = useState(null);
  const [isLiked,setIsLiked]= useState(null)
  const [createPlaylistModalOpen,setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen,setAddToPlaylistModalOpen] = useState(false);
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      {
      cookie.token?(
        //logged in 
        <songContext.Provider value={{
          currentSong,
          setCurrentSong,
          soundPlayed,
          setSoundPlayed,
          isPaused,
          setIsPaused,
          createPlaylistModalOpen,setCreatePlaylistModalOpen,
          isLiked,
          setIsLiked,
          addToPlaylistModalOpen,
          setAddToPlaylistModalOpen
      }}>
      <Routes>
        <Route path = "/" element = {<h1 className='bg-blue-500'>HI</h1>}/>
        <Route path = "/home" element = {<LoggedinHome/>}/>
        <Route path="/uploadsong" element={<UploadSong/>}/>
        <Route path="/mymusic" element={<Mymusic/>}/>
        <Route path = "/search" element = {<Search/>}/> 
        <Route path = "/createplaylist" element = {<CreatePlaylistModal/>}/> 
        <Route path = "/library" element = {<Library/>}/>
        <Route path = "/playlist/:playlistId" element = {<SinglePlaylistView/>}/>        
        
        <Route path='*' element={<Navigate to ="/home"/>}/>
      </Routes>
      </songContext.Provider>
      ):
      (
        //logged out
        <Routes>
          <Route path = "/login" element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/home" element = {<Home/>}/>  
        <Route path='*' element={<Navigate to ="/login"/>}/>
        </Routes>
      )
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
