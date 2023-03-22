import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/context/AuthContext'
import { DashBoard, Home, Login, Secret, SignUp } from '@/pages'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/dashboard'
        element={
          isAuth
            ? <DashBoard />
            : <Navigate to='/login' replace />
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default RoutesIndex
