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
