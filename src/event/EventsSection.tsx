// src/pages/EventsSection.tsx
import { Box, Typography, Container, Button, Card, Stack, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import { useState, useEffect, useRef, type ReactNode } from 'react';

// Replace with your actual image paths
import heroBg from '../assets/events/auditorium.png'; 
import eventThumb from '../assets/events/databricks-thumb.png';

// Reusable scroll animation wrapper
const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <Box ref={ref} sx={{
      opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`, willChange: 'opacity, transform'
    }}>{children}</Box>
  );
};

export default function EventsSection() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const galleryItems = [
    { src: heroBg },
  ];

  const handleGalleryScroll = (direction: 'prev' | 'next') => {
    setCarouselIndex((current) => {
      const next = direction === 'next' ? current + 1 : current - 1;
      return (next + galleryItems.length) % galleryItems.length;
    });
  };

  // SEO & Open Graph Meta Tags Hook
  useEffect(() => {
    document.title = "Events | NRM Analytix";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Discover upcoming corporate events, webinars, and key takeaways from industry summits like Databricks Data+AI with NRM Analytix.');

    // Open Graph Tags for Social Sharing
    const ogTags = {
      'og:title': 'Events | NRM Analytix',
      'og:description': 'Join NRM Analytix for upcoming corporate events, tech webinars, and industry summits.',
      'og:image': 'https://nrmanalytix.com/preview.png',
      'og:type': 'website'
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) { 
        tag = document.createElement('meta'); 
        tag.setAttribute('property', property); 
        document.head.appendChild(tag); 
      }
      tag.setAttribute('content', content);
    });
  }, []);

  return (
    <Box sx={{ py: 8, bgcolor: '#fcfcfd', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        
        {/* Featured Event Hero */}
        <FadeUp delay={100}>
          <Box 
            sx={{ 
              position: 'relative',
              height: { xs: 350, md: 450 },
              borderRadius: '24px',
              overflow: 'hidden',
              mb: 8,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start', 
              p: { xs: 3, sm: 4, md: 6 },
              bgcolor: '#0f172a',
              color: 'white',
            }}
          >
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
              {galleryItems.map((item, index) => (
                <Box
                  key={item.src}
                  component="img"
                  src={item.src}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: carouselIndex === index ? 1 : 0,
                    transform: carouselIndex === index ? 'scale(1)' : 'scale(1.04)',
                    transition: 'opacity 0.9s ease-in-out, transform 0.9s ease-in-out',
                    filter: 'brightness(0.6) saturate(1.1)',
                  }}
                />
              ))}
            </Box>
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))' }} />
            
            {/* Text Content */}
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#7c3aed' }} />
                <Typography variant="overline" sx={{ opacity: 0.9, letterSpacing: 1.5, color: '#c4b5fd' }}>
                  UPCOMING EVENTS
                </Typography>
              </Box>
              
              <Typography variant="h3" sx={{ fontWeight: 300, mt: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Databricks <Box component="span" sx={{ color: '#ef4444' }}>DATA+AI</Box> Summit 2026-key Takeaways
              </Typography>
            </Box>
          
            {/* Bottom Center Notch with Arrows */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                bgcolor: '#ffffff',
                px: 4,
                py: 2,
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
                display: 'flex',
                gap: 3,
                zIndex: 10,
              }}
            >
              <Box 
                onClick={() => handleGalleryScroll('prev')}
                sx={{ 
                  width: 42, height: 42, borderRadius: '50%', border: '1px solid #7c3aed', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  cursor: 'pointer', color: '#7c3aed', transition: 'all 0.2s ease',
                  '&:hover': { bgcolor: '#f3e8ff' } 
                }}
              >
                <ArrowBackIcon sx={{ fontSize: 20 }} />
              </Box>
              <Box 
                onClick={() => handleGalleryScroll('next')}
                sx={{ 
                  width: 42, height: 42, borderRadius: '50%', border: '1px solid #7c3aed', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  cursor: 'pointer', color: '#7c3aed', transition: 'all 0.2s ease',
                  '&:hover': { bgcolor: '#f3e8ff' } 
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: 20 }} />
              </Box>
            </Box>
          </Box>
        </FadeUp>

        {/* Event Card */}
        <FadeUp delay={300}>
          <Card 
            elevation={0} 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              borderRadius: '24px', 
              border: '1px solid #e2e8f0', 
              p: { xs: 2, sm: 3 }, 
              gap: { xs: 3, md: 4 },
              bgcolor: '#ffffff',
              transition: 'box-shadow 0.3s ease',
              '&:hover': { boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }
            }}
          >
            <Box 
              component="img" 
              src={eventThumb} 
              sx={{ width: { xs: '100%', md: '220px' }, height: { xs: '200px', md: '220px' }, borderRadius: '16px', objectFit: 'cover' }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
              <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', mb: 4 }}>
                <Chip 
                  icon={<CalendarTodayOutlinedIcon sx={{ fontSize: 16, color: '#ef4444 !important' }} />} 
                  label="11-July-2026, 09:30 PM IST" 
                  size="medium" variant="outlined" sx={{ borderRadius: '50px', color: '#64748b', borderColor: '#e2e8f0', bgcolor: '#f8fafc' }}
                />
                <Chip 
                  icon={<LanguageIcon sx={{ fontSize: 16, color: '#ef4444 !important' }} />} 
                  label="Microsoft Teams" 
                  size="medium" variant="outlined" sx={{ borderRadius: '50px', color: '#64748b', borderColor: '#e2e8f0', bgcolor: '#f8fafc' }}
                />
              </Stack>
              <Typography variant="h4" sx={{ fontWeight: 400, mb: 4, color: '#1e293b', fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                Databricks Data+AI Summit 2026-Key Takeaways
              </Typography>
              <Typography variant="body1" sx={{ color: '#475569', mb: 4, lineHeight: 1.8, maxWidth: { xs: '100%', md: '90%' } }}>
                Join us for the Databricks Data+AI Summit wrap-up with essential highlights, sessions, and event learnings.
              </Typography>
              <Button 
                component="a" href="https://forms.office.com/r/nm26f4E32z" target="_blank" rel="noopener noreferrer"
                variant="contained"
                sx={{ 
                  alignSelf: 'flex-start', borderRadius: '50px', textTransform: 'none', px: 3.5, py: 1.2,
                  background: 'transparent', color: '#fff', position: 'relative', zIndex: 1,
                  '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: '#111827', borderRadius: 'inherit', zIndex: -1, transition: 'opacity 0.8s ease' },
                  '&::after': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(90deg, #7c3aed, #ec4899)', borderRadius: 'inherit', zIndex: -2 },
                  '&:hover::before': { opacity: 0 },
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 10px 25px rgba(124, 58, 237, 0.3)' }
                }}
                endIcon={
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#7c3aed', borderRadius: '50%', width: 34, height: 34, ml: 1, transition: 'all 0.8s ease', '.MuiButton-root:hover &': { transform: 'translateX(4px)', bgcolor: '#fff' } }}>
                    <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff', transition: 'color 0.8s ease', '.MuiButton-root:hover &': { color: '#7c3aed' } }} />
                  </Box>
                }
              >
                Registrations Open
              </Button>
            </Box>
          </Card>
        </FadeUp>
      </Container>
    </Box>
  );
}