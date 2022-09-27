import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ checked, handleToogleCheck }) {
  return (
    <form className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        id='checkbox'
        name='checkbox'
        checked={checked}
        onChange={handleToogleCheck}
        aria-label='Найти короткометражки'
      />
      <label className='checkbox__label' htmlFor='checkbox'>
        Короткометражки
      </label>
    </form>
  );
}

export default FilterCheckbox;
