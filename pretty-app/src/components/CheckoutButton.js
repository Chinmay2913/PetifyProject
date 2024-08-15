import React from 'react';

const CheckoutButton = ({ onCheckout }) => {
  return (
    <button className="checkout-button" onClick={onCheckout}>
      <span role="img" aria-label="money">💰</span> Checkout
    </button>
  );
};

export default CheckoutButton;