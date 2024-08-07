// src/App.js
import React from 'react';
import './App.css';
import Homepage from './pages/HomePage'; // Import the Homepage component
import { Routes, Route } from 'react-router-dom';
import ToysPage from './pages/ToysPage';
import FoodPage from './pages/FoodPage';
import AccessoriesPage from './pages/AccessoriesPage';
import GroomingPage from './pages/GroomingPage';
import ClothingsPage from './pages/ClothingsPage';
import DogAccessories from './sliderPages/dogs/dogAccessories';
import DogClothing from './sliderPages/dogs/dogClothing';
import DogFoods from './sliderPages/dogs/dogFoods';
import DogGrooming from './sliderPages/dogs/dogGromming';
import DogToys from './sliderPages/dogs/dogToys';

import CatAccessories from './sliderPages/cats/catAccessories';
import CatClothing from './sliderPages/cats/catClothing';
import CatFoods from './sliderPages/cats/catFoods';
import CatGrooming from './sliderPages/cats/catGromming';
import CatToys from './sliderPages/cats/catToys';

import BirdAccessories from './sliderPages/birds/birdAccessories';
import BirdClothing from './sliderPages/birds/birdClothing';
import BirdFoods from './sliderPages/birds/birdFoods';
import BirdGrooming from './sliderPages/birds/birdGromming';
import BirdToys from './sliderPages/birds/birdToys';

import FishAccessories from './sliderPages/fishes/fishAccessories';
import FishClothing from './sliderPages/fishes/fishClothing';
import FishFoods from './sliderPages/fishes/fishFoods';
import FishGrooming from './sliderPages/fishes/fishGromming';
import FishToys from './sliderPages/fishes/fishToys';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      <Route path="/Clothing" element={<ClothingsPage />} />
        <Route path="/Grooming" element={<GroomingPage />} />
        <Route path="/Accessories" element={<AccessoriesPage />} />
        <Route path="food" element={<FoodPage />} />
        <Route path="/Toys" element={<ToysPage />} />
       
        <Route path="/dogs/Accessories" element={<DogAccessories />} />
        <Route path="/dogs/Food" element={<DogFoods />} />
        <Route path="/dogs/Clothing" element={<DogClothing />} />
        <Route path="/dogs/Grooming" element={<DogGrooming />} />
        <Route path="/dogs/Toys" element={<DogToys />} />

        <Route path="/cats/Accessories" element={<CatAccessories />} />
        <Route path="/cats/Food" element={<CatFoods />} />
        <Route path="/cats/Clothing" element={<CatClothing />} />
        <Route path="/cats/Grooming" element={<CatGrooming />} />
        <Route path="/cats/Toys" element={<CatToys />} />

        <Route path="/birds/Accessories" element={<BirdAccessories />} />
        <Route path="/birds/Food" element={<BirdFoods />} />
        <Route path="/birds/Clothing" element={<BirdClothing />} />
        <Route path="/birds/Grooming" element={<BirdGrooming />} />
        <Route path="/birds/Toys" element={<BirdToys />} />

        <Route path="/fish/Accessories" element={<FishAccessories />} />
        <Route path="/fish/Food" element={<FishFoods />} />
        <Route path="/fish/Clothing" element={<FishClothing />} />
        <Route path="/fish/Grooming" element={<FishGrooming />} />
        <Route path="/fish/Toys" element={<FishToys />} />





      </Routes>
    </div>
  );
}

export default App;
