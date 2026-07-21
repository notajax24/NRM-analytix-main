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
    <Box ref={ref} sx={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      willChange: 'opacity, transform'
    }}>{children}</Box>
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

// Floating macOS terminal card component
const FloatingTerminalCard = ({ text, top, left, right, bottom, delay, entryDelay = 0, rotate }: FloatingCardProps) => (
  <Box sx={{ position: 'absolute', top, left, right, bottom, zIndex: 6, display: { xs: 'none', md: 'flex' }, pointerEvents: 'auto' }}>
    <FadeUp delay={entryDelay}>
      <Box sx={{ transform: rotate ? `rotate(${rotate})` : 'none' }}>
        <Box sx={{ animation: `float 6s ease-in-out infinite`, animationDelay: delay || '0s' }}>
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
              transition: 'all 0.3s ease-out', // Smooth, non-glitchy transition
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

export default function OurSolutionsHero() {
  useEffect(() => {
    document.title = "Solutions | NRM Analytix";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert Data & AI Solutions Built For Your Business. NRM Analytix delivers end-to-end consulting services including Databricks, Power BI, and Machine Learning.');

    // Open Graph Tags for Social Sharing
    const ogTags = {
      'og:title': 'Data & AI Solutions | NRM Analytix',
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
    <Box sx={{ 
      position: 'relative', 
      py: { xs: 10, md: 16 },
      overflow: 'hidden', 
      bgcolor: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh'
    }}>

      {/* Premium Animated Glowing Background Orb */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: { xs: '100vw', md: '50vw' },
        height: { xs: '100vw', md: '50vw' },
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(236,72,153,0.05) 40%, rgba(255,255,255,0) 70%)',
        animation: 'pulseGlow 8s ease-in-out infinite alternate',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

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
      
      {/* Floating scattered macOS terminal cards - hidden on mobile via the component styles */}
      <FloatingTerminalCard text="Databricks" top={{ md: '5%', lg: '8%' }} left={{ md: 'calc(50% - 70px)', lg: 'calc(50% - 80px)' }} delay="0s" entryDelay={500} />
      <FloatingTerminalCard text="Data & AI Solutions" top={{ md: '15%', lg: '15%' }} left={{ md: '2%', lg: '4%' }} delay="1.5s" entryDelay={600} />
      <FloatingTerminalCard text="Power BI" top={{ md: '15%', lg: '15%' }} right={{ md: '4%', lg: '6%' }} delay="2.5s" entryDelay={700} />
      <FloatingTerminalCard text="Machine Learning Consulting" bottom={{ md: '2%', lg: '5%' }} left={{ md: '4%', lg: '6%' }} delay="1s" entryDelay={800} />
      <FloatingTerminalCard text="Artificial Intelligence" bottom={{ md: '6%', lg: '8%' }} right={{ md: '3%', lg: '5%' }} delay="0.5s" entryDelay={900} />

      {/* Centered Typography Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        <Box sx={{ textAlign: 'center', maxWidth: { xs: '100%', md: '1100px' }, mx: 'auto', mt: { xs: 0, md: 2, lg: 4 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3, pointerEvents: 'auto' }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography variant="overline" sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                OUR SOLUTIONS
              </Typography>
            </Box>
          </FadeUp>
          
          <FadeUp delay={100}>
            <Typography variant="h2" component="h1" sx={{ pointerEvents: 'auto', display: 'inline-block', fontWeight: 200, color: '#1e293b', mb: 4, fontSize: { xs: '2.2rem', sm: '3.2rem', md: '4rem' }, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              <Box component="span" sx={{ background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Expert Data
              </Box>
              {' '}& AI Solutions Built For{' '}
              <Box component="span" sx={{ background: 'linear-gradient(90deg, #ec4899 0%, #f97316 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Your Business
              </Box>
            </Typography>
          </FadeUp>

          <FadeUp delay={200}>
            <Typography variant="body1" sx={{ pointerEvents: 'auto', display: 'inline-block', fontWeight: 300, color: '#475569', fontSize: { xs: '0.95rem', md: '1.15rem' }, lineHeight: 1.6, maxWidth: '1000px', mx: 'auto' }}>
              NRM Analytix delivers end-to-end Data and AI consulting services trusted by organisations across 10+ industries. From designing your data architecture to deploying production-ready machine learning models — we are with you at every step of the journey.
            </Typography>
          </FadeUp>
        </Box>
      </Container>

      {/* Infinite float keyframe animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes pulseGlow {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
            100% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
}