import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <Link to='/' className='form__logo' />

      <h2 className='form__title'>Рады видеть!</h2>

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

      <button type='submit' className='form__button form__button_login'>
        Войти
      </button>

      <p className='form__caption'>
        Не зарегистрированы?&nbsp;
        <Link to='/signup' className='form__link'>
          Регистрация
        </Link>
      </p>
    </form>
  );
}

export default Login;
