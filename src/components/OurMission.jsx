import React from 'react';
import { Grid, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SilverLine from './SilverLine';
import '../styles/OurMission.css'
import Missionimg from '../assets/slider4.jpg'
// Sample image URL (you can replace this with your own image)
// const sampleImageUrl = 'https://via.placeholder.com/600x400';
// Styled components
const ImageWrapper = styled('div')({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
const ContentWrapper = styled(Paper)(({ theme }) => ({
  height: 'fit-content',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  backgroundColor:'#c18b3e1c',
  color: theme.palette.text.secondary,
}));
const OurMission = () => {
  return (
    <section className="mission">
      <h2>Our Mission</h2>
      <SilverLine />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
          marginTop: '30px',
          // overflow: 'hidden',
        }}>
        <Grid
          container
          spacing={0}
          sx={{
            width: { xs: '90%' },
            // height: '60vh'
          }}
        >
          <Grid item xs={12} md={6}>
          <ImageWrapper>
            <StyledImage src={Missionimg} alt="Mission" />
          </ImageWrapper>
        </Grid>
          <Grid item xs={12} md={6}
           
          >
          <ContentWrapper  sx={{
              padding: { xs: '10px', md: '90px' },
            }}
              elevation={3}>
            {/* <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography> */}
            <Typography variant="body1">
                To cater to your members, guests, and associates as a valued destination of choice,
                bringing people together to have fun as a part of the balanced and healthy lifestyle.
                Our friendly, dedicated, and professional team will passionately provide a high-quality dining environment to create a memorable experience.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Strategic Planning
              </Typography>
              <Typography>
              Strategic planning is a succinct step taken to give immense satisfaction to the end
              user in satisfying their palatable necessities for business associates and develop
              relationships with key nutrition and health influent.
                The strategic planning process results in a jointly developed action plan that includes strategies and tactics to achieve business objectives.
                </Typography>
          </ContentWrapper>
        </Grid>
        </Grid>
        </Container>
    </section>
  );
};
export default OurMission;