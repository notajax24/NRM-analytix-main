// src/components/landing/ReasonsToChooseUs.tsx
import { Box, Typography, Container, Stack } from '@mui/material';
import { useState, useEffect, useRef, type ReactNode } from 'react';

// Reusable smooth scroll animation wrapper
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

// Data array with alternating theme logic
const reasonsData = [
  {
    num: '01',
    title: 'Deep Domain Expertise Across Industries',
    descMain: 'Our consultants have delivered Data and AI projects across healthcare, financial services, retail, manufacturing, logistics, energy, telecom, and more. This cross-industry experience means we bring not just technical skill, but genuine domain knowledge to every engagement. ',
    descHighlight: 'We understand your data, your challenges, and your opportunity.',
    theme: 'purple'
  },
  {
    num: '02',
    title: 'Outcomes-First Engagement Model',
    descMain: 'We are measured by business outcomes, not billable hours. Before a single line of code is written, we align on the metrics that matter ',
    descHighlight: '— whether that is reduced data processing costs, faster time-to-insight, improved forecast accuracy, or increased analyst productivity. Our success is defined by yours',
    theme: 'coral'
  },
  {
    num: '03',
    title: 'Professional, Agile & Transparent',
    descMain: 'We run every project with the rigor of an enterprise consultancy and the responsiveness of a specialist team. Timelines are realistic. Communication is proactive. Deliverables are clear. You will always know exactly where your project stands ',
    descHighlight: '— and why.',
    theme: 'purple'
  },
  {
    num: '04',
    title: 'We Challenge Thinking to Drive Better Results',
    descMain: 'The best consulting relationships are built on candor. We will not simply execute what you ask — we will question assumptions, challenge architectural decisions, and propose better approaches when we see them. Our goal is not to be comfortable. ',
    descHighlight: 'Our goal is to deliver exceptional outcomes for your business.',
    theme: 'coral'
  }
];

export default function ReasonsToChooseUs() {
  return (
    <Box sx={{ 
      py: { xs: 8, md: 8 }, 
      // Pastel multi-color ethereal gradient background
      background: 'radial-gradient(circle at 10% 20%, rgba(243, 232, 255, 0.7) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(254, 226, 226, 0.6) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(224, 242, 254, 0.4) 0%, transparent 50%), #fdfdfd'
    }}>
      <Container maxWidth="lg">
        
        {/* Header Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography 
                variant="overline" 
                sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.85rem' }}
              >
                WHY NRM ANALYTIX
              </Typography>
            </Box>
          </FadeUp>

          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 300, 
                color: '#1e293b', 
                fontSize: { xs: '2.25rem', md: '3.5rem' }, 
                letterSpacing: '-0.02em',
                mb: 3
              }}
            >
              Reasons to Choose Us as{' '}
              <Box component="span" sx={{ color: '#f87171', fontWeight: 300 }}>
                Your Data Partner
              </Box>
            </Typography>
          </FadeUp>

          <FadeUp delay={200}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#334155', 
                fontSize: { xs: '0.9rem', md: '1rem' }, 
                lineHeight: 1.7,
                maxWidth: '850px'
              }}
            >
              Deep-dives into architecture, sovereignty, and the future of industrial-scale automation. Curated research for the modern enterprise.
            </Typography>
          </FadeUp>
        </Box>

        {/* Numbered List Items */}
        <Stack spacing={6}>
          {reasonsData.map((item, index) => {
            // Theme colors logic
            const isPurple = item.theme === 'purple';
            
            const numColor = isPurple ? 'rgba(139, 92, 246, 0.3)' : 'rgba(248, 113, 113, 0.3)';
            const titleColor = isPurple ? '#6d28d9' : '#e11d48'; // Darker base for headers
            const mainTextColor = isPurple ? '#8b5cf6' : '#f87171'; // Lighter base for body
            const highlightTextColor = isPurple ? '#f87171' : '#8b5cf6'; // Alternating highlight

            return (
              <FadeUp key={index} delay={200 + index * 100}>
                <Box>
                  {/* Number & Title */}
                  <Box sx={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', mb: 1 }}>
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        fontSize: { xs: '3rem', md: '4rem' }, 
                        fontWeight: 200, 
                        lineHeight: 1,
                        mr: 1,
                        color: numColor,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {item.num}.
                    </Typography>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: titleColor, 
                        fontWeight: 400, 
                        fontSize: { xs: '1.35rem', md: '1.75rem' },
                        mb: { xs: 1, md: 0 } 
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>

                  {/* Description text with alternating highlights */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: { xs: '1rem', md: '1.1rem' }, 
                      lineHeight: 1.7,
                      fontWeight: 400,
                      color: mainTextColor
                    }}
                  >
                    {item.descMain}
                    <Box component="span" sx={{ color: highlightTextColor }}>
                      {item.descHighlight}
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