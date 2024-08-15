import React from 'react';

const PriceDetails = ({ totalMRP, discount, deliveryFee, totalAmount }) => {
  return (
    <div className="price-details">
      <h3>Price Details</h3>
      <div className="price-detail">
        <span>Total MRP</span>
        <span>₹{totalMRP}</span>
      </div>
      <div className="price-detail">
        <span>Discount On MRP</span>
        <span>- ₹{discount}</span>
      </div>
      <div className="price-detail">
        <span>Delivery Fee</span>
        <span>{deliveryFee > 0 ? `₹${deliveryFee}` : 'Free'}</span>
      </div>
      <div className="price-detail total-amount">
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>
    </div>
  );
};

export default PriceDetails;