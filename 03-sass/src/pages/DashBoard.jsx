import { useAuthContext } from '@/context/AuthContext'
const DashBoard = () => {
  const { userPayload } = useAuthContext()
  return (
    <>
      <h1>Dashboard</h1>
      {
        userPayload.role === 'ADMIN'
          ? <p>Hola Administrador</p>
          : <p>Hola Usuario</p>
      }
    </>
  )
}

export default DashBoard
