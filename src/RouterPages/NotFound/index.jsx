import React from 'react';

import style from './notFount.module.scss';

const NotFound = () => {
  return (
    <div className={style.massage}>
      404
      <p>упс, что то пошло не так</p>
    </div>
  );
};

export default NotFound;
