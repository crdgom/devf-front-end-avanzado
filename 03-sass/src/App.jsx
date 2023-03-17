import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes'
import { Header } from '@/components/Header'
/* import { DashBoard, Home, Login, Secret, SignUp } from './pages' */

import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
