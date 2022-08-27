import React from 'react';

import style from './cart.module.scss';
import emptyCart from '../../assets/img/emptyCart.png';
import { Link } from 'react-router-dom';

const Card: React.FC = () => {
  return (
    <div className={style.content}>
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
        главную страницу.
      </p>
      <div>
        <img className={style.emptyImg} src={emptyCart} alt='empty' />
      </div>
      <Link to='/'>
        <button className={style.button}>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default Card;
