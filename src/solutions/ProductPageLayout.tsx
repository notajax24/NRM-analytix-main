// src/components/landing/ProductPageLayout.tsx
import { Box, Typography, Container, Card, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState, useEffect, useRef, type ReactNode } from 'react';


// Reusable buttery-smooth scroll animation wrapper
export const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
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
      height: '100%',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      willChange: 'opacity, transform'
    }}>{children}</Box>
  );
};

// Define the shape of our Product Data
export interface ProductData {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  capabilities: { title: string; desc: string }[];
  impact: { value: string; label: string }[];
  stack: string[];
}

// Reusable smooth count-up animated number
const AnimatedNumber = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Detect when the number scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Extract any prefix, number, and suffix (e.g. "40%" -> target: 40, suffix: "%")
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const prefix = match ? match[1] : '';
  const targetNumber = match ? parseFloat(match[2]) : null;
  const suffix = match ? match[3] : '';

  useEffect(() => {
    if (!isVisible || targetNumber === null) return;
    let startTime: number;
    const duration = 2000; // 2 seconds animation duration

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
      
      setCount(easeProgress * targetNumber);
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(targetNumber);
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumber]);

  // If it's pure text like "Live" or "AI", just render it directly
  if (targetNumber === null) return <span ref={ref}>{value}</span>;

  const isInteger = targetNumber % 1 === 0;
  const displayCount = isInteger ? Math.round(count) : count.toFixed(1);

  return <span ref={ref}>{prefix}{displayCount}{suffix}</span>;
};

export default function ProductPageLayout({ data }: { data: ProductData }) {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff', overflow: 'hidden', position: 'relative' }}>
      
      {/* Animated Glowing Background Orb */}
      <Box sx={{
        position: 'absolute',
        top: '25%',
        left: '50%',
        width: { xs: '150vw', md: '70vw' },
        height: { xs: '150vw', md: '70vw' },
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(236,72,153,0.04) 40%, rgba(255,255,255,0) 70%)',
        animation: 'pulseGlow 8s ease-in-out infinite alternate',
        zIndex: 0,
        pointerEvents: 'none',
        willChange: 'transform, opacity'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        
        {/* 1. Header Section */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography variant="overline" sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.85rem' }}>
                PRODUCT DEEP DIVE
              </Typography>
            </Box>
          </FadeUp>
          <FadeUp delay={100}>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 300, color: '#1e293b', mb: 3, fontSize: { xs: '2.5rem', md: '4rem' }, letterSpacing: '-0.02em' }}>
              {data.title}
            </Typography>
          </FadeUp>
          <FadeUp delay={200}>
            <Typography variant="h5" component="h2" sx={{ color: '#475569', fontWeight: 400, lineHeight: 1.6 }}>
              {data.subtitle}
            </Typography>
          </FadeUp>
        </Box>

        {/* 2. Challenge vs Solution Split */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, mb: { xs: 8, md: 10 } }}>
          <Box>
            <FadeUp delay={300}>
              <Card 
                elevation={0} 
                className="challenge-card"
                sx={{ 
                  height: '100%', p: { xs: 4, md: 5 }, bgcolor: '#fff1f2', borderRadius: '24px', border: '1px solid #ffe4e6',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 30px 60px -15px rgba(225, 29, 72, 0.25), 0 0 20px rgba(225, 29, 72, 0.1)', borderColor: 'rgba(225, 29, 72, 0.3)' }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <CancelIcon sx={{ color: '#e11d48', fontSize: 28, transition: 'transform 0.5s ease', '.challenge-card:hover &': { transform: 'scale(1.2) rotate(-10deg)' } }} />
                  <Typography variant="h5" component="h3" sx={{ color: '#be123c', fontWeight: 600 }}>The Challenge</Typography>
                </Box>
                <Typography variant="body1" sx={{ color: '#881337', lineHeight: 1.7, fontSize: '1.05rem', transition: 'color 0.4s ease', '.challenge-card:hover &': { color: '#4c0519' } }}>
                  {data.challenge}
                </Typography>
              </Card>
            </FadeUp>
          </Box>
          <Box>
            <FadeUp delay={400}>
              <Card 
                elevation={0} 
                className="solution-card"
                sx={{ 
                  height: '100%', p: { xs: 4, md: 5 }, bgcolor: '#f0fdf4', borderRadius: '24px', border: '1px solid #dcfce7',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 30px 60px -15px rgba(22, 163, 74, 0.25), 0 0 20px rgba(22, 163, 74, 0.1)', borderColor: 'rgba(22, 163, 74, 0.3)' }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <CheckCircleIcon sx={{ color: '#16a34a', fontSize: 28, transition: 'transform 0.5s ease', '.solution-card:hover &': { transform: 'scale(1.2) rotate(10deg)' } }} />
                  <Typography variant="h5" component="h3" sx={{ color: '#15803d', fontWeight: 600 }}>The Solution</Typography>
                </Box>
                <Typography variant="body1" sx={{ color: '#14532d', lineHeight: 1.7, fontSize: '1.05rem', transition: 'color 0.4s ease', '.solution-card:hover &': { color: '#052e16' } }}>
                  {data.solution}
                </Typography>
              </Card>
            </FadeUp>
          </Box>
        </Box>

        {/* 3. Core Capabilities Grid */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <FadeUp delay={200}>
            <Typography variant="h3" component="h2" sx={{ color: '#1e293b', mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 300 }}>Core Capabilities</Typography>
          </FadeUp>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 4 }}>
            {data.capabilities.map((cap, i) => (
              <FadeUp delay={300 + (i * 100)} key={i}>
                <Box 
                  className="capability-card"
                  sx={{ 
                    p: { xs: 4, md: 5 }, bgcolor: '#f8fafc', borderRadius: '24px', height: '100%', border: '1px solid transparent',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      bgcolor: '#111827', // Premium deep dark slate
                      borderColor: 'rgba(139, 92, 246, 0.4)',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 30px 60px -15px rgba(139, 92, 246, 0.4), 0 0 25px rgba(139, 92, 246, 0.15)'
                    }
                  }}
                >
                  <Typography variant="h6" component="h3" sx={{ color: '#7c3aed', mb: 2, fontWeight: 600, transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s ease', '.capability-card:hover &': { transform: 'translateX(6px)', color: '#c084fc' } }}>
                    {cap.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.6, fontSize: '1.05rem', transition: 'color 0.4s ease', '.capability-card:hover &': { color: '#cbd5e1' } }}>
                    {cap.desc}
                  </Typography>
                </Box>
              </FadeUp>
            ))}
          </Box>
        </Box>

        {/* 4. Impact Stats & Tech Stack */}
        <FadeUp delay={500}>
          <Box sx={{ bgcolor: '#0f172a', borderRadius: '32px', p: { xs: 4, md: 8 }, color: '#fff', textAlign: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ color: '#f87171', mb: { xs: 4, md: 6 }, fontWeight: 300 }}>Proven Impact</Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: 3, md: 4 }, mb: 8 }}>
              {data.impact.map((stat, i) => (
                <Box key={i} sx={{ transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)', '&:hover': { transform: 'translateY(-6px)' } }}>
                  <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' }, background: 'linear-gradient(90deg, #c084fc, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 1 }}>
                    <AnimatedNumber value={stat.value} />
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, fontSize: { xs: '0.75rem', md: '0.85rem' } }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="overline" sx={{ color: '#94a3b8', mb: 3, letterSpacing: 3, fontWeight: 600 }}>BUILT ON</Typography>
              <Stack direction="row" sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 6 }}>
                {data.stack.map((tech, i) => (
                  <Box 
                    key={i} 
                    sx={{ 
                      px: { xs: 2.5, md: 3.5 }, 
                      py: { xs: 1, md: 1.5 }, 
                      bgcolor: 'rgba(255,255,255,0.03)', 
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      fontSize: { xs: '0.85rem', md: '0.95rem' }, 
                      fontWeight: 500,
                      color: '#f8fafc',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': { 
                        bgcolor: 'rgba(139, 92, 246, 0.15)', 
                        borderColor: 'rgba(139, 92, 246, 0.4)', 
                        color: '#c084fc',
                        transform: 'translateY(-4px)', 
                        boxShadow: '0 15px 30px -5px rgba(139, 92, 246, 0.3), 0 0 15px rgba(139, 92, 246, 0.15)' 
                      } 
                    }}>
                    {tech}
                  </Box>
                ))}
              </Stack>
              
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#f87171', color: '#fff', borderRadius: '50px', textTransform: 'none', fontSize: '1.1rem', fontWeight: 600, px: 4, py: 1.5, 
                  boxShadow: '0 10px 25px -5px rgba(248, 113, 113, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { 
                    bgcolor: '#e11d48',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 20px 40px -10px rgba(225, 29, 72, 0.6), 0 0 20px rgba(248, 113, 113, 0.4)'
                  } 
                }} 
                endIcon={<ArrowForwardIcon sx={{ transition: 'transform 0.4s ease', '.MuiButton-root:hover &': { transform: 'translateX(4px)' } }} />}
              >
                Request a Free 1-Week POC
              </Button>
            </Box>
          </Box>
        </FadeUp>

      </Container>

      {/* Pulse Glow Keyframes */}
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