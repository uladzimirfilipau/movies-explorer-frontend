import React from 'react';
import './AboutMe.css';
import Photo from '../../images/Vladimir-Filippov.jpg';

function AboutMe() {
  return (
    <section id='about' className='about'>
      <h2 className='about__title'>Студент</h2>

      <article className='about__article' aria-label='О студенте'>
        <div className='about__article-text'>
          <p className='about__name'>Владимир</p>

          <p className='about__profile'>Фронтенд-разработчик, 39 лет</p>

          <p className='about__description'>
            С ноября 2021 года начал учиться в Яндекс.Практикуме на курсе "Веб-разработчик". Успешно
            прошёл все этапы обучения:
          </p>
          <p className='about__description'>- HTML, CSS, JavaScript: вводный модуль</p>
          <p className='about__description'>- Расширенные возможности HTML и CSS</p>
          <p className='about__description'>- Адаптивная вёрстка и работа с макетом</p>
          <p className='about__description'>- Базовый JavaScript и работа с браузером</p>
          <p className='about__description'>- JavaScript — непростые концепции</p>
          <p className='about__description'>- Интерфейсы с использованием React</p>
          <p className='about__description'>- Основы бэкенда для фронтенд-разработчиков</p>

          <ul className='about__links'>
            <li>
              <a
                className='about__link'
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className='about__link'
                href='https://github.com/uladzimirfilipau'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>

        <img className='about__image' src={Photo} alt='Фотография Владимира' />
      </article>
    </section>
  );
}

export default AboutMe;
