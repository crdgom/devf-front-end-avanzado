import SongDetails from '../../components/SongDetails/SongDetails'
import SongList from '../../components/SongList/SongList'
import { SongProvider } from '../../context/SongContext'
import './home.css'

const Index = () => {
  return (
    <div className='home-container'>
      <SongProvider>
        <div className='izquierdo'>
          <h2>Song List</h2>
          <SongList />
        </div>
        <div className='derecho'>
          <h2>lado derecho</h2>
          <SongDetails />
        </div>
      </SongProvider>
    </div>
  )
}

export default Index
