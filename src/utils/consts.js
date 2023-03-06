export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const API_URL = 'https://api.nomoreparties.co';

export let MAIN_URL = '';
const { NODE_ENV } = process.env;
if (NODE_ENV === 'production') {
  MAIN_URL = 'https://api-movie-explorer-vova.herokuapp.com';
} else {
  MAIN_URL = 'http://localhost:3001';
}

export const handleError = (err) => {
  console.log(err);
};

export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + 'ч ' + minutes + 'м';
};

export const NAME = '^[A-Za-zА-Яа-яЁё /s -]+$';

export const SHORT_MOVIE_DURATION = 40;
export const FULL_SCREEN = 1280;
export const MEDIUM_SCREEN = 768;

export const TWELVE_MOVIES = 12;
export const EIGHT_MOVIES = 8;
export const FIVE_MOVIES = 5;
export const THREE_MOVIES = 3;
export const TWO_MOVIES = 2;

export const REQUEST_ERROR =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const CONFLICT_ERR_MESSAGE = 'Пользователь с таким email уже существует';
export const BAD_REQ_ERR_MESSAGE = 'При регистрации пользователя произошла ошибка';
export const WRONG_DATA_ERR_MESSAGE = 'Вы ввели неверный логин или пароль';
export const AUTH_ERR_MESSAGE = 'При авторизации пользователя произошла ошибка';
export const UPDATE_MESSAGE = 'Данные профиля успешно обновлены!';
export const NOT_UPDATE_ERR_MESSAGE = 'При обновлении профиля произошла ошибка';
export const SERVER_ERROR = 'Ошибка сервера';
export const AUTH_ERROR = 'Пожалуйста, войдите в аккаунт!';

export const WRONG_NAME = 'Используйте только латиницу, кириллицу, пробел или дефис';
export const WRONG_EMAIL = 'Некорректный email';

export const KEYWORD_ERROR = 'Нужно ввести ключевое слово';
