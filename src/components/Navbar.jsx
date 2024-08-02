import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#c18b3e87',
  boxShadow: 'none',
});

const StyledButton = styled(Button)({
  color: 'black'
})

const Navbar = () => {

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Our Mission', to: 'ourmission' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }


  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold'}} component="div">
          SMART MANAGEMENT
        </Typography>
        <div>
          {navLinks.map((link, index) => (
            <StyledButton key={index} onClick={() => handleScroll(link.to)}>{link.name}</StyledButton>
          ))}
          {/* <StyledButton href="#home">Home</StyledButton>
          <StyledButton href="#services">Services</StyledButton>
          <StyledButton href="#about">About</StyledButton>
          <StyledButton href="#contact">Contact</StyledButton> */}
        </div>
      </Toolbar>
      
      </StyledAppBar>
  );
};
export default Navbar;
