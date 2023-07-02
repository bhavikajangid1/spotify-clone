import React from 'react'
import SongCard from '../shared/SongCard'

const focusCardsData = [
  {
    title: 'Peaceful Piano',
    desc: 'Relax and indulge with beautiful piano pieces',
    imgsrc: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6'
  },
  {
    title: 'Deep Focus',
    desc: 'Keep calm and focus',
    imgsrc: 'https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5'
  },
  {
    title: 'Instrumental Study',
    desc: 'Focus with soft study music',
    imgsrc: 'https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c'
  },
  {
    title: 'Focus Flow',
    desc: 'Uptempo instrumental beats',
    imgsrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnV9HiUeqOdgsPlujA6IrGe_P0FpMwpY3VR04A4YpXlQ&s'
  },
  {
    title: 'Beats to think to',
    desc: 'Focus with deep techno and tech house',
    imgsrc: 'https://i1.sndcdn.com/artworks-000846019744-3lm2i1-t500x500.jpg'
  }
];
const Content = () => {
  return (
    <div className='w-full h-9/10 p-4 overflow-auto'>

          <PlaylistView Playlist_title={'Focus'} CardsData={focusCardsData}/>
          <PlaylistView Playlist_title={'Focus'} CardsData={focusCardsData}/>
          <PlaylistView Playlist_title={'Focus'} CardsData={focusCardsData}/>
          <PlaylistView Playlist_title={'Focus'} CardsData={focusCardsData}/>
    </div>
  )
}

const PlaylistView = ({Playlist_title, CardsData}) => {
  return(
    <div className='p-4' >
      <div className=' text-white text-2xl font-semibold mb-4'>{Playlist_title}</div>
      <div className='w-full flex justify-between space-x-4'>
        {
          CardsData.map(item => {
            return <SongCard title = {item.title} desc = {item.desc}
            imgsrc={item.imgsrc}/>
          })
        }
      </div>      
    </div>
  )
}

export default Content