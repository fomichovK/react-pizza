import React from 'react';
import style from './cartItem.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { addItem, minusItem, delItem } from '../../redux/Slices/cartSlice';

const CartItem = ({ id, title, type, price, sizes, imageUrl, count }) => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const addCartItem = (id) => {
    dispatch(addItem({ id }));
  };
  const minusCartItem = (id) => {
    dispatch(minusItem({ id }));
  };
  const deleteItem = (id) => {
    dispatch(delItem({ id }));
  };

  return (
    <div className={style.cartItem}>
      <img src={imageUrl} alt='pizzaImg' />
      <span className={style.itemDesc}>
        {title}{' '}
        <i>
          {type}, {sizes} см.
        </i>
      </span>

      <div className={style.amount}>
        <p onClick={() => minusCartItem(id)} className={style.button}>
          -
        </p>
        <span>{count}</span>
        <p onClick={() => addCartItem(id)} className={style.button}>
          +
        </p>
      </div>

      <span>{price * count} ₴</span>
      <p onClick={() => deleteItem(id)} className={style.button_del}>
        x
      </p>
    </div>
  );
};

export default CartItem;
