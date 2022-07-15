import React, { useContext } from 'react';

import style from './search.module.scss';

import serchIcon from '../../assets/img/search_icon.svg';
import cancelIcon from '../../assets/img/close_icon.svg';
import { SerchContext } from '../../App';

const Serch = () => {
  const { searchValue, setSeachValue } = useContext(SerchContext);
  return (
    <div className={style.root}>
      <img className={style.serchIcon} src={serchIcon} alt='serchIcon' />

      <input
        onChange={(e) => setSeachValue(e.target.value)}
        className={style.input}
        type='text'
        placeholder='serch pizzas ...'
        value={searchValue}
      />
      {searchValue && (
        <img
          onClick={() => setSeachValue('')}
          className={style.cancelIcon}
          src={cancelIcon}
          alt='cancelIcon'
        />
      )}
    </div>
  );
};

export default Serch;
