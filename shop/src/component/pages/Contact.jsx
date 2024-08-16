import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, CircularProgress } from '@mui/material';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
      setLoading(true);
      try {
        // Simulate sending data to an API
        const response = await fetch('/api/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setSuccessMessage('Message sent successfully!');
          setForm({ name: '', email: '', message: '' }); // Reset form
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        setErrors({ submit: error.message });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      {successMessage && (
        <Typography variant="h6" color="success.main" sx={{ mb: 2 }}>
          {successMessage}
        </Typography>
      )}
      <Paper sx={{ p: 3 }}>
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
              />
            </Grid>
            {errors.submit && (
              <Grid item xs={12}>
                <Typography variant="body2" color="error">
                  {errors.submit}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={loading}
                sx={{ mt: 2 }}
              >
                {loading ? <CircularProgress size={24} /> : 'Send Message'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactPage;

























// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';

// const ContactPage = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const validate = () => {
//     let tempErrors = {};
//     if (!form.name) tempErrors.name = 'Name is required.';
//     if (!form.email) {
//       tempErrors.email = 'Email is required.';
//     } else if (!/\S+@\S+\.\S+/.test(form.email)) {
//       tempErrors.email = 'Email is not valid.';
//     }
//     if (!form.message) tempErrors.message = 'Message is required.';
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log('Form submitted:', form);
//       alert('Message sent successfully!');
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Contact Us
//       </Typography>
//       <Paper sx={{ p: 3 }}>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 error={!!errors.name}
//                 helperText={errors.name}
//                 variant="outlined"
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 error={!!errors.email}
//                 helperText={errors.email}
//                 variant="outlined"
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Message"
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 error={!!errors.message}
//                 helperText={errors.message}
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ mt: 2 }}
//               >
//                 Send Message
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default ContactPage;
