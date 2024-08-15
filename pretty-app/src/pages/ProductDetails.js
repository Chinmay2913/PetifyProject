import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, Card, CardContent, CardMedia, Chip, Grid } from '@mui/material';
import axios from 'axios';
import '../cssFiles/ProductPage.css'; // Import the CSS file

// Replace with the URL of your backend API
const PRODUCT_API_URL = 'https://api.example.com/products';

const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${PRODUCT_API_URL}/${productId}`);
        setProduct(response.data);
        setSelectedSize(response.data.sizes[0]); // Set initial size
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    alert('Item added to cart!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: 'Check out this product!',
        url: window.location.href,
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container className="product-container">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} className="product-image">
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={product.image}
              alt={product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} className="product-details">
          <Box className="breadcrumb-container">
            <nav className="breadcrumb">
              <a href="#">Home</a> &gt;
              <a href="cat.html">Cat</a> &gt;
              <a href="food.html">Food</a> &gt;
              <a href="#">{product.name}</a>
            </nav>
            <Button className="share-button" onClick={handleShare}>Share</Button>
          </Box>
          <Typography variant="h1">{product.name}</Typography>
          <Box className="ratings">
            <Typography>{`⭐⭐⭐⭐☆ ${product.rating} (${product.reviews} reviews)`}</Typography>
          </Box>
          <Box className="tags">
            {product.tags.map((tag, index) => (
              <Chip key={index} label={`#${tag}`} className="tag" />
            ))}
          </Box>
          <Box className="price">
            <Typography className="current-price">{product.currentPrice}</Typography>
            <Typography className="original-price">{product.originalPrice}</Typography>
            <Typography className="discount">{product.discount}</Typography>
          </Box>
          <Box className="sizes">
            <Typography variant="subtitle1">Sizes:</Typography>
            <Box>
              {product.sizes.map(size => (
                <Button
                  key={size}
                  className={`size ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>
          <Button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
