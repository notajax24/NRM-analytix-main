import { Box, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState, useEffect, useRef, type ReactNode } from 'react';

import Service1Img from '../assets/service/service1.png';
import Service2Img from '../assets/service/service2.png';
import Service3Img from '../assets/service/service3.png';
import Service4Img from '../assets/service/service4.png';

const servicesData = [
  {
    title: 'Data Engineering & Platform Services',
    description: 'Build the foundation your data strategy demands. Our certified engineers design and implement robust, scalable data architectures across modern cloud and on-premise environments.',
    image: Service1Img,
    size: { xs: 12, md: 8 }
  },
  {
    title: 'Enterprise Analytics',
    description: 'Transform raw data into actionable intelligence. We build powerful, interactive dashboards and reporting frameworks that give decision-makers the clarity they need, when they need it.',
    image: Service2Img,
    size: { xs: 12, md: 4 }
  },
  {
    title: 'Machine Learning',
    description: 'Deploy predictive models and advanced algorithms to optimize operations and drive growth. We help you move from historical reporting to forward-looking predictive intelligence.',
    image: Service3Img,
    size: { xs: 12, md: 4 }
  },
  {
    title: 'AI & Predictive Analytics',
    description: 'Leverage the power of generative AI and LLMs to automate workflows and unlock entirely new capabilities. Our team ensures these models are secure, accurate, and tied to real ROI.',
    image: Service4Img,
    size: { xs: 12, md: 8 }
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
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      willChange: 'opacity, transform'
    }}>{children}</Box>
  );
};

export default function Services() {
  return (
    <Box sx={{ 
      py: { xs: 8, md: 12 }, 
      bgcolor: '#ffffff',
      background: 'linear-gradient(180deg, rgba(255,255,255,1) 70%, rgba(250,232,255,0.4) 100%)'
    }}>
      <Container maxWidth="lg">
        
        {/* Header Section */}
        <Box sx={{ mb: 6 }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography 
                variant="overline" 
                sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.8rem' }}
              >
                WHAT WE DO
              </Typography>
            </Box>
          </FadeUp>
          
          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ fontWeight: 300, color: '#1e293b', mb: 3, fontSize: { xs: '2.25rem', md: '3.5rem' } }}
            >
              Drive Business Outcomes Through <Box component="span" sx={{ 
                background: 'linear-gradient(90deg, #f87171 0%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 300 
              }}>Data Intelligence</Box>
            </Typography>
          </FadeUp>
          
          <FadeUp delay={200}>
            <Typography variant="body1" sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, maxWidth: '1000px' }}>
              At NRM Analytix, we guide organisations through every stage of the modern data journey. Whether you are building your first data pipeline, migrating to a cloud-native platform, or deploying enterprise-grade machine learning models — our expert consultants deliver solutions that are scalable, cost-efficient, and aligned to your business goals. We serve clients across healthcare, finance, retail, manufacturing, logistics, and more.
            </Typography>
          </FadeUp>
        </Box>

        {/* Asymmetric Bento Grid */}
        <Grid container spacing={3}>
          {servicesData.map((service, index) => (
            <Grid size={{ xs: service.size.xs as any, md: service.size.md as any }} key={index}>
              <FadeUp delay={300 + index * 100} fullHeight>
              <Card 
                elevation={0} 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  overflow: 'hidden', // Ensures the image respects the card's rounded corners
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(139, 92, 246, 0.08)'
                  }
                }}
              >
                <Box>
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt=""
                    loading="lazy"
                    sx={{ 
                      height: { xs: '200px', md: service.size.md === 8 ? '300px' : '250px' },
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <CardContent sx={{ px: 3, pb: 4, pt: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Typography variant="h5" sx={{ color: '#8b5cf6', fontWeight: 400, fontSize: '1.3rem' }}>
                      {service.title}
                    </Typography>
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: 24, 
                        height: 24, 
                        borderRadius: '50%', 
                        border: '1px solid #f472b6',
                        flexShrink: 0
                      }}
                    >
                      <ArrowOutwardIcon sx={{ fontSize: 14, color: '#f472b6' }} />
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.6, fontSize: '0.85rem' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
              </FadeUp>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}