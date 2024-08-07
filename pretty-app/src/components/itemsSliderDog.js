// src/components/CategoryCarousel.js
import React, { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/itemSliderCard'; // Import the ProductCard component

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
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    brandName: "Brand A",
    price: 100,
    discountPercentage: 10
  },
  {
    id: "Clothing",
    image: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1722858351~exp=1722861951~hmac=02bb6ad5c0ed3493518416d4b789182f7ef6274f450fd7792d58c35b4c03824a&w=996",
    brandName: "Brand B",
    price: 200,
    discountPercentage: 20
  },
  {
    id: "Grooming",
    image: "https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg",
    brandName: "Brand C",
    price: 150,
    discountPercentage: 15
  },
  {
    id: "Accessories",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    brandName: "Brand D",
    price: 120,
    discountPercentage: 12
  },
  {
    id: "Toys",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    brandName: "Brand D",
    price: 120,
    discountPercentage: 12
  },
  // Additional items...
];

export default function CategoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 6;
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/dogs/${id}`);
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
        <Typography variant="h6">
          DOGS
        </Typography>
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
                discountPercentage={item.discountPercentage}
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
