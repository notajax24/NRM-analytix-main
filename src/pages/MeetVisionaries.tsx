// src/components/landing/MeetVisionaries.tsx
import { Box, Typography, Container, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// Fix: Added 'type' keyword for ReactNode
import { useState, useEffect, useRef, type ReactNode } from 'react'
import  CEO  from '../assets/ceo.png'
import Schema from '../components/common/Schema';
 
// Reusable scroll animation wrapper
const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Only animate once
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
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

export default function MeetVisionaries({ disableLearnMore = false }: { disableLearnMore?: boolean }) {
  const buttonProps = disableLearnMore
    ? { disabled: true as const }
    : { component: 'a' as const, href: '/about' as const };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Madhan Raghu",
    "jobTitle": "Founder & Technical Data Architect",
    "image": "https://www.nrmanalytix.com/static/ceo.png", // NOTE: Replace with your final public image URL
    "worksFor": {
      "@type": "Organization",
      "name": "NRM Analytix"
    },
    "description": "A veteran Technical Data Architect with over 15 years of experience orchestrating enterprise-scale big data architectures and analytical strategies.",
    "url": "https://www.nrmanalytix.com" // NOTE: Replace with a direct link to this section or an 'About' page if available
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff', overflow: 'hidden' }}>
      {/* Inject Person Schema for SEO */}
      <Schema data={personSchema} />

      <Container maxWidth="lg">
        
        {/* Top Header */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography 
                variant="overline" 
                sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.8rem' }}
              >
                THE ROOT PILLARS
              </Typography>
            </Box>
          </FadeUp>

          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ fontWeight: 300, color: '#1e293b', fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.02em' }}
            >
              Meet our{' '}
              <Box component="span" sx={{ color: '#f87171', fontWeight: 300 }}>
                visionaries
              </Box>
            </Typography>
          </FadeUp>
        </Box>

        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          
          {/* Left Column: Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pr: { md: 4 } }}>
              
              <FadeUp delay={200}>
                <Typography variant="h4" sx={{ fontWeight: 400, color: '#1e293b', mb: 2 }}>
                  Meet Our{' '}
                  <Box component="span" sx={{ color: '#f87171' }}>
                    Founder
                  </Box>
                </Typography>
              </FadeUp>

              {/* The overlapping name effect */}
              <FadeUp delay={300}>
                <Box 
                  sx={{ 
                    position: 'relative', 
                height: { xs: '80px', sm: '100px', md: '140px' }, 
                    display: 'flex', 
                    alignItems: 'center',
                    mb: 4
                  }}
                >
                  {/* Background faded text */}
                  <Typography 
                    sx={{ 
                      position: 'absolute', 
                  left: { xs: '-5px', md: '-20px' },
                  fontSize: { xs: '3.2rem', sm: '5rem', md: '8rem' }, 
                      fontWeight: 800, 
                      color: '#f1f5f9', // Very light grey
                      zIndex: 0,
                      whiteSpace: 'nowrap',
                      userSelect: 'none',
                      lineHeight: 1
                    }}
                  >
                Mr. Madhan
                  </Typography>
                  
                  {/* Foreground colored text */}
                  <Typography 
                    sx={{ 
                      position: 'relative', 
                  fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' }, 
                      fontWeight: 300, 
                      color: '#f87171', 
                      zIndex: 1, 
                  pl: { xs: 2, sm: 4, md: 10 }, // Offsets the text over the background
                      letterSpacing: '-0.02em'
                    }}
                  >
                  Madhan Raghu
                  </Typography>
                </Box>
              </FadeUp>

              <FadeUp delay={400}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#475569', 
                fontSize: { xs: '0.95rem', md: '1.05rem' }, 
                    lineHeight: 1.7, 
                    mb: 6 
                  }}
                >
                Madhan Raghu is a veteran Technical Data Architect with over 15 years of battle-tested experience orchestrating enterprise-scale big data architectures and analytical strategies. A recognized specialist in the Databricks ecosystem, PySpark, and complex cloud migrations, he has spent his career guiding major global financial institutions (BFSI) and enterprises through dense data transformations. Beyond his deep technical mastery in performance tuning and lakehouse engineering, Madhan is a passionate tech blogger, a published white paper author, and a community problem solver who believes that cutting-edge data solutions should be built with absolute precision and perhaps a healthy dose of humor. As the visionary behind NRM Analytix, he fuses this extensive industry expertise with a relentless passion for data to help organizations turn architectural complexity into clear, competitive advantages.
                </Typography>
              </FadeUp>

              {!disableLearnMore && (
                <FadeUp delay={500}>
                  <Button
                    {...buttonProps}
                    variant="contained"
                    sx={{
                      background: 'transparent',
                      color: '#fff',
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      fontWeight: 500,
                      px: 3, py: 1,
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      position: 'relative',
                      zIndex: 1,
                      transition: 'all 0.8s ease',
                      '&::before': {
                        content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        bgcolor: '#111827', borderRadius: 'inherit', zIndex: -1, transition: 'opacity 0.8s ease'
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
                      <Box sx={{ 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        background: 'linear-gradient(45deg, #8b74de 0%, #6038d8 100%)', 
                        borderRadius: '50%', width: 34, height: 34, ml: 1,
                        transition: 'all 0.8s ease',
                        '.MuiButton-root:hover &': { transform: 'translateX(4px)', background: '#fff' }
                      }}>
                        <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff', transition: 'color 0.8s ease', '.MuiButton-root:hover &': { color: '#111827' } }} />
                      </Box>
                    }
                  >
                    Learn More
                  </Button>
                </FadeUp>
              )}

            </Box>
          </Grid>

          {/* Right Column: CEO Portrait */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FadeUp delay={400}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'flex-end',
                  position: 'relative',
              height: { xs: '320px', sm: '400px', md: '650px' } 
                }}
              >
                <Box
                  component="img"
                  src={CEO} 
                  alt="Madhan Raghu — Director & Co-Founder, NRM Analytix"
                  loading="lazy"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom', 
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