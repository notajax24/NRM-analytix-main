// src/components/landing/CallToAction.tsx
import { Box, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import BG from '../assets/bg.png'


// Reusable scroll animation wrapper for the fade-up effect
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

export default function CallToAction() {
  return (
    <Box id='contactUs'
      sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#ffffff',
        minHeight: { md: '50vh' }, // Reduced height
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg" sx={{ width: { xs: '100%', md: '80%' } }}>
        
        {/* Header Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography 
                variant="overline" 
                sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.8rem' }}
              >
                FUTURE WITH US
              </Typography>
            </Box>
          </FadeUp>

          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 300, 
                color: '#1e293b', 
                fontSize: { xs: '1.5rem', sm: '2.25rem', md: '2.5rem', lg: '3rem' }, 
                letterSpacing: '-0.02em',
                whiteSpace: { xs: 'normal', md: 'nowrap' }
              }}
            >
              Unlock the Power of Data + AI for Your Business
            </Typography>
          </FadeUp>
        </Box>

        {/* Main CTA Card */}
        <FadeUp delay={200}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              // Using a placeholder that mimics the dark VR environment
              backgroundImage: `url(${BG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              px: { xs: 3, sm: 6, md: 12 },
          py: { xs: 4, md: 6 }, // Further reduced internal padding
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                // Dark gradient overlay to ensure text readability
                background: 'linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.95) 100%)',
                zIndex: 1
              }
            }}
          >
            {/* Inner Content (Z-index ensures it sits above the dark overlay) */}
            <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
              
              <FadeUp delay={400}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    color: '#ffffff', 
                    fontWeight: 300, 
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, 
                    lineHeight: 1.6,
                    mb: 5,
                    maxWidth: '900px',
                    mx: 'auto'
                  }}
                >
                  Whether you're starting your data journey or scaling an existing platform —{' '}
                  <Box component="span" sx={{ color: '#f87171', fontWeight: 400 }}>
                    NRM Analytix
                  </Box>{' '}
                  has the expertise to take you further, faster. Let's talk about what's possible for your organisation.
                </Typography>
              </FadeUp>


              {/* Contact Us Button */}
              <FadeUp delay={600}>
                <Button
                  component="a"
                  href="https://forms.office.com/r/A1isJqdj3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    
                    bgcolor: '#111827', // Very dark grey/black
                    color: '#e2e8f0',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    pl: 3, pr: 0.75, py: 0.75,
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      bgcolor: '#1e293b',
                      borderColor: 'rgba(255,255,255,0.2)'
                    }
                  }}
                  endIcon={
                    <Box sx={{ 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      background: 'linear-gradient(45deg, #8b5cf6 0%, #6366f1 100%)', 
                      borderRadius: '50%', width: 32, height: 32, ml: 1 
                    }}>
                      <ArrowForwardIcon sx={{ fontSize: 16, color: '#fff' }} />
                    </Box>
                  }
                >
                  Contact Us Today
                </Button>
              </FadeUp>

            </Box>
          </Box>
        </FadeUp>

      </Container>
    </Box>
  );
}