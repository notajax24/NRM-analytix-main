import { Box, Typography, Container, Stack, Chip, Button, Divider } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import Footer from '../components/common/Footer';
// const filteredJobs = jobs;


// ----------------------------------------------------------------------
// 1. REUSABLE ANIMATION WRAPPER
// ----------------------------------------------------------------------
const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <Box ref={ref} sx={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      willChange: 'opacity, transform'
    }}>
      {children}
    </Box>
  );
};

// ----------------------------------------------------------------------
// 2. DATA ARRAYS
// ----------------------------------------------------------------------
const categories = ['View all', 'Development', 'Product Design', 'Marketing', 'Customer Service', 'Operations', 'Finance'];

const jobs = [
  {
    titleStart: 'Databricks ',
    titleHighlight: 'Architect',
    categories: ['Development', 'Operations'],
    desc: 'We are looking for an experienced Databricks Architect with strong expertise in Databricks Platform Services (PS), Feature Store architecture, and Tecton to Databricks migration projects. The ideal candidate should have hands-on experience designing and implementing scalable ML feature engineering platforms and modern data architectures.',
    note: 'This is primarily a contractual consulting role for highly skilled professionals who can contribute independently to migration and optimization initiatives.',
    exp: '6-10 Years',
    type: 'Full Time',
    location: 'Chennai, INDIA'
  },
  {
    titleStart: 'Senior Data Engineer – ',
    titleHighlight: 'Databricks & Feature Store',
    categories: ['Development'],
    desc: 'We are hiring a Senior Data Engineer with strong expertise in Databricks, Feature Store implementation, and ML-focused data engineering. The ideal candidate should have experience working on Tecton to Databricks migration projects and building scalable feature engineering pipelines.',
    note: 'The candidate should be comfortable working in fast-paced consulting environments and capable of independently driving data engineering tasks.',
    exp: '6-10 Years',
    type: 'Full Time',
    location: 'Chennai, INDIA'
  },
  {
    titleStart: 'ClickHouse Data Engineer — ',
    titleHighlight: '(Hybrid)',
    categories: ['Development', 'Operations'],
    desc: 'We\'re looking for a motivated fresher ClickHouse Data Engineer to join our data team and work closely with senior engineers on building, optimizing, and maintaining ETL/ELT pipelines and ClickHouse-backed analytics solutions.',
    note: 'This role is ideal for recent graduates who are eager to learn, work on large-scale reporting and real-time data use cases, and grow in a hybrid work environment',
    exp: '6-10 Years', // Kept verbatim from the screenshot despite the 'fresher' description
    type: 'Full Time',
    location: 'Chennai, INDIA'
  }
];

// ----------------------------------------------------------------------
// 3. MAIN PAGE COMPONENT
// ----------------------------------------------------------------------
export default function CareersPage() {
  const [activeCategory] = useState('View all');
  const filteredJobs = activeCategory === 'View all'
    ? jobs
    : jobs.filter((job) => job.categories?.includes(activeCategory));

  return (
    <Box sx={{
      bgcolor: '#fcfcfd',
      minHeight: '100vh',
      // pb: 12,
      background: `
        radial-gradient(circle at 85% 30%, rgba(254, 226, 226, 0.4) 0%, transparent 40%),
        radial-gradient(circle at 15% 60%, rgba(243, 232, 255, 0.4) 0%, transparent 40%)
      `
    }}>
      <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 6 }, px: { xs: 3, md: 6, lg: 8 } }}>

        {/* ================= HERO SECTION ================= */}
        <FadeUp delay={0}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              minHeight: { xs: '300px', md: '450px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              mb: { xs: 8, md: 10 },
              // Replace with your actual hero image
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              px: 2
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, letterSpacing: 0.5, opacity: 0.9 }}>
              We're Hiring
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 300, fontSize: { xs: '2.5rem', md: '4rem' } }}>
              Be Part of <Box component="span" sx={{ color: '#f87171' }}>Our Team</Box>
            </Typography>
          </Box>
        </FadeUp>

        <Box sx={{ width: '100%', mx: 'auto' }}>

          {/* ================= INTRO & FILTERS ================= */}
          <FadeUp delay={100}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 300, mb: 3, color: '#1e293b' }}>
                Join <Box component="span" sx={{ color: '#f87171' }}>Our Team</Box>
              </Typography>
              <Typography variant="h6" sx={{ color: '#475569', fontWeight: 300, lineHeight: 1.6, mb: 5 }}>
                We are looking for passionate people to join us on our mission, We value equal opportunity, clear communication, and full ownership and responsibility
              </Typography>

              {/* <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2, mb: 4 }}>
                {categories.map((cat) => (
                  <Chip 
                    key={cat}
                    label={cat}
                    onClick={() => setActiveCategory(cat)}
                    sx={{ 
                      borderRadius: '50px',
                      px: 2,
                      py: 2.5,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      bgcolor: activeCategory === cat ? '#7c3aed' : 'transparent',
                      color: activeCategory === cat ? '#fff' : '#64748b',
                      border: activeCategory === cat ? '1px solid #7c3aed' : '1px solid #cbd5e1',
                      '&:hover': {
                        bgcolor: activeCategory === cat ? '#6d28d9' : 'rgba(0,0,0,0.04)',
                      }
                    }}
                  />
                ))}
              </Stack> */}
              {/* <Stack
  direction="row"
  spacing={2}
  sx={{
    flexWrap: 'nowrap',
    overflowX: 'auto',
    mb: 4,
    pb: 1,
    '&::-webkit-scrollbar': { height: 6 },
    '&::-webkit-scrollbar-thumb': { bgcolor: '#e2e8f0', borderRadius: 3 },
  }}
>
  {categories.map((cat) => (
    <Chip 
      key={cat}
      label={cat}
      onClick={() => setActiveCategory(cat)}
      sx={{ 
        borderRadius: '50px',
        px: 2,
        py: 2.5,
        fontSize: '0.95rem',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'all 0.2s',
        bgcolor: activeCategory === cat ? '#7c3aed' : 'transparent',
        color: activeCategory === cat ? '#fff' : '#64748b',
        border: activeCategory === cat ? '1px solid #7c3aed' : '1px solid #cbd5e1',
        '&:hover': {
          bgcolor: activeCategory === cat ? '#6d28d9' : 'rgba(0,0,0,0.04)',
        }
      }}
    />
  ))}
</Stack> */}
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  flexWrap: 'nowrap',
                  overflowX: 'auto',
                  mb: 4,
                  pb: 1,
                  '&::-webkit-scrollbar': { height: 6 },
                  '&::-webkit-scrollbar-thumb': { bgcolor: '#e2e8f0', borderRadius: 3 },
                }}
              >
          {categories.map((cat) => (
  <Chip
    key={cat}
    label={cat}
    sx={{
      borderRadius: '50px',
      px: 2,
      py: 2.5,
      fontSize: '0.95rem',
      flexShrink: 0,
      bgcolor: cat === 'View all' ? '#7c3aed' : 'transparent',
      color: cat === 'View all' ? '#fff' : '#64748b',
      border: cat === 'View all' ? '1px solid #7c3aed' : '1px solid #cbd5e1',
    }}
  />
))}
              </Stack>

              <Divider sx={{ borderColor: '#e2e8f0' }} />
            </Box>
          </FadeUp>

          {/* ================= JOB LISTINGS ================= */}
          <Stack spacing={0}>
            {filteredJobs.map((job, index) => (
              <FadeUp delay={150 + (index * 100)} key={index}>
                <Box sx={{ py: 5, borderBottom: index !== filteredJobs.length - 1 ? '1px solid #e2e8f0' : 'none' }}>

                  <Typography variant="h4" sx={{ fontWeight: 400, color: '#1e293b', mb: 2.5 }}>
                    {job.titleStart}
                    <Box component="span" sx={{ color: '#f87171' }}>{job.titleHighlight}</Box>
                  </Typography>

                  <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.7, mb: 2 }}>
                    {job.desc}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#8b5cf6', mb: 4 }}>
                    {job.note}
                  </Typography>

                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={3}
                    sx={{
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', sm: 'center' }
                    }}
                  >
                    {/* Metadata Pills */}
                    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: { xs: 2, sm: 0 } }}>
                      <Chip
                        icon={<CalendarTodayOutlinedIcon sx={{ fontSize: 18, color: '#f87171 !important' }} />}
                        label={`Exp. Required - ${job.exp}`}
                        variant="outlined"
                        sx={{ borderRadius: '50px', color: '#1e293b', borderColor: '#cbd5e1', bgcolor: 'transparent', py: 2, px: 0.5, fontWeight: 500 }}
                      />
                      <Chip
                        label={job.type}
                        variant="outlined"
                        sx={{ borderRadius: '50px', color: '#8b5cf6', borderColor: '#cbd5e1', bgcolor: 'transparent', py: 2, px: 1, fontWeight: 500 }}
                      />
                      <Chip
                        icon={<LocationOnOutlinedIcon sx={{ fontSize: 18, color: '#f87171 !important' }} />}
                        label={job.location}
                        variant="outlined"
                        sx={{ borderRadius: '50px', color: '#8b5cf6', borderColor: '#cbd5e1', bgcolor: 'transparent', py: 2, px: 0.5, fontWeight: 500 }}
                      />
                    </Stack>

                    {/* Apply Button */}
                    <Button
                      component="a"
                      href="https://forms.office.com/r/9P8sWd9sh9"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      sx={{
                        bgcolor: '#111827',
                        color: '#fff',
                        borderRadius: '50px',
                        textTransform: 'none',
                        px: 3,
                        py: 1,
                        fontSize: '1rem',
                        '&:hover': { bgcolor: '#000' }
                      }}
                      endIcon={
                        <Box sx={{
                          bgcolor: '#7c3aed',
                          borderRadius: '50%',
                          width: 24,
                          height: 24,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          ml: 0.5
                        }}>
                          <ArrowOutwardIcon sx={{ fontSize: 14, color: 'white' }} />
                        </Box>
                      }
                    >
                      Apply
                    </Button>
                  </Stack>
                </Box>
              </FadeUp>
            ))}
          </Stack>
        </Box>
        {/* why career with us  */}

        <Box sx={{ my: { xs: 8, md: 12 }, px: { xs: 2, md: 0 } }}>
          <Typography variant="h3" sx={{ fontWeight: 200, mb: 6, color: '#1e293b' }}>
            Why Join <Box component="span" sx={{ color: '#f87171' }}>NRM ?</Box>
          </Typography>

          <Stack spacing={4}>
            {[
              { num: '01.', label: 'Impact:', desc: 'Build high-impact Data & AI solutions that transform real Business.', color: '#7c3aed' },
              { num: '02.', label: 'Fast Learning:', desc: 'Learn fast with hands-on projects modern stacks, and visible ownership.', color: '#f87171' },
              { num: '03.', label: 'Empowered:', desc: 'Join a small, Empowered Team where your ideas drive product decisions.', color: '#7c3aed' },
              { num: '04.', label: 'Career Growth:', desc: 'Grow your career with clear progression and client-facing experience.', color: '#f87171' },
              { num: '05.', label: 'Development:', desc: 'Help deliver Reliable, secure, scalable data products used across industries.', color: '#7c3aed' },
            ].map((item, index) => (
              <FadeUp key={index} delay={index * 100}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 200,
                    color: '#cbd5e1',
                    lineHeight: 1
                  }}>
                    {item.num}
                  </Typography>
                  <Typography variant="h5" sx={{
                    fontWeight: 400,
                    color: '#1e293b',
                    lineHeight: 1.5,
                    fontSize: { xs: '1.1rem', md: '1.4rem' }
                  }}>
                    <Box component="span" sx={{ color: item.color, fontWeight: 600 }}>
                      {item.label}
                    </Box>
                    {' '}{item.desc}
                  </Typography>
                </Box>
              </FadeUp>
            ))}
          </Stack>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}