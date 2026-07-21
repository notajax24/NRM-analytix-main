// src/components/landing/PracticeAreaTwo.tsx
import { Box, Typography, Container } from '@mui/material';
import { useState, useEffect, useRef, type ReactNode } from 'react';

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
    <Box  ref={ref} sx={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`, 
      willChange: 'opacity, transform'
    }}>
      {children}
    </Box>
  );
};

const analyticsData = [
  {
    num: '01',
    title: 'Power BI Dashboard Design & Implementation',
    descMain: 'We are Power BI specialists. From connecting your data sources and designing your data model to building pixel-perfect, interactive dashboards ',
    descHighlight: '— we deliver Power BI solutions that your teams actually use, every day.',
    themeColor: '#f87171', // Coral
    isDarkCard: true
  },
  {
    num: '02',
    title: 'MSBI Reporting Frameworks',
    descMain: 'We build structured, governed MSBI reporting frameworks that give every part of your organisation consistent, accurate, and timely reports ',
    descHighlight: '— without the bottleneck of manual report generation.',
    themeColor: '#8b5cf6', // Purple
    isDarkCard: false
  },
  {
    num: '03',
    title: 'Data Visualisation Best Practices',
    descMain: 'Good visualisation is not just about charts ',
    descHighlight: "— it's about communication. We train your teams and design your reports to ensure data is presented clearly, consistently, and in a way that drives the right decisions.",
    themeColor: '#f87171', // Coral
    isDarkCard: false
  },
  {
    num: '04',
    title: 'Enterprise Analytics Strategy',
    descMain: 'We work with your leadership team to define an analytics strategy aligned to your business goals ',
    descHighlight: '— covering governance, tooling, talent, and roadmap. A strong analytics strategy is the foundation of a data-driven organisation.',
    themeColor: '#8b5cf6', // Purple
    isDarkCard: false
  }
];

export default function PracticeAreaTwo() {
  return (
    <Box id="practice2" sx={{ 
      py: { xs: 8, md: 8}, 
      position: 'relative',
      overflow: 'hidden',
      bgcolor: '#ffffff'
    }}>
      
      {/* Animated Glowing Background Orb */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: { xs: '100vw', md: '50vw' },
        height: { xs: '100vw', md: '50vw' },
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(236,72,153,0.05) 40%, rgba(255,255,255,0) 70%)',
        animation: 'pulseGlow 8s ease-in-out infinite alternate',
        zIndex: 0,
        pointerEvents: 'none',
        willChange: 'transform, opacity'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        
        {/* Header Section */}
        <Box sx={{ mb: { xs: 6, md: 8} }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography 
                variant="overline" 
                sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.85rem' }}
              >
                PRACTICE AREA 2
              </Typography>
            </Box>
          </FadeUp>

          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 300, 
                color: '#f87171', 
                fontSize: { xs: '2.25rem', md: '3.5rem' }, 
                letterSpacing: '-0.02em',
                mb: 3
              }}
            >
              Enterprise Analytics & Business Intelligence
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
              Data is only valuable when it informs decisions. Our Enterprise Analytics practice transforms your raw data into clear, interactive intelligence that your leadership team, operations teams, and frontline staff can act on immediately.
            </Typography>
          </FadeUp>
        </Box>

        {/* Numbered List Items */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', // Stack as full-width vertical rows
          gap: { xs: 4, md: 6 } 
        }}>
          {analyticsData.map((item, index) => {
            return (
            <FadeUp key={index} delay={200 + index * 100}>
              <Box 
                className="practice-two-card"
                sx={{ 
                  width: '100%',
                  bgcolor: item.isDarkCard ? '#111827' : 'transparent', // Dark slate for card 1
                  borderRadius: '24px',
                  p: { xs: 4, md: 5 }, // Uniform padding perfectly aligns all list numbers
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '1px solid transparent',
                  '&:hover': {
                    bgcolor: '#111827', // All cards turn to premium dark on hover
                    borderColor: 'rgba(139, 92, 246, 0.4)',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 30px 60px -15px rgba(139, 92, 246, 0.4), 0 0 25px rgba(139, 92, 246, 0.15)'
                  }
                }}
              >
                {/* Number & Title */}
                <Box sx={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', mb: 2 }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontSize: { xs: '3rem', md: '4rem' }, 
                      fontWeight: 200, 
                      lineHeight: 1,
                      mr: 1,
                      color: item.themeColor,
                      letterSpacing: '-0.02em',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '.practice-two-card:hover &': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    {item.num}.
                  </Typography>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: item.themeColor, 
                      fontWeight: 400, 
                      fontSize: { xs: '1.35rem', md: '1.75rem' },
                      mb: { xs: 1, md: 0 },
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '.practice-two-card:hover &': {
                        transform: 'translateX(8px)'
                      }
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontSize: { xs: '1rem', md: '1.1rem' }, 
                    lineHeight: 1.6,
                    fontWeight: 400,
                    color: item.isDarkCard ? '#cbd5e1' : '#475569', // Light grey text if dark background
                    transition: 'color 0.4s ease',
                    '.practice-two-card:hover &': {
                      color: '#cbd5e1' // Switch text to light grey so it is readable on dark hover
                    }
                  }}
                >
                  {item.descMain}
                  <Box component="span" sx={{ color: item.themeColor }}>
                    {item.descHighlight}
                  </Box>
                </Typography>
              </Box>
            </FadeUp>
            );
          })}
        </Box>

      </Container>

      {/* Pulse Glow Keyframes (in case this is rendered standalone) */}
      <style>
        {`
          @keyframes pulseGlow {
            0% { transform: translate3d(-50%, -50%, 0) scale(1); opacity: 0.6; }
            100% { transform: translate3d(-50%, -50%, 0) scale(1.15); opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
}