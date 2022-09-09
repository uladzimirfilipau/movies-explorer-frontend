import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import burgerMenu from '../../images/burger-menu.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return loggedIn ? (
    <header className='header'>
      <Link to='/' className='header__logo' />

      <Navigation isOpen={isMenuOpen} onClose={handleMenuClose} />

      <img
        className='header__burger-menu'
        src={burgerMenu}
        alt='Открыть меню'
        onClick={handleMenuOpen}
      />
    </header>
  ) : (
    <header className='header'>
      <Link to='/' className='header__logo' />

      <nav className='header__menu'>
        <Link to='/signup' className='header__register-link'>
          Регистрация
        </Link>

        <Link to='/signin' className='header__auth-link'>
          Войти
        </Link>
      </nav>
    </header>
  );
}

export default Header;
