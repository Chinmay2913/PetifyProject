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
          margin: 1,
          maxWidth: 345,
          transition: 'transform 0.5s, box-shadow 0.5s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
          },
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          height: '100%',
          width: 200,
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
            <Typography variant="body2" color="text.primary" >
              Price: ${price}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {discountPercentage}% off
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
The ProductCard component displays a card for a product with an image, brand name, price, and discount percentage. 
It includes animations for entering the view and hover effects to enhance interactivity.

Props:
  image (string): URL of the product image.
  brandName (string): Brand name of the product.
  price (number): Price of the product.
  discountPercentage (number): Discount percentage applied to the product.
  onClick (function): Callback function to handle click events on the card.

State:
  checked (boolean): Tracks whether the card has been animated into view. 
  Initially set to false and updated to true once the component mounts using useEffect.

Use of MUI Components:
  Grow: Animates the card's entrance into view.
  Fade: Animates the image's entrance into view.
  Card: The main container for the card content with hover effects and styling.
  CardMedia: Displays the product image.
  CardContent: Contains the text content, including brand name, price, and discount.
  Typography: Used for rendering text with specific styles.
  Box: Used for layout and spacing.

Styling:
  Card:
    margin: Sets margin around the card.
    maxWidth: Limits the maximum width of the card.
    transition: Adds smooth transition effects for transform and box-shadow.
    &:hover: Scales the card and adds a shadow on hover.
    boxShadow: Provides an initial shadow effect.
    height and width: Sets the dimensions of the card.
    display: Flexbox layout for card content.
  CardMedia:
    height: Sets the height of the image.
    sx: Styles the image with objectFit to cover the card area.
  CardContent:
    display: Flexbox layout for vertical alignment.
    backgroundColor: Sets the background color.
    padding: Adds padding inside the content area.
  Typography:
    variant: Defines the text style (e.g., h6 for title).
    color: Sets text color.


*/