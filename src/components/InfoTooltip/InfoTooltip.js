import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({ message, isOpen, onClose }) {
  return (
    <section className={`info ${isOpen && 'info_opened'}`}>
      <div className='info__content'>
        <button
          type='button'
          aria-label='Закрыть всплывающее окно'
          className='info__button-close'
          onClick={onClose}
        />

        <p className='info__text'>{message}</p>
      </div>
    </section>
  );
}

export default InfoTooltip;
