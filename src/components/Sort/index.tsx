import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSort } from '../../redux/Slices/filterSlice';

import style from './sort.module.scss';
import arrow from '../../assets/img/Vector.svg';
import { RootState } from '../../redux/store';

type SortListType = {
  name: string;
  sort: string;
};

const sortList: SortListType[] = [
  { name: 'популярности', sort: 'rating' },
  { name: 'по цене', sort: 'price' },
  { name: 'по алфавиту', sort: 'title' },
];

const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const sortType = useSelector((state: RootState) => state.filter.sortBy);
  const sortRef = useRef(null);

  const [openPopUp, setOpenPopUp] = useState(false);

  const selectedItem = (obj: SortListType) => {
    dispatch(setSort(obj));
    setOpenPopUp(false);
  };

  useEffect(() => {
    const getToggleSort = (event: MouseEvent) => {
      const _event = event as MouseEvent & { path: Node[] };
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpenPopUp(false);
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
};
export default Sort;
