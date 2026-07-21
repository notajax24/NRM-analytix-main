// src/components/landing/WhyNRMHero.tsx
import { Box, Typography, Container, keyframes } from '@mui/material';
import { useState, useEffect, useRef, type ReactNode } from 'react';

// 1. Continuous Floating Animation for the Terminal Cards
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

// 2. Reusable Scroll Reveal Animation Wrapper
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
  useEffect(() => {
    document.title = "Why NRM Analytix | NRM Analytix";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert Data & AI Solutions Built For Your Business. NRM Analytix delivers end-to-end consulting services including Databricks, Power BI, and Machine Learning.');

    // Open Graph Tags for Social Sharing
    const ogTags = {
      'og:title': 'Why NRM Analytix | NRM Analytix',
      'og:description': 'Expert Data & AI Solutions Built For Your Business.',
      'og:image': 'https://nrmanalytix.com/preview.png', // Upload a preview.png to your public folder later!
      'og:type': 'website'
    };
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('property', property); document.head.appendChild(tag); }
      tag.setAttribute('content', content);
    });
  }, []);
  
  return (
    <Box ref={ref} sx={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      willChange: 'opacity, transform',
      position: 'relative',
      zIndex: 2
    }}>
      {children}
    </Box>
  );
};

// Small macOS style terminal buttons
const MacWindowDots = () => (
  <Box sx={{ display: 'flex', gap: { xs: '3px', md: '5px' }, position: 'absolute', top: { xs: '6px', md: '10px' }, left: { xs: '6px', md: '10px' } }}>
    <Box sx={{ width: { xs: 5, md: 8 }, height: { xs: 5, md: 8 }, borderRadius: '50%', bgcolor: '#ff5f56' }} />
    <Box sx={{ width: { xs: 5, md: 8 }, height: { xs: 5, md: 8 }, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
    <Box sx={{ width: { xs: 5, md: 8 }, height: { xs: 5, md: 8 }, borderRadius: '50%', bgcolor: '#27c93f' }} />
  </Box>
);

interface FloatingCardProps {
  text: string;
  top?: any;
  left?: any;
  right?: any;
  bottom?: any;
  delay?: string;
  entryDelay?: number;
  rotate?: string;
}

// Floating macOS terminal card component matching OurSolutionsHero
const FloatingTerminalCard = ({ text, top, left, right, bottom, delay, entryDelay = 0, rotate }: FloatingCardProps) => (
  <Box sx={{ position: 'absolute', top, left, right, bottom, zIndex: 6, display: { xs: 'none', md: 'flex' }, pointerEvents: 'auto' }}>
    <FadeUp delay={entryDelay}>
      <Box sx={{ transform: rotate ? `rotate(${rotate})` : 'none' }}>
        <Box sx={{ animation: `${float} 6s ease-in-out infinite`, animationDelay: delay || '0s', willChange: 'transform' }}>
          <Box
            sx={{
              minWidth: { xs: 100, md: 130 },
              px: { xs: 1.5, md: 2 },
              pt: { xs: 2.5, md: 3.5 }, // Padding top leaves room for the dots
              pb: { xs: 1, md: 1.5 },
              bgcolor: '#F2F2F2',
              color: '#191629',
              borderRadius: '8px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
              fontWeight: 500,
              fontSize: { xs: '0.6rem', md: '0.75rem' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
              position: 'relative',
              opacity: 1,
              transition: 'all 0.3s ease-out',
              willChange: 'transform, box-shadow',
              '&:hover': {
                transform: 'scale(1.08)',
                boxShadow: '0 30px 60px rgba(139, 92, 246, 0.25)',
                bgcolor: '#25203d',
                color: '#ffffff',
                opacity: 1
              }
            }}
          >
            <MacWindowDots />
            {text}
          </Box>
        </Box>
      </Box>
    </FadeUp>
  </Box>
);

export default function WhyNRMHero() {
  return (
    <Box sx={{ 
      position: 'relative',
      py: { xs: 10, md: 16 }, 
      overflow: 'hidden',
      bgcolor: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      // Ethereal radial gradients for the background
      background: 'radial-gradient(circle at 15% 50%, rgba(243, 232, 255, 0.5) 0%, transparent 40%), radial-gradient(circle at 85% 50%, rgba(254, 226, 226, 0.4) 0%, transparent 40%)'
    }}>
      
      {/* Bottom Fade Overlay for smooth blending with the next section */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: { xs: '150px', md: '250px' },
        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 100%)',
        zIndex: 5,
        pointerEvents: 'none'
      }} />

      {/* Floating scattered macOS terminal cards */}
      <FloatingTerminalCard text="Databricks" top={{ md: '5%', lg: '8%' }} left={{ md: 'calc(50% - 70px)', lg: 'calc(50% - 80px)' }} delay="0s" entryDelay={500} />
      <FloatingTerminalCard text="Data & AI Solutions" top={{ md: '15%', lg: '15%' }} left={{ md: '2%', lg: '4%' }} delay="1.5s" entryDelay={600} />
      <FloatingTerminalCard text="Power BI" top={{ md: '15%', lg: '15%' }} right={{ md: '4%', lg: '6%' }} delay="2.5s" entryDelay={700} />
      <FloatingTerminalCard text="Machine Learning Consulting" bottom={{ md: '2%', lg: '5%' }} left={{ md: '4%', lg: '6%' }} delay="1s" entryDelay={800} />
      <FloatingTerminalCard text="Artificial Intelligence" bottom={{ md: '6%', lg: '8%' }} right={{ md: '3%', lg: '5%' }} delay="0.5s" entryDelay={900} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        <Box sx={{ textAlign: 'center', maxWidth: { xs: '100%', md: '1100px' }, mx: 'auto', mt: { xs: 0, md: 2, lg: 4 } }}>
          
          {/* Eyebrow */}
          <FadeUp delay={0}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3, pointerEvents: 'auto' }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography variant="overline" sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                WHY NRM ANALYTIX
              </Typography>
            </Box>
          </FadeUp>

          {/* Main Headline */}
          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              component="h1"
              sx={{ 
                pointerEvents: 'auto',
                display: 'inline-block',
                fontWeight: 300, 
                color: '#1e293b', 
                fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4rem' }, 
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                mb: 4
              }}
            >
              Your{' '}
              <Box component="span" sx={{ 
                background: 'linear-gradient(90deg, #a855f7 0%, #f43f5e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 300 
              }}>
                Trusted Data & AI Partner
              </Box>
              {' '}In India
            </Typography>
          </FadeUp>

          {/* Subheadline Body Text */}
          <FadeUp delay={200}>
            <Typography 
              variant="body1" 
              sx={{ 
                pointerEvents: 'auto',
                display: 'inline-block',
                color: '#475569', 
                fontSize: { xs: '0.95rem', md: '1.15rem' }, 
                lineHeight: 1.6,
                maxWidth: '1000px',
                mx: 'auto'
              }}
            >
              Choosing the right data consulting partner is one of the most consequential decisions your organisation will make. At NRM Analytix, we are not a generic IT services firm — we are specialists. Data and AI is all we do, and we do it exceptionally well.
            </Typography>
          </FadeUp>

        </Box>
      </Container>
    </Box>
  );
}