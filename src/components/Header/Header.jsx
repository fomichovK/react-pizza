import Serch from '../Saerch';

import './header.scss';

import logo from '../../assets/img/logo.svg';
import cart from '../../assets/img/shopp_cart.png';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, el) => {
    return sum + el.count;
  }, 0);

  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          <div className='logoImg'>
            <img src={logo} alt='logo' />
          </div>
          <div className='slogan'>
            <p>REACT PIZZA</p>
            <span>самая вкусная пицца во вселенной</span>
          </div>
        </div>
      </Link>

      <Serch />

      <Link to='Cart'>
        <div className='../../RouterPages/Cart'>
          <button>
            {totalPrice}₴ | <img src={cart} alt='Корзина' /> {totalCount}
          </button>
        </div>
      </Link>
    </div>
  );
}
