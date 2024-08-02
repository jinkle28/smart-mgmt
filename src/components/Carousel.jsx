import React, { useEffect, useState } from 'react';
import '../styles/Carousel.css';
import { Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const HomeDiv = styled('div')(({ theme }) => ({
    position: 'absolute',
    textAlign: 'center',
    padding: theme.spacing(8, 0),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    zIndex: '2'
}));
const StyledButton = styled(Button)({
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#dec3a0',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
    '&: hover': {
        backgroundColor: '#c18b3e'
    }
  })
const HeroTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (
        <Grid container sx={{height:'100vh'}} spacing={2} >
            <Grid xs={12} className="carousel-content">
                <div className='overlay'></div> 
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
                {/* <div className="carousel-overlay"> */}
                <HomeDiv>
                    <HeroTitle variant="h2">Smart Management Services</HeroTitle>
                    <Typography variant="h6" paragraph>
                        Delight in our exquisite culinary creations tailored to your events. From intimate gatherings to grand celebrations, we deliver unparalleled service and taste.
                    </Typography>
                    <StyledButton
                        href='#contact'
                        variant="contained"
                        // sx={{ background: '#c18b3e87', color: 'white' }}
                    >
                        Contact Us
                    </StyledButton>
                </HomeDiv>
            </Grid>
            {/* <button onClick={prevSlide} className="carousel-button left">Previous</button>
            <button onClick={nextSlide} className="carousel-button right">Next</button> */}
        </Grid>
    );
};

export default Carousel