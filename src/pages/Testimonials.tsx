// src/components/landing/Testimonials.tsx
import { useState, useEffect, useRef, type ReactNode } from 'react';
import { Box, Typography, Container, Grid, Stack } from '@mui/material';

import Testimonial1Img from '../assets/testimonials/testimonial1.png';
import Testimonial2Img from '../assets/testimonials/testimonial2.png';
import Testimonial3Img from '../assets/testimonials/testimonial3.jpg';

const testimonialsData = [
 {
    image: Testimonial1Img,
    quote: 'NRM Analytix has provided excellent support for our customer’s daily reporting operations over the past 15 months. Madhan has been outstanding to work with — reliable, highly skilled, and deeply knowledgeable in ',
    highlight: 'Databricks, Power BI, and data analytics.',
    quoteEnd: ' We especially appreciated his commitment to making sure the reporting was completed every day, come rain or shine.',
   author: 'Dr Jamie Sherrah\nFounder, Machine Learning & Computer Vision Technical Lead',
    stat: '15 Months of Dedicated Daily Reporting Support'
  },
  {
    image: Testimonial2Img,
    quote: 'NRM Analytix transformed how we analyze our Rolld outlets, giving us clearer, faster insights. ',
    highlight: 'We’re now making more data-driven decisions',
    quoteEnd: ' that boost performance across the network.',
    author: 'Ray Esquieres\nCustomer',
    stat: "Roll'd Australia"
  },
  {
    image: Testimonial3Img,
    quote: 'Oawj Consulting worked with NRM Analytix to deploy Databricks and Microsoft Copilot in our France and Gabon regions. Oawj delivered quick access to specialists and actionable presales and sales advice, ',
    highlight: 'accelerating our implementation and go-to-market efforts.',
    quoteEnd: '',
    author: 'Oawj Consulting',
    stat: 'Databricks & Copilot Deployment'
  }
];

// Reusable scroll animation wrapper
const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <Box ref={ref} sx={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      willChange: 'opacity, transform'
    }}>{children}</Box>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        
        {/* Header Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography 
                variant="overline" 
                sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.8rem' }}
              >
                TESTIMONIALS
              </Typography>
            </Box>
          </FadeUp>
          
          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ fontWeight: 300, color: '#1e293b', mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.02em' }}
            >
              What Our{' '}
              <Box component="span" sx={{ 
                background: 'linear-gradient(90deg, #f87171 0%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 300 
              }}>
                Clients Say
              </Box>
            </Typography>
          </FadeUp>
          
          <FadeUp delay={200}>
            <Typography variant="body1" sx={{ color: '#475569', fontSize: '1rem', maxWidth: '850px' }}>
              Real People from Businesses and Individuals who trusted my content to elevate their brands.
              <Box component="span" sx={{ color: '#8b5cf6', ml: 0.5 }}>
                Their words reflect the impact of our works
              </Box>
            </Typography>
          </FadeUp>
        </Box>

        {/* Split Content Section */}
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          
          {/* Left Column: Stacked Images */}
          <Grid size={{ xs: 12, md: 3 }}>
            <FadeUp delay={300}>
              <Stack 
                direction={{ xs: 'row', md: 'column' }}
                spacing={{ xs: 1.5, sm: 2, md: 3 }} 
                sx={{ maxWidth: '100%', mx: 'auto', justifyContent: 'center', mb: { xs: 3, md: 0 } }}
              >
                {testimonialsData.map((testimonial, index) => (
                  <Box 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      width: { xs: activeIndex === index ? '110px' : '75px', md: '100%' },
                      height: { xs: activeIndex === index ? '110px' : '75px', md: activeIndex === index ? '160px' : '90px' }, 
                      borderRadius: '16px', // Modern rounded rectangles instead of small circles
                      flexShrink: 0,
                      overflow: 'hidden',
                      boxShadow: activeIndex === index ? '0 20px 40px rgba(139, 92, 246, 0.25)' : '0 4px 10px rgba(0,0,0,0.05)',
                      border: activeIndex === index ? '3px solid #8b5cf6' : '3px solid #ffffff', 
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      opacity: activeIndex === index ? 1 : 0.6,
                      '&:hover': {
                        opacity: 1,
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={testimonial.image}
                      alt=""
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Fills the entire container without whitespace
                        objectPosition: 'center', // Centers the image perfectly
                        display: 'block', // Removes the inline bottom whitespace gap
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </FadeUp>
          </Grid>

          {/* Right Column: The Quote Card */}
          <Grid size={{ xs: 12, md: 9 }}>
            <FadeUp delay={400}>
              <Box 
                sx={{ 
                  position: 'relative', 
                  bgcolor: '#f4f4f5', // Light grey background 
                  borderRadius: '24px', 
                  p: { xs: 4, md: 8, lg: 10 },
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: { xs: '540px', sm: '460px', md: '520px' }, // Fixed height to stop glitchy resizing
                }}
              >
                {/* Decorative Giant Quotes */}
                <Typography 
                  sx={{ 
                    position: 'absolute', 
                    top: { xs: -10, md: -20 }, 
                    right: { xs: 20, md: 40 }, 
                    fontSize: { xs: '12rem', md: '18rem' }, 
                    fontFamily: 'serif', 
                    lineHeight: 1, 
                    color: '#ffffff', // White quote to blend subtly into the grey
                    userSelect: 'none',
                    zIndex: 0
                  }}
                >
                  &rdquo;
                </Typography>
                <Typography 
                  sx={{ 
                    position: 'absolute', 
                    bottom: { xs: -40, md: -60 }, 
                    left: { xs: 10, md: 20 }, 
                    fontSize: { xs: '14rem', md: '22rem' }, 
                    fontFamily: 'serif', 
                    lineHeight: 1, 
                    color: 'rgba(248, 113, 113, 0.15)', // Light coral/pink for the left quote
                    userSelect: 'none',
                    zIndex: 0
                  }}
                >
                  &ldquo;
                </Typography>
  
                {/* Actual Quote Text Content */}
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#1e293b', 
                      fontWeight: 400, 
                  fontSize: { xs: '1.05rem', sm: '1.25rem', md: '1.75rem' }, 
                      lineHeight: 1.6,
                      textAlign: 'center',
                  mb: { xs: 2, md: 4 },
                  height: { xs: '300px', sm: '220px', md: '260px' }, // Strictly fixed height so the author stays pinned
                  overflow: 'hidden'
                    }}
                  >
                    {activeTestimonial.quote}
                    <Box component="span" sx={{ color: '#f87171' }}>{activeTestimonial.highlight}</Box>
                    {activeTestimonial.quoteEnd}
                  </Typography>
  
                  <Typography 
                    sx={{ 
                      textAlign: 'center', 
                      color: '#7c3aed', // Purple attribution
                      fontWeight: 500,
                      fontSize: '1.1rem',
                      lineHeight: 1.5,
                      whiteSpace: 'pre-line' // respects \n in the author string
                    }}
                  >
                    {activeTestimonial.author} <br />
                    <Box component="span" sx={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 400 }}>{activeTestimonial.stat}</Box>
                  </Typography>
                </Box>
              </Box>
            </FadeUp>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}