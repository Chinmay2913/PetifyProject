// src/components/CategoryCarousel.js
import React, { useState } from 'react';
import { Box, IconButton, Paper, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'; // New icon for the redirect

const CarouselContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
  width: '100%', // Full width
  marginBottom: 10,
}));

const CarouselInner = styled(Box)(({ theme }) => ({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
}));

const CarouselItem = styled(Paper)(({ theme }) => ({
  minWidth: 200,
  margin: theme.spacing(1),
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'center',
}));

const OverlayContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: theme.spacing(1), // Space between header and carousel
}));

const items = [
  {
    id: "Random Name #1",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "Random Name #2",
    image: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?t=st=1722858351~exp=1722861951~hmac=02bb6ad5c0ed3493518416d4b789182f7ef6274f450fd7792d58c35b4c03824a&w=996"
  },
  {
    id: "Random Name #3",
    image: "https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg"
  },
  // Additional items...
];

export default function CategoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;
  const totalItems = items.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsPerSlide + totalItems) % totalItems
    );
  };

  const handleViewAll = () => {
    // Redirect to the page containing all items in the category
    window.location.href = '/all-items'; // Adjust the URL as needed
  };

  const itemWidth = 200; // Width of each item
  const itemMargin = 16; // Margin between items
  const carouselWidth = (itemWidth + itemMargin) * itemsPerSlide; // Width of the visible area

  return (
    <Box sx={{ width: '100%', mb: 5 }}> {/* Added bottom margin here */}
      <HeaderContainer>
        {/* Label on top-left corner */}
        <Typography
          variant="h6"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
          }}
        >
          Category Label
        </Typography>

        {/* View all items button on top-right corner */}
        <IconButton
          onClick={handleViewAll}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
          }}
        >
          <ArrowRightAltIcon />
        </IconButton>
      </HeaderContainer>

      {/* Carousel with navigation buttons */}
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            zIndex: 1,
            opacity: 0.7, // Increase opacity for visibility
            '&:hover': {
              opacity: 1, // Full opacity on hover
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            zIndex: 1,
            opacity: 0.7, // Increase opacity for visibility
            '&:hover': {
              opacity: 1, // Full opacity on hover
            },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>

        <CarouselContainer>
          <CarouselInner
            sx={{ transform: `translateX(-${currentIndex * itemWidth}px)`, width: `${itemWidth * totalItems}px` }}
          >
            {items.map((item, i) => (
              <CarouselItem key={i}>
                <img
                  src={item.image}
                  alt={item.id}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </CarouselItem>
            ))}
          </CarouselInner>
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
