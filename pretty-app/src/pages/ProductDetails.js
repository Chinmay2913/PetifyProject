import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../services/apiservices'; // Import your API function
import { Container, Typography, Button, Box, Card, CardMedia, Chip, Grid,  CircularProgress, Alert  } from '@mui/material';
import '../cssFiles/ProductPage.css'; // Import the CSS file

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const data = await getData(`/products/${id}`); // Fetch product data using global API
        setProduct(data);
        setSelectedSize(data.sizes ? data.sizes[0] : ''); // Set initial size if sizes are available
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Failed to fetch product details.');
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

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

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

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
            <Typography className="current-price">${product.currentPrice}</Typography>
            <Typography className="original-price">${product.originalPrice}</Typography>
            <Typography className="discount">{product.discount}</Typography>
          </Box>
          <Button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
