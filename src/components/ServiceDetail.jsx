import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box, Icon, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventIcon from '@mui/icons-material/Event';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Fade from '@mui/material/Fade';

const services = [
    { title: 'Customized Menus', description: 'We offer a variety of menu options tailored to meet the specific preferences and dietary requirements of your employees, ensuring everyone can enjoy their meals', icon: <MenuBookIcon /> },
    { title: 'Fresh Ingredients', description: 'We prioritize the use of fresh, locally sourced ingredients, ensuring the highest quality and taste in every meal we serve.', icon: <VerifiedIcon /> },
    { title: 'On-Site Cafeteria Management', description: 'Our professional team handles all aspects of the cafeteria, including meal preparation, serving, and maintaining a clean, inviting dining environment, allowing your team to focus on their work.', icon: <EmojiFoodBeverageIcon /> },
    { title: 'Special Events Catering', description: 'We provide exceptional catering services for corporate events, meetings, and special occasions, adding a touch of culinary excellence to your events.', icon: <LocalDiningIcon /> },
];
const ServiceDetail = () => {
    return (
        <Container maxWidth="lg">
            <Box mt={5} mb={5} textAlign="center">
                {/* <Typography variant="h4" gutterBottom>
                Our Services Include:
                </Typography> */}
                <Typography variant="subtitle1" color="textSecondary">
                Our Services Include:
                </Typography>
            </Box>
            {services.map((service, index) => (
                <Accordion
                    key={index}
                    defaultExpanded
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Box display="flex" alignItems="center">
                            <Icon fontSize="large" sx={{color:'#c18b3e87'}}>
                                {service.icon}
                            </Icon>
                            <Typography variant="h6" ml={2}>
                                {service.title}
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {service.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
};
export default ServiceDetail;