import { Link } from 'react-router-dom'
import '@/components/header/Header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <Link to='/' className='header__logo'>Logo</Link>
      <ul className='header__nav-list'>
        <li className='header__nav-item'>
          <Link to='/' className='header__item-Link header__item-Link--is-active'>Home</Link>
        </li>
        <li className='header__nav-item'>
          <Link to='/Dashboard' className='header__item-Link'>Dashboard</Link>
        </li>
        <li className='header__nav-item'>
          <Link to='/Secret' className='header__item-Link'>Secret</Link>
        </li>
        <li className='header__nav-item'>
          <Link to='/LogIn' className='header__item-Link'>LogIn</Link>
        </li>
        <li className='header__nav-item'>
          <Link to='/SignUp' className='header__item-Link'>SignUp</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
