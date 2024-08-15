// src/components/Homepage.js

import React from 'react';
import MyCarousel from '../components/carousel';
import CategoryMenu from '../components/categorymenu';
import ItemsSliderDog from '../components/itemsSliderDog';
import ItemsSliderCat from '../components/itemsSliderCat';
import ItemsSliderBird from '../components/itemsSliderBirds';
import ItemsSliderFish from '../components/itemsSliderFish';


function Homepage() {
  return (
    <div className="Homepage">
    
      <MyCarousel />
      <CategoryMenu />
      <ItemsSliderDog />
      <ItemsSliderCat />
      <ItemsSliderBird />
      <ItemsSliderFish />
      
    </div>
  );
}

export default Homepage;


/*
Structure:
  <div className="Homepage">: Wrapper for the entire homepage layout.
    <Navigation />: Renders the top navigation bar.
    <MyCarousel />: Displays a carousel for featured products or promotions.
    <CategoryMenu />: Shows a menu for navigating different product categories.
    <ItemsSliderDog />: Displays a slider of items specifically for dogs.
    <ItemsSliderCat />: Displays a slider of items specifically for cats.
    <ItemsSliderBird />: Displays a slider of items specifically for birds.
    <ItemsSliderFish />: Displays a slider of items specifically for fish.
    <Footer />: Renders the footer with additional links or information.

*/


         
  