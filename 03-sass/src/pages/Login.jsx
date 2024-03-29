import { useAuthContext } from '@/context/AuthContext'
import useForm from '@/hooks/useForm'
import { loginUserService } from '@/services/userServices'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/react.svg'
import '@/styles/form.css'

const Login = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        // guardar el token en local storage
        login(response.data.token)
        // redireccionar al home
        navigate('/')
      }
    } catch (error) {
      console.log('Ocurrió un error en login: ', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={input.email}
            onChange={handleInputChange}
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={input.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
        <p className='mt-5 mb-3 text-muted'>&copy; 2017–2022</p>
      </form>
    </main>
  )
}

export default Login
