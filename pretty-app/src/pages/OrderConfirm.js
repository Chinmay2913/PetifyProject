import React from 'react';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ConfirmOrderPage = ({ cartItems=[], onDelete }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const navigate = useNavigate(); // For navigation

  // Handle order confirmation
  const handleConfirmOrder = () => {
    setOpenDialog(true);
  };

  // Handle dialog close and navigation
  const handleCloseDialog = (redirect) => {
    setOpenDialog(false);
    if (redirect === 'home') {
      navigate('/'); // Navigate to homepage
    } else if (redirect === 'cart') {
      navigate('/cart'); // Navigate back to cart page
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>Confirm Your Order</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" color="primary" onClick={handleConfirmOrder} style={{ marginTop: '20px' }}>Confirm Order</Button>
      <Button variant="outlined" color="secondary" onClick={() => navigate('/cart')} style={{ marginTop: '20px', marginLeft: '10px' }}>Back to Cart</Button>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Order Placed</DialogTitle>
        <DialogContent>
          <Typography>Your order has been placed successfully.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseDialog('home')} color="primary">Go to Homepage</Button>
          <Button onClick={() => handleCloseDialog('cart')} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ConfirmOrderPage;
