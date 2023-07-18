import React from 'react';
import './Portfolio.css';
import ArrowImage from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>

      <ul className='portfolio__links'>
        <li className='portfolio__link-container'>
          <a
            className='portfolio__link'
            href='https://uladzimirfilipau.github.io/how-to-learn/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Статичный сайт
            <img className='portfolio__image' src={ArrowImage} alt='Ссылка на сайт' />
          </a>
        </li>

        <li className='portfolio__link-container'>
          <a
            className='portfolio__link'
            href='https://uladzimirfilipau.github.io/russian-travel/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Адаптивный сайт
            <img className='portfolio__image' src={ArrowImage} alt='Ссылка на сайт' />
          </a>
        </li>

        <li className='portfolio__link-container'>
          <a
            className='portfolio__link'
            href='https://mesto-react-ulfi.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Одностраничное приложение
            <img className='portfolio__image' src={ArrowImage} alt='Ссылка на сайт' />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
