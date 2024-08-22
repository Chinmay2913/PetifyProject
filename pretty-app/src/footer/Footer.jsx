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
