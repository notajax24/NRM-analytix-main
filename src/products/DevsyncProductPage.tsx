// src/pages/DevsyncProductPage.tsx
import { Box, Typography, Container, Button, Card, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GridViewIcon from '@mui/icons-material/GridView';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { useState, useEffect, useRef, type ReactNode } from 'react';

// IMPORTANT: Replace these with your actual image paths
import devsyncHeroImg from '../assets/products/Solution Diagram.png'; 
import spreadsheetImg from '../assets/products/Analysis Dashboard.png';
import problemStatementImg from '../assets/products/Documentation Preview.png';

// Reusable scroll animation wrapper
const FadeUp = ({ children, delay = 0, fullHeight }: { children: ReactNode; delay?: number; fullHeight?: boolean }) => {
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
      height: fullHeight ? '100%' : 'auto', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`, willChange: 'opacity, transform'
    }}>{children}</Box>
  );
};

export default function DevsyncProductPage() {
  
  const challenges = [
    { title: '7000+ Jobs', desc: 'The massive scale of enterprise Talend environments makes manual review physically impossible for modern delivery cycles.' },
    { title: '300 Man Days', desc: 'Based on 20 mins per job baseline, manual categorization consumes months of valuable engineering time.' },
    { title: '15% Error Rate', desc: 'Fatigue-induced errors in manual analysis lead to significant transparency gaps and client dissatisfaction.' }
  ];

  return (
    <Box sx={{ bgcolor: '#fcfcfd', overflow: 'hidden' }}>
      
      {/* =========================================
        SECTION 1: HERO & CHALLENGE
        ========================================= 
      */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'radial-gradient(circle at 10% 20%, rgba(243, 232, 255, 0.6) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(254, 226, 226, 0.4) 0%, transparent 40%)' 
      }}>
        <Container maxWidth="lg">
<Grid container spacing={{ xs: 6, md: 4 }} sx={{ alignItems: 'center', mb: { xs: 12, md: 16 } }}>            <Grid size={{ xs: 12, md: 5 }}>
              <FadeUp delay={0}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#6b21a8' }} />
                  <Typography variant="overline" sx={{ color: '#6b21a8', fontWeight: 500, letterSpacing: 1.5, fontSize: '0.85rem' }}>PRODUCT DETAILS</Typography>
                </Box>
              </FadeUp>
              <FadeUp delay={100}>
                <Typography variant="h2" sx={{ fontWeight: 300, color: '#111827', mb: 3, fontSize: { xs: '3rem', md: '3rem' }, letterSpacing: '-0.02em' }}>Talend Job Analyzer </Typography>
              </FadeUp>
              <FadeUp delay={200}>
                <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mb: 5 }}>
                  A next-generation Meta-Flow engine designed to read and interpret XML meta data of Talend Jobs with unparalleled precision and speed.
                </Typography>
              </FadeUp>
              <FadeUp delay={300}>
<Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>                  <Button variant="contained" sx={{ bgcolor: '#111827', color: '#fff', borderRadius: '50px', textTransform: 'none', fontSize: '1rem', pl: 3, pr: 1, py: 1, '&:hover': { bgcolor: '#1f2937' } }} endIcon={<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#6b21a8', borderRadius: '50%', width: 32, height: 32, ml: 1 }}><ArrowForwardIcon sx={{ fontSize: 16, color: '#fff' }} /></Box>}>Watch Demo</Button>
                  <Button variant="outlined" sx={{ borderColor: '#cbd5e1', color: '#334155', borderRadius: '50px', textTransform: 'none', fontSize: '1rem', pl: 3, pr: 1, py: 1, '&:hover': { borderColor: '#94a3b8', bgcolor: 'transparent' } }} endIcon={<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #cbd5e1', borderRadius: '50%', width: 32, height: 32, ml: 1 }}><ArrowForwardIcon sx={{ fontSize: 16, color: '#334155' }} /></Box>}>Run analysis</Button>
                </Stack>
              </FadeUp>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <FadeUp delay={400}>
                <Box component="img" src={devsyncHeroImg} alt="Automated Job Analyzer" sx={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', display: 'block' }} />
              </FadeUp>
            </Grid>
          </Grid>

          {/* The Challenge Cards */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <FadeUp delay={0}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#6b21a8' }} />
                <Typography variant="overline" sx={{ color: '#6b21a8', fontWeight: 500, letterSpacing: 1.5, fontSize: '0.85rem' }}>THE CHALLENGE</Typography>
              </Box>
            </FadeUp>
            <FadeUp delay={100}>
              <Typography variant="h3" sx={{ fontWeight: 300, color: '#111827', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>The High Cost of Manual Analysis</Typography>
            </FadeUp>
          </Box>
          <Grid container spacing={4}>
            {challenges.map((challenge, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <FadeUp delay={200 + (index * 100)} fullHeight>
                  <Card elevation={0} sx={{ bgcolor: '#ffffff', borderRadius: '20px', border: '1px solid #f1f5f9', p: 4, height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' } }}>
                    <Box sx={{ bgcolor: '#fff7ed', width: 48, height: 48, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                      <GridViewIcon sx={{ color: '#f97316', fontSize: 24 }} />
                    </Box>
                    <Typography variant="h6" sx={{ color: '#111827', fontWeight: 600, mb: 2, fontSize: '1.15rem' }}>{challenge.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem' }}>{challenge.desc}</Typography>
                  </Card>
                </FadeUp>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =========================================
        SECTION 2: OUR SOLUTION (Metadata Extraction)
        ========================================= 
      */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          
          <Box sx={{ mb: 6 }}>
            <FadeUp delay={0}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#6b21a8' }} />
                <Typography variant="overline" sx={{ color: '#6b21a8', fontWeight: 500, letterSpacing: 1.5, fontSize: '0.85rem' }}>OUR SOLUTION</Typography>
              </Box>
            </FadeUp>
            <FadeUp delay={100}>
              <Typography variant="h2" sx={{ fontWeight: 300, color: '#111827', mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.02em' }}>
                Precision <Box component="span" sx={{ color: '#f87171' }}>Metadata Extraction</Box>
              </Typography>
            </FadeUp>
            <FadeUp delay={200}>
              <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.05rem' }}>Automate the discovery of job granularity, transformations, and output dependencies in seconds.</Typography>
            </FadeUp>
          </Box>

<Grid container spacing={4} sx={{ alignItems: 'stretch' }}>            {/* Left Side: Images & Reports */}
            <Grid size={{ xs: 12, md: 8 }}>
              <FadeUp delay={300}>
                <Box component="img" src={spreadsheetImg} alt="Analysis Summary View" sx={{ width: '100%', borderRadius: '16px', mb: 6, display: 'block' }} />
                
                <Typography variant="h4" sx={{ color: '#7c3aed', fontWeight: 500, mb: 1, fontSize: '1.8rem' }}>Automated Report Generation</Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 4, fontSize: '0.95rem' }}>Instant generation of Phase-1 aggregated analysis and complexity calculators.</Typography>

                <Stack spacing={2}>
                  {/* Ready File */}
                  <Box sx={{ display: 'flex', alignItems: 'center', p: 2, border: '1px solid #e2e8f0', borderRadius: '12px', bgcolor: '#f8fafc' }}>
                    <DescriptionOutlinedIcon sx={{ color: '#8b5cf6', mr: 2 }} />
                    <Typography sx={{ flexGrow: 1, color: '#475569', fontWeight: 500, fontSize: '0.95rem' }}>MIGRATION-PHASE-1-Aggregated.xlsx</Typography>
                    <Typography sx={{ color: '#6366f1', fontWeight: 700, fontSize: '0.75rem', letterSpacing: 1 }}>READY</Typography>
                  </Box>
                  {/* Queued File */}
                  <Box sx={{ display: 'flex', alignItems: 'center', p: 2, border: '1px solid #e2e8f0', borderRadius: '12px', bgcolor: '#ffffff' }}>
                    <InsertDriveFileOutlinedIcon sx={{ color: '#cbd5e1', mr: 2 }} />
                    <Typography sx={{ flexGrow: 1, color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem' }}>DETAIL-ANALYSIS-COMPLETE.xlsx</Typography>
                    <Typography sx={{ color: '#94a3b8', fontWeight: 700, fontSize: '0.75rem', letterSpacing: 1 }}>QUEUED</Typography>
                  </Box>
                </Stack>
              </FadeUp>
            </Grid>

            {/* Right Side: Boost & Granularity Cards */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={4} sx={{ height: '100%' }}>
                
                {/* Efficiency Boost Card */}
                <FadeUp delay={400} fullHeight>
                  <Card elevation={0} sx={{ bgcolor: '#ffffff', borderRadius: '24px', border: '1px solid #f1f5f9', p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ position: 'relative', width: 110, height: 110, border: '4px solid #7c3aed', borderRadius: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 4 }}>
                      <Box sx={{ position: 'absolute', top: -10, right: -15, bgcolor: '#7c3aed', color: '#fff', px: 1.5, py: 0.5, borderRadius: '12px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: 0.5 }}>BOOST</Box>
                      <Typography variant="h3" sx={{ color: '#7c3aed', fontWeight: 700, fontSize: '2.5rem' }}>85%</Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: '#111827', fontWeight: 600, mb: 2 }}>Efficiency Boost</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>Reduction in human effort for meta-data mapping and complexity auditing.</Typography>
                  </Card>
                </FadeUp>

                {/* Lower Granularity Card */}
                <FadeUp delay={500} fullHeight>
                  <Card elevation={0} sx={{ bgcolor: '#ffffff', borderRadius: '24px', border: '1px solid #f1f5f9', p: 4, height: '100%' }}>
                    <Box sx={{ bgcolor: '#f3e8ff', width: 40, height: 40, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                      <DescriptionOutlinedIcon sx={{ color: '#7c3aed', fontSize: 20 }} />
                    </Box>
                    <Typography variant="h6" sx={{ color: '#111827', fontWeight: 600, mb: 3 }}>Lower Granularity</Typography>
                    <Stack spacing={2}>
                      {['Deep component-level scanning', 'Property mapping accuracy', 'Automated Excel exports'].map((item, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <CheckCircleOutlineIcon sx={{ color: '#a78bfa', fontSize: 18 }} />
                          <Typography variant="body2" sx={{ color: '#64748b' }}>{item}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Card>
                </FadeUp>

              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =========================================
        SECTION 3: ANALYSIS & DOCUMENTATION
        ========================================= 
      */}
      <Box sx={{ py: { xs: 8, md: 14 }, background: 'radial-gradient(circle at 100% 100%, rgba(243, 232, 255, 0.5) 0%, transparent 60%)' }}>
        <Container maxWidth="lg">
<Grid container spacing={6} sx={{ alignItems: 'center' }}>            
            {/* Left Side: Text and Outline Cards */}
            <Grid size={{ xs: 12, md: 6 }}>
              <FadeUp delay={0}>
                <Typography variant="h2" sx={{ fontWeight: 300, color: '#111827', mb: 1, fontSize: { xs: '2.5rem', md: '3.2rem' }, lineHeight: 1.2 }}>
                  Extracted Analysis & <br />
                  <Box component="span" sx={{ color: '#f87171' }}>Documentation</Box>
                </Typography>
              </FadeUp>

              <FadeUp delay={100}>
                <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, mt: 4, mb: 5 }}>
                  Meta-Flow's core advantage lies in its ability to parse complex Talend hierarchies. By targeting XML structures, the analyzer extracts transformation logic, connection strings, and data lineage without ever opening the Talend Studio.
                </Typography>
              </FadeUp>

              {/* Outline Cards Row */}
              <FadeUp delay={200}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 6 }}>
                  <Box sx={{ border: '1px solid #c4b5fd', borderRadius: '16px', p: 3, flex: 1, bgcolor: '#fff' }}>
                    <Typography sx={{ color: '#7c3aed', fontWeight: 400, fontSize: '1.1rem', mb: 1.5, textTransform: 'uppercase', letterSpacing: 0.5 }}>SOURCE SCAN</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>Validates input parameters and data types across 7000+ entry points.</Typography>
                  </Box>
                  <Box sx={{ border: '1px solid #c4b5fd', borderRadius: '16px', p: 3, flex: 1, bgcolor: '#fff' }}>
                    <Typography sx={{ color: '#7c3aed', fontWeight: 400, fontSize: '1.1rem', mb: 1.5, textTransform: 'uppercase', letterSpacing: 0.5 }}>TARGET MAPPING</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>Ensures destination consistency for seamless migration paths.</Typography>
                  </Box>
                </Stack>
              </FadeUp>

              <FadeUp delay={300}>
                <Button 
                  variant="contained" 
                  sx={{ bgcolor: '#111827', color: '#fff', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.85rem', pl: 3, pr: 1, py: 1, '&:hover': { bgcolor: '#1f2937' } }}
                  endIcon={<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#7c3aed', borderRadius: '50%', width: 32, height: 32, ml: 1 }}><ArrowForwardIcon sx={{ fontSize: 16, color: '#fff' }} /></Box>}
                >
                  Explore Documentation
                </Button>
              </FadeUp>
            </Grid>

            {/* Right Side: Skewed Document Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <FadeUp delay={400}>
                <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
                  <Box
                    component="img"
                    src={problemStatementImg}
                    alt="Problem Statement Document"
                    sx={{
                      width: '100%',
                      maxWidth: '550px',
                      borderRadius: '16px',
                      // Gives it the slight rotated/tilted look from the screenshot
                      transform: 'rotate(-4deg) scale(1.02)', 
                      boxShadow: '-10px 20px 40px rgba(0,0,0,0.1)',
                      transition: 'transform 0.4s ease',
                      '&:hover': { transform: 'rotate(0deg) scale(1.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }
                    }}
                  />
                </Box>
              </FadeUp>
            </Grid>

          </Grid>
        </Container>
      </Box>

    </Box>
  );
}