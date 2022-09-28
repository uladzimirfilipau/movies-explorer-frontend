import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { NAME } from '../../utils/consts';

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const registerButtonClassName = `register__button ${
    isValid ? 'register__button_enabled' : 'register__button_disabled'
  }`;

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <form className='register' noValidate onSubmit={handleSubmit}>
      <Link to='/' className='register__logo' />

      <h2 className='register__title'>Добро пожаловать!</h2>

      <label className='register__label'>Имя</label>
      <input
        className='register__input'
        placeholder='Введите имя'
        name='name'
        type='text'
        id='name'
        value={values.name || ''}
        onChange={handleChange}
        minLength='2'
        maxLength='30'
        pattern={NAME}
        required
      />
      <span className='register__input-error'>{errors.name}</span>

      <label className='register__label'>E-mail</label>
      <input
        className='register__input'
        placeholder='Введите e-mail'
        name='email'
        type='email'
        id='email'
        value={values.email || ''}
        onChange={handleChange}
        required
      />
      <span className='register__input-error'>{errors.email}</span>

      <label className='register__label'>Пароль</label>
      <input
        className='register__input'
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
      <span className='register__input-error'>{errors.password}</span>

      <button className={registerButtonClassName} type='submit' disabled={!isValid}>
        Зарегистрироваться
      </button>

      <p className='register__caption'>
        Уже зарегистрированы?&nbsp;
        <Link to='/signin' className='register__link'>
          Войти
        </Link>
      </p>
    </form>
  );
}

export default Register;
