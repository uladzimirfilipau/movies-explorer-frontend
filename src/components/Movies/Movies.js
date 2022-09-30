import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useWindowWidth } from '../../hooks/useWindowSize';

import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../../components/Preloader/Preloader';
import {
  KEYWORD_ERROR,
  SHORT_MOVIE_DURATION,
  FULL_SCREEN,
  MEDIUM_SCREEN,
  TWELVE_MOVIES,
  EIGHT_MOVIES,
  FIVE_MOVIES,
  THREE_MOVIES,
  TWO_MOVIES,
} from '../../utils/consts';

function Movies({ allMovies, userMovies, handleSaveMovie, handleDeleteMovie }) {
  const [submitted, setSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const [findMovies, setFindMovies] = useLocalStorage('findMovies', []);
  const [checked, setChecked] = useLocalStorage('checked', false);
  const [error, setError] = useState('');
  const [shortMovies, setShortMovies] = useState([]);
  const [found, setFound] = useState(true);
  const width = useWindowWidth();
  const [index, setIndex] = useState(TWELVE_MOVIES);

  useEffect(() => {
    if (width >= FULL_SCREEN) {
      setIndex(TWELVE_MOVIES);
    }
    if (width < FULL_SCREEN && width >= MEDIUM_SCREEN) {
      setIndex(EIGHT_MOVIES);
    }
    if (width < MEDIUM_SCREEN) {
      setIndex(FIVE_MOVIES);
    }
  }, [width]);

  useEffect(() => {
    if (submitted) {
      const searchResults = allMovies.filter((movie) => {
        const movieName = movie.nameRU.toLowerCase();
        return movieName.includes(searchTerm.toLowerCase());
      });

      if (searchResults.length < 1) {
        setFound(false);
      } else {
        setFindMovies(searchResults);
        setFound(true);
      }
    }
    setTimeout(() => setSubmitted(false), 2000);
  }, [submitted, allMovies, searchTerm, setFindMovies]);

  useEffect(() => {
    setError('');
  }, [searchTerm]);

  useEffect(() => {
    if (checked) {
      const shortMovies = findMovies.filter((movie) => {
        return movie.duration <= SHORT_MOVIE_DURATION;
      });

      setShortMovies(shortMovies);
    }
  }, [checked, findMovies, setShortMovies]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchTerm ? setSubmitted(true) : setError(KEYWORD_ERROR);
  }

  function handleToogleCheck() {
    setChecked(!checked);
  }

  function handleMoreMovies() {
    if (width >= FULL_SCREEN) {
      setIndex(index + THREE_MOVIES);
    } else {
      setIndex(index + TWO_MOVIES);
    }
  }

  return (
    <main className='movies'>
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchTerm={searchTerm}
        error={error}
        checked={checked}
        handleToogleCheck={handleToogleCheck}
      />

      {submitted ? (
        <Preloader />
      ) : found ? (
        <MoviesCardList
          index={index}
          handleMoreMovies={handleMoreMovies}
          movies={checked ? shortMovies : findMovies}
          savedMovies={userMovies}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
        />
      ) : (
        <p className='movies__not-found'>Ничего не найдено</p>
      )}
    </main>
  );
}

export default Movies;
