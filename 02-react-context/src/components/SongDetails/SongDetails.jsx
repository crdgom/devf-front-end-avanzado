import { useSongContext } from '../../context/SongContext'

const SongDetails = () => {
  const context = useSongContext()
  return (
    <div>
      {
            context.selectedSong.title
              ? <div>
                <img src={`https://picsum.photos/seed/${context.selectedSong.id}/500`} alt={context.selectedSong.title} />
                <h2>{context.selectedSong.title}</h2>
                <p>{context.selectedSong.artist}</p>
                <p>{context.selectedSong.year}</p>
                </div>
              : <h2>Selecciona una canción</h2>
      }
    </div>
  )
}

export default SongDetails
