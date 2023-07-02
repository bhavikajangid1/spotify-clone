import {createContext} from "react";

const songContext = createContext({
    currentSong: null,
    setCurrentSong: (currentSong) => {},
    soundPlayed: null,
    setSoundPlayed: () => {},
    isPaused: null,
    setIsPaused: () => {},
    createPlaylistModalOpen: null,
    setCreatePlaylistModalOpen: () => {},
    isLiked: null,
    setIsLiked: () => {}
});

export default songContext;