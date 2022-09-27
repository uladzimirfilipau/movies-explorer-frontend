import { useEffect, useState } from 'react';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../../components/Preloader/Preloader';

function SavedMovies({ userMovies, handleDeleteMovie }) {
  const [submitted, setSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [findMovies, setFindMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [shortMovies, setShortMovies] = useState([]);
  const [found, setFound] = useState(true);

  useEffect(() => {
    setFindMovies(userMovies);
  }, [userMovies]);

  useEffect(() => {
    if (submitted) {
      const searchResults = userMovies.filter((movie) => {
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
    setTimeout(() => setSubmitted(false), 1000);
  }, [submitted, userMovies, searchTerm, setFindMovies]);

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

  return (
    <main className='saved-movies'>
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
          movies={checked ? shortMovies : findMovies}
          savedMovies={userMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      ) : (
        <p className='movies__not-found'>Ничего не найдено</p>
      )}
    </main>
  );
}

export default SavedMovies;
