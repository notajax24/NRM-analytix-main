// src/pages/AboutPage.tsx
import { Box, Typography, Container, Stack, Card, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import Footer from '../components/common/Footer';
import ceoImg from '../assets/ceo.png';


// ----------------------------------------------------------------------
// 1. REUSABLE ANIMATION WRAPPER
// ----------------------------------------------------------------------
const FadeUp = ({ children, delay = 0, fullHeight }: { children: ReactNode; delay?: number; fullHeight?: boolean }) => {
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
      height: fullHeight ? '100%' : 'auto', 
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
// 2. MAIN PAGE COMPONENT
// ----------------------------------------------------------------------
export default function AboutPage() {

  useEffect(() => {

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
    }
    metaDescription.setAttribute('content', 'Learn about NRM Analytix, a specialized Data and AI consulting company headquartered in Kancheepuram, Tamil Nadu, dedicated to turning data into your competitive advantage.');

    const ogTags = {
      'og:title': 'About Us | NRM Analytix',
      'og:description': 'Specialized Data and AI consulting company helping organizations unlock the full, transformative potential of their data.',
      'og:image': 'https://nrmanalytix.com/preview.png', 
      'og:type': 'website'
    };
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) { 
        tag = document.createElement('meta'); 
        tag.setAttribute('property', property); 
        document.head.appendChild(tag); 
      }
      tag.setAttribute('content', content);
    });
  }, []);

  const industries = [
    'Healthcare', 'Financial Services', 'Logistics & Supply Chain', 'Energy & Utilities',
    'Telecommunications', 'Education', 'Government & Public Sector', 'Media & Technology',
    'Manufacturing', 'Retail & E-Commerce'
  ];

  const values = [
    { num: '01.', title: 'Expertise', desc: 'We are deep specialists, not generalists. Every member of our team is selected for their technical depth and industry knowledge. When you work with NRM Analytix, ', highlight: 'you work with people who genuinely know Data and AI inside and out.' },
    { num: '02.', title: 'Transparency', desc: 'We believe in honest, open relationships. We will tell you what is working, what is not, and what we would do if it were our own data platform. ', highlight: 'No surprises, no jargon, no inflated timelines.' },
    { num: '03.', title: 'Impact', desc: 'Technology is only a means to an end. Everything we build is designed to create measurable, lasting business impact — ', highlight: 'cost savings, efficiency gains, better decisions, and real competitive advantage.' }
  ];

  const overviewCards = [
    { title: 'Registered Name:', value: 'NRM Analytix IT Consulting\nAnd Service Private Limited', bgText: 'Reg.', isPurple: false },
    { title: 'Founded Year', value: '05-February- 2024', bgText: 'Ftd.', isPurple: false },
    { title: 'Company Type', value: 'Private Limited.', bgText: 'Pvt.', isPurple: false },
    { title: 'CIN', value: 'U63990TN2024PTC167210', bgText: 'CIN', isPurple: false },
    { title: 'ROC', value: 'ROC Chennai', bgText: 'ROC', isPurple: false },
    { title: 'Headquarters:', value: 'Kancheepuram, Tamil Nadu\n– 631502, India', bgText: 'HQ', isPurple: false },
  ];

  // Data array for the "Reasons to Choose Us" section, with alternating theme logic
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

  return (
    <Box sx={{ 
      bgcolor: '#fcfcfd', 
      overflow: 'hidden',
      background: `
        radial-gradient(circle at 15% 10%, rgba(243, 232, 255, 0.7) 0%, transparent 30%), 
        radial-gradient(circle at 85% 30%, rgba(254, 226, 226, 0.5) 0%, transparent 30%),
        radial-gradient(circle at 50% 60%, rgba(243, 232, 255, 0.5) 0%, transparent 40%)
      `
    }}>
      <Container maxWidth={"xl"} sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, sm: 4, md: 6, lg: 12 } }}>
        
        {/* ================= SECTION 1: ABOUT NRM ANALYTIX ================= */}
        <Box sx={{ mb: { xs: 10, md: 14 }, textAlign: 'center' }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#7c3aed' }} />
              <Typography variant="overline" sx={{ color: '#7c3aed', letterSpacing: 1.5, fontWeight: 500 }}>ABOUT US</Typography>
            </Box>
          </FadeUp>
          
          <FadeUp delay={100}>
            <Box sx={{ maxWidth: '860px', mx: 'auto' }}>
              <Typography variant="h2" sx={{ fontWeight: 300, mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' }, color: '#1e293b' }}>
                About <Box component="span" sx={{ color: '#ef4444' }}>NRM Analytix</Box>
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', mb: 6, textTransform: 'uppercase', letterSpacing: 1 }}>
                Turning Data into Your Competitive Advantage
              </Typography>
            </Box>
          </FadeUp>

          <FadeUp delay={200}>
            <Box sx={{ width: '100%', textAlign: 'left', mx: 'auto', maxWidth: 'auto' }}>
              <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.25rem', lineHeight: 1.8, mb: 3 }}>
                NRM Analytix is a specialized Data and AI consulting company headquartered in Kancheepuram, Tamil Nadu, India. <Box component="span" sx={{ color: '#ef4444' }}>Founded in February 2024</Box> and registered as NRM Analytix IT Consulting And Service Private Limited, we exist for one purpose: to help organizations across India and beyond unlock the full, transformative potential of their data.
              </Typography>
              <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.25rem', lineHeight: 1.8 }}>
                <Box component="span" sx={{ color: '#ef4444' }}>We serve clients across 10+ industries</Box> — providing expert guidance on Databricks, Big Data architecture, cloud data migration, Power BI, enterprise analytics, and machine learning. Our team of experienced data professionals combines deep technical expertise with a genuine understanding of business — <Box component="span" sx={{ color: '#7c3aed' }}>delivering solutions that are not just technically sound, but strategically impactful.</Box>
              </Typography>
            </Box>
          </FadeUp>
        </Box>

        {/* ================= SECTION 2: MISSION ================= */}
        <Box sx={{ mb: { xs: 10, md: 14 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#7c3aed' }} />
              <Typography variant="overline" sx={{ color: '#7c3aed', letterSpacing: 1.5, fontWeight: 500 }}>MISSION</Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 300, mb: 4, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#1e293b' }}>
              Our <Box component="span" sx={{ color: '#ef4444' }}>Mission</Box>
            </Typography>
          </FadeUp>
          
          <FadeUp delay={100}>
            <Typography variant="h4" sx={{ height: '100%', color: '#6b21a8', fontWeight: 100, fontSize: { xs: '1rem', md: '1.5rem' },  lineHeight: 1.6, width: '100%' }}>
              "At NRM Analytix, our mission is to empower organizations to conquer their most challenging data problems by delivering elite IT consulting specialized in the Databricks ecosystem. We seamlessly guide businesses through complex cloud migrations, optimize PySpark and data lake architectures, and establish robust, best-in-class data engineering practices. By replacing architectural complexity with streamlined performance tuning, we ensure your data pipelines run fast, scale effortlessly, and remain cost-effective. Ultimately, we turn raw big data infrastructure into a highly reliable asset that fuels your daily operational success. "
            </Typography>
          </FadeUp>
        </Box>

        {/* ================= SECTION 3: INDUSTRIES WE SERVE ================= */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#7c3aed' }} />
              <Typography 
                variant="overline" 
                sx={{ 
                  color: '#7c3aed ',
                  letterSpacing: 1.5, 
                  fontWeight: 500,
                  textDecorationColor: '#3b82f6',
                  textUnderlineOffset: '4px'
                }}
              >
                WE SERVE
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 300, mb: 6, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#1e293b' }}>
              Industries <Box component="span" sx={{ color: '#ef4444' }}>We Serve</Box>
            </Typography>
          </FadeUp>

          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, 
              gap: { xs: 3, md: 4 } 
            }}
          >
            {industries.map((industry, index) => (
              <FadeUp delay={100 + (index * 50)} key={index}>
                <Box 
                  sx={{ 
                    position: 'relative',
                    bgcolor: '#f4f5f7',
                    border: '1px solid rgba(255, 255, 255, 0.8)', 
                    borderRadius: '8px', 
                    boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                    px: 2, 
                    py: { xs: 2.5, md: 3 }, 
                    width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 12, left: 16, display: 'flex', gap: 0.5 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#ef4444' }} />
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#eab308' }} />
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#22c55e' }} />
                  </Box>
                  
                  <Typography sx={{ color: '#7c3aed', fontWeight: 500, fontSize: '0.95rem' }}>
                    {industry}
                  </Typography>
                </Box>
              </FadeUp>
            ))}
          </Box>
        </Box>
        {/* ================= SECTION 4: WHAT WE STAND FOR ================= */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#7c3aed' }} />
              <Typography variant="overline" sx={{ color: '#7c3aed', letterSpacing: 1.5, fontWeight: 500 }}>OUR VALUES</Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 300, mb: 8, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#1e293b' }}>
              What <Box component="span" sx={{ color: '#ef4444' }}>We Stand For</Box>
            </Typography>
          </FadeUp>

          <Stack spacing={8}>
            {values.map((val, index) => (
              <FadeUp delay={100 + (index * 100)} key={index}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 2 }}>
                    <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 200, color: '#d8b4fe', lineHeight: 1 }}>
                      {val.num}
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#6b21a8', fontWeight: 400 }}>
                      {val.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.25rem', lineHeight: 1.7, pl: { xs: 0, md: '5rem' }, maxWidth: '1000px' }}>
                    {val.desc}
                    <Box component="span" sx={{ color: '#ef4444' }}>{val.highlight}</Box>
                  </Typography>
                </Box>
              </FadeUp>
            ))}
          </Stack>
        </Box>

        {/* ================= SECTION 5: COMPANY OVERVIEW ================= */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#7c3aed' }} />
              <Typography variant="overline" sx={{ color: '#7c3aed', letterSpacing: 1.5, fontWeight: 500 }}>OVERVIEW</Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 300, mb: 6, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#1e293b' }}>
              Company <Box component="span" sx={{ color: '#ef4444' }}>Overview</Box>
            </Typography>
          </FadeUp>

          <Grid container spacing={3}>
            {overviewCards.map((card, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}> 
                <FadeUp delay={100 + (index * 100)} fullHeight>
                  <Card sx={{ 
                    position: 'relative', 
                    overflow: 'hidden', 
                    height: '100%', 
                    p: 4, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    textAlign: 'center',
                    bgcolor: '#f4f5f7',
                    borderRadius: '12px',
                    minHeight: '260px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      bgcolor: '#14141d',
                      borderColor: '#14141d',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 15px 40px rgba(15, 23, 42, 0.25)', 
                      '& .bg-watermark': {
                        transform: 'translate(-50%, -50%) scale(1.05)',
                        color: 'rgba(255,255,255,0.03)',
                      },
                      '& .card-title': {
                        color: '#94a3b8'
                      },
                      '& .card-value': {
                        color: '#f87171'
                      }
                    }
                  }}>
                    <Typography className="bg-watermark" sx={{ 
                      position: 'absolute', 
                      top: '50%', left: '50%', 
                      transform: 'translate(-50%, -50%)', 
                      fontSize: { xs: '6rem', sm: '8rem', md: '10rem' }, 
                      fontWeight: 900, 
                      color: 'rgba(0,0,0,0.04)', 
                      zIndex: 0,
                      whiteSpace: 'nowrap',
                      pointerEvents: 'none',
                      transition: 'all 0.4s ease-in-out'
                    }}>
                      {card.bgText}
                    </Typography>
                    
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Typography 
                        className="card-title" 
                        variant="body2" 
                        sx={{ 
                          color: '#475569', 
                          mb: 1, 
                          display: 'block',
                          transition: 'color 0.4s ease'
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography 
                        className="card-value" 
                        variant="h5" 
                        sx={{ 
                          color: '#7c3aed', 
                          fontWeight: 400, 
                          whiteSpace: 'pre-line',
                          transition: 'color 0.4s ease'
                        }}
                      >
                        {card.value}
                      </Typography>
                    </Box>
                  </Card>
                </FadeUp>
              </Grid>
            ))}

            <Grid size={{ xs: 12 }}>
              <FadeUp delay={700}>
                <Card sx={{ 
                  position: 'relative', 
                  overflow: 'hidden', 
                  p: { xs: 4, md: 6 }, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  textAlign: 'center',
                  bgcolor: '#f4f5f7', 
                  border: '1px solid rgba(139, 92, 246, 0.25)', 
                  borderRadius: '12px',
                  minHeight: '300px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    bgcolor: '#14141d', 
                    borderColor: '#14141d',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 40px rgba(15, 23, 42, 0.25)',
                    '& .bg-watermark': {
                      transform: 'translate(-50%, -50%) scale(1.05)',
                      color: 'rgba(255,255,255,0.03)',
                    },
                    '& .card-title': { color: '#94a3b8' },
                    '& .card-value': { color: '#f87171' }
                  }
                }}>
                  <Typography className="bg-watermark" sx={{ 
                    position: 'absolute', 
                    top: '50%', left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    fontSize: { xs: '5rem', md: '10rem' }, 
                    fontWeight: 900, 
                    color: 'rgba(0,0,0,0.04)', 
                    zIndex: 0,
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    transition: 'all 0.4s ease-in-out'
                  }}>
                    LOCATION
                  </Typography>
                  
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography 
                      className="card-title" 
                      variant="body2" 
                      sx={{ color: '#475569', mb: 1.5, display: 'block', transition: 'color 0.4s ease' }}
                    >
                      Registered Address:
                    </Typography>
                    <Typography 
                      className="card-value" 
                      variant="h5" 
                      sx={{ color: '#7c3aed', fontWeight: 400, mb: 4, lineHeight: 1.6, transition: 'color 0.4s ease' }}
                    >
                      No 1 Sundara Vinayagar Nagar, Velingapattarai, Orikkai,<br/>
                      Kanchipuram, Tamil Nadu – 631502
                    </Typography>
                    
                    <Stack direction="row" spacing={3} sx={{ justifyContent: 'center' }}>
                      <IconButton 
                        href="mailto:info@nrmanalytix.com" 
                        sx={{ p: 0, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}
                      >
                        <Box 
                          component="img" 
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
                          alt="Gmail" 
                          sx={{ width: 36, height: 36 }} 
                        />
                      </IconButton>
                      
                      <IconButton 
                        href="https://linkedin.com/company/nrm-analytix" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        sx={{ p: 0, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}
                      >
                        <Box 
                          component="img" 
                          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                          alt="LinkedIn" 
                          sx={{ width: 36, height: 36 }} 
                        />
                      </IconButton>
                    </Stack>
                  </Box>
                </Card>
              </FadeUp>
            </Grid>
          </Grid>
        </Box>

        {/* ================= SECTION 6: MEET THE VISIONARIES ================= */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography variant="overline" sx={{ color: '#8b5cf6', letterSpacing: 1.5, fontWeight: 500 }}>
                THE ROOT PILLARS
              </Typography>
            </Box>
            
            <Typography variant="h3" sx={{ fontWeight: 300, mb: 4, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#1e293b' }}>
              Meet our <Box component="span" sx={{ color: '#f87171' }}>visionaries</Box>
            </Typography>

            <Typography 
              sx={{ 
                color: '#7c3aed', 
                fontSize: { xs: '1rem', md: '1.5rem' }, 
                lineHeight: 1.7, 
                mb: 4, 
                fontWeight: 400 
              }}
            >
              Our vision is to become the definitive global benchmark for Databricks consulting, recognized for engineering excellence and game-changing analytical strategies. We envision a future where enterprises from fast-growing startups to massive financial institutions—fully unlock the power of the lakehouse architecture without the typical migration headaches. By continuously blogging, sharing open solutions, and championing modern data frameworks, NRM Analytix aims to cultivate an inspired community of data professionals. We don't just want to build data warehouses and dashboards; we aim to sculpt the future landscape of enterprise business intelligence.
            </Typography>

            <Typography 
              sx={{ 
                color: '#f87171', 
                fontSize: { xs: '1rem', md: '1.15rem' }, 
                lineHeight: 1.6, 
                maxWidth: '900px',
                fontWeight: 400
              }}
            >
              "Data is complex, but our approach is simple: engineer it with passion, tune it to perfection, and always keep innovating." — Madhan Raghu, Founder, NRM Analytix
            </Typography>
          </FadeUp>

          <Box sx={{ mt: { xs: 10, md: 14 } }}>
            <Grid container spacing={4} sx={{ alignItems: 'center' }}>
              
              <Grid size={{ xs: 12, md: 7 }}>
                <FadeUp delay={200}>
                  <Typography variant="h4" sx={{ fontWeight: 300, mb: 5, color: '#1e293b', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                    Meet Our <Box component="span" sx={{ color: '#f87171' }}>CEO</Box>
                  </Typography>
                  
                  <Box sx={{ position: 'relative', height: { xs: '80px', md: '100px' }, display: 'flex', alignItems: 'center', mb: 4 }}>
                    <Typography 
                      sx={{ 
                        position: 'absolute', 
                        left: 0, 
                        fontSize: { xs: '4.5rem', md: '6.5rem' }, 
                        fontWeight: 800, 
                        color: '#f1f5f9', 
                        zIndex: 0, 
                        whiteSpace: 'nowrap', 
                        letterSpacing: '-0.02em',
                        userSelect: 'none'
                      }}
                    >
                      Mr. Madan
                    </Typography>
                    
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        position: 'relative', 
                        zIndex: 1, 
                        color: '#f87171', 
                        fontWeight: 400, 
                        fontSize: { xs: '2rem', md: '3.5rem' },
                        ml: { xs: 3, md: 7 } 
                      }}
                    >
                      Madhan Raghu
                    </Typography>
                  </Box>

                  <Typography sx={{ color: '#475569', fontSize: '01.05rem', lineHeight: 1.7, maxWidth: '550px' }}>
Madhan Raghu is a veteran Technical Data Architect with over 15 years of battle-tested experience orchestrating enterprise-scale big data architectures and analytical strategies. A recognized specialist in the Databricks ecosystem, PySpark, and complex cloud migrations, he has spent his career guiding major global financial institutions (BFSI) and enterprises through dense data transformations. Beyond his deep technical mastery in performance tuning and lakehouse engineering, Madhan is a passionate tech blogger, a published white paper author, and a community problem solver who believes that cutting-edge data solutions should be built with absolute precision and perhaps a healthy dose of humor. As the visionary behind NRM Analytix, he fuses this extensive industry expertise with a relentless passion for data to help organizations turn architectural complexity into clear, competitive advantages.                  </Typography>
                </FadeUp>
              </Grid>
              
              <Grid size={{ xs: 12, md: 5 }}>
                <FadeUp delay={400}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box 
                      component="img" 
                      src={ceoImg}
                      alt="Madhan Raghu - CEO" 
                      sx={{ 
                        width: '100%', 
                        maxWidth: { xs: '300px', md: '350px' }, 
                        height: 'auto', 
                        objectFit: 'contain' 
                      }} 
                    />
                  </Box>
                </FadeUp>
              </Grid>

            </Grid>
          </Box>
        </Box>
        {/* ================= SECTION 7: REASONS TO CHOOSE US ================= */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <FadeUp delay={0}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
              <Typography variant="overline" sx={{ color: '#8b5cf6', letterSpacing: 1.5, fontWeight: 500 }}>
                WHY NRM ANALYTIX
              </Typography>
            </Box>

            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 300, 
                color: '#1e293b', 
                fontSize: { xs: '2rem', md: '2.5rem' }, 
                letterSpacing: '-0.02em',
                mb: 3
              }}
            >
             Why{' '}
              <Box component="span" sx={{ color: '#f87171', fontWeight: 300 }}>
                Choose Us ?
              </Box>
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                color: '#334155', 
                fontSize: { xs: '0.9rem', md: '1rem' }, 
                lineHeight: 1.7,
                maxWidth: '850px',
                mb: { xs: 6, md: 8 }
              }}
            >
              Deep-dives into architecture, sovereignty, and the future of industrial-scale automation. Curated research for the modern enterprise.
            </Typography>
          </FadeUp>

          <Stack spacing={6}>
            {reasonsData.map((item, index) => {
              const isPurple = item.theme === 'purple';

              const numColor = isPurple ? 'rgba(139, 92, 246, 0.3)' : 'rgba(248, 113, 113, 0.3)';
              const titleColor = isPurple ? '#6d28d9' : '#e11d48';
              const mainTextColor = isPurple ? '#8b5cf6' : '#f87171';
              const highlightTextColor = isPurple ? '#f87171' : '#8b5cf6';

              return (
                <FadeUp key={index} delay={200 + index * 100}>
                  <Box>
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
        </Box>

      </Container>
      
      
      <Footer />
    </Box>
  );
}