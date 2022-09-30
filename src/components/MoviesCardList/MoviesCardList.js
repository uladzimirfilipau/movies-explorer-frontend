import React from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,
  savedMovies,
  index,
  handleMoreMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const location = useLocation();
  const pathWithMovies = location.pathname === '/movies';

  let renderCards = movies.slice(0, index);
  const elseButton = movies.length > 0 && movies.length > index;

  return (
    <section className='movies__cards' aria-label='Фильмы'>
      <ul className='movies__list'>
        {renderCards.map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            savedMovies={savedMovies}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
        ))}
      </ul>

      {pathWithMovies && elseButton && (
        <button
          className='movies__button'
          type='button'
          aria-label='Ещё фильмы'
          onClick={handleMoreMovies}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
