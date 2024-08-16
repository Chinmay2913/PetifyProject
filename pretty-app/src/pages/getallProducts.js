import React, { useState, useEffect } from 'react';
import {
  Box, Drawer, FormControlLabel, Checkbox, Button, Typography, IconButton, Collapse
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProductCard from '../components/productCard'; // Ensure correct import path
import { getData } from '../services/apiservices'; // Adjust import according to your structure

// Dummy data for products
const initialProducts = [
  { image: 'url_to_image_1', brandName: 'Brand A', price: 150, discountPercentage: 20, category: 'Veg', type: 'Dry', pet: 'Dog' },
  { image: 'url_to_image_2', brandName: 'Brand B', price: 350, discountPercentage: 30, category: 'Non-Veg', type: 'Gravy', pet: 'Cat' },
  { image: 'url_to_image_3', brandName: 'Brand C', price: 550, discountPercentage: 40, category: 'Veg', type: 'Gravy', pet: 'Bird' },
  { image: 'url_to_image_4', brandName: 'Brand D', price: 750, discountPercentage: 50, category: 'Non-Veg', type: 'Dry', pet: 'Fish' },
  // Add more products as needed
];

const FilterableProductPage = () => {
  const [filters, setFilters] = useState({
    Price: [],
    Category: [],
    Discount: [],
    Brands: [],
    Pets: []
  });

  const [products, setProducts] = useState(initialProducts); // Initially set to dummy data
  const [filteredProducts, setFilteredProducts] = useState(initialProducts); // Initially display all products
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData('/products'); // Fetch data from API
        setProducts(data);
        setFilteredProducts(data); // Initially set filtered products to all products
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('There was an error fetching the products!', error);
        setError('Failed to fetch products.'); // Set error message
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (filterCategory, option) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (newFilters[filterCategory].includes(option)) {
        newFilters[filterCategory] = newFilters[filterCategory].filter(item => item !== option);
      } else {
        newFilters[filterCategory].push(option);
      }
      return newFilters;
    });
  };

  const applyFilters = () => {
    let filtered = products;

    // Apply Price filter
    if (filters.Price.length > 0) {
      filtered = filtered.filter(product => {
        return filters.Price.some(priceRange => {
          const [min, max] = priceRange.split('-').map(Number);
          return product.price >= min && product.price <= max;
        });
      });
    }

    // Apply Category filter
    if (filters.Category.length > 0) {
      filtered = filtered.filter(product => filters.Category.includes(product.category));
    }

    // Apply Discount filter
    if (filters.Discount.length > 0) {
      filtered = filtered.filter(product => {
        return filters.Discount.some(discount => {
          const discountValue = parseInt(discount, 10);
          return product.discountPercentage === discountValue;
        });
      });
    }

    // Apply Brands filter
    if (filters.Brands.length > 0) {
      filtered = filtered.filter(product => filters.Brands.includes(product.brandName));
    }

    // Apply Pets filter
    if (filters.Pets.length > 0) {
      filtered = filtered.filter(product => filters.Pets.includes(product.pet));
    }

    setFilteredProducts(filtered);
  };

  const handleExpandClick = (category) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [category]: !prevExpanded[category]
    }));
  };

  return (
    <>
      <IconButton 
        color="primary" 
        aria-label="filter" 
        onClick={() => setDrawerOpen(true)} 
        sx={{ 
          position: 'fixed', 
          top: '10%', 
          left: 0, 
          transform: 'translateY(-50%)',
        }}
      >
        <FilterListIcon />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          {[
            { label: "Price", options: ["0-200", "200-400", "400-600", "600-800", "800-1000"] },
            { label: "Category", options: ["Veg", "Non-Veg"] },
            { label: "Discount", options: ["20%", "30%", "40%", "50%"] },
            { label: "Brands", options: ["Brand A", "Brand B", "Brand C", "Brand D"] },
            { label: "Pets", options: ["Dog", "Cat", "Bird", "Fish"] }
          ].map(filterCategory => (
            <Box key={filterCategory.label} sx={{ marginBottom: 2, marginTop: 2 }}>
              <Typography variant="h6" onClick={() => handleExpandClick(filterCategory.label)}>
                {filterCategory.label} {expanded[filterCategory.label] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Typography>
              <Collapse in={expanded[filterCategory.label]}>
                {filterCategory.options.map(option => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={filters[filterCategory.label].includes(option)}
                        onChange={() => handleFilterChange(filterCategory.label, option)}
                      />
                    }
                    label={option}
                    sx={{ display: 'block' }}  // Ensuring checkboxes are displayed in a column
                  />
                ))}
              </Collapse>
            </Box>
          ))}
          <Button onClick={applyFilters} variant="contained" color="primary">
            Apply Filters
          </Button>
        </Box>
      </Drawer>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 2 }}>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              brandName={product.brandName}
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          ))
        )}
      </Box>
    </>
  );
};

export default FilterableProductPage;
