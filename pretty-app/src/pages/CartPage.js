import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from '../components/CartItem';
import PriceDetails from '../components/PriceDetails';
import CheckoutButton from '../components/CheckoutButton';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch cart items from the backend
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/cart'); // Replace with your API endpoint
        setCartItems(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch cart items.');
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Handle checkout logic
  };

  const totalMRP = cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
  const discount = cartItems.reduce((total, item) => total + item.savings * item.quantity, 0);
  const deliveryFee = 0; 
  const totalAmount = totalMRP - discount;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
