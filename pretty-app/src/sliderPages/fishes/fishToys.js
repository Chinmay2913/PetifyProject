import React, { useState, useEffect  } from 'react';
import { Box, Drawer, FormControlLabel, Checkbox, Button, Typography, IconButton, AppBar, Toolbar, Collapse } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProductCard from '../../components/productCard';
import axios from 'axios'; // Import Axios
import  { getData } from '../../services/apiservices';



// Dummy data for products
const initialProducts = [
  { image: 'url_to_image_1', brandName: 'Brand A', price: 150, discountPercentage: 20, category: 'Veg', type: 'Dry', pet: 'Dog' },
  { image: 'url_to_image_2', brandName: 'Brand B', price: 350, discountPercentage: 30, category: 'Non-Veg', type: 'Gravy', pet: 'Cat' },
  { image: 'url_to_image_3', brandName: 'Brand C', price: 550, discountPercentage: 40, category: 'Veg', type: 'Gravy', pet: 'Bird' },
  { image: 'url_to_image_4', brandName: 'Brand D', price: 750, discountPercentage: 50, category: 'Non-Veg', type: 'Dry', pet: 'Fish' },];

const FilterableProductPage = () => {
  const [filters, setFilters] = useState({
    Price: [],
    Category: [],
    Discount: [],
    Brands: []
  });

  const [products, setProducts] = useState(initialProducts); // Initially, set products to the dummy data
  const [filteredProducts, setFilteredProducts] = useState(initialProducts); // Initially display all products
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    // Fetch data from backend
    getData('/products') // Use global API function
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initially set filtered products to all products
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
        setError('Failed to fetch products.'); // Set error message
        setLoading(false); // Set loading to false even if there is an error
      });
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
            { label: "Category", options: ["Beds", "Bowls", "Mats", "Collars"] },
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


/*

Component State:
  filters: An object that holds selected filter options:
    Price: Array of selected price ranges.
    Category: Array of selected product categories.
    Discount: Array of selected discount percentages.
    Brands: Array of selected brand names.
  filteredProducts: Array of products that match the applied filters.
  drawerOpen: Boolean indicating whether the filter drawer is open.
  expanded: Object to track the expanded/collapsed state of each filter category.

Functions:
  handleFilterChange: Updates the filters state by toggling the selected filter option.
  applyFilters: Filters the products array based on the selected filter criteria and updates filteredProducts.
  handleExpandClick: Toggles the expanded state of a filter category in the drawer.

JSX Structure
  AppBar: Displays a header with a filter button and title.
  Drawer: Contains filter options with collapsible sections:
    Price
    Category
    Discount
    Brands
  Product Grid: Displays filtered products in a responsive grid layout using the ProductCard component.


Variable Names Used:
  filters: State object for managing selected filter options.
  filteredProducts: State for storing products after applying filters.
  drawerOpen: Boolean state for controlling the visibility of the filter drawer.
  expanded: Object for managing the expanded/collapsed state of filter sections.
  handleFilterChange: Function to update filter selections.
  applyFilters: Function to apply selected filters and update displayed products.
  handleExpandClick: Function to toggle the expanded state of filter categories.

*/