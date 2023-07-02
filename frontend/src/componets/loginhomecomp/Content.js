import React, { useContext } from 'react'
import songContext from '../../contexts/songContext';
import PlaylistView from '../shared/PlaylistView';
const focusCardsData = [
  {
    name: 'Peaceful Piano',
    desc: 'Relax and indulge with beautiful piano pieces',
    thumbnail: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6'
  },
  {
    name: 'Deep Focus',
    desc: 'Keep calm and focus',
    thumbnail: 'https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5'
  },
  {
    name: 'Instrumental Study',
    desc: 'Focus with soft study music',
    thumbnail: 'https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c'
  },
  {
    name: 'Focus Flow',
    desc: 'Uptempo instrumental beats',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnV9HiUeqOdgsPlujA6IrGe_P0FpMwpY3VR04A4YpXlQ&s'
  },
  {
    name: 'Beats to think to',
    desc: 'Focus with deep techno and tech house',
    thumbnail: 'https://i1.sndcdn.com/artworks-000846019744-3lm2i1-t500x500.jpg'
  }
];
const Content = () => {
  const currentSong = useContext(songContext);
  return (
    <div className={`w-full p-4 overflow-auto ${currentSong?"h-9/10":"h-full"}`}>
        
          <PlaylistView CardsData={focusCardsData}/>
          <PlaylistView CardsData={focusCardsData}/>
          <PlaylistView CardsData={focusCardsData}/>
          <PlaylistView CardsData={focusCardsData}/>
    </div>
  )
}

export default Content