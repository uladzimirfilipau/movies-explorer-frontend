import { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Profile({ handleUpdateUser, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const inputElement = useRef(null);

  const [disabled, setDisabled] = useState(true);
  const [activeSaveButton, setActiveSaveButton] = useState(false);

  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  let newData = currentUser.name !== values.name || currentUser.email !== values.email;

  useEffect(() => {
    resetForm(currentUser, {}, true);
  }, [resetForm, currentUser]);

  useEffect(() => {
    if (activeSaveButton) {
      inputElement.current.focus();
      inputElement.current.select();
    }
  }, [activeSaveButton]);

  function handleEdit() {
    setDisabled(false);
    setActiveSaveButton(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid && newData) {
      handleUpdateUser(values);
      setActiveSaveButton(false);
      setDisabled(true);
    }
  }

  return (
    <form className='profile' noValidate onSubmit={handleSubmit}>
      <h2 className='profile__title'>Привет, {currentUser.name}!</h2>

      <fieldset className='profile__fildset'>
        <label className='profile__label'>Имя</label>
        <input
          className='profile__input'
          placeholder='Введите имя'
          name='name'
          type='text'
          id='name'
          value={values.name || ''}
          onChange={handleChange}
          minLength='2'
          maxLength='30'
          required
          ref={inputElement}
          disabled={disabled}
        />
      </fieldset>

      <fieldset className='profile__fildset'>
        <label className='profile__label'>E-mail</label>
        <input
          className='profile__input'
          placeholder='Введите e-mail'
          name='email'
          type='email'
          id='email'
          value={values.email || ''}
          onChange={handleChange}
          required
          disabled={disabled}
        />
      </fieldset>

      {activeSaveButton && newData ? (
        <button className='profile__save-button' type='submit'>
          Сохранить
        </button>
      ) : (
        <>
          <button className='profile__edit-button' type='button' onClick={handleEdit}>
            Редактировать
          </button>
          <Link to='/' className='profile__logout-link' onClick={handleSignOut}>
            Выйти из аккаунта
          </Link>
        </>
      )}
    </form>
  );
}

export default Profile;
