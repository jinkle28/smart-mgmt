import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ServicesSection.css';
import { Box, Divider, Grid, Paper, ThemeProvider, Typography, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import SilverLine from './SilverLine';
import ServiceDetail from './ServiceDetail';
// Create a light theme
const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: 'BlinkMacSystemFont', // Adjust as needed
    body1: {
      fontSize: '1.2rem', // Adjust as needed
      color: '#929292', // Adjust text color
    },
  },
});

const ServicesSection = () => {
  const services = [
    { title: 'School Catering', description: 'Pupils health, wellbeing and satisfaction is at the heart of everything we do.' },
    { title: 'Corporate Service', description: 'Professional catering for corporate events, meetings, and parties.' },
    { title: 'Private Parties', description: 'Enjoy delicious food at your private parties and gatherings.' },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  return (
    <ThemeProvider theme={theme}>
    <section className="services">
        <h2 >Best Catering Services Provider in Ahmedabad </h2>
       <SilverLine/>
      <div className="service-cards">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
          // <motion.div key={index} className="service-card" initial="hidden" animate="visible" variants={cardVariants} transition={{ delay: index * 0.3 }}>
          //   <h3>{service.title}</h3>
          //   <p>{service.description}</p>
          // </motion.div>
        ))}
        </div>
        <ServiceDetail/>
        <Grid container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '20vh', marginTop:'20px' }}>
          <Grid item xs={12} >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              padding={3} // Adjust padding as needed
            >
              <Typography variant="body1" align="center">
                Smart Management offers a wide variety of catering services in Ahmedabad with amazing food to fit both your event and your budget.
                Our full catering services handle all aspects of events such as preparation, creation, delivery, and presentation of food.
                We are a team of professional caterers serving the catering needs of school, corporate, outdoor, small parties, and more.
                We understand well that the type of event will determine the type of services you need.
                Our catering solutions are tailored and designed to meet what you are looking for and what to create to inspire an exciting catering experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </section>
      </ThemeProvider>
      
  );
};
export default ServicesSection;