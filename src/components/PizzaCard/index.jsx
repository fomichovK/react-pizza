import './pizzaCard.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/Slices/cartSlice';

export default function PizzaCard({ id, title, price, imageUrl, sizes, types }) {
  const dispatch = useDispatch();
  const findItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const countItem = findItem ? findItem.count : 0;

  const { items, totalPrice } = useSelector((state) => state.cart);

  const [selectType, setSelectType] = useState(0);
  const [selectSize, setSelectSize] = useState(0);

  const typeList = ['Tонкое', 'Tрадиционное'];

  const addCartItem = (id) => {
    const pizza = {
      id,
      title,
      price,
      imageUrl,
      sizes: sizes[selectSize],
      type: typeList[selectType],
    };
    dispatch(addItem(pizza));
  };

  return (
    <div className='card'>
      <img src={imageUrl} alt='' />
      <div className='cardTitle'>{title}</div>
      <div className='pizzaCardType'>
        <div className='pizzaType'>
          {types.map((type, index) => {
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
          + Добавть
          {countItem > 0 && <span>{countItem}</span>}
        </button>
      </div>
    </div>
  );
}
