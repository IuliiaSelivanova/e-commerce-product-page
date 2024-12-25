import React, { useState } from 'react';
import { IMAGES } from '../../images.js';
import './header.css';
import Cart from '../cart/Cart.jsx';
// import Cart from '../../functional/Cart';

const Header = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container">
      <div className='header'>
        <div className="header__wrapper">
          <img className="header__logo" src={IMAGES.logo} alt="logo" />
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
          <div className="header__cart" onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            <img src={IMAGES.iconCart} alt="icon cart" />
            {(props.isAddedToCart && props.count > 0) && 
              (<span className='count-badge'>{props.isAddedToCart && props.count}</span>)}
          </div>
          {isHovered &&
            (<Cart price={props.price} count={props.count} />)
          }
      
      
          <div className="profile">
            <img src={IMAGES.avatar} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;