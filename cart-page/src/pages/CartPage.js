import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import PriceDetails from '../components/PriceDetails';
import CheckoutButton from '../components/CheckoutButton';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fluffy’s Pawsome Waterproof elevated Sides Camping Bed for Dogs (Black)",
      size: "S",
      stock: 1,
      quantity: 1,
      image: "path/to/image.png",
      originalPrice: 2499,
      discountedPrice: 1674,
      savings: 825,
    },
    // Add more items as needed
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Checkout functionality to be implemented');
  };

  const totalMRP = cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
  const discount = cartItems.reduce((total, item) => total + item.savings * item.quantity, 0);
  const deliveryFee = 0; // Assume free delivery for simplicity
  const totalAmount = totalMRP - discount;

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <div className="summary">
        <PriceDetails 
          totalMRP={totalMRP}
          discount={discount}
          deliveryFee={deliveryFee}
          totalAmount={totalAmount}
        />
        <CheckoutButton onCheckout={handleCheckout} />
      </div>
    </div>
  );
};

export default CartPage;
