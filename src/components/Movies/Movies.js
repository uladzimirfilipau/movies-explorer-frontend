import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useWindowWidth } from '../../hooks/useWindowSize';

import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../../components/Preloader/Preloader';

function Movies({ allMovies, userMovies, handleSaveMovie, handleDeleteMovie }) {
  const [submitted, setSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const [findMovies, setFindMovies] = useLocalStorage('findMovies', []);
  const [checked, setChecked] = useLocalStorage('checked', false);
  const [error, setError] = useState('');
  const [shortMovies, setShortMovies] = useState([]);
  const [found, setFound] = useState(true);
  const width = useWindowWidth();
  const [index, setIndex] = useState(12);

  useEffect(() => {
    if (width >= 1280) {
      setIndex(12);
    }
    if (width < 1280 && width >= 768) {
      setIndex(8);
    }
    if (width < 768) {
      setIndex(5);
    }
  }, [width]);

  useEffect(() => {
    if (submitted) {
      const searchResults = allMovies.filter((movie) => {
        const movieName = movie.nameRU.toLowerCase();
        return movieName.includes(searchTerm.toLowerCase());
      });

      if (searchResults < 1) {
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
        return movie.duration <= 40;
      });

      setShortMovies(shortMovies);
    }
  }, [checked, findMovies, setShortMovies]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchTerm ? setSubmitted(true) : setError('Нужно ввести ключевое слово');
  }

  function handleToogleCheck() {
    setChecked(!checked);
  }

  function handleMoreMovies() {
    if (width >= 1280) {
      setIndex(index + 3);
    } else {
      setIndex(index + 2);
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
