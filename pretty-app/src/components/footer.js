// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography, Divider, IconButton } from '@mui/material';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub, Home, Email, Phone, Print } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
}));

const FooterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(0.5),
}));

const FooterLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(1),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  padding: theme.spacing(2),
}));

const FooterColumn = styled(Box)(({ theme, maxWidth }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: maxWidth || '100%',
  margin: theme.spacing(1),
}));

export default function Footer() {
  return (
    <FooterContainer>
      {/* Social Media Section */}
      {/* <FooterSection>
        <Typography variant="body2" color="textSecondary">
          Get connected with us on social networks:
        </Typography>
        <SocialIcons>
          <IconButtonStyled href="https://www.facebook.com" aria-label="facebook" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </IconButtonStyled>
          <IconButtonStyled href="https://twitter.com" aria-label="twitter" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </IconButtonStyled>
          <IconButtonStyled href="https://www.google.com" aria-label="google" target="_blank" rel="noopener noreferrer">
            <Google />
          </IconButtonStyled>
          <IconButtonStyled href="https://www.instagram.com" aria-label="instagram" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </IconButtonStyled>
          <IconButtonStyled href="https://www.linkedin.com" aria-label="linkedin" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </IconButtonStyled>
          <IconButtonStyled href="https://github.com" aria-label="github" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </IconButtonStyled>
        </SocialIcons>
      </FooterSection> */}

      <Divider sx={{ my: 2 }} />

      {/* Footer Columns Section */}
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <FooterColumn maxWidth="300px">
            <Typography variant="h6" gutterBottom>
              Company name
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </FooterColumn>

          <FooterColumn>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <FooterLinks>
              <FooterLink to="/Toys">Toys</FooterLink>
              <FooterLink to="/Food">Food</FooterLink>
              <FooterLink to="/Clothing">Clothing</FooterLink>
              <FooterLink to="/Grooming">Grooming</FooterLink>
              <FooterLink to="/Accessories">Accessories</FooterLink>

            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <Typography variant="h6" gutterBottom>
              Useful links
            </Typography>
            <FooterLinks>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <a 
        href="https://www.arcfoundation.org" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: 'black', textDecoration: 'none' }}
      >
        ARC Foundation
      </a>
      <a 
        href="https://www.resqcharitabletrust.org" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: 'black', textDecoration: 'none' }}
      >
        RESQ Charitable Trust
      </a>
      <a 
        href="https://www.animalrescuetrust.org" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: 'black', textDecoration: 'none' }}
      >
        Animal Rescue Trust
      </a>
      <a 
        href="https://www.karmafoundation.org" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: 'black', textDecoration: 'none' }}
      >
        Karma Foundation
      </a>
      </div>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <Home /> New York, NY 10012, US
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <Email /> info@example.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <Phone /> +01 234 567 88
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <Print /> +01 234 567 89
            </Typography>
          </FooterColumn>
        </Box>
      </Container>

      <FooterBottom>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Your Company Name
        </Typography>
      </FooterBottom>
    </FooterContainer>
  );
}
/*

Main Components and Variables:
  FooterContainer: A styled Box component that serves as the outermost container for the footer. It defines the background color and padding.
  FooterSection: A styled Box component that aligns the social media section in the center and provides spacing.
  SocialIcons: A styled Box component that holds and arranges the social media icons horizontally.
  IconButtonStyled: A styled IconButton component used for the social media links, with custom color and margin.
  FooterLinks: A styled Box component that organizes the footer links in a column format.
  FooterLink: A styled Link component that provides navigation to different pages within the application, with custom styling for hover effects.
  FooterBottom: A styled Box component that serves as the bottom section of the footer, containing copyright information.
  FooterColumn: A styled Box component that structures the content of each footer column, including company details, product links, useful links, and contact information.

Key Sections:
  Social Media Section:
      FooterSection: Contains the message "Get connected with us on social networks" and displays social media icons using IconButtonStyled for platforms like Facebook, Twitter, Google, Instagram, LinkedIn, and GitHub.
  Footer Columns Section:
      Company Info (FooterColumn): Displays the company name and a brief description.
      Products (FooterColumn): Lists links to different product categories such as Toys, Food, Clothing, Grooming, and Accessories, wrapped in FooterLinks.
      Useful Links (FooterColumn): Provides external links to organizations such as ARC Foundation, RESQ Charitable Trust, Animal Rescue Trust, and Karma Foundation.
      Contact (FooterColumn): Displays contact information including address, email, phone, and fax using Material-UI icons (Home, Email, Phone, Print).
  Footer Bottom Section:  
      FooterBottom: Displays the copyright notice with the current year.
Usage
This component is suitable for the footer section of any web application, providing a clean and organized structure 
with social media links, navigation links, and contact information. The links can be customized to match the specific
needs of the application.



*/