// src/components/Homepage.js

import React from 'react';
import Navigation from '../components/appbar';
import MyCarousel from '../components/carousel';
import CategoryMenu from '../components/categorymenu';
import ItemsSliderDog from '../components/itemsSliderDog';
import ItemsSliderCat from '../components/itemsSliderCat';
import ItemsSliderBird from '../components/itemsSliderBirds';
import ItemsSliderFish from '../components/itemsSliderFish';

import Footer from '../components/footer';


function Homepage() {
  return (
    <div className="Homepage">
      <Navigation />
      <MyCarousel />
      <CategoryMenu />
      <ItemsSliderDog />
      <ItemsSliderCat />
      <ItemsSliderBird />
      <ItemsSliderFish />
      <Footer />
      
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


         
  