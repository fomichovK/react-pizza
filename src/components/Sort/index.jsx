import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSort } from '../../redux/Slices/filterSlice';

import style from './sort.module.scss';
import arrow from '../../assets/img/Vector.svg';

const sortList = [
  { name: 'популярности', sort: 'rating' },
  { name: 'по цене', sort: 'price' },
  { name: 'по алфавиту', sort: 'title' },
];

export default function Sort() {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filter.sortby);

  const [openPopUp, setOpenPopUp] = useState(false);

  const selectedItem = (obj) => {
    dispatch(setSort(obj));
    setOpenPopUp(false);
  };

  const sortRef = useRef();

  useEffect(() => {
    const getToggleSort = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setOpenPopUp(false);
        console.log('event');
      }
    };

    document.body.addEventListener('click', getToggleSort);

    return () => {
      document.body.removeEventListener('click', getToggleSort);
    };
  }, []);

  return (
    <div ref={sortRef} className={style.filterList}>
      <img src={arrow} alt='arrow' /> sort by:{' '}
      <span onClick={() => setOpenPopUp(!openPopUp)} className={style.sortBy}>
        {sortType.name}
      </span>
      {openPopUp && (
        <div className={style.sort_popUp}>
          {sortList.map((obj, index) => {
            return (
              <p
                key={index}
                onClick={() => selectedItem(obj)}
                className={sortType.sort === obj.sort ? style.activF : ''}>
                {obj.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
