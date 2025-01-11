import React, { useState } from 'react';
import { IMAGES } from '../../images.js';
import './header.css';
import Cart from '../cart/Cart.jsx';
import Menu from '../menu/Menu.jsx';

const Header = (props) => {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const openCart = () => {
    setIsOpenCart(!isOpenCart);
  }

  return (
    <div className="container">
      <div className='header'>
        <div className="header__wrapper header__wrapper-reverse">
          <img className="header__logo" src={IMAGES.logo} alt="logo" />
          <Menu/>
        </div>
        <div className="header__wrapper">
          <div className="header__cart" onClick={() => {setIsOpenCart(!isOpenCart)}}>
            <img src={IMAGES.iconCart} alt="icon cart" />
            {(props.isAddedToCart && props.value > 0 && !props.isDeleted) && 
              (<span className='count-badge'>{props.isAddedToCart && props.value}</span>)}
          </div>
          {isOpenCart &&
            (<Cart 
              price={props.price} 
              count={props.value} 
              openCart={openCart}
              handleDelete={props.handleDelete}
              isDeleted={props.isDeleted}
            />)
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