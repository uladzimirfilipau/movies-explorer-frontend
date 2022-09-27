import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound() {
  let history = useHistory();

  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <section className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__subtitle'>Страница не найдена</p>

      <Link className='not-found__link' onClick={goToPreviousPath}>
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
