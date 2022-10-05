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
            С&nbsp;ноября 2021 года начал учиться в&nbsp;Яндекс.Практикуме на&nbsp;курсе
            &laquo;Веб-разработчик&raquo;. Успешно прошёл все этапы обучения:
          </p>
          <p className='about__description'>&mdash;&nbsp;HTML, CSS, JavaScript: вводный модуль</p>
          <p className='about__description'>&mdash;&nbsp;Расширенные возможности HTML и&nbsp;CSS</p>
          <p className='about__description'>
            &mdash;&nbsp;Адаптивная вёрстка и&nbsp;работа с&nbsp;макетом
          </p>
          <p className='about__description'>
            &mdash;&nbsp;Базовый JavaScript и&nbsp;работа с&nbsp;браузером
          </p>
          <p className='about__description'>
            &mdash;&nbsp;JavaScript&nbsp;&mdash; непростые концепции
          </p>
          <p className='about__description'>&mdash;&nbsp;Интерфейсы с&nbsp;использованием React</p>
          <p className='about__description'>
            &mdash;&nbsp;Основы бэкенда для фронтенд-разработчиков
          </p>

          <ul className='about__links'>
            <li>
              <a
                className='about__link'
                href='https://career.habr.com/vladimir_filippov'
                target='_blank'
                rel='noopener noreferrer'
              >
                Хабр Карьера
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
