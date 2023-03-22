import { NavLink } from 'react-router-dom'
import '@/components/header/Header.scss'

const Header = () => {
  const linkIsActive = (isActive, isPending) => {
    if (isPending) return 'header__item-link'
    if (isActive) return 'header__item-link header__item-link--is-active'
    else return 'header__item-link'
  }

  return (
    <nav className='header'>
      <NavLink to='/' className='header__logo'>Logo</NavLink>
      <ul className='header__nav-list'>
        <li className='header__nav-item'>
          <NavLink
            to='/'
            className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >
            Home
          </NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink
            to='/Dashboard'
            className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >
            Dashboard
          </NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink
            to='/Secret'
            className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >
            Secret
          </NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink
            to='/LogIn'
            className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >
            LogIn
          </NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink
            to='/SignUp'
            className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >
            SignUp
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
