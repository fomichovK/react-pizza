import React, { useState } from 'react';

import './pizzaCard.scss';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, CartItemType } from '../../redux/Slices/cartSlice';
import { RootState } from '../../redux/store';

type IPizzaCardType = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: string[];
};

const PizzaCard: React.FC<CartItemType> = ({ id, title, price, imageUrl, sizes, types }) => {
  const dispatch = useDispatch();
  const findItem = useSelector(
    (state: RootState) => state.cart.items.find((obj: any) => obj.id === id), //?????????????
  );

  const countItem = findItem ? findItem.count : 0;

  const [selectType, setSelectType] = useState(0);
  const [selectSize, setSelectSize] = useState(0);

  const typeList = ['Tонкое', 'Tрадиционное'];

  const addCartItem = (id: number) => {
    const pizza = {
      id,
      title,
      price,
      imageUrl,
      sizes: sizes[selectSize],
      types: typeList[selectType],
    };
    dispatch(addItem(pizza));
  };

  return (
    <div className='card'>
      <img src={imageUrl} alt='' />
      <div className='cardTitle'>{title}</div>
      <div className='pizzaCardType'>
        <div className='pizzaType'>
          {types.map((type: any, index: number) => {
            return (
              <div
                key={index}
                onClick={() => setSelectType(index)}
                className={selectType === index ? 'select' : ''}>
                {typeList[type]}
              </div>
            );
          })}
        </div>
        <div className='pizzaSize'>
          {sizes.map((size, index) => {
            return (
              <div
                key={index}
                onClick={() => setSelectSize(index)}
                className={selectSize === index ? 'select' : ''}>
                {size} см
              </div>
            );
          })}
        </div>
      </div>
      <div className='cardFooter'>
        <div className='price'>от {price}₴</div>
        <button className='addInCart' onClick={() => addCartItem(id)}>
          + Добавить
          {countItem > 0 && <span>{countItem}</span>}
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
