// src/components/landing/FreePOCSection.tsx
import { Box, Typography, Container, Card } from '@mui/material';
import { useState, useEffect, useRef, type ReactNode } from 'react';

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
      height: '100%', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`, willChange: 'opacity, transform'
    }}>{children}</Box>
  );
};

// Custom Terminal-Style Badge Component
const TerminalBadge = ({ text }: { text: string }) => (
  <Box sx={{
    bgcolor: '#0f172a', // Dark slate background matching design
    borderRadius: '8px',
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    minHeight: '70px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    transition: 'transform 0.3s ease',
    '&:hover': { transform: 'translateY(-4px)' }
  }}>
    {/* macOS style traffic light dots */}
    <Box sx={{ display: 'flex', gap: '4px', position: 'absolute', top: '10px', left: '12px' }}>
      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#ef4444' }} /> {/* Red */}
      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#eab308' }} /> {/* Yellow */}
      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#22c55e' }} /> {/* Green */}
    </Box>
    
    <Typography sx={{ color: '#f8fafc', fontSize: '0.8rem', fontWeight: 400, textAlign: 'center', mt: 1.5 }}>
      {text}
    </Typography>
  </Box>
);

export default function FreePOCSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }}}>
      <Container maxWidth="lg">
        <FadeUp delay={100}>
          <Card 
            elevation={0}
            sx={{
              borderRadius: '24px',
              border: '1px solid rgba(244, 114, 182, 0.15)', // Very subtle pink border
              p: { xs: 4, md: 8 },
              position: 'relative',
              overflow: 'hidden',
              // Ethereal gradient background matching the screenshot
              background: 'radial-gradient(circle at 10% 50%, rgba(243, 232, 255, 0.7) 0%, transparent 50%), radial-gradient(circle at 90% 50%, rgba(255, 237, 213, 0.6) 0%, transparent 50%), #ffffff',
            }}
          >
            
            {/* Header Content */}
            <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto', mb: { xs: 6, md: 8 } }}>
              <FadeUp delay={200}>
                <Typography 
                  variant="overline" 
                  sx={{ color: '#6b21a8', fontWeight: 500, letterSpacing: 1.5, fontSize: { xs: '0.85rem', md: '1rem' }, display: 'block', mb: 3 }}
                >
                  FREE 1-WEEK DATABRICKS POC — ZERO COST
                </Typography>
              </FadeUp>

              <FadeUp delay={300}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 300, 
                    color: '#1e293b', 
                    fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' }, 
                    lineHeight: 1.4,
                    letterSpacing: '-0.01em'
                  }}
                >
                  Build a working proof-of-concept for any Databricks{' '}
                  <Box component="span" sx={{ 
                    background: 'linear-gradient(90deg, #f87171 0%, #fb923c 100%)', // Salmon to orange gradient text
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 300 
                  }}>
                    use case at zero cost.
                  </Box>
                  {' '}Validate before you commit.
                </Typography>
              </FadeUp>
            </Box>

            {/* Terminal Badges Row */}
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, 
              gap: { xs: 2, md: 3 },
              px: { xs: 0, md: 4 }
            }}>
              <FadeUp delay={400}>
                <TerminalBadge text="No upfront investment" />
              </FadeUp>
              <FadeUp delay={500}>
                <TerminalBadge text="Delivered in 1 week" />
              </FadeUp>
              <FadeUp delay={600}>
                <TerminalBadge text="Tailored to your use case" />
              </FadeUp>
              <FadeUp delay={700}>
                <TerminalBadge text="15+ years expertise" />
              </FadeUp>
            </Box>

          </Card>
        </FadeUp>
      </Container>
    </Box>
  );
}