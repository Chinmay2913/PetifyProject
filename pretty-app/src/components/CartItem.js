import React from 'react';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const handleQuantityChange = (delta) => {
    onQuantityChange(item.id, item.quantity + delta);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>Size - {item.size}</p>
        <div className="cart-item-quantity">
          <button onClick={() => handleQuantityChange(-1)} disabled={item.quantity <= 1}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <p className="cart-item-price">₹{item.originalPrice}</p>
        <p className="cart-item-discounted-price">₹{item.discountedPrice}</p>
      </div>
      <button onClick={() => onRemove(item.id)} className="cart-item-remove">
        🗑️
      </button>
    </div>
  );
};

export default CartItem;