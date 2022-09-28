import { useState, useEffect } from 'react';
import { Switch, Route, useLocation, useHistory, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MenuPopup from '../MenuPopup/MenuPopup';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import * as api from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import {
  handleError,
  REQUEST_ERROR,
  CONFLICT_ERR_MESSAGE,
  BAD_REQ_ERR_MESSAGE,
  WRONG_DATA_ERR_MESSAGE,
  AUTH_ERR_MESSAGE,
  NOT_UPDATE_ERR_MESSAGE,
  UPDATE_MESSAGE,
  SERVER_ERROR,
  AUTH_ERROR,
} from '../../utils/consts';

function App() {
  const history = useHistory();
  const location = useLocation();

  const pathWithHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const pathWithFooter = ['/', '/movies', '/saved-movies'];

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', false);
  const [allMovies, setAllMovies] = useLocalStorage('allMovies', []);
  const [userMovies, setUserMovies] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [message, setMessage] = useState('');

  // CHECK TOKEN
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api
        .checkToken(token)
        .then(({ name, email }) => {
          setCurrentUser({ name, email });
          setLoggedIn(true);
        })
        .catch((err) => {
          setIsInfoTooltipOpen(true);
          if (err.includes(401)) {
            setMessage(AUTH_ERROR);
            setLoggedIn(false);
            localStorage.clear();
          } else {
            handleError();
          }
        });
    }
  }, [setLoggedIn]);

  // GET ALL MOVIES
  useEffect(() => {
    if (loggedIn && allMovies.length < 1) {
      moviesApi
        .getMovies()
        .then((data) => {
          setAllMovies(data);
        })
        .catch((err) => {
          setIsInfoTooltipOpen(true);
          if (err) {
            setMessage(REQUEST_ERROR);
          }
        });
    }
  }, [loggedIn, allMovies, setAllMovies]);

  // GET SAVED MOVIES
  useEffect(() => {
    if (loggedIn) {
      api
        .getSavedMovies()
        .then((data) => {
          setUserMovies(data);
        })
        .catch(handleError);
    }
  }, [loggedIn, setUserMovies]);

  // HANDLE CLOSE
  useEffect(() => {
    function handleEscClose(e) {
      const ESC_CODE = 'Escape';
      if (e.key === ESC_CODE) {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  });

  useEffect(() => {
    function handleOverlayClose(e) {
      if (e.target.classList.contains('info_opened')) {
        closeAllPopups();
      }
    }
    document.addEventListener('click', handleOverlayClose);
    return () => {
      document.removeEventListener('click', handleOverlayClose);
    };
  });

  // REGISTER
  function handleRegister({ email, password, name }) {
    api
      .register({ email, password, name })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        if (err.includes(409)) {
          setMessage(CONFLICT_ERR_MESSAGE);
        } else if (err.includes(400)) {
          setMessage(BAD_REQ_ERR_MESSAGE);
        } else {
          setMessage(SERVER_ERROR);
        }
      });
  }

  // LOGIN
  function handleLogin({ email, password }) {
    api
      .login({ email, password })
      .then(({ token }) => {
        if (token) {
          localStorage.setItem('token', token);
          setLoggedIn(true);
          getUserData();
          history.push('/movies');
        }
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        if (err.includes(401)) {
          setMessage(WRONG_DATA_ERR_MESSAGE);
        } else if (err.includes(400)) {
          setMessage(AUTH_ERR_MESSAGE);
        } else {
          setMessage(SERVER_ERROR);
        }
      });
  }

  // GET USERDATA
  function getUserData() {
    api
      .getUserData()
      .then(({ email, name }) => {
        setCurrentUser({ email, name });
      })
      .catch(handleError);
  }

  // UPDATE USERDATA
  function handleUpdateUser(data) {
    api
      .editUserData(data)
      .then((newData) => {
        setCurrentUser(newData);
        setIsInfoTooltipOpen(true);
        setMessage(UPDATE_MESSAGE);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        if (err.includes(401)) {
          setMessage(AUTH_ERROR);
          setLoggedIn(false);
          localStorage.clear();
        } else {
          setMessage(NOT_UPDATE_ERR_MESSAGE);
        }
      });
  }

  // SAVE MOVIE
  function handleSaveMovie(movie) {
    api
      .addMovie(movie)
      .then((newMovie) => {
        setUserMovies([newMovie, ...userMovies]);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        if (err.includes(401)) {
          setMessage(AUTH_ERROR);
          setLoggedIn(false);
          localStorage.clear();
        } else {
          handleError();
        }
      });
  }

  // DELETE MOVIE
  function handleDeleteMovie(movie) {
    const movieId = movie._id;
    api
      .deleteSavedMovie(movieId)
      .then(() => {
        const newUserMovies = userMovies.filter((i) => i._id !== movieId && i);
        setUserMovies(newUserMovies);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        if (err.includes(401)) {
          setMessage(AUTH_ERROR);
          setLoggedIn(false);
          localStorage.clear();
        } else {
          handleError();
        }
      });
  }

  // OPEN MENU
  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  // CLOSE POPUPS
  function closeAllPopups() {
    setIsMenuOpen(false);
    setIsInfoTooltipOpen(false);
  }

  // SIGNOUT
  function handleSignOut() {
    setLoggedIn(false);
    localStorage.clear();
    history.push('/');
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        {pathWithHeader.includes(location.pathname) ? (
          <Header loggedIn={loggedIn} handleMenuOpen={handleMenuOpen} />
        ) : null}

        <Switch>
          <Route exact path='/' component={Main} />

          <Route path='/signup'>
            {loggedIn ? <Redirect to='/' /> : <Register onRegister={handleRegister} />}
          </Route>

          <Route path='/signin'>
            {loggedIn ? <Redirect to='/' /> : <Login onLogin={handleLogin} />}
          </Route>

          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            component={Profile}
            handleUpdateUser={handleUpdateUser}
            handleSignOut={handleSignOut}
          />

          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
            allMovies={allMovies}
            userMovies={userMovies}
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
          />

          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            userMovies={userMovies}
            handleDeleteMovie={handleDeleteMovie}
          />

          <Route path='*' component={PageNotFound} />

          <Route>{loggedIn ? <Redirect to='/movies' /> : <Redirect to='/signup' />}</Route>
        </Switch>

        {pathWithFooter.includes(location.pathname) ? <Footer /> : null}

        <MenuPopup isOpen={isMenuOpen} onClose={closeAllPopups} />
        <InfoTooltip message={message} isOpen={isInfoTooltipOpen} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
