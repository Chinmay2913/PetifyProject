import React, { useState } from 'react';
import { Box, Drawer, FormControlLabel, Checkbox, Button, Typography, IconButton, AppBar, Toolbar, Collapse } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProductCard from '../components/productCard';

// Dummy data for products
const products = [
  { image: 'url_to_image', brandName: 'Brand A', price: 150, discountPercentage: 20, category: 'Smart'},
  { image: 'url_to_image', brandName: 'Brand B', price: 350, discountPercentage: 30, category: 'Chew'  },
  { image: 'url_to_image', brandName: 'Brand C', price: 550, discountPercentage: 40, category: 'Ball'},
  { image: 'url_to_image', brandName: 'Brand D', price: 750, discountPercentage: 50, category: 'Soft'} ,
  // Add more products as needed
];

const FilterableProductPage = () => {
  const [filters, setFilters] = useState({
    Price: [],
    Category: [],
    Discount: [],
    Brands: []
  });
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

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
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="filter" onClick={() => setDrawerOpen(true)}>
            <FilterListIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Product Filters
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          {[
            { label: "Price", options: ["0-200", "200-400", "400-600", "600-800", "800-1000"] },
            { label: "Category", options: ["Soft", "Chew", "Ball", "Smart"] },
            { label: "Discount", options: ["20%", "30%", "40%", "50%", "60%"] },
            { label: "Brands", options: ["Brand A", "Brand B", "Brand C", "Brand D"] }
          ].map(filterCategory => (
            <Box key={filterCategory.label} sx={{ marginBottom: 2 }}>
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
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            brandName={product.brandName}
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </Box>
    </>
  );
};

export default FilterableProductPage;
