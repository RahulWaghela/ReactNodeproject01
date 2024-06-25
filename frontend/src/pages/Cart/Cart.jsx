import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount ,url } = useContext(StoreContext)
  const navigate = useNavigate(); 
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={url+"/uploads/"+item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                    <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                  </div>
                  <hr />
                </div>
              )
            }
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
               <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>

          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />

          <div className="cart-total-details">
            <p>Total</p>
            <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
          </div>
          <hr />

      <button onClick={()=>navigate('/order')} className='cartBtn'>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart