import React from 'react';

function CartItem() {
  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-item">
        <p>Aloe Vera - Quantity: 1</p>
        <button>Increase (+)</button>
        <button>Decrease (-)</button>
        <button>Remove Item</button>
      </div>
      <div className="checkout">
        <h3>Total: $15</h3>
        <button>Checkout</button>
        <button>Continue Shopping</button>
      </div>
    </div>
  );
}

export default CartItem;
