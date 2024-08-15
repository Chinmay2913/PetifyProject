import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Drawer, FormControlLabel, Checkbox, Button, Typography, IconButton, AppBar, Toolbar, Collapse } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProductCard from '../components/productCard';

const SearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialSearchResults = location.state?.searchResults || [];

  const [filters, setFilters] = useState({
    Price: [],
    Category: [],
    Type: [],
    Discount: [],
    Brands: [],
    Pets: []
  });
  
  const [filteredProducts, setFilteredProducts] = useState(initialSearchResults);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    // Fetch data from the backend
    axios.get('/api/products') // Replace with your backend endpoint
      .then(response => {
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array ensures this runs once on mount


  useEffect(() => {
    applyFilters();
  }, [filters]);

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
    let filtered = initialSearchResults;

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

    // Apply Type filter
    if (filters.Type.length > 0) {
      filtered = filtered.filter(product => filters.Type.includes(product.type));
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

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
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
            { label: "Category", options: ["Beds", "Bowls", "Mats", "Collars"] },
            { label: "Discount", options: ["20%", "30%", "40%", "50%", "60%"] },
            { label: "Brands", options: ["Brand A", "Brand B", "Brand C", "Brand D"] },
            { label: "Pets", options: ["Bird", "Cat", "Dog", "Fish", "Others"] } 
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

export default SearchResultsPage;


/*

Component State:
  filters: An object storing selected filter options for different categories:
    Price: Array of selected price ranges.
    Category: Array of selected product categories.
    Type: Array of selected product types.
    Discount: Array of selected discount percentages.
    Brands: Array of selected brand names.
    Pets: Array of selected pet types.
  filteredProducts: Array of products filtered based on the selected criteria.
  drawerOpen: Boolean state for controlling the open/close state of the filter drawer.
  expanded: Object tracking the expanded state of filter categories.

Functions:
  handleFilterChange: Toggles filter options in the filters state.
  applyFilters: Filters the initialSearchResults based on selected filters and updates filteredProducts.
  handleExpandClick: Toggles the expanded/collapsed state of filter categories in the drawer.
  handleProductClick: Navigates to the product details page and passes the selected product as state.

JSX Structure:
  AppBar: Displays a header with a filter button and title.
  Drawer: Contains filter options with collapsible sections:
      Price
      Category
      Type
      Discount
      Brands
      Pets
  Product Grid: Displays filtered products in a responsive grid layout. Each product is rendered using 
  the ProductCard component, which allows for navigation to the product details page when clicked.


*/