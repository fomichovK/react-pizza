import './pizzaCard.scss';
import React, { useState } from 'react';

export default function PizzaCard({
  title = 'чисто тесто ))',
  price = '0',
  imageUrl,
  sizes,
  types,
}) {
  const [count, setCount] = useState(0);
  const [slectType, setSelectType] = useState(0);
  const [slectSize, setSelectSize] = useState(0);

  const typeList = ['тонкое', 'традиционное'];

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
                className={slectType === index ? 'select' : ''}>
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
                className={slectSize === index ? 'select' : ''}>
                {size} см
              </div>
            );
          })}
        </div>
      </div>
      <div className='cardFooter'>
        <div className='price'>от {price}₴</div>
        <button className='addInCart' onClick={() => setCount(count + 1)}>
          + Добавть <span>{count}</span>
        </button>
      </div>
    </div>
  );
}
