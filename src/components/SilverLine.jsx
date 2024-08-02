import React from 'react';
import { Box, Divider, Grid, ThemeProvider, Typography, createTheme } from '@mui/material';
import { styled } from '@mui/system';

const SilverLineDiv = styled('div')({
    width: '20rem', // Adjust the width as needed
    height: '0.3rem', // Adjust the height as needed
    background: 'linear-gradient(90deg, silver, white, silver)', // Gradient effect for shining
    margin: '0 auto', // Center align the line
    animation: 'shine 2s infinite', // Animation for shining effect
    '@keyframes shine': {
      '0%': { backgroundPosition: '0 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
    backgroundSize: '200% auto',
});
   
const SilverLine = () => {
  return (
    <SilverLineDiv/>
  )
}

export default SilverLine