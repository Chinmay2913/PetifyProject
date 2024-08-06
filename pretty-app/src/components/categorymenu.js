import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PetsIcon from '@mui/icons-material/Pets';
import StyleIcon from '@mui/icons-material/Style';
import ToysIcon from '@mui/icons-material/Toys';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

// Define categories with labels, icons, and links
const categories = [
    { label: 'Food', icon: <FastfoodIcon sx={{ fontSize: 40 }} />, link: '/food' },
    { label: 'Clothing', icon: <CheckroomIcon sx={{ fontSize: 40 }} />, link: '/clothing' },
    { label: 'Grooming', icon: <PetsIcon sx={{ fontSize: 40 }} />, link: '/grooming' },
    { label: 'Accessories', icon: <StyleIcon sx={{ fontSize: 40 }} />, link: '/accessories' },
    { label: 'Toys', icon: <ToysIcon sx={{ fontSize: 40 }} />, link: '/toys' }
];

// Define a function component for the category list
const CategoryList = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 4, bgcolor: '#f9f9f9' }}>
            <Grid container spacing={4} justifyContent="center">
                {categories.map((category, index) => (
                    <Grid item xs={6} sm={4} md={2} key={index}>
                        <Link to={category.link} style={{ textDecoration: 'none' }}>
                            <Paper
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderRadius: '16px',
                                    textAlign: 'center',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid rgba(0, 0, 0, 0.12)',  // Transparent border
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',  // Subtle shadow
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',  // Transition effect
                                    '&:hover': {  // Hover effect for interactivity
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                                    }
                                }}
                            >
                                {/* Combine icon and label as a single unit */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        p: 2
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 80,  // Icon container size
                                            height: 80,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '50%',
                                            backgroundColor: '#e0f7fa',  // Background color for icon
                                            mb: 1
                                        }}
                                    >
                                        {category.icon}  {/* Display icon */}
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{category.label}</Typography>  {/* Category label */}
                                </Box>
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CategoryList;
