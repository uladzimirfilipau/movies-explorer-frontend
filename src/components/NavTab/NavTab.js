import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav__links'>
      <a href='#about-project' className='nav__link'>
        О проекте
      </a>
      <a href='#techs' className='nav__link'>
        Технологии
      </a>
      <a href='#about' className='nav__link'>
        Студент
      </a>
    </nav>
  );
}

export default NavTab;
