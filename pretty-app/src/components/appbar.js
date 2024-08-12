import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import ProductCard from './productCard';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(15),
    width: '60%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch', // Increase search bar width
    },
  },
}));
const categories = [
  { name: 'Food', subtypes: ['dog/food', 'cat/food', 'fish/food', 'birds/food'] },
  { name: 'Clothing', subtypes: ['dog/clothing', 'cat/clothing', 'birds/clothing'] },
  { name: 'Grooming', subtypes: ['dog/grooming', 'cat/grooming', 'fish/grooming', 'bird/grooming'] },
  { name: 'Accessories', subtypes: ['dog/accessories', 'cat/accessories', 'fish/accessories', 'bird/accessories'] },
  { name: 'Toys', subtypes: ['dog/toys', 'cat/toys', 'birds/toys', 'fish/toys'] },
];

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const results = categories.flatMap(category => 
      category.subtypes.filter(subtype => subtype.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(subtype => ({ category: category.name, subtype }))
    );
    //setSearchResults(results);
    navigate('/search', { state: { searchResults: results } });  };
  // const handleSearch = () => {
  //   navigate(`/search?query=${searchTerm}`);
  // };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  const handleProductClick = (product) => {
    // Navigate to the product details page, passing the product ID or any other necessary data
    navigate(`/product/${product.id}`, { state: { product } });
  };
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem component={Link} to="/account" onClick={handleMenuClose}>
        My account
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/cart" onClick={handleMobileMenuClose}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem component={Link} to="/contact" onClick={handleMobileMenuClose}>
        <IconButton size="large" aria-label="contact us" color="inherit">
          <ContactMailIcon />
        </IconButton>
        <p>Contact Us</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'flex', sm: 'block' } }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>MUI</Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon onClick={handleSearch} />
            </SearchIconWrapper>
            <StyledInputBase
             placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mx: 1, mb: 1 }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                component={Link}
                to="/cart"
              >
                <ShoppingCartIcon />
              </IconButton>
              <Typography variant="body2" sx={{ ml: 1 }}>
                <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>Cart</Link>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mx: 1, mb: 1 }}>
              <IconButton
                size="large"
                aria-label="contact us"
                color="inherit"
                component={Link}
                to="/contact"
              >
                <ContactMailIcon />
              </IconButton>
              <Typography variant="body2" sx={{ ml: 1 }}>
                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mx: 1, mb: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Typography variant="body2" sx={{ ml: 1 }}>
                <Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>Profile</Link>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box component="main" sx={{ pt: 8, pb: 2 }}>
        {/* Display search results using ProductCard */}
        {searchResults.length > 0 && (
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 2 }}>
            {searchResults.map((result, index) => (
              <ProductCard
                key={index}
                image={result.image}
                brandName={result.brandName}
                price={result.price}
                discountPercentage={result.discountPercentage}
                onClick={() => handleProductClick(result)}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
