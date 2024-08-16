import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grow, Fade } from '@mui/material';

const ProductCard = ({ image, brandName, price, discountPercentage, onClick }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Grow in={checked} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
      <Card
      onClick={onClick}
        sx={{
          margin: '1%',
          maxWidth: 345,
          transition: 'transform 0.5s, box-shadow 0.5s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
          },
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          height: '100%',
          width: 270,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Fade in={checked} timeout={2000}>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt={brandName}
            sx={{ objectFit: 'cover' }}
          />
        </Fade>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            padding: 2
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {brandName}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              mt: 1
            }}
          >
<Typography 
  variant="body5" 
  component="div" 
  color="text.primary"  
  sx={{ 
    fontWeight: 'bold',
    textAlign: 'center',  // Center the text horizontally // Ensure the text is centered vertically if there's more content above or below
    display: 'flex',
    justifyContent: 'center',  // Aligns text in the center horizontally within the flex container
    alignItems: 'center',      // Aligns text in the center vertically within the flex container
  }}
>             Starting From Rs. {price} only
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default ProductCard;

/*
Description
The ProductCard component displays a product card with an image, brand name, price, and discount percentage. It includes animations for entering the view and hover effects.

Props:
    image (string): URL of the product image.
    brandName (string): Name of the brand.
    price (number): Price of the product.
    discountPercentage (number): Discount percentage on the product.
    onClick (function): Callback function to handle click events on the card.

State:
    checked (boolean): Indicates whether the card has been animated into view. 
    Initialized to false, and set to true once the component mounts.

Use of MUI Components:
    Grow: Wraps the entire card to animate its appearance.
    Fade: Wraps the CardMedia to animate the image's appearance.
    Card: The main card component, including hover effects and styling.
    CardMedia: Displays the product image.
    CardContent: Contains the product details like brand name, price, and discount.
    Typography: Used for text elements within the card.
    Box: Used for layout and spacing within the CardContent.

Styling:
    The Card component has hover effects that scale the card and add a shadow.
    The CardMedia is styled to cover the image area without distortion.
    The CardContent has a background color and padding for better visual appeal.


*/