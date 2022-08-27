import React from 'react';
import style from './cartItem.module.scss';

import { useDispatch } from 'react-redux';
import { addItem, minusItem, delItem, CartItemType } from '../../redux/Slices/cartSlice';

const CartItem: React.FC<CartItemType> = ({ id, title, price, imageUrl, sizes, types, count }) => {
  const dispatch = useDispatch();

  const addCartItem = (id: number) => {
    dispatch(
      addItem({
        id,
        title: '',
        price: 0,
        imageUrl: '',
        sizes: 0,
        types: 0,
        count: 0,
      }),
    );
  };
  const minusCartItem = (id: number) => {
    dispatch(minusItem({ id }));
  };
  const deleteItem = (id: number) => {
    dispatch(delItem({ id }));
  };

  return (
    <div className={style.cartItem}>
      <img src={imageUrl} alt='pizzaImg' />
      <span className={style.itemDesc}>
        {title}{' '}
        <i>
          {types}, {sizes} см.
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

      <span className={style.price}>{price * count} ₴</span>
      <p className={style.button_del} onClick={() => deleteItem(id)}>
        x
      </p>
    </div>
  );
};

export default CartItem;
