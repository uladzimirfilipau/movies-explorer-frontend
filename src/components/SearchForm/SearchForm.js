import React from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleChange, handleSubmit, searchTerm, checked, error, handleToogleCheck }) {
  return (
    <section className='search' aria-label='Форма поиска'>
      <form className='search-form' onSubmit={handleSubmit}>
        <label className='search-form__label'></label>
        <input
          className='search-form__input'
          type='text'
          name='search'
          id='search'
          placeholder='Фильм'
          value={searchTerm}
          onChange={handleChange}
          aria-label='Введите ключевое слово для поиска фильма'
        />
        <span className='search-form__error'>{error}</span>

        <button className='search-form__button' type='submit' aria-label='Найти фильм' />
      </form>

      <FilterCheckbox handleToogleCheck={handleToogleCheck} checked={checked} />
    </section>
  );
}

export default SearchForm;
