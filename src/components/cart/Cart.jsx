import './cart.css';
import CartItem from '../cartItem/CartItem';

const Cart = ({price, count, openCart, isDeleted, handleDelete}) => {

  return (
    <>
      <div className="overlayCart" onClick={openCart}></div>
      <div className='cart'>
        <h3 className="cart__header">Cart</h3>
        {(count === 0 || isDeleted) ?
          (<div className='cart__product-empty'>
            <span>Your cart is empty.</span>
          </div>) : 
          (<CartItem price={price} count={count} onDelete={handleDelete}/>)}
      </div>
    </>
  );
}


export default Cart;