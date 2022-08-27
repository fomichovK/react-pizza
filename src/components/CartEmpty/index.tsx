import React from 'react';

import style from './cart.module.scss';
import emptyCart from '../../assets/img/emptyCart.png';

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
      <button className={style.button}>Вернуться назад</button>
    </div>
  );
};

export default Card;
