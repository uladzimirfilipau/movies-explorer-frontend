import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const [username, setUsername] = useState('Владимир');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [isEdit, setIsEdit] = useState(false);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleEditClick() {
    setIsEdit(true);
  }

  function handleSaveClick() {
    setIsEdit(false);
  }

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, Владимир!</h2>

      <form className='profile__form'>
        <fieldset className='profile__fildset'>
          <label className='profile__label'>Имя</label>
          <input
            className='profile__input'
            placeholder='Введите имя'
            name='username'
            type='text'
            id='username'
            value={username}
            onChange={handleUsernameChange}
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
            value={email}
            onChange={handleEmailChange}
            required
          ></input>
        </fieldset>
      </form>

      {isEdit ? (
        <button className='profile__save-button' onClick={handleSaveClick}>
          Сохранить
        </button>
      ) : (
        <>
          <button className='profile__edit-button' onClick={handleEditClick}>
            Редактировать
          </button>
          <Link to='/' className='profile__logout-link'>
            Выйти из аккаунта
          </Link>
        </>
      )}
    </section>
  );
}

export default Profile;
