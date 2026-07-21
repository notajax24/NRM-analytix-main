// src/pages/BlogPage.tsx
import { Box, Typography, Container, Button, Card, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import digestBlogImage from '../assets/digest/blog.png';
import mayDigest from '../assets/digest/Databricks_Digest_May2026.pdf';
import juneDigest from '../assets/digest/Databricks_Digest_June2026.pdf';

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

export default function BlogPage() {
  
  // Data for the Digest Cards
 
const digests = [
  { month: 'May', year: '2026', link: mayDigest },
  { month: 'June', year: '2026', link: juneDigest },
];

  // SEO & Open Graph Meta Tags Hook
  useEffect(() => {
    document.title = "Blog & Insights | NRM Analytix";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Read our curated monthly digest covering analytics insights, Databricks releases, and real-world data strategy stories.');

    // Open Graph Tags for Social Sharing
    const ogTags = {
      'og:title': 'Blog & Insights | NRM Analytix',
      'og:description': 'Read our curated monthly digest with analytics insights and the latest business intelligence highlights.',
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
    <Box sx={{ 
      pt: { xs: 4, md: 6 }, // Adjusted padding for the new hero layout
      pb: 8, 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(238,242,255,0.7) 0%, rgba(253,242,248,0.7) 100%)',
    }}>
      <Container maxWidth="lg">
        
        {/* Page Header with Background Image */}
        <FadeUp delay={0}>
          <Box 
            sx={{ 
              position: 'relative',
              textAlign: 'center', 
              mb: 8,
              py: { xs: 8, md: 12 },
              px: 3,
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              // Replace this URL with your own local image import if you have one!
              backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85)), url(${digestBlogImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#a78bfa' }} /> {/* Lighter purple for dark bg */}
                <Typography variant="overline" sx={{ color: '#a78bfa', letterSpacing: 1.5, fontWeight: 500 }}>
                  INSIGHTS & UPDATES
                </Typography>
              </Box>
              <Typography variant="h2" sx={{ fontWeight: 300, color: '#ffffff', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
                Monthly Blog <Box component="span" sx={{ color: '#f87171' }}>Digest</Box>
              </Typography>
              <Typography variant="body1" sx={{ color: '#cbd5e1', maxWidth: '600px', mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Curated analytics insights, platform releases, and real-world data strategy stories delivered every month.
              </Typography>
            </Box>
          </Box>
        </FadeUp>

        {/* Monthly Blog Digest Layout */}
        <Stack spacing={4}>
          {digests.map((digest, index) => (
            <FadeUp delay={200 + index * 100} key={`${digest.month}-${digest.year}`}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                
                {/* Left Thumbnail Card */}
                <Card elevation={0} sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  width: { xs: '100%', md: '280px' },
                  minHeight: '260px',
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  bgcolor: '#ffffff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)' }
                }}>
                  {/* SVG Watermark */}
                  <Box sx={{ position: 'absolute', right: 40, bottom: 40, opacity: 0.1, transform: 'scale(1.4)', pointerEvents: 'none' }}>
                    <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 20 L85 37.5 L50 55 L15 37.5 Z" stroke="#ef4444" strokeWidth="6" strokeLinejoin="round" />
                      <path d="M50 40 L85 57.5 L50 75 L15 57.5 Z" stroke="#ef4444" strokeWidth="6" strokeLinejoin="round" />
                      <path d="M50 60 L85 77.5 L50 95 L15 77.5 Z" stroke="#ef4444" strokeWidth="6" strokeLinejoin="round" />
                    </svg>
                  </Box>
                  
                  {/* Top Tiny Logo Text */}
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: '#1e293b', mb: 3 }}>
                      Data<Box component="span" sx={{ color: '#ef4444' }}>bricks</Box> Digest
                    </Typography>
                    
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#1e293b', lineHeight: 1.1, fontSize: '1.75rem' }}>
                      Lake <Box component="span" sx={{ color: '#7c3aed' }}>House</Box>
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600, color: '#1e293b', lineHeight: 1.1, fontSize: '1.75rem' }}>
                      Platform
                    </Typography>
                  </Box>

                  {/* Month/Year */}
                  <Typography variant="h5" sx={{ position: 'relative', zIndex: 1, fontWeight: 300, color: '#1e293b', fontSize: '1.5rem', mt: 3 }}>
                    {digest.month} {digest.year}
                  </Typography>
                </Card>

                {/* Right Content Card */}
                <Card elevation={0} sx={{
                  flex: 1,
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  p: { xs: 3, md: 5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  bgcolor: '#ffffff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)' }
                }}>
                  
                  <Typography variant="h5" sx={{ fontWeight: 300, color: '#1e293b', mb: 4, letterSpacing: '0.02em', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    DATA<Box component="span" sx={{ color: '#ef4444' }}>BRICKS</Box> DIGEST <Box component="span" sx={{ color: '#ef4444' }}>{digest.month} — {digest.year}</Box>
                  </Typography>
                  
                  <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.6, mb: 6, maxWidth: '850px' }}>
                    <Box component="span" sx={{ color: '#7c3aed' }}>Covering the Databricks Lakehouse platform — </Box>
                    <Box component="span" sx={{ color: '#ef4444' }}>releases, capabilities, and engineering decisions behind them.</Box>
                  </Typography>

                  <Box>
                    <Button 
                      variant="outlined"
                      href={digest.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        borderRadius: '50px', 
                        borderColor: '#7c3aed', 
                        color: '#7c3aed', 
                        textTransform: 'none',
                        fontWeight: 400,
                        fontSize: '0.9rem',
                        pl: 3, pr: 1, py: 0.75,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: '#7c3aed',
                          color: '#fff',
                          '& .circle-icon': { bgcolor: '#fff', color: '#7c3aed' }
                        }
                      }}
                      endIcon={
                        <Box className="circle-icon" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#7c3aed', color: '#fff', borderRadius: '50%', width: 26, height: 26, ml: 1, transition: 'all 0.3s ease' }}>
                          <ArrowForwardIcon sx={{ fontSize: 16 }} />
                        </Box>
                      }
                    >
                      View Digest
                    </Button>
                  </Box>
                </Card>

              </Box>
            </FadeUp>
          ))}
        </Stack>

      </Container>
    
    </Box>
  );
}