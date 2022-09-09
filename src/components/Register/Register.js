import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ username, email, password });
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <Link to='/' className='form__logo' />

      <h2 className='form__title'>Добро пожаловать!</h2>

      <label className='form__label'>Имя</label>
      <input
        className='form__input'
        placeholder='Введите имя'
        name='username'
        type='text'
        id='username'
        value={username}
        onChange={handleUsernameChange}
        required
      />

      <label className='form__label'>E-mail</label>
      <input
        className='form__input'
        placeholder='Введите e-mail'
        name='email'
        type='email'
        id='email'
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label className='form__label'>Пароль</label>
      <input
        className='form__input'
        placeholder='Введите пароль'
        name='password'
        type='password'
        id='password'
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <button type='submit' className='form__button form__button_register'>
        Зарегистрироваться
      </button>

      <p className='form__caption'>
        Уже зарегистрированы?&nbsp;
        <Link to='/signin' className='form__link'>
          Войти
        </Link>
      </p>
    </form>
  );
}

export default Register;
