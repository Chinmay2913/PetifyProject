import React from 'react';
import './App.css';
import ProductPage from './components/ProductPage';

function App() {
  const product = {
    name: "Sheba Salmon Flavour Irresistible All Life Stages Cat Dry Food",
    image: "/public/images/image.webp",
    rating: 4.4,
    reviews: 5,
    tags: ["Dry Food", "Sheba"],
    currentPrice: "₹1,909",
    originalPrice: "₹3,520",
    discount: "SAVE 46%",
    sizes: ["3kg (2x1.5kg) + 5kg Scoopy Litter", "2x1.5kg", "1.5kg"]
  };

  return (
    <div className="App">
      <ProductPage product={product} />
    </div>
  );
}

export default App;
