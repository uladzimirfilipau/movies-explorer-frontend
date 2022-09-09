import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { initialImages } from '../../utils/const';

function MoviesCardList() {
  const movieCard = initialImages.map(({ thumbnail }) => (
    <MoviesCard
      key={thumbnail.toString()}
      nameRU={'33 слова о дизайне'}
      duration={'1ч 47м'}
      thumbnail={thumbnail}
    />
  ));
  return (
    <section className='movies__cards'>
      <ul className='movies__list'>{movieCard}</ul>
      <button className='movies__button' type='button'>
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
