import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import closeButton from '../../images/close.svg';

function Navigation({ isOpen, onClose }) {
  return (
    <>
      <section className={`menu ${isOpen && 'menu_opened'}`}>
        {isOpen ? (
          <img
            className='menu__close-button'
            src={closeButton}
            alt='Закрыть меню'
            onClick={onClose}
          />
        ) : null}

        <nav className='menu__content'>
          <ul className='menu__links'>
            {isOpen ? (
              <li>
                <NavLink
                  exact
                  to='/'
                  className='menu__link'
                  activeClassName='menu__link_active'
                  onClick={onClose}
                >
                  Главная
                </NavLink>
              </li>
            ) : null}
            <li>
              <NavLink
                to='/movies'
                className='menu__link'
                activeClassName='menu__link_active '
                onClick={onClose}
              >
                Фильмы
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/saved-movies'
                className='menu__link'
                activeClassName='menu__link_active'
                onClick={onClose}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>

          <Link to='/profile' className='menu__profile-link' onClick={onClose}>
            Аккаунт
          </Link>
        </nav>
      </section>
    </>
  );
}

export default Navigation;
