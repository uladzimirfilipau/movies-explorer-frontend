import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <form className='checkbox'>
      <input className='checkbox__input' type='checkbox' id='checkbox' name='checkbox' />
      <label className='checkbox__label'>Короткометражки</label>
    </form>
  );
}

export default FilterCheckbox;
