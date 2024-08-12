import React, { useState } from 'react';
import { Box, Drawer, FormControlLabel, Checkbox, Button, Typography, IconButton, AppBar, Toolbar, Collapse } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProductCard from '../components/productCard';

// Dummy data for products
const products = [
  { image: 'url_to_image', brandName: 'Brand A', price: 150, discountPercentage: 20, category: 'Veg', type: 'Dry', pet: 'Dog' },
  { image: 'url_to_image', brandName: 'Brand B', price: 350, discountPercentage: 30, category: 'Non-Veg', type: 'Gravy', pet: 'Cat' },
  { image: 'url_to_image', brandName: 'Brand C', price: 550, discountPercentage: 40, category: 'Veg', type: 'Gravy', pet: 'Bird' },
  { image: 'url_to_image', brandName: 'Brand D', price: 750, discountPercentage: 50, category: 'Non-Veg', type: 'Dry', pet: 'Fish' },
  // Add more products as needed
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
            { label: "Category", options: ["Shampoos", "Conditioners", "Nail Clippers", "Combs"] },
            { label: "Discount", options: ["20%", "30%", "40%", "50%", "60%"] },
            { label: "Brands", options: ["Brand A", "Brand B", "Brand C", "Brand D"] },
            { label: "Pets", options: ["Bird", "Cat", "Dog", "Fish", "Others"] } 

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



/*

State:
  filters (object): Holds the selected filters for different categories:
    Price (array): Selected price ranges (e.g., "0-200").
    Category (array): Selected product categories (e.g., "Beds").
    Discount (array): Selected discount percentages (e.g., "20%").
    Brands (array): Selected brands (e.g., "Brand A").
    Pets (array): Selected pet types (e.g., "Dog").
  filteredProducts (array): List of products filtered based on the selected criteria.
  drawerOpen (boolean): Controls whether the filter drawer is open or closed.
  expanded (object): Tracks which filter categories are expanded in the drawer.

Handlers:
  handleFilterChange (function): Updates the filters state based on user interactions with checkboxes.
  applyFilters (function): Applies the selected filters to the products array and updates filteredProducts.
  handleExpandClick (function): Toggles the expanded state of filter categories in the drawer.

UI Elements:
  AppBar: Contains the filter icon and title.
  Drawer: Sidebar for displaying filter options. It includes:
    Box: Container for filter options and "Apply Filters" button.
    Collapse: Expands or collapses filter categories.
    FormControlLabel: Displays filter options with checkboxes.
  ProductCard: Renders each product in the filteredProducts array.


*/