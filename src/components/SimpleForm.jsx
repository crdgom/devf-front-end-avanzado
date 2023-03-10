import { useState } from 'react'

const SimpleForm = () => {
  // paso 1: Crear los estados donde almacenaremos la información tecleada por el usuario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // paso 3: crear el evento que se ejecutará cuando el usuario teclee algo en el formulario
  const handleSubmit = (e) => {
    e.preventDefault() // siempre evitar que se recargue la página y se rompa el SPA
    const submittedData = JSON.stringify({
      email,
      password
    })
    console.log(submittedData)
  }

  // paso 2: crear el formulario jsx
  return (
    <div className='login'>
      <div className='login-container'>
        {/* <img src={logo} alt='logo' /> */}
        <form>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' onChange={(event) => setEmail(event.target.value)} />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' onChange={(event) => setPassword(event.target.value)} />
          <button onClick={handleSubmit}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
