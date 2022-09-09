import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

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

function App() {
  const location = useLocation();
  const pathWithHeader = ['/', '/movies', '/saved-movies', '/profile'];
  const pathWithFooter = ['/', '/movies', '/saved-movies'];

  return (
    <>
      {pathWithHeader.includes(location.pathname) ? <Header loggedIn={false} /> : null}

      <Switch>
        <Route exact path='/' component={Main} />

        <Route path='/signup' component={Register} />

        <Route path='/signin' component={Login} />

        <Route path='/profile' component={Profile} />

        <Route path='/movies' component={Movies} />

        <Route path='/saved-movies' component={SavedMovies} />

        <Route path='*' component={PageNotFound} />
      </Switch>

      {pathWithFooter.includes(location.pathname) ? <Footer /> : null}
    </>
  );
}

export default App;
