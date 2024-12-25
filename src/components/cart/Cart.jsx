import React from 'react';
import {IMAGES} from '../../images';
import './cart.css';

const Cart = (props) => {
  // console.log(props)

  return (
    (<div className='cart'>
      <h3 className="cart__header">Cart</h3>
      {props.count === 0 ? 
        (<div className='cart__product-empty'>
          <span>Your cart is empty.</span>
        </div>) : 
        (<div className="cart__product">
          <div className="cart__info">
            <div className="img__wrapper">
              <img src={IMAGES.productThumbnail1} alt="product" />
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
              <img src={IMAGES.iconDelete} alt="icon delete" />
            </button>
          </div>
          <button className='btn cart__btn'>Checkout</button>
        </div>)}
    </div>)
  );
}


export default Cart;