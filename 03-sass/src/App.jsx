import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes'
import { Header } from '@/components/Header'
import { AuthProvider } from './context/AuthContext'
/* import { DashBoard, Home, Login, Secret, SignUp } from './pages' */

import './App.css'

function App () {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
