import React from 'react';
import './cartItem.css';
import { IMAGES, rowGallery } from '../../images';

const CartItem = (props) => {
  return (
    <div className="cart__product">
      <div className="cart__info">
        <div className="img__wrapper">
          <img src={rowGallery[0].product} alt="product" />
        </div>
        
        <div className="cart__desc">
          <span>Fall Limited Edition Sneakers</span>
          <div className="cart__price">
            <span>
              {`$${props.price.toFixed(2)} x ${props.count}`} <b>{`$${(props.price * props.count).toFixed(2)}`}</b>
            </span>
          </div>
        </div>
        <button className='cart__deleteBtn'>
          <img src={IMAGES.iconDelete} alt="icon delete" onClick={props.onDelete}/>
        </button>
      </div>
      <button className='btn cart__btn'>Checkout</button>
    </div>
  );
};

export default CartItem;