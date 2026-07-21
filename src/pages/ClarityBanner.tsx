// src/components/landing/ClarityBanner.tsx
import { Box, Typography, Container, Grid } from '@mui/material';
import { useState, useEffect, useRef, type ReactNode } from 'react';

import amazon from '../assets/logos/amazon.png';
import apache from '../assets/logos/apache.png';
import databricks from '../assets/logos/databricks.png';
import dbt from '../assets/logos/dbt.png';
import microsoft from '../assets/logos/microsoft.png';
import powerbi from '../assets/logos/powerbi.png';
import snowflake from '../assets/logos/snowflake.png';
import talend from '../assets/logos/talend.png';

const stats = [
  { value: '10+', label: 'Industries' },
  { value: '09+', label: 'Service Areas' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '2024', label: 'Est. Year' },
];

const partnerLogos = [
  { name: 'Apache', src: apache },
  { name: 'Databricks', src: databricks },
  { name: 'Talend', src: talend },
  { name: 'dbt', src: dbt },
  { name: 'Power BI', src: powerbi },
  { name: 'AWS', src: amazon },
  { name: 'Snowflake', src: snowflake },
  { name: 'Microsoft', src: microsoft }
];

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

const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const targetNumber = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number | undefined;

    if (isVisible) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds animation duration

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // EaseOutQuart easing function for a smooth slow down at the end
        const easeOut = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOut * targetNumber));

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        } else {
          setCount(targetNumber);
        }
      };

      animationFrameId = window.requestAnimationFrame(step);
    } else {
      // Reset the counter when it goes out of view so it animates again on next scroll
      setCount(0);
    }

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, targetNumber]);

  const formatCount = (num: number) => {
    // Maintain any leading zeros (like "09+")
    if (value.startsWith('0') && num < 10) return `0${num}`;
    return num;
  };

  return (
    <Grid size={{ xs: 6, md: 3 }} sx={{ textAlign: 'center' }} ref={ref}>
      <Typography 
        variant="h3" 
        sx={{ 
          color: '#ffffff', 
          fontWeight: 300, 
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          mb: 1
        }}
      >
        {formatCount(count)}{suffix}
      </Typography>
      <Typography 
        variant="subtitle1" 
        sx={{ 
          color: '#f87171',
          fontSize: '1rem',
          fontWeight: 400,
          letterSpacing: 0.5,
        }}
      >
        {label}
      </Typography>
    </Grid>
  );
};

export default function ClarityBanner() {
  // Reusable style for the gradient words
  const gradientTextStyle = {
    background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #f97316 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 300,
    display: 'inline-block',
    mr: { xs: 3, md: 6 } // Increased horizontal gap significantly
  };

  // Reusable style for the dark, receded text
  const mutedTextStyle = {
    color: '#334155', // Dark slate color that recedes into the background
    fontWeight: 300,
    display: 'inline-block',
  };

  return (
    <Box sx={{ bgcolor: '#111322', pt: { xs: 6, md: 8 }, overflow: 'hidden' }}>
      <Container maxWidth="xl" sx={{ pb: { xs: 8, md: 10 }, px: { xs: 3, md: 6 } }}>
        
        {/* Eyebrow Text (Left Aligned) */}
        <FadeUp delay={0}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 6, ml: { xs: 0, md: -2 } }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#8b5cf6', flexShrink: 0 }} />
            <Typography 
              variant="overline" 
              sx={{ color: '#e2e8f0', fontWeight: 600, letterSpacing: { xs: 1, sm: 1.5 }, fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' }, lineHeight: 1.4 }}
            >
              TRUSTED TECHNOLOGY PARTNERS & PLATFORMS
            </Typography>
          </Box>
        </FadeUp>

        {/* Main Motto Text (Center Aligned) */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 }, width: '100%', maxWidth: '1200px', mx: 'auto' }}>
          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2.25rem', sm: '4rem', md: '7.5rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                mb: 1
              }}
            >
              <Box component="span" sx={gradientTextStyle}>Data</Box>
              <Box component="span" sx={mutedTextStyle}>is not the end.</Box>
            </Typography>
          </FadeUp>
          
          <FadeUp delay={200}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2.25rem', sm: '4rem', md: '7.5rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                mb: 1
              }}
            >
              <Box component="span" sx={gradientTextStyle}>Clarity</Box>
              <Box component="span" sx={mutedTextStyle}>is the ultimate</Box>
            </Typography>
          </FadeUp>
          
          <FadeUp delay={300}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2.25rem', sm: '4rem', md: '7.5rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                wordBreak: 'break-word'
              }}
            >
              <Box component="span" sx={mutedTextStyle}>sophistication</Box>
            </Typography>
          </FadeUp>
        </Box>

        {/* Statistics Grid */}
        <FadeUp delay={400}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <AnimatedStat key={index} value={stat.value} label={stat.label} />
            ))}
          </Grid>
        </FadeUp>

      </Container>

      {/* Infinite Scrolling Logo Ticker */}
      <Box 
        sx={{ 
          width: '100%', 
          bgcolor: '#ffffff', 
          py: 3, 
          display: 'flex', 
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            width: 'max-content',
            animation: 'marquee 30s linear infinite',
            '&:hover': { animationPlayState: 'paused' } 
          }}
        >
          {/* Map the logos array twice for a seamless infinite loop */}
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                px: { xs: 4, md: 8 }, 
              }}
            >
              <Box
                component="img"
                src={logo.src}
                alt={`${logo.name} — Technology Partner of NRM Analytix`}
                loading="lazy"
                sx={{ 
                  height: 40,
                  objectFit: 'contain',
                  opacity: 0.8,
                  filter: 'grayscale(100%)',
                  transition: 'all 0.3s ease',
                  '&:hover': { opacity: 1, filter: 'grayscale(0%)' }
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* CSS Keyframes for the marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
        `}
      </style>
    </Box>
  );
}