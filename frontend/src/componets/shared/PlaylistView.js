import SongCard from "./SongCard"

const PlaylistView = ({CardsData}) => {
    return(
      <div className='p-4' >
        <div className='grid gap-8 grid-cols-5'>
          {
            CardsData.map(item => {
              return <SongCard playlistId={item._id} title={item.name} imgsrc={item.thumbnail} desc={""} key={JSON.stringify(item)}/>
            })
          }
        </div>      
      </div>
    )
  }

  export default PlaylistView
  