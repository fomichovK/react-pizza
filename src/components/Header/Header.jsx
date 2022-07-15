import Serch from '../Saerch';

import './header.scss';

import logo from '../../assets/img/logo.svg';
import cart from '../../assets/img/shopp_cart.png';

import { Link } from 'react-router-dom';

export default function Header() {
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
            520₴ | <img src={cart} alt='Корзина' /> {3}
          </button>
        </div>
      </Link>
    </div>
  );
}
