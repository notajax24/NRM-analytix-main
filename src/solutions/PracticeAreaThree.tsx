// src/components/landing/PracticeAreaThree.tsx
import { Box, Typography, Container, Stack, Card } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import practice1 from '../assets/practice/practice1.png';
import Service1Img from '../assets/service/service1.png';
import Service4Img from '../assets/service/service4.png';
import Service5Img from '../assets/service/service5.png';


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
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`, 
      willChange: 'opacity, transform'
    }}>
      {children}
    </Box>
  );
};

const aiServicesData = [
  {
    title: 'Machine Learning Model Design & Deployment',
    description: 'We design, train, validate, and deploy production-ready machine learning models tailored to your specific business problems — from customer churn prediction to demand forecasting and anomaly detection.',
    image: practice1
  },
  {
    title: 'Predictive Analytics Solutions',
    description: 'Predictive analytics gives your organisation the ability to anticipate what happens next. We build custom predictive solutions that integrate with your existing data infrastructure and deliver actionable forecasts to the people who need them.',
   image: Service4Img,
  },
  {
    title: 'Data Science Consulting',
    description: 'Our data scientists work alongside your teams to frame business problems, identify the right analytical approaches, and translate complex statistical findings into clear, strategic recommendations.',
    image: Service1Img,
  },
  {
    title: 'AI Strategy & Roadmap Development',
    description: 'Not sure where to start with AI? We help organisations define a practical, phased AI roadmap — prioritising use cases by business impact, data readiness, and implementation complexity.',
    image: Service5Img,
  }
];

export default function PracticeAreaThree() {
  return (
    <Box  id="practice3" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }}>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}> 
        
        {/* Header Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography 
                variant="overline" 
                sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.85rem' }}
              >
                PRACTICE AREA 3 {/* Updated to 3 for logical flow, though screenshot says 2! */}
              </Typography>
            </Box>
          </FadeUp>

          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 300, 
                color: '#f87171', // Coral 
                fontSize: { xs: '2.25rem', md: '3.5rem' }, 
                letterSpacing: '-0.02em',
                mb: 3
              }}
            >
              AI, Machine Learning & Predictive Analytics
            </Typography>
          </FadeUp>

          <FadeUp delay={200}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#475569', 
                fontSize: { xs: '1rem', md: '1.1rem' }, 
                lineHeight: 1.7,
                maxWidth: '1000px'
              }}
            >
              The organisations winning in today's market are those that predict, not just report. Our AI and Machine Learning practice helps you move beyond descriptive analytics into true intelligence — building models that learn from your data and deliver competitive advantage at scale.
            </Typography>
          </FadeUp>
        </Box>

        {/* Stacked Vertical Cards */}
        <Stack spacing={6}>
          {aiServicesData.map((service, index) => (
            <FadeUp key={index} delay={100}>
              <Card
                elevation={0}
                sx={{
                  bgcolor: '#ffffff',
                  border: '1px solid #f1f5f9', // Very subtle light grey border
                  borderRadius: '24px',
                  overflow: 'hidden',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
                  }
                }}
              >
                {/* Top Banner Image */}
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: '200px', sm: '260px', md: '300px' }, // Wide aspect ratio
                    position: 'relative'
                  }}
                >
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </Box>

                {/* Bottom Content Area */}
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  
                  {/* Title and Icon Wrapper */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: '#7c3aed', // Purple header
                        fontWeight: 500, 
                        fontSize: { xs: '1.3rem', md: '1.5rem' }, 
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    {/* Tiny Coral Arrow Icon */}
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: 24, 
                        height: 24, 
                        borderRadius: '50%', 
                        border: '1px solid #f87171', // Coral border
                        flexShrink: 0,
                        transition: 'transform 0.3s ease, background-color 0.3s ease',
                        '.MuiCard-root:hover &': {
                          bgcolor: '#f87171',
                          transform: 'scale(1.1) rotate(15deg)'
                        }
                      }}
                    >
                      <ArrowOutwardIcon 
                        sx={{ 
                          fontSize: 14, 
                          color: '#f87171',
                          transition: 'color 0.3s ease',
                          '.MuiCard-root:hover &': {
                            color: '#ffffff'
                          }
                        }} 
                      />
                    </Box>
                  </Box>

                  {/* Description text */}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#475569', 
                      lineHeight: 1.6, 
                      fontSize: '0.95rem' 
                    }}
                  >
                    {service.description}
                  </Typography>

                </Box>
              </Card>
            </FadeUp>
          ))}
        </Stack>

      </Container>
    </Box>
  );
}