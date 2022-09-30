import { MAIN_URL, API_URL } from '../utils/consts';

const getRes = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка HTTP: ${res.status}`);
  }
};

// регистрация
export const register = ({ email, password, name }) => {
  return fetch(`${MAIN_URL}/signup`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  }).then(getRes);
};

// логин
export const login = ({ email, password }) => {
  return fetch(`${MAIN_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(getRes);
};

// получить токен
export const checkToken = (token) => {
  return fetch(`${MAIN_URL}/users/me`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(getRes);
};

const getHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
};

// получить информацию о пользователе (email и имя)
export const getUserData = () => {
  return fetch(`${MAIN_URL}/users/me`, {
    headers: getHeaders(),
  }).then(getRes);
};

// обновить информацию о пользователе (email и имя)
export const editUserData = ({ name, email }) => {
  return fetch(`${MAIN_URL}/users/me`, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({
      name,
      email,
    }),
  }).then(getRes);
};

// получить сохранённые текущим пользователем фильмы
export const getSavedMovies = () => {
  return fetch(`${MAIN_URL}/movies`, {
    headers: getHeaders(),
  }).then(getRes);
};

// добавить фильм в сохранённые текущим пользователем фильмы
export const addMovie = (data) => {
  return fetch(`${MAIN_URL}/movies`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: `${API_URL}${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `${API_URL}${data.image.formats.thumbnail.url}`,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      movieId: data.id,
    }),
  }).then(getRes);
};

// удалить фильм по id из сохранённых текущим пользователем фильмов
export const deleteSavedMovie = (movieId) => {
  return fetch(`${MAIN_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: getHeaders(),
  }).then(getRes);
};
