import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <form className='login' noValidate onSubmit={handleSubmit}>
      <Link to='/' className='login__logo' />

      <h2 className='login__title'>Рады видеть!</h2>

      <label className='login__label'>E-mail</label>
      <input
        className='login__input'
        placeholder='Введите e-mail'
        name='email'
        type='email'
        id='email'
        value={values.email || ''}
        onChange={handleChange}
        required
      />
      <span className='login__input-error'>{errors.email}</span>

      <label className='login__label'>Пароль</label>
      <input
        className='login__input'
        placeholder='Введите пароль'
        name='password'
        type='password'
        id='password'
        value={values.password || ''}
        onChange={handleChange}
        minLength='8'
        maxLength='30'
        required
      />
      <span className='login__input-error'>{errors.password}</span>

      <button
        className={`login__button ${isValid ? 'login__button_enabled' : 'login__button_disabled'}`}
        type='submit'
        disabled={!isValid}
      >
        Войти
      </button>

      <p className='login__caption'>
        Не зарегистрированы?&nbsp;
        <Link to='/signup' className='login__link'>
          Регистрация
        </Link>
      </p>
    </form>
  );
}

export default Login;
