import './Header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <a href='/' className='header__logo'>Logo</a>
      <ul className='header__nav-list'>
        <li className='header__nav-item'>
          <a href='/' className='header__item-link header__item-link--is-active'>Home</a>
        </li>
        <li className='header__nav-item'>
          <a href='/Dashboard' className='header__item-link'>Dashboard</a>
        </li>
        <li className='header__nav-item'>
          <a href='/Secret' className='header__item-link'>Secret</a>
        </li>
        <li className='header__nav-item'>
          <a href='/LogIn' className='header__item-link'>LogIn</a>
        </li>
        <li className='header__nav-item'>
          <a href='/SignUp' className='header__item-link'>SignUp</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
