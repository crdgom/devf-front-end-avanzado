import { useAuthContext } from '@/context/AuthContext'
const Secret = () => {
  const { userPayload } = useAuthContext()
  return (
    <>
      <h1>Secret</h1>
      {
        userPayload?.role === 'ADMIN'
          ? <p>Hola Administrador</p>
          : <p>Hola Usuario</p>
      }
    </>
  )
}

export default Secret
