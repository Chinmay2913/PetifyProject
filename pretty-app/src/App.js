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

import SearchResultsPage from './pages/Searchpage';
//<Route path="/product/:id" element={<ProductDetailsPage />} />      

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>

        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/Clothing" element={<ClothingsPage />} />
        <Route path="/Grooming" element={<GroomingPage />} />
        <Route path="/Accessories" element={<AccessoriesPage />} />
        <Route path="/Food" element={<FoodPage />} />
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

/**
 Variables Used:
App: The main functional component that sets up the routes for the application.

Homepage, SearchResultsPage, ClothingsPage, GroomingPage, AccessoriesPage, FoodPage, ToysPage: 
    Components representing the main pages of the website.

DogAccessories, DogFoods, DogClothing, DogGrooming, DogToys: 
    Components representing dog-related product categories.

CatAccessories, CatFoods, CatClothing, CatGrooming, CatToys:
    Components representing cat-related product categories.

BirdAccessories, BirdFoods, BirdClothing, BirdGrooming, BirdToys: 
    Components representing bird-related product categories.

FishAccessories, FishFoods, FishClothing, FishGrooming, FishToys: 
    Components representing fish-related product categories.


Routing Structure:
The application uses the Routes component from React Router to define different paths (URLs) and the corresponding components that should be rendered when the path is accessed.

/ (Root Path):

Renders the Homepage component.
/search:
Renders the SearchResultsPage component.


Main Category Routes:

/Clothing: Renders the ClothingsPage.
/Grooming: Renders the GroomingPage.
/Accessories: Renders the AccessoriesPage.
/Food: Renders the FoodPage.
/Toys: Renders the ToysPage.

Dog Subcategories:
    /dogs/Accessories: Renders the DogAccessories component.
    /dogs/Food: Renders the DogFoods component.
    /dogs/Clothing: Renders the DogClothing component.
    /dogs/Grooming: Renders the DogGrooming component.
    /dogs/Toys: Renders the DogToys component.

Cat Subcategories:
    /cats/Accessories: Renders the CatAccessories component.
    /cats/Food: Renders the CatFoods component.
    /cats/Clothing: Renders the CatClothing component.
    /cats/Grooming: Renders the CatGrooming component.
    /cats/Toys: Renders the CatToys component.


Bird Subcategories:
    /birds/Accessories: Renders the BirdAccessories component.
    /birds/Food: Renders the BirdFoods component.
    /birds/Clothing: Renders the BirdClothing component.
    /birds/Grooming: Renders the BirdGrooming component.
    /birds/Toys: Renders the BirdToys component.

Fish Subcategories:
    /fish/Accessories: Renders the FishAccessories component.
    /fish/Food: Renders the FishFoods component.
    /fish/Clothing: Renders the FishClothing component.
    /fish/Grooming: Renders the FishGrooming component.
    /fish/Toys: Renders the FishToys component.

    
 */