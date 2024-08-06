// src/components/Homepage.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/appbar';
import MyCarousel from '../components/carousel';
import CategoryMenu from '../components/categorymenu';
import CategorySlider from '../components/categoryslider';
import CategorySlider2 from '../components/categoryslider2';
import Footer from '../components/footer';


function Homepage() {
  return (
    <div className="Homepage">
      <Navigation />
      <MyCarousel />
      <CategoryMenu />
      <CategorySlider />
      <CategorySlider2 />
      <Footer />
      
    </div>
  );
}

export default Homepage;





         
  