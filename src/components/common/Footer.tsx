// src/components/landing/Footer.tsx
import { Box, Typography, Container, Grid, Stack, Link, IconButton } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logoNRM from '../../assets/logoNRM.png';

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

// Updated footer links with actual routing paths
const footerLinks = {
  company: [
    { label: 'Careers', path: '/careers' },
    { label: 'LinkedIn', path: 'https://linkedin.com/company/nrm-analytix' }, // External link
    { label: 'About NRM Analytix', path: '/about' }
  ],
  solutions: [
    { label: 'Data Engineering', path: '/solutions#practice1' },
    { label: 'Enterprise Analytics', path: '/solutions#practice2' },
    { label: 'AI & Machine Learning', path: '/solutions#practice3' },
    { label: 'Cloud & Platform Migration', path: '/solutions' }
  ],
  products: [
    { label: 'Metaflow', path: '/products/meta-flow' },
    { label: 'Code Switch', path: '/products' },
    { label: 'FinOps Copilot', path: '/products/finops-copilot' },
    { label: 'Talend Job Analyzer', path: '/products/talend-job-analyzer' },
    { label: 'DevSync', path: '/products/dev-sync' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
    { label: 'Legal Notice', path: '/legal-notice' }
  ]
};

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#ffffff', pt: { xs: 8, md: 12 }, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        
        {/* Top Footer Section */}
        <Grid container spacing={6} sx={{ mb: { xs: 10, md: 16 } }}>
          
          {/* Column 1: Logo & Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FadeUp delay={0}>
              <Box sx={{ mb: 4 }}>
                <Box
                  component="img"
                  src={logoNRM}
                  alt="NRM Analytix — Data and AI Consulting Company India"
                  sx={{ height: '80px', objectFit: 'contain', mb: 3 }}
                />
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  <PlaceIcon sx={{ color: '#f87171', fontSize: 20 }} />
                  <Typography 
                    variant="body1" 
                    sx={{ color: '#f87171', fontWeight: 500, letterSpacing: 0.5 }}
                  >
                    CONTACT@NRMANALYTIX.COM
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  <PhoneIcon sx={{ color: '#f87171', fontSize: 20 }} />
                  <Typography variant="body1" sx={{ color: '#191529', fontWeight: 500, letterSpacing: 0.5 }}>
                    +91 86678 44087
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ color: '#1e293b', fontWeight: 500, letterSpacing: 0.5, fontSize: '0.85rem', mb: 3 }}>
                  KANCHEEPURAM, TAMIL NADU - 631502, INDIA
                </Typography>

                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                  <IconButton
                    component="a"
                    href="https://in.linkedin.com/company/nrm-analytix"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ bgcolor: '#eef2ff', color: '#0f172a', '&:hover': { bgcolor: '#e0d7ff' } }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  {/* <IconButton
                    component="a"
                    href="https://twitter.com/nrmanalytix"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ bgcolor: '#eef2ff', color: '#0f172a', '&:hover': { bgcolor: '#e0d7ff' } }}
                  >
                    <TwitterIcon />
                  </IconButton> */}
                  <IconButton
                    component="a"
                    href="https://instagram.com/nrm_analytix"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ bgcolor: '#eef2ff', color: '#0f172a', '&:hover': { bgcolor: '#e0d7ff' } }}
                  >
                    <InstagramIcon />
                  </IconButton>
                </Box>
              </Box>
            </FadeUp>
          </Grid>

          {/* Column 2: Company */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <FadeUp delay={100}>
              <Typography variant="h6" sx={{ color: '#f87171', fontWeight: 400, mb: 3, letterSpacing: 1 }}>
                COMPANY
              </Typography>
              <Stack spacing={2.5}>
                {footerLinks.company.map((item) => (
                  <Link 
                    component={item.path.startsWith('http') ? 'a' : RouterLink}
                    to={item.path.startsWith('http') ? undefined : item.path}
                    href={item.path.startsWith('http') ? item.path : undefined}
                    target={item.path.startsWith('http') ? '_blank' : undefined}
                    rel={item.path.startsWith('http') ? 'noopener noreferrer' : undefined}
                    key={item.label} 
                    underline="none" 
                    sx={{ 
                      color: '#191529', 
                      fontSize: '0.85rem', 
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      transition: 'color 0.2s',
                      '&:hover': { color: '#f87171' } 
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </FadeUp>
          </Grid>

          {/* Column 3: Solutions */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <FadeUp delay={200}>
              <Typography variant="h6" sx={{ color: '#f87171', fontWeight: 400, mb: 3, letterSpacing: 1 }}>
                SOLUTIONS
              </Typography>
              <Stack spacing={2.5}>
                {footerLinks.solutions.map((item) => (
                  <Link 
                    component={RouterLink}
                    to={item.path}
                    key={item.label} 
                    underline="none" 
                    sx={{ 
                      color: '#191529', 
                      fontSize: '0.85rem', 
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      transition: 'color 0.2s',
                      '&:hover': { color: '#f87171' } 
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </FadeUp>
          </Grid>

          {/* Column 4: Products */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <FadeUp delay={300}>
              <Typography variant="h6" sx={{ color: '#f87171', fontWeight: 400, mb: 3, letterSpacing: 1 }}>
                PRODUCTS
              </Typography>
              <Stack spacing={2.5}>
                {footerLinks.products.map((item) => (
                  <Link 
                    component={RouterLink}
                    to={item.path}
                    key={item.label} 
                    underline="none" 
                    sx={{ 
                      color: '#191529', 
                      fontSize: '0.85rem', 
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      transition: 'color 0.2s',
                      '&:hover': { color: '#f87171' } 
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </FadeUp>
          </Grid>

          {/* Column 5: Legal */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <FadeUp delay={400}>
              <Typography variant="h6" sx={{ color: '#f87171', fontWeight: 400, mb: 3, letterSpacing: 1 }}>
                LEGAL
              </Typography>
              <Stack spacing={2.5}>
                {footerLinks.legal.map((item) => (
                  <Link 
                    component={RouterLink}
                    to={item.path}
                    key={item.label} 
                    underline="none" 
                    sx={{ 
                      color: '#191529', 
                      fontSize: '0.85rem', 
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      transition: 'color 0.2s',
                      '&:hover': { color: '#f87171' } 
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </FadeUp>
          </Grid>

        </Grid>
      </Container>

      {/* Bottom Section: Copyright & Giant Background Text */}
      <Box sx={{ position: 'relative', width: '100%', py: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Giant Faded Background Text */}
        <Typography 
          sx={{ 
            position: 'absolute',
            bottom: { xs: '-10px', md: '-20px' },
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: { xs: '13vw', md: '11vw', xl: '12rem' }, 
            fontWeight: 800,
            color: '#F1F0F0', 
            whiteSpace: 'nowrap',
            userSelect: 'none',
            zIndex: 0,
            lineHeight: 1,
            pointerEvents: 'none'   
          }}
        >
          NRM Analytix
        </Typography>

        {/* Copyright Foreground Text */}
        <Box sx={{ position: 'relative', zIndex: 1, px: 2, textAlign: 'center' }}>
          <FadeUp delay={500}>
            <Typography variant="body1" sx={{ color: '#191529', fontWeight: 400, fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
              © 2024 NRM Analytix IT Consulting And Service Private Limited. All rights reserved.
            </Typography>
          </FadeUp>
        </Box>
        
      </Box>
      
      {/* Black bottom border strip */}
      <Box sx={{ width: '100%', height: '8px', bgcolor: '#191529', position: 'relative', zIndex: 2 }} />

    </Box>
  );
}