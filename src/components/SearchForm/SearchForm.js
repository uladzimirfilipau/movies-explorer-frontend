import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleChange, handleSubmit }) {
  return (
    <section className='search'>
      <form className='search-form'>
        <label className='search-form__label'></label>
        <input
          className='search-form__input'
          type='text'
          name='search'
          id='search'
          placeholder='Фильм'
          onChange={handleChange}
          required
        />
        <button className='search-form__button' type='submit' onSubmit={handleSubmit} />
      </form>

      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
