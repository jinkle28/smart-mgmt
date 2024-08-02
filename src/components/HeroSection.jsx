import React from 'react';
import { motion } from 'framer-motion';
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/HeroSection.css';
import Slider1 from '../assets/slider1.jpg'
import Slider2 from '../assets/slider2.jpg'
import Slider3 from '../assets/slider3.jpg'
import Slider4 from '../assets/slider4.jpg'
import Carousel from './Carousel';

const HeroSection = () => {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };
  const CarouselImages = [
    Slider1,Slider2,Slider3,Slider4
  ]
  // const CarouselCaption = ['Welcome To Smart Management']
  return (
    <motion.section className="hero" initial="hidden" animate="visible" variants={heroVariants}>
      <Carousel images={CarouselImages} />
    </motion.section>
  );
};
export default HeroSection;