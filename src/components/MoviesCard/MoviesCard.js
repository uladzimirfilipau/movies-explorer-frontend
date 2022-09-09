import { useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './MoviesCard.css';

function MoviesCard({ nameRU, duration, thumbnail }) {
  const location = useLocation();
  const pathWithSavedMovies = ['/movies'];
  const [isLike, setIsLike] = useState(false);

  function handleLikeClick() {
    setIsLike(true);
  }

  function handleDislikeClick() {
    setIsLike(false);
  }

  return (
    <li className='movie'>
      <figure className='movie__figure'>
        <figcaption className='movie__figure-caption'>
          <h2 className='movie__title'>{nameRU}</h2>
          <p className='movie__duration'>{duration}</p>
        </figcaption>

        {pathWithSavedMovies.includes(location.pathname) ? (
          isLike ? (
            <button className='movie__like_active' onClick={handleDislikeClick} />
          ) : (
            <button className='movie__like' onClick={handleLikeClick} />
          )
        ) : (
          <button className='movie__delete' />
        )}

        <a
          href='https://www.youtube.com/watch?v=JORGN8rUjyQ'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={thumbnail} alt={nameRU} className='movie__image' />
        </a>
      </figure>
    </li>
  );
}

export default MoviesCard;
