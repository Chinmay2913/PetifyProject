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


/*

Main Components and Variables:

  CarouselContainer: A styled Box component that serves as the outer container for the carousel. It manages the overall width and overflow properties.
  CarouselInner: A styled Box component that contains the carousel items and manages the transition effect when the carousel slides.
  CarouselItem: A styled Paper component that represents each item within the carousel. It defines the appearance and spacing of each item.
  OverlayContainer: A styled Box component that would typically hold overlay elements but is not directly used in the current implementation.
  HeaderContainer: A styled Box component that arranges the category label and the "View All" button at the top of the carousel.
  items: An array containing the details of each item to be displayed in the carousel. Each item is an object with:
       id: A unique identifier for the item.
       image: The URL of the item's image.

  CategoryCarousel: The main functional component that renders the entire carousel.
      currentIndex: State variable to track the current position of the carousel.
      itemsPerSlide: The number of items visible in the carousel at once.
      totalItems: The total number of items available in the carousel.

  handleNext: Function to move the carousel forward by the number of items displayed per slide. It updates the currentIndex state.
  handlePrev: Function to move the carousel backward by the number of items displayed per slide. It also updates the currentIndex state.
  handleViewAll: Function that redirects the user to a page displaying all items within the category.
  itemWidth: The width of each individual item in the carousel, used to calculate the overall carousel width and positioning.
  carouselWidth: The calculated width of the visible area of the carousel based on the number of items per slide and their width.

Key Features:
    Responsive Design: The carousel dynamically adjusts its width based on the number of items and their widths.
    Smooth Transitions: The CarouselInner component moves horizontally to display different items with a smooth sliding animation.
    Navigation Buttons: Users can navigate through the items using the left and right arrow buttons (handlePrev and handleNext).
    View All Button: The "View All" button (handleViewAll) allows users to navigate to a full view of all items in the category.
    Custom Styling: The component uses the styled utility to define custom styles for various elements, including hover effects for the buttons and a styled divider for separation.

Usage:
This component is useful in e-commerce websites or any application where categories of items need to be showcased in
a carousel format. It allows users to easily browse through a selection of items with the option to view all items 
in the category


*/