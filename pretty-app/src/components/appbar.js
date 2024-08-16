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
import LoginIcon from '@mui/icons-material/Login';
import MoreIcon from '@mui/icons-material/MoreVert';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import ProductCard from './productCard'; // Assuming you have this component
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logOut } from "../Features/userSlice";

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

  const user = useSelector(selectUser); // Access user state from Redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut()); // Dispatch the logout action
    localStorage.removeItem("user");
    navigate('/validate'); // Redirect to login page after logout
  };

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
  
    const queryString = new URLSearchParams({ query: searchTerm }).toString();
  
    navigate(`/search?${queryString}`, { state: { searchResults: results } });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleProductClick = (product) => {
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
      {user ? (
        <>
          <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
            Profile
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            Log out
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem component={Link} to="/user/validate" onClick={handleMenuClose}>
            Login
          </MenuItem>
          <MenuItem component={Link} to="/user" onClick={handleMenuClose}>
            Get Started
          </MenuItem>
        </>
      )}
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
      <MenuItem component={Link} to="/profile" onClick={handleMobileMenuClose}>
        <IconButton size="large" aria-label="profile" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      {user ? (
        <MenuItem onClick={handleLogout}>
          <IconButton size="large" aria-label="logout" color="inherit">
            <LoginIcon />
          </IconButton>
          <p>Log out</p>
        </MenuItem>
      ) : (
        <>
          <MenuItem component={Link} to="/user/validate" onClick={handleMobileMenuClose}>
            <IconButton size="large" aria-label="login" color="inherit">
              <LoginIcon />
            </IconButton>
            <p>Login</p>
          </MenuItem>
          <MenuItem component={Link} to="/user" onClick={handleMobileMenuClose}>
            <IconButton size="large" aria-label="register" color="inherit">
              <LoginIcon />
            </IconButton>
            <p>Get Started</p>
          </MenuItem>
        </>
      )}
      <MenuItem component={Link} to="/contact" onClick={handleMobileMenuClose}>
        <IconButton size="large" aria-label="contact us" color="inherit">
          <ContactMailIcon />
        </IconButton>
        <p>Contact Us</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 , mb: 10 }}>
      <AppBar position="fixed" sx={{ mb: 2}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'flex', sm: 'block' } }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src="logo.png" alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
              MyPetStore
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" component={Link} to="/cart">
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {user ? <AccountCircle /> : <LoginIcon />}
            </IconButton>
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
    </Box>
  );
}


















/*

Main Components and Variables:
    Search: A styled component to define the search bar's styling, including its width, margin, and background color.
    SearchIconWrapper: A styled component to position the search icon inside the search bar.
    StyledInputBase: A styled input component used to handle user input in the search bar.
    categories: An array defining the different categories and their subtypes that are used for search functionality.
    PrimarySearchAppBar: The main functional component defining the structure and behavior of the app bar.

State Variables:
    anchorEl: Manages the state for the main menu.
    mobileMoreAnchorEl: Manages the state for the mobile menu.
    searchTerm: Stores the current value entered in the search bar.
    searchResults: Stores the filtered search results based on the user's input.

Key Functions:
    handleProfileMenuOpen: Opens the user profile menu.
    handleMobileMenuClose: Closes the mobile version of the menu.
    handleMenuClose: Closes the main menu and mobile menu.
    handleMobileMenuOpen: Opens the mobile menu.
    handleSearchChange: Updates the searchTerm state when the user types in the search bar.
    handleSearch: Filters the categories based on the searchTerm and navigates to the search results page.
    handleKeyPress: Triggers the search function when the 'Enter' key is pressed.
    handleProductClick: Navigates to the product details page when a product is clicked.

Menu and Search Result Rendering:
    renderMenu: Renders the main user profile menu.
    renderMobileMenu: Renders the menu for mobile devices.
    Search Results: The search results are displayed using the ProductCard component in a grid layout if there are any results after the search.

Usage:
This component is typically used at the top of the web page as a persistent navigation bar, providing essential 
features like search, cart access, user profile, and quick links to different sections of the site. 
The search functionality is designed to allow users to quickly find products by typing keywords into the search bar, 
with results dynamically displayed based on matching categories and subtypes.



*/