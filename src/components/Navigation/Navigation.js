import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <>
      <section className='menu'>
        <nav className='menu__content'>
          <ul className='menu__links'>
            <li>
              <NavLink to='/movies' className='menu__link'>
                Фильмы
              </NavLink>
            </li>

            <li>
              <NavLink to='/saved-movies' className='menu__link'>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>

          <Link to='/profile' className='menu__profile-link'>
            Аккаунт
          </Link>
        </nav>
      </section>
    </>
  );
}

export default Navigation;
