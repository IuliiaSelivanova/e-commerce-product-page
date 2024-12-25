import React, { useEffect, useState } from 'react';
import IMAGES from '../../images.js';
import './Card.css';
import Gallery from '../gallery/Gallery.jsx';

const Card = (props) => {
  const oldprice = 250.00;
  const discount = 50;
  
  const handleIncrement = () => {
    props.onIncrement();
  }
  const handleDecrement = () => {
    props.onDecrement();
  }

  const handleAddToCart = () => {
    props.addToCart();
  }
  return (
    <div className='card'>
      <Gallery/>

      <div className="info">
        <span className="info__subtitle">Sneaker company</span>
        <h1 className="info__title">Fall Limited Edition Sneakers</h1>
        <p className="info__desc">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>

        <div className="newprice__wrapper">
          <span className="newprice">{`$${props.newprice.toFixed(2)}`}</span>
          <div className="discount">{`${discount}%`}</div>
        </div>
        <div className="oldprice">{`$${oldprice.toFixed(2)}`}</div>

        <div className="card__wrapper">
          <div className="card__counter">
            <div className="icon__wrapper" onClick={handleDecrement}>
              <img src={IMAGES.iconMinus} alt="minus" />
            </div>
            <div className='card__counter-input'>{props.value()}</div>
            <div className="icon__wrapper" onClick={handleIncrement}>
              <img src={IMAGES.iconPlus} alt="plus" />
            </div>
          </div>

          <button className="btn card__btn" onClick={handleAddToCart}>
            <svg viewBox="0 0 22 20" width="18" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D"/></svg>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;