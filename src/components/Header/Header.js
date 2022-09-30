import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import burgerMenu from '../../images/burger-menu.svg';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn, handleMenuOpen }) {
  return loggedIn ? (
    <header className='header'>
      <Link to='/' className='header__logo' />

      <Navigation />

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
