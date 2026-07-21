// src/components/landing/MeetLeadership.tsx
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import CEO from '../assets/ceo.png';

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
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </Box>
  );
};

export default function MeetLeadership() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        
        {/* Top Header Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography 
                variant="overline" 
                sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.85rem' }}
              >
                MEET OUR LEADERSHIP
              </Typography>
            </Box>
          </FadeUp>

          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ fontWeight: 300, color: '#1e293b', fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.02em', mb: 3 }}
            >
              The People Behind{' '}
              <Box component="span" sx={{ color: '#f87171', fontWeight: 300 }}>
                NRM Analytix
              </Box>
            </Typography>
          </FadeUp>

          <FadeUp delay={200}>
            <Typography 
              variant="body1" 
              sx={{ color: '#475569', fontSize: { xs: '1rem', md: '1.05rem' }, lineHeight: 1.7, maxWidth: '1500px' }}
            >
              NRM Analytix was founded by two passionate data professionals with a shared conviction: that Indian organisations deserve world-class Data and AI consulting — delivered with honesty, expertise, and genuine care for outcomes.
            </Typography>
          </FadeUp>
        </Box>

        {/* Profile Section Grid */}
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          
          {/* Left Column: Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pr: { md: 4 } }}>
              
              <FadeUp delay={300}>
                <Typography variant="h4" sx={{ fontWeight: 400, color: '#1e293b', mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                  Meet Our{' '}
                  <Box component="span" sx={{ color: '#f87171' }}>
                    Director & Co-Founder
                  </Box>
                </Typography>
              </FadeUp>

              {/* Overlapping Name Effect */}
              <FadeUp delay={400}>
                <Box 
                  sx={{ 
                    position: 'relative', 
                    height: { xs: '100px', md: '140px' }, 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: 4
                  }}
                >
                  {/* Background faded text */}
                  <Typography 
                    sx={{ 
                      position: 'absolute', 
                      left: { xs: '-10px', md: '-20px' },
                      fontSize: { xs: '4.5rem', sm: '5rem', md: '7.5rem' }, 
                      fontWeight: 800, 
                      color: '#f1f5f9', // Very light grey
                      zIndex: 0,
                      whiteSpace: 'nowrap',
                      userSelect: 'none',
                      lineHeight: 1,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Mr. Madan
                  </Typography>
                  
                  {/* Foreground colored text */}
                  <Typography 
                    sx={{ 
                      position: 'relative', 
                      fontSize: { xs: '2.5rem', sm: '2.5rem', md: '3.5rem' }, 
                      fontWeight: 300, 
                      color: '#f87171', 
                      zIndex: 1, 
                      pl: { xs: 2, sm: 4, md: 6 }, // Offsets the text over the background
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Madan Raghu
                  </Typography>
                </Box>
              </FadeUp>

              <FadeUp delay={500}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#475569', 
                    fontSize: '1.05rem', 
                    lineHeight: 1.7, 
                    mb: 6 
                  }}
                >
                  Madhan Raghu is a veteran Technical Data Architect with over 15 years of battle-tested experience orchestrating enterprise-scale big data architectures and analytical strategies. A recognized specialist in the Databricks ecosystem, PySpark, and complex cloud migrations, he has spent his career guiding major global financial institutions (BFSI) and enterprises through dense data transformations. Beyond his deep technical mastery in performance tuning and lakehouse engineering, Madhan is a passionate tech blogger, a published white paper author, and a community problem solver who believes that cutting-edge data solutions should be built with absolute precision and perhaps a healthy dose of humor. As the visionary behind NRM Analytix, he fuses this extensive industry expertise with a relentless passion for data to help organizations turn architectural complexity into clear, competitive advantages.
                </Typography>
              </FadeUp>

              <FadeUp delay={600}>
                <Button
                  component="a"
                  href="/about"
                  variant="contained"
                  sx={{
                    background: 'transparent',
                    color: '#fff',
                    borderRadius: '50px',
                    textTransform: 'none',
                    px: { xs: 2.5, md: 3 }, py: { xs: 0.8, md: 1 },
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                    fontWeight: 600,
                    position: 'relative',
                    zIndex: 1,
                    transition: 'all 0.8s ease',
                    '&::before': {
                      content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                      bgcolor: '#191529', borderRadius: 'inherit', zIndex: -1, transition: 'opacity 0.8s ease'
                    },
                    '&::after': {
                      content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                      background: 'linear-gradient(90deg, #6b21a8, #ec4899)', borderRadius: 'inherit', zIndex: -2
                    },
                    '&:hover::before': { opacity: 0 },
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 10px 25px rgba(107, 33, 168, 0.3)'
                    }
                  }}
                  endIcon={
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#8b5cf6', borderRadius: '50%', width: { xs: 28, md: 32 }, height: { xs: 28, md: 32 }, ml: { xs: 0.5, md: 1 }, transition: 'all 0.8s ease', '.MuiButton-root:hover &': { transform: 'translateX(4px)', bgcolor: '#fff' } }}>
                <ArrowForwardIcon sx={{ fontSize: { xs: 16, md: 18 }, color: '#fff', transition: 'color 0.8s ease', '.MuiButton-root:hover &': { color: '#191529' } }} />
              </Box>
            }
          >
            Learn More
                </Button>
              </FadeUp>

            </Box>
          </Grid>

          {/* Right Column: Portrait */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeUp delay={500}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: { xs: 'center', md: 'flex-end' }, 
                  alignItems: 'flex-end',
                  position: 'relative',
                  height: { xs: '320px', sm: '400px', md: '650px' } 
                }}
              >
                {/* Ensure the image used here has a transparent background (PNG) */}
                <Box
                  component="img"
                  src={CEO} 
                  alt="Madan Raghu"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom', // Anchors the portrait to the bottom of the container
                  }}
                />
              </Box>
            </FadeUp>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}