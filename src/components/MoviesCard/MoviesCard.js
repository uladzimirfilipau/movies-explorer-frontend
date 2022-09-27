import React from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';
import { API_URL } from '../../utils/consts';

function MoviesCard({ movie, savedMovies, handleSaveMovie, handleDeleteMovie }) {
  const location = useLocation();
  const pathWithMovies = ['/movies'];
  const pathMovies = pathWithMovies.includes(location.pathname);
  const imgUrl = pathMovies ? `${API_URL}${movie.image.url}` : `${movie.image}`;

  const savedMovie = savedMovies.find((i) => i.movieId === movie.id);
  const likeButtonClassName = `movie__like ${savedMovie && 'movie__like_active'}`;

  const getTimeFromMins = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  function handleToogleClick() {
    if (savedMovie) {
      handleDeleteMovie(savedMovie);
    } else {
      handleSaveMovie(movie);
    }
  }

  function handleDeleteClick() {
    handleDeleteMovie(movie);
  }

  return (
    <li className='movie'>
      <figure className='movie__figure'>
        <figcaption className='movie__figure-caption'>
          <h2 title={movie.nameRU} className='movie__title'>
            {movie.nameRU}
          </h2>
          <p className='movie__duration'>{getTimeFromMins(movie.duration)}</p>
        </figcaption>

        {pathMovies ? (
          <button
            className={likeButtonClassName}
            type='submit'
            aria-label={
              savedMovie
                ? 'Удалить фильм из сохранённых фильмов'
                : 'Добавить фильм в сохранённые фильмы'
            }
            onClick={handleToogleClick}
          />
        ) : (
          <button
            className='movie__delete'
            type='submit'
            aria-label='Удалить фильм из сохранённых фильмов'
            onClick={handleDeleteClick}
          />
        )}

        <a
          href={movie.trailerLink}
          target='_blank'
          className='movie__link'
          aria-label='Посмотреть трейлер фильма'
          rel='noopener noreferrer'
        >
          <img src={imgUrl} alt={movie.nameRU} className='movie__image' />
        </a>
      </figure>
    </li>
  );
}

export default MoviesCard;
