// src/pages/CodeSwitch.tsx
import { Box, Typography, Container, Card, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import ShowcaseGrid from './ShowcaseGrid';
import OtherProducts from './OtherProducts';
import TechStack from '../components/common/TechStack';
import Solution2Img from '../assets/solution/solution2.png';



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

export default function CodeSwitch() {
  useEffect(() => { document.title = "Code  | NRM Analytix"; }, []);

  return (
    <>
      <Box sx={{
        py: { xs: 8, sm: 10, md: 14 }, bgcolor: '#fcfcfd', overflow: 'hidden',
        background: 'radial-gradient(circle at 10% 20%, rgba(243, 232, 255, 0.6) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(254, 226, 226, 0.5) 0%, transparent 40%), #fdfdfd'
      }}>
        <Container maxWidth="lg">

          {/* 1. Header Section */}
          <Box sx={{ mb: { xs: 5, sm: 6, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}>
            <FadeUp delay={0}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1, mb: 3 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
                <Typography variant="overline" sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: { xs: '0.75rem', sm: '0.85rem' } }}>
                  PRODUCT DETAILS
                </Typography>
              </Box>
            </FadeUp>
            <FadeUp delay={100}>
              <Typography variant="h2" sx={{ fontWeight: 300, color: '#1e293b', mb: 2, fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' }, letterSpacing: '-0.02em' }}>
               Code Switch
              </Typography>
            </FadeUp>
            <FadeUp delay={200}>
              <Typography variant="h5" sx={{ color: '#7c3aed', fontWeight: 400, fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }, maxWidth: { xs: '100%', md: '80%' }, mx: { xs: 'auto', md: 0 } }}>
                Streamline and Automate Complex Metadata Ingestion and Orchestration Sequences
              </Typography>
            </FadeUp>
          </Box>

          {/* 2. Main Hero Card */}
          <FadeUp delay={300}>
            <Card elevation={0} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch', gap: { xs: 3, md: 6 }, px: { xs: 3, md: 5 }, py: { xs: 2.5, md: 4 }, mb: { xs: 6, md: 8 }, borderRadius: '24px', border: '1px solid #f1f5f9', bgcolor: '#ffffff', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h3" sx={{ color: '#5b21b6', fontWeight: 500, fontSize: { xs: '1.75rem', sm: '2.2rem', md: '2.5rem' }, mb: { xs: 3, md: 4 } }}>
                   Code Switch
                </Typography>
                <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    variant="contained"
                    sx={{
                      background: 'transparent', color: '#fff', borderRadius: '50px', textTransform: 'none',
                      fontSize: { xs: '0.9rem', md: '1rem' }, pl: 3, pr: 1, py: 1,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)', position: 'relative', zIndex: 1,
                      transition: 'all 0.8s ease',
                      '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: '#111827', borderRadius: 'inherit', zIndex: -1, transition: 'opacity 0.8s ease' },
                      '&::after': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(90deg, #6b21a8, #ec4899)', borderRadius: 'inherit', zIndex: -2 },
                      '&:hover::before': { opacity: 0 },
                      '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 10px 25px rgba(107, 33, 168, 0.3)' }
                    }}
                    endIcon={<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#8b5cf6', borderRadius: '50%', width: { xs: 28, md: 32 }, height: { xs: 28, md: 32 }, ml: 1, transition: 'all 0.8s ease', '.MuiButton-root:hover &': { transform: 'translateX(4px)', bgcolor: '#fff' } }}><ArrowForwardIcon sx={{ fontSize: 16, color: '#fff', transition: 'color 0.8s ease', '.MuiButton-root:hover &': { color: '#191529' } }} /></Box>}
                  >
                    Watch Demo
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      bgcolor: '#fff',
                      color: '#475569',
                      borderColor: '#e2e8f0',
                      borderRadius: '50px', textTransform: 'none',
                      fontSize: { xs: '0.9rem', md: '1rem' }, pl: 3, pr: 1, py: 1,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                        borderColor: '#cbd5e1',
                        bgcolor: '#fff',
                      }
                    }}
                    endIcon={<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #cbd5e1', borderRadius: '50%', width: { xs: 28, md: 32 }, height: { xs: 28, md: 32 }, ml: 1, transition: 'all 0.3s ease', '.MuiButton-root:hover &': { borderColor: '#94a3b8' } }}><ArrowForwardIcon sx={{ fontSize: 16, color: '#475569' }} /></Box>}
                  >
                    Free Trial
                  </Button>
                </Stack>
              </Box>
              <Box sx={{ flex: 1.2, width: '100%', minHeight: { xs: 240, md: 340 }, maxHeight: { md: 360 }, height: { xs: 'auto', md: '100%' } }}>
                <Box component="img" src={Solution2Img} alt="Code Switch Architecture Map" sx={{ width: '80%', height: '100%', objectFit: 'cover', borderRadius: '24px', display: 'block' }} />
              </Box>
            </Card>
          </FadeUp>

          {/* 3. Challenge vs Solution Split */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, sm: 4 }, mb: { xs: 8, md: 10 } }}>
            <FadeUp delay={400}>
              <Card elevation={0} sx={{ height: '100%', p: { xs: 3, sm: 4, md: 5 }, bgcolor: 'rgba(250, 245, 255, 0.5)', borderRadius: '16px', border: '1px solid #d8b4fe' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <CloseIcon sx={{ color: '#ef4444', fontSize: { xs: 24, md: 28 }, strokeWidth: 2 }} />
                  <Typography variant="h5" sx={{ color: '#ef4444', fontWeight: 300, letterSpacing: 1, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>THE CHALLENGE</Typography>
                </Box>
                <Typography variant="body1" sx={{ color: '#ef4444', lineHeight: 1.6, fontSize: { xs: '0.95rem', md: '1.05rem' }, fontWeight: 300 }}>
                  Brittle hardcoded schemas and fragile data pipelines demand constant manual re-engineering with every source system update.
                </Typography>
              </Card>
            </FadeUp>
            <FadeUp delay={500}>
              <Card elevation={0} sx={{ height: '100%', p: { xs: 3, sm: 4, md: 5 }, bgcolor: 'rgba(254, 242, 242, 0.5)', borderRadius: '16px', border: '1px solid #fca5a5' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <CheckBoxIcon sx={{ color: '#22c55e', fontSize: { xs: 24, md: 28 } }} />
                  <Typography variant="h5" sx={{ color: '#5b21b6', fontWeight: 300, letterSpacing: 1, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>THE SOLUTION</Typography>
                </Box>
                <Typography variant="body1" sx={{ color: '#5b21b6', lineHeight: 1.6, fontSize: { xs: '0.95rem', md: '1.05rem' }, fontWeight: 300 }}>
                  A metadata-driven pipeline architecture that auto-detects structural changes and self-adjusts injection routing tables.
                </Typography>
              </Card>
            </FadeUp>
          </Box>

          {/* 4. Core Capabilities */}
          <Box sx={{ mb: { xs: 8, md: 12 } }}>
            <FadeUp delay={200}>
              <Typography variant="h5" sx={{ color: '#7c3aed', mb: { xs: 3, md: 4 }, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, textAlign: { xs: 'center', md: 'left' } }}>
                CORE CAPABILITIES
              </Typography>
            </FadeUp>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 2, sm: 3 } }}>
              {[
                { title: 'Dynamic Schema Matching', desc: 'No-code pipeline adaptation adjusting database schemas dynamically without manual script edits.' },
                { title: 'Unified Catalog Linage', desc: 'Interactive tracking showing exact data lineage transformations from landing to consumption layers.' },
                { title: 'Distributed Processing', desc: 'Seamless horizontal scaling architecture built directly over modern Cloud Data Warehouses.' },
                { title: 'Intelligent Alert Engine', desc: 'ML-based anomaly notifications catching broken records prior to down-stream data consumption.' }
              ].map((cap, i) => (
                <Box key={i}>
                  <FadeUp delay={300 + (i * 100)}>
                    <Box sx={{ p: { xs: 3, sm: 4 }, bgcolor: '#ffffff', borderRadius: '16px', height: '100%', border: '1px solid #e2e8f0', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0 10px 30px rgba(0,0,0,0.05)' } }}>
                      <Typography variant="h6" sx={{ color: '#5b21b6', mb: 2, fontWeight: 300, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>{cap.title}</Typography>
                      <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.6, fontSize: { xs: '0.9rem', md: '1rem' } }}>{cap.desc}</Typography>
                    </Box>
                  </FadeUp>
                </Box>
              ))}
            </Box>
          </Box>

          {/* service section */}
          <ShowcaseGrid />

          {/* 5. Proven Business Impacts */}
          <Box sx={{ mb: { xs: 8, md: 14 } }}>
            <FadeUp delay={200}>
              <Typography variant="h5" sx={{ color: '#7c3aed', mb: { xs: 3, md: 4 }, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, textAlign: { xs: 'center', md: 'left' } }}>
                PROVEN BUSINESS IMPACTS
              </Typography>
            </FadeUp>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, minmax(0, 1fr))' }, gap: { xs: 2, sm: 3 } }}>
              {[
                { value: '03', label: 'ETL Layers\nManaged', color: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)', bg: 'radial-gradient(circle at 50% -20%, rgba(254, 226, 226, 0.8) 0%, #ffffff 70%)' },
                { value: 'AI', label: 'Auto-Fill with\nGemini 2.5', color: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', bg: 'radial-gradient(circle at 50% 120%, rgba(243, 232, 255, 0.8) 0%, #ffffff 70%)' },
                { value: '∞', label: 'Pipelines\nCatalogued', color: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)', bg: 'radial-gradient(circle at 50% 120%, rgba(254, 226, 226, 0.8) 0%, #ffffff 70%)' },
                { value: '0', label: 'Manual Data\nEntry Errors', color: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', bg: 'radial-gradient(circle at 50% -20%, rgba(243, 232, 255, 0.8) 0%, #ffffff 70%)' }
              ].map((impact, i) => (
                <Box key={i}>
                  <FadeUp delay={300 + (i * 100)}>
                    <Box sx={{ height: { xs: '260px', sm: '300px', md: '350px' }, p: { xs: 3, md: 4 }, borderRadius: '16px', border: '1px solid #e2e8f0', background: impact.bg, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', transition: 'box-shadow 0.3s ease, border-color 0.3s ease', '&:hover': { boxShadow: '0 18px 45px rgba(0,0,0,0.12)', borderColor: '#c4b5fd' } }}>
                      <Typography variant="h2" sx={{ fontWeight: 300, fontSize: { xs: '3rem', sm: '3.2rem', md: '3.5rem' }, background: impact.color, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mt: { xs: 1, md: 2 } }}>{impact.value}</Typography>
                      <Typography variant="h6" sx={{ color: '#1e293b', fontWeight: 400, whiteSpace: 'pre-line', lineHeight: 1.3, mb: { xs: 1, md: 2 }, fontSize: { xs: '1rem', md: '1.25rem' } }}>{impact.label}</Typography>
                    </Box>
                  </FadeUp>
                </Box>
              ))}
            </Box>
          </Box>

          {/* 6. Technologies Used Section */}
          <TechStack />
          {/* other Products section */}
          <OtherProducts />
        </Container>
      </Box>
    </>
  );
}