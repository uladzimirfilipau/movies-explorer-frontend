import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormAndValidation from '../../hooks/useFormAndValidation';

function Profile({ handleUpdateUser, handleSignOut }) {
  const { values, handleChange, isValid, resetForm } = useFormAndValidation();
  const currentUser = useContext(CurrentUserContext);
  let newData = currentUser.name !== values.name || currentUser.email !== values.email;
  const saveButtonClassName = `profile__save-button ${
    newData && isValid ? 'profile__save-button_enabled' : 'profile__save-button_disabled'
  }`;
  const editButtonClassName = `profile__edit-button ${
    (!newData || !isValid) && 'profile__edit-button_disabled'
  }`;
  const [isSaveButton, setIsSaveButton] = useState(false);

  useEffect(() => {
    resetForm(currentUser, {}, true);
  }, [resetForm, currentUser]);

  function handleEdit() {
    if (isValid && newData) {
      setIsSaveButton(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid && newData) {
      handleUpdateUser(values);
      setIsSaveButton(false);
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
        />
      </fieldset>

      {isSaveButton && newData ? (
        <button className={saveButtonClassName} type='submit'>
          Сохранить
        </button>
      ) : (
        <>
          <button className={editButtonClassName} type='button' onClick={handleEdit}>
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
