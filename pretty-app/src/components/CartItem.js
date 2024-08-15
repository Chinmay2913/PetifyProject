// src/pages/CartPage.js
import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/address-details'); // Adjust the route as needed
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <Box>
          {cart.map((product, index) => (
            <Card key={index} sx={{ display: 'flex', marginBottom: 2 }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={product.image}
                alt={product.brandName}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Typography variant="h6">{product.brandName}</Typography>
                  <Typography variant="body1">Price: ${product.price}</Typography>
                  <Typography variant="body2">Discount: {product.discountPercentage}%</Typography>
                </CardContent>
              </Box>
            </Card>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
