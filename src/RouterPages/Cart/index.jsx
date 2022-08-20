import React from 'react';
import style from './cart.module.scss';

import CartEmpty from '../../components/CartEmpty';

import cartIcon from '../../assets/img/cart_icon.svg';
import trashIcon from '../../assets/img/trash_icon.svg';

import CartItem from '../../components/CartItem';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/Slices/cartSlice';

const Card = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, el) => sum + el.count, 0);

  if (totalPrice === 0) {
    return <CartEmpty />;
  }

  return (
    <div className={style.root}>
      <div className={style.cartHeader}>
        <span className={style.cart}>
          <img src={cartIcon} alt='cartIcon' />
          Корзина
        </span>
        <span onClick={() => dispatch(clearCart())} className={style.trash}>
          <img src={trashIcon} alt='trashIcon' />
          Очистить корзину
        </span>
      </div>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <div className={style.count}>
        <div>
          Всего пицц: <i>{totalCount} шт.</i>
        </div>
        <div>
          Сумма заказа: <i className={style.sum}>{totalPrice} ₴</i>
        </div>
      </div>
      <div className={style.footerButton}>
        <Link to='/'>
          <button className={style.backButton}>
            <i>&lt;</i> Веруться назад{' '}
          </button>
        </Link>
        <Link to='#'>
          <button className={style.payButton}>Оплатить сейчас</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
