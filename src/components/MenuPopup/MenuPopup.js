import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MenuPopup.css';
import closeButton from '../../images/close.svg';

function MenuPopup({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <section className={`popup ${isOpen && 'popup_opened'}`}>
        <img
          className='popup__close-button'
          src={closeButton}
          alt='Закрыть меню'
          onClick={onClose}
        />

        <nav className='popup__content'>
          <ul className='popup__links'>
            <li>
              <NavLink
                exact
                to='/'
                className='popup__link'
                activeClassName='popup__link_active'
                onClick={onClose}
              >
                Главная
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/movies'
                className='popup__link'
                activeClassName='popup__link_active'
                onClick={onClose}
              >
                Фильмы
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/saved-movies'
                className='popup__link'
                activeClassName='popup__link_active'
                onClick={onClose}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>

          <Link to='/profile' className='popup__profile-link' onClick={onClose}>
            Аккаунт
          </Link>
        </nav>
      </section>
    </>
  );
}

export default MenuPopup;
