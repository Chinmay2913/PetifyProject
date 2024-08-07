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





         
  