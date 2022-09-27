export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const API_URL = 'https://api.nomoreparties.co';

export let MAIN_URL = '';
const { NODE_ENV } = process.env;
if (NODE_ENV === 'production') {
  MAIN_URL = 'https://api.moviesexplorer.vova.nomoredomains.sbs';
} else {
  MAIN_URL = 'http://localhost:3001';
}

export const handleError = (err) => {
  console.log(err);
};

export const NAME = '^[A-Za-zА-Яа-яЁё /s -]+$';
