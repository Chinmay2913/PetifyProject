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

// import PricingPage from './pages/PricingPage';
// import OrdersPage from './pages/OrdersPage';
// import HelpPage from './pages/HelpPage';
// import SettingsPage from './pages/SettingsPage';
// import CartPage from './pages/CartPage';
// import ContactPage from './pages/ContactPage';
// import AccountPage from './pages/AccountPage';
// import ProfilePage from './pages/ProfilePage';

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
        {/* <Route path="/profile" element={<ProfilePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/help" element={<HelpPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
