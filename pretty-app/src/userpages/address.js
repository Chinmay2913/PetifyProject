import React, { useState } from 'react';
import { Container, TextField, Button, Checkbox, FormControlLabel, MenuItem, Select, Typography, Box } from '@mui/material';
import './App.css'; // Import the CSS file

const Address = () => {
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
    <Container className="app">
      <Typography variant="h5" component="h2">Contact</Typography>
      <TextField
        name="email"
        label="Email (for Order Updates)"
        variant="outlined"
        value={contactInfo.email}
        onChange={handleContactChange}
        className="input-field"
        fullWidth
      />
      <Box className="checkbox-group">
        <Checkbox
          name="updates"
          checked={contactInfo.updates}
          onChange={handleContactChange}
        />
        <Typography>Send me order updates, news and offers on Email and WhatsApp</Typography>
      </Box>

      <Typography variant="h5" component="h2">Shipping Address</Typography>
      <Select
        name="country"
        value={shippingAddress.country}
        onChange={handleShippingChange}
        variant="outlined"
        className="input-field"
        fullWidth
      >
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
        {/* Add more countries as needed */}
      </Select>
      <Box className="input-group">
        <TextField
          name="firstName"
          label="First Name"
          variant="outlined"
          value={shippingAddress.firstName}
          onChange={handleShippingChange}
          className="input-field"
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={shippingAddress.lastName}
          onChange={handleShippingChange}
          className="input-field"
        />
      </Box>
      <TextField
        name="address"
        label="Address"
        variant="outlined"
        value={shippingAddress.address}
        onChange={handleShippingChange}
        className="input-field"
        fullWidth
      />
      <TextField
        name="apartment"
        label="Apartment, Suite, etc (optional)"
        variant="outlined"
        value={shippingAddress.apartment}
        onChange={handleShippingChange}
        className="input-field"
        fullWidth
      />
      <Box className="input-group">
        <TextField
          name="city"
          label="City"
          variant="outlined"
          value={shippingAddress.city}
          onChange={handleShippingChange}
          className="input-field"
        />
        <TextField
          name="state"
          label="State"
          variant="outlined"
          value={shippingAddress.state}
          onChange={handleShippingChange}
          className="input-field"
        />
        <TextField
          name="pincode"
          label="PIN Code"
          variant="outlined"
          value={shippingAddress.pincode}
          onChange={handleShippingChange}
          className="input-field"
        />
      </Box>
      <TextField
        name="whatsapp"
        label="WhatsApp Number"
        variant="outlined"
        value={shippingAddress.whatsapp}
        onChange={handleShippingChange}
        className="input-field"
        fullWidth
      />
      <Box className="checkbox-group">
        <Checkbox
          name="saveInfo"
          checked={shippingAddress.saveInfo}
          onChange={handleShippingChange}
        />
        <Typography>Save this information for next time</Typography>
      </Box>

      <Button onClick={handleSubmit} className="submit-btn" variant="contained">Continue to Shipping</Button>
    </Container>
  );
};

export default Address;
