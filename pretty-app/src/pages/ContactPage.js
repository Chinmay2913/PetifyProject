// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import axios from 'axios';
import  { getData, postData, putData, deleteData, patchData } from '../services/apiservices';
const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.name) tempErrors.name = 'Name is required.';
    if (!form.email) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Email is not valid.';
    }
    if (!form.message) tempErrors.message = 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
        try {
          const response = await postData('/contact', form);  // Adjust the endpoint URL if needed
          console.log('Form submitted:', response);
          alert('Message sent successfully!');
          setForm({ name: '', email: '', message: '' });  // Clear form after successful submission
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Failed to send the message. Please try again later.');
        }
      }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4, backgroundColor:'#91A6FF', minHeight: '70vh' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 8, textAlign: 'center', color: '#173d96' }}>
        Contact Us
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                variant="outlined"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                variant="outlined"
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                variant="outlined"
                multiline
                rows={4}
                required
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactPage;
