import { Routes, Route } from 'react-router-dom'
import { DashBoard, Home, Login, Secret, SignUp } from '@/pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default RoutesIndex
