import React, { useState } from 'react';
import { Container, TextField, Button, Checkbox, MenuItem, Select, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { postData } from '../services/apiservices'; // Import the postData function from the API file
import '../cssFiles/Address.css'; // Import the CSS file

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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // For navigation

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!contactInfo.email) errors.email = 'Email is required';
    if (!shippingAddress.firstName) errors.firstName = 'First Name is required';
    if (!shippingAddress.lastName) errors.lastName = 'Last Name is required';
    if (!shippingAddress.address) errors.address = 'Address is required';
    if (!shippingAddress.city) errors.city = 'City is required';
    if (!shippingAddress.state) errors.state = 'State is required';
    if (!shippingAddress.pincode) errors.pincode = 'PIN Code is required';
    if (!/^\d{6}$/.test(shippingAddress.pincode)) errors.pincode = 'PIN Code must be 6 digits';
    return errors;
  };

  // Handle contact info changes
  const handleContactChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle shipping address changes
  const handleShippingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await postData('/api/submitAddress', { contactInfo, shippingAddress });
      navigate('/order-confirmation'); // Navigate to the confirmation page
    } catch (error) {
      console.error('Error submitting address:', error);
      alert('There was an error submitting your address.');
    }
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
        error={!!errors.email}
        helperText={errors.email}
      />
      <Box className="checkbox-group">
        <Checkbox
          name="updates"
          checked={contactInfo.updates}
          onChange={handleContactChange}
        />
        <Typography>Send me order updates, news, and offers on Email and WhatsApp</Typography>
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
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={shippingAddress.lastName}
          onChange={handleShippingChange}
          className="input-field"
          error={!!errors.lastName}
          helperText={errors.lastName}
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
        error={!!errors.address}
        helperText={errors.address}
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
          error={!!errors.city}
          helperText={errors.city}
        />
        <TextField
          name="state"
          label="State"
          variant="outlined"
          value={shippingAddress.state}
          onChange={handleShippingChange}
          className="input-field"
          error={!!errors.state}
          helperText={errors.state}
        />
        <TextField
          name="pincode"
          label="PIN Code"
          variant="outlined"
          value={shippingAddress.pincode}
          onChange={handleShippingChange}
          className="input-field"
          error={!!errors.pincode}
          helperText={errors.pincode}
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

      <Button onClick={handleSubmit} className="submit-btn" variant="contained">Next</Button>
    </Container>
  );
};

export default Address;
