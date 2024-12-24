import React from 'react';
import logo from '../../../assets/icons/logo.svg';
import CartIcon from '../../../assets/icons/icon-cart.svg';
import ProfileImg from '../../../assets/images/image-avatar.png';
import './header.css';
// import Cart from '../../functional/Cart';

const Header = () => {
  return (
    <div className='header'>
      <div className="header__wrapper">
        <img className="header__logo" src={logo} alt="logo" />
        <nav className='nav'>
          <ul className='navList'>
            <li className='navList__item'>Collections</li>
            <li className='navList__item'>Men</li>
            <li className='navList__item'>Women</li>
            <li className='navList__item'>About</li>
            <li className='navList__item'>Contact</li>
          </ul>
        </nav>
      </div>

      <div className="header__wrapper">
        <div className="cart">
          <img src={CartIcon} alt="icon cart" />
        </div>
        {/* <Cart/> */}
        
        <div className="profile">
          <img src={ProfileImg} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;