import React from 'react';
import { Grid, Typography, Container, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import SilverLine from './SilverLine';
import '../styles/Contact.css'
// Styled components
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ContactInfoWrapper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    // width: '100%',
    height: '70%',
    background: '#c18b3e1c',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
}));
const IconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
}));
const Footer = styled('footer')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    textAlign: 'center',
}));
const ContactSection = () => {
    return (
        <section className="contact">
            <h2 >Contact Us</h2>
            <SilverLine />

            <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={4}>
                        <ContactInfoWrapper elevation={3}>
                        <IconWrapper>
                                <Phone fontSize="large" />
                            </IconWrapper>
                            <Typography variant="h6">Phone</Typography>
                            <Typography variant="body1" fontWeight={700}>+91 9173366226</Typography>

                        </ContactInfoWrapper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <ContactInfoWrapper elevation={3}>
                            <IconWrapper>
                                <Email fontSize="large" />
                            </IconWrapper>
                            <Typography variant="h6">Email</Typography>
                            <Typography variant="body1" fontWeight={700}>smartmanagement13@gmail.com</Typography>
                        </ContactInfoWrapper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <ContactInfoWrapper elevation={3}>
                            <IconWrapper>
                                <LocationOn fontSize="large" />
                            </IconWrapper>
                            <Typography variant="h6">Address</Typography>
                            <Typography variant="body1" fontWeight={700}>2- Natwar Shyam  near heaven park banglow behind shalby hospital Prahlad Nagar satellite Ahmedabad</Typography>
                        </ContactInfoWrapper>
                    </Grid>
                </Grid>
            </Box>

            {/* <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '40vh',
                    marginTop: '30px'
                }}>
                <Grid container spacing={3} sx={{ width: { xs: '90%', md: '70%' } }}>
                    <Grid item xs={12} md={4}>
                        <ContactInfoWrapper elevation={3}>
                            <IconWrapper>
                                <Phone fontSize="large" />
                            </IconWrapper>
                            <Typography variant="h6">Phone</Typography>
                            <Typography variant="body1">+91 9173366226</Typography>
                        </ContactInfoWrapper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ContactInfoWrapper elevation={3}>
                            <IconWrapper>
                                <Email fontSize="large" />
                            </IconWrapper>
                            <Typography variant="h6">Email</Typography>
                            <Typography variant="body1">jp@gmail.com</Typography>
                        </ContactInfoWrapper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ContactInfoWrapper elevation={3}>
                            <IconWrapper>
                                <LocationOn fontSize="large" />
                            </IconWrapper>
                            <Typography variant="h6">Address</Typography>
                            <Typography variant="body1">Vishal Tower, Ahmedabad</Typography>
                        </ContactInfoWrapper>
                    </Grid>
                </Grid>
                <Footer>
                    <Typography variant="body2" color="textSecondary">
                        © {new Date().getFullYear()} Smart Management. All rights reserved.
                    </Typography>
                </Footer>
            </Container> */}
             <Footer>
                    <Typography variant="body2" color="textSecondary">
                        © {new Date().getFullYear()} Smart Management. All rights reserved.
                    </Typography>
                </Footer>
        </section>
    );
};
export default ContactSection;


// import React from 'react';
// import { Container, Grid, Typography, Paper, Box } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import { motion } from 'framer-motion';
// import SilverLine from './SilverLine';
// import '../styles/Contact.css'
// // Styled components
// const ContentBox = styled(Box)(({ theme }) => ({
//     padding: theme.spacing(4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[3],
//     borderRadius: theme.shape.borderRadius,
// }));
// const IconBox = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: theme.spacing(2),
//     color: theme.palette.primary.main,
// }));
// const ContactSection = () => {

//     const cardVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//     };

//     const contactDetails = [
//         { title: 'Address', description: 'Ahmedabad' },
//         { title: 'Phone', description: '+91 9588289120' },
//         { title: 'Email', description: 'jp@gmail.com'}
//     ]

//     return (
//         <section className="contact">
//             <h2 >Contact Us</h2>
//             <SilverLine />
//             <div className="contact-cards">
//         {contactDetails.map((contact, index) => (
//           <motion.div
//             key={index}
//             className="contact-card"
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//             initial="hidden"
//             animate="visible"
//             variants={cardVariants}
//             transition={{ type: "spring", stiffness: 400, damping: 17 }}
//           >
//             <h3>{contact.title}</h3>
//             <p>{contact.description}</p>
//           </motion.div>
//         ))}
//       </div>
//         </section>
//     );
// };
// export default ContactSection;