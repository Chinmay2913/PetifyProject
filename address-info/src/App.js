import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [contactInfo, setContactInfo] = useState({ email: '', updates: false });
  const [shippingAddress, setShippingAddress] = useState({
    country: 'India',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    pincode: '',
    whatsapp: '',
    saveInfo: false,
  });

  const handleContactChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleShippingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Contact Information:', contactInfo);
    console.log('Shipping Address:', shippingAddress);
    alert('Form submitted successfully!');
  };

  return (
    <div className="app">
      <h2>Contact</h2>
      <input
        type="email"
        name="email"
        placeholder="Email (for Order Updates)"
        value={contactInfo.email}
        onChange={handleContactChange}
        className="input-field"
      />
      <div>
        <input
          type="checkbox"
          name="updates"
          checked={contactInfo.updates}
          onChange={handleContactChange}
        />
        <label>Send me order updates, news and offers on Email and WhatsApp</label>
      </div>

      <h2>Shipping address</h2>
      <select
        name="country"
        value={shippingAddress.country}
        onChange={handleShippingChange}
        className="input-field"
      >
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        {/* Add more countries as needed */}
      </select>
      <div className="input-group">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={shippingAddress.firstName}
          onChange={handleShippingChange}
          className="input-field"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={shippingAddress.lastName}
          onChange={handleShippingChange}
          className="input-field"
        />
      </div>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={shippingAddress.address}
        onChange={handleShippingChange}
        className="input-field"
      />
      <input
        type="text"
        name="apartment"
        placeholder="Apartment, suite, etc (optional)"
        value={shippingAddress.apartment}
        onChange={handleShippingChange}
        className="input-field"
      />
      <div className="input-group">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingAddress.city}
          onChange={handleShippingChange}
          className="input-field"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={shippingAddress.state}
          onChange={handleShippingChange}
          className="input-field"
        />
        <input
          type="text"
          name="pincode"
          placeholder="PIN code"
          value={shippingAddress.pincode}
          onChange={handleShippingChange}
          className="input-field"
        />
      </div>
      <input
        type="text"
        name="whatsapp"
        placeholder="Whatsapp Number"
        value={shippingAddress.whatsapp}
        onChange={handleShippingChange}
        className="input-field"
      />
      <div>
        <input
          type="checkbox"
          name="saveInfo"
          checked={shippingAddress.saveInfo}
          onChange={handleShippingChange}
        />
        <label>Save this information for next time</label>
      </div>

      <button onClick={handleSubmit} className="submit-btn">Continue to shipping</button>
    </div>
  );
};

export default App;
