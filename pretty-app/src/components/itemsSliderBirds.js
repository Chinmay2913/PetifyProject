// src/components/CategoryCarousel.js
import React, { useState, useEffect } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios'; // Import Axios
import ProductCard from '../components/itemSliderCard'; // Import the ProductCard component
import Lottie from 'lottie-react';
import animationData from '../assets/bird.json';

import accesssories from '../assets/Bird/accessories.jpg'; 
import foods from '../assets/Bird/food.jpg'; 
import toys from '../assets/Bird/toys.webp'; 
import clothings from '../assets/Bird/clothings.jpg'; 
import gromming from '../assets/Bird/gromming.webp';

const CarouselContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  overflow: 'hidden',
  position: 'relative',
  width: '100%', // Full width
  marginBottom: 10,
  padding: theme.spacing(1),
}));

const items = [
  {
    id: "Food",
    image: foods,
    brandName: "Foods",
    price: 299,
  },
  {
    id: "Clothing",
    image: clothings,
    brandName: "Clothings",
    price: 200,
  },
  {
    id: "Grooming",
    image: gromming,
    brandName: "Gromming",
    price: 150,
  },
  {
    id: "Accessories",
    image: accesssories,
    brandName: "Accessories",
    price: 120,

  },
  {
    id: "Toys",
    image: toys,
    brandName: "Toys",
    price: 120,
  },
  // Additional items...
];

export default function CategoryCarousel() {
 // const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 6;
  const navigate = useNavigate();

  // Fetch data from the backend
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await axios.get('/api/fishes'); // Adjust URL as needed
  //       setItems(response.data); // Set the fetched data
  //     } catch (error) {
  //       console.error('Error fetching items:', error);
  //     }
  //   };

  //   fetchItems();
  // }, []); // Empty dependency array means this effect runs once on component mount


  const handleCardClick = (id) => {
    navigate(`/birds/${id}`);
  };

  return (
    <Box sx={{ width: '100%', mb: 5 }}>
      {/* Header section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '8px',
          borderRadius: '4px',
          marginBottom: '16px', // Space between header and carousel
        }}
      >
        <Lottie animationData={animationData} style={{ height: 55, width: 55 }} />
        <Typography variant="h6"   sx={{ 
    fontSize: '1.5rem', // Adjust size as needed
    fontWeight: 'bold' 
  }} >
          BIRDS
        </Typography>
        <Lottie animationData={animationData} style={{ height: 55, width: 55 }} />
      </Box>

      {/* Carousel with static items */}
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', marginLeft:'1%' }}>

        <CarouselContainer sx={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}>
          {items.map((item, i) => (
            <Box key={i} sx={{ flex: '0 0 19%', margin: '4px 5px' }}>
              <ProductCard
                key={i}
                image={item.image}
                brandName={item.brandName}
                price={item.price}
                onClick={() => handleCardClick(item.id)}
              />
            </Box>
          ))}
        </CarouselContainer>
      </Box>

      <Divider
        sx={{
          my: 3, // Vertical margin
          borderColor: 'grey.400', // Divider color
          borderBottomWidth: 8, // Thickness of the line
        }}
        variant="fullWidth" // Full width divider
      />
    </Box>
  );
}


/*


Description:
The CategoryCarousel component displays a carousel of product cards for various categories with animation effects and 
a header section. It allows navigation to a detailed page for each category when a product card is clicked.

Variables and Props:
  items (array): Contains product details to be displayed in the carousel. Each item has:
    id (string): Unique identifier for the item.
    image (string): URL of the product image.
    brandName (string): Brand name of the product.
    price (number): Price of the product.
    discountPercentage (number): Discount percentage on the product.

  currentIndex (number): Index of the current slide in the carousel, used for shifting the carousel view.
  itemsPerSlide (number): Number of items to display per slide.
  navigate (function): Function from useNavigate hook to handle navigation.
  handleCardClick (function): Handles card click events and navigates to the specific category detail page.

Components:
  CarouselContainer: Styled container for the carousel, using the Box component with flexbox layout and custom styling.
  CategoryCarousel: Main functional component containing:
    Header Section: Includes animated Lottie icons and a title "BIRDS".
    Carousel: Displays the ProductCard components in a horizontal scrollable layout.
    Divider: A styled divider separating the carousel from other content.

Styles and Behavior:
    Header Section: Displays Lottie animations and a title with a background overlay.
    CarouselContainer: Uses translateX for slide transitions based on currentIndex.
    ProductCard: Renders product details and handles click events to navigate to detailed category pages.
    Divider: Adds visual separation below the carousel.


*/