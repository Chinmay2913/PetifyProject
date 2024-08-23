import React, { useState } from 'react';
import './ProductPage.css';

const ProductPage = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    alert('Item added to cart!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: 'Check out this product!',
        url: window.location.href,
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch(err => {
        console.error('Error sharing:', err);
      });
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt="Product Image" />
      </div>
      <div className="product-details">
        <div className="breadcrumb-container">
          <nav className="breadcrumb">
            <a href="#">Home</a> &gt;
            <a href="cat.html">Cat</a> &gt;
            <a href="food.html">Food</a> &gt;
            <a href="#">{product.name}</a>
          </nav>
          <button className="share share-button" onClick={handleShare}>Share</button>
        </div>
        <h1>{product.name}</h1>
        <div className="ratings">
          <span>{`⭐⭐⭐⭐☆ ${product.rating} (${product.reviews})`}</span>
        </div>
        <div className="tags">
          {product.tags.map((tag, index) => (
            <span key={index} className="tag">#{tag}</span>
          ))}
        </div>
        <div className="price">
          <span className="current-price">{product.currentPrice}</span>
          <span className="original-price">{product.originalPrice}</span>
          <span className="discount">{product.discount}</span>
        </div>
        <div className="delivery">
          <span>Check delivery date</span>
          <input type="text" placeholder="Check delivery date" />
          <button>Check</button>
        </div>
        <div className="sizes">
          {product.sizes.map(size => (
            <button
              key={size}
              className={`size ${selectedSize === size ? 'active' : ''}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
