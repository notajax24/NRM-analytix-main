// src/components/landing/WhyChooseUs.tsx
import { Box, Typography, Container, Stack } from '@mui/material';
import { useState, useEffect, useRef, type ReactNode } from 'react';

// Define our two color themes for alternating items
const themeColor1 = '#6038D8';
const themeColor2 = '#f87171'; // Updated to coral so alternating colors are visible

const reasons = [
  {
    num: '01',
    theme: 'purple',
    title: 'Deep Domain Expertise',
    descPart1: 'Our consultants bring hands-on expertise across Databricks, Apache Spark, Azure, AWS, and modern data stack technologies. With experience spanning 10+ industries, we understand the unique data challenges your sector faces ',
    descPart2: '— and know exactly how to solve them.'
  },
  {
    num: '02',
    theme: 'coral',
    title: 'We Understand Your Goals',
    descPart1: 'Time to value, total cost of ownership, and measurable business impact are at the centre of every engagement. We don\'t just deliver technical solutions ',
    descPart2: '— we deliver outcomes that matter to your leadership team and your bottom line.'
  },
  {
    num: '03',
    theme: 'purple',
    title: 'Professional, Agile & Reliable',
    descPart1: 'We operate with the discipline of an enterprise partner and the agility of a specialist consultancy. Projects are delivered on time, within budget, and to specification ',
    descPart2: '— with clear communication at every stage.'
  },
  {
    num: '04',
    theme: 'coral',
    title: 'We Challenge Your Thinking',
    descPart1: 'We bring strong opinions backed by real-world experience. If there is a better approach, a more cost-efficient architecture, or a missed opportunity in your data strategy ',
    descPart2: '— we will tell you. Your success is our benchmark.'
  }
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

export default function WhyChooseUs() {
  return (
    <Box sx={{  
      py: { xs: 8, md: 12 }, 
      // Soft, ethereal pastel background
      background: 'radial-gradient(circle at 80% 20%, rgba(254, 226, 226, 0.4) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(243, 232, 255, 0.6) 0%, transparent 40%), #fdfdfd'
    }}>
      <Container maxWidth="lg">
        
        {/* Section Header */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography variant="overline" sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.8rem' }}>
                WHY NRM ANALYTIX
              </Typography>
            </Box>
          </FadeUp>
          
          <FadeUp delay={100}>
            <Typography variant="h2" sx={{ fontWeight: 300, color: '#1e293b', mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.02em' }}>
              Reasons to Choose Us as{' '}
              <Box component="span" sx={{ 
                color: themeColor1,
                fontWeight: 300 
              }}>
                Your Data Partner
              </Box>
            </Typography>
          </FadeUp>
          
          <FadeUp delay={200}>
            <Typography variant="body1" sx={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, maxWidth: '700px' }}>
              Deep-dives into architecture sovereignty, and the future of industrial-scale automation. Curated research for the modern enterprise.
            </Typography>
          </FadeUp>
        </Box>

        {/* Numbered List Stack */}
        <Stack spacing={8}>
          {reasons.map((item, index) => {
            const isPurple = item.theme === 'purple';
            const primaryColor = isPurple ? themeColor1 : themeColor2;
            const secondaryColor = isPurple ? themeColor2 : themeColor1;

            return (
              <FadeUp key={index} delay={300 + index * 100}>
                <Box>
                  {/* Title Line (Number + Text) */}
                  <Box sx={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', mb: 2 }}>
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        fontSize: { xs: '3.5rem', md: '5rem' }, 
                        fontWeight: 200, 
                        lineHeight: 1,
                        mr: 1,
                        color: primaryColor,
                        opacity: 0.4,
                        letterSpacing: '-0.05em'
                      }}
                    >
                      {item.num}.
                    </Typography>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: primaryColor, 
                        fontWeight: 500, 
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        mb: { xs: 1, md: 0 } // Add margin bottom on mobile to let it wrap cleanly
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  {/* Description Text */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: { xs: '1.05rem', md: '1.15rem' }, 
                      lineHeight: 1.6,
                      fontWeight: 400
                    }}
                  >
                    <Box component="span" sx={{ color: primaryColor }}>
                      {item.descPart1}
                    </Box>
                    <Box component="span" sx={{ color: secondaryColor }}>
                      {item.descPart2}
                    </Box>
                  </Typography>
                </Box>
              </FadeUp>
            );
          })}
        </Stack>

      </Container>
    </Box>
  );
}