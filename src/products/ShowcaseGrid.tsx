// src/components/landing/SolutionsShowcase.tsx
import { Box, Typography, Container, Button, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid'; // Using modern Grid2 compatible with updated configurations
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState, useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

import Solution1Img from '../assets/solution/Cloud-Migration.png';
import Solution2Img from '../assets/solution/Databricks-Platform.png';
import Solution3Img from '../assets/solution/Advanced-Analytics.png';
import Solution4Img from '../assets/solution/Gen-AI & ML.png';

import FreePOCSection from './FreePOCSection';

const solutionsData = [
  {
    title: 'Cloud Migration',
    description: 'BI dashboards, ETL modernization, real-time streaming and performance optimization across BFSI & Logistics.',
    image: Solution1Img, 
    size: { xs: 12, md: 5 }, // Top Left: Narrow
    path: '#' 
  },
  {
    title: 'Databricks Platform',
    description: 'End-to-end lakehouse setup, Unity Catalog governance, Delta Lake pipelines, and Databricks ML deployments.',
    image: Solution2Img,
    size: { xs: 12, md: 7 }, // Top Right: Wide
    path: '#' 
  },
  {
    title: 'Advanced Analytics',
    description: 'BI dashboards, ETL modernization, real-time streaming and performance optimization across BFSI & Logistics.',
    image: Solution3Img,
    size: { xs: 12, md: 7 }, // Bottom Left: Wide
    path: '#' 
  },
  {
    title: 'Gen AI & ML',
    description: 'AI-powered data products, LLM integrations, predictive models and intelligent enterprise solutions on Azure.',
    image: Solution4Img,
    size: { xs: 12, md: 5 }, // Bottom Right: Narrow
    path: '#' 
  }
];

// Reusable scroll animation wrapper
const FadeUp = ({ children, delay = 0, fullHeight }: { children: ReactNode; delay?: number; fullHeight?: boolean }) => {
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
      height: fullHeight ? '100%' : 'auto',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`, 
      willChange: 'opacity, transform'
    }}>{children}</Box>
  );
};

export default function SolutionsShowcase() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
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
                SERVICES
              </Typography>
            </Box>
          </FadeUp>
          
          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ fontWeight: 300, color: '#1e293b', mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.02em' }}
            >
              A SOLUTION{' '}
              <Box component="span" sx={{ 
                background: 'linear-gradient(90deg, #f87171 0%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 300 
              }}>
                FOR YOU
              </Box>
            </Typography>
          </FadeUp>
          
          <FadeUp delay={200}>
            <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem' }}>
              Accelerate Your Journey With{' '}
              <Box component="span" sx={{ color: '#8b5cf6', fontWeight: 500 }}>
                Our Tools & Frameworks
              </Box>
            </Typography>
          </FadeUp>
        </Box>

        {/* Asymmetric Brick Grid */}
        <Grid container spacing={4}>
          {solutionsData.map((solution, index) => (
            <Grid size={{ xs: solution.size.xs as any, md: solution.size.md as any }} key={index}>
              <FadeUp delay={300 + index * 100} fullHeight>
                <Card 
                  elevation={0}
                  sx={{
                    bgcolor: '#f8fafc', 
                    borderRadius: '24px',
                    p: { xs: 2.5, sm: 3 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                     overflow: 'hidden',  
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
                    }
                  }}
                >
                  {/* Top Row: Button (Left) and Image (Right) */}
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', lg: 'row' }, justifyContent: 'space-between', alignItems: 'flex-start', mb: 3, gap: 2 }}>
                    
                    {/* "Learn More" Button - Left Aligned */}
                    <Box sx={{ zIndex: 2, flexShrink: 0 }}>
                      <Button
                        component={solution.path === '#' ? 'button' : Link}
                        to={solution.path === '#' ? undefined : solution.path}
                        onClick={(e: React.MouseEvent) => { if (solution.path === '#') e.preventDefault(); }}
                        variant="contained"
                        sx={{
                          background: 'transparent',
                          color: '#fff',
                          borderRadius: '50px',
                          textTransform: 'none',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          px: 2.5, py: 0.75,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          whiteSpace: 'nowrap',
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
                            bgcolor: '#8b5cf6', borderRadius: '50%', width: 28, height: 28, ml: 0.5,
                            transition: 'all 0.8s ease',
                            '.MuiButton-root:hover &': { transform: 'translateX(4px)', bgcolor: '#fff' }
                          }}>
                            <ArrowForwardIcon sx={{ fontSize: 16, color: '#fff', transition: 'color 0.8s ease', '.MuiButton-root:hover &': { color: '#111827' } }} />
                          </Box>
                        }
                      >
                        Learn More
                      </Button>
                    </Box>

                    {/* Dashboard Image */}
                    <Box
                      component="img"
                      src={solution.image}
                      alt={solution.title}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        maxWidth: { xs: '100%', md: solution.size.md === 5 ? '300px' : '450px' },
                        height: { xs: '200px', md: '240px' },
                        minWidth: 0,
                        borderRadius: '16px', 
                        objectFit: 'contain',   
                        objectPosition: 'center', 
                        display: 'block',
                        transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                        '&:hover': {
                          transform: 'scale(1.03)'
                        }
                      }}
                    />
                  </Box>

                  {/* Card Text Content */}
                  <CardContent sx={{ p: 0, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <Typography variant="h4" sx={{ color: '#7c3aed', fontWeight: 500, mb: 1, fontSize: '1.3rem' }}>
                      {solution.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.6, fontSize: '0.9rem' }}>
                      {solution.description}
                    </Typography>
                  </CardContent>
                </Card>
              </FadeUp>
            </Grid>
          ))}
        </Grid>
        <FreePOCSection />
        

      </Container>
    </Box>
  );
}