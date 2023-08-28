import React from 'react';
import './LoadingModal.css';

function LoadingModal({ loading }) {
  if (!loading) {
    return null;
  }

  return (
    <section className={`info ${loading && 'info_opened'}`}>
      <div className='info__content'>
        <p className='info__text'>Идёт загрузка данных.</p>
        <p className='info__text'>Пожалуйста, ожидайте.</p>
      </div>
    </section>
  );
}

export default LoadingModal;
