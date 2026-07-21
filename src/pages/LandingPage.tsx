import React, { useState, useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Schema from '../components/common/Schema';
import Canonical from '../components/common/Canonical';
import badge1 from '../assets/badge1.svg';
import badge2 from '../assets/badge2.svg';


const MacWindowDots = () => (
  <Box sx={{ display: 'flex', gap: { xs: '4px', md: '6px' }, position: 'absolute', top: { xs: '6px', md: '10px' }, left: { xs: '6px', md: '10px' } }}>
    <Box sx={{ width: { xs: 6, md: 10 }, height: { xs: 6, md: 10 }, borderRadius: '50%', bgcolor: '#ff5f56' }} />
    <Box sx={{ width: { xs: 6, md: 10 }, height: { xs: 6, md: 10 }, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
    <Box sx={{ width: { xs: 6, md: 10 }, height: { xs: 6, md: 10 }, borderRadius: '50%', bgcolor: '#27c93f' }} />
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
  customSx?: any;
  rotate?: string;
  display?: any;
}

const FloatingCard = ({ text, top, left, right, bottom, delay, entryDelay = 0, customSx, rotate, display }: FloatingCardProps) => (
  <Box sx={{ position: 'absolute', top, left, right, bottom, zIndex: 1, display: display || 'flex' }}>
    <FadeUp delay={entryDelay}>
      <Box sx={{ transform: rotate ? `rotate(${rotate})` : 'none' }}>
        <Box sx={{ animation: `float 6s ease-in-out infinite`, animationDelay: delay || '0s', willChange: 'transform' }}>
          <Box
            sx={{
              width: { xs: 85, sm: 100, md: 115, lg: 125 },
              height: { xs: 45, sm: 50, md: 55, lg: 60 },
              bgcolor: '#F2F2F2',
              color: '#1e293b',
              borderRadius: '8px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
              fontWeight: 500,
              fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.75rem' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              pt: { xs: 1, sm: 1.5, md: 2 }, // Add padding to push content below the dots
              opacity: { xs: 0.15, sm: 0.3, md: 0.4, lg: 1 }, // Fades out on smaller screens to prevent text overlap
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy premium transition
              '&:hover': {
                transform: 'scale(1.08)',
                boxShadow: '0 30px 60px rgba(139, 92, 246, 0.25)',
                bgcolor: '#191629',
                color: '#F2F2F2',
                opacity: 1
              },
              ...customSx
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

// Floating White Squares removed as requested

interface RectangleBoxProps {
  header: string;
  description: React.ReactNode;
  left?: any;
  right?: any;
  top?: any;
  bottom?: any;
  delay?: string;
  entryDelay?: number;
  customSx?: any;
  display?: any;
}

const RectangleBox = ({ header, description, left, right, top, bottom, delay, entryDelay = 0, customSx, display }: RectangleBoxProps) => (
  <Box sx={{ position: 'absolute', top, bottom, left, right, zIndex: 1, display: display || 'flex' }}>
    <FadeUp delay={entryDelay}>
      <Box sx={{ animation: `float 8s ease-in-out infinite`, animationDelay: delay || '0s', willChange: 'transform' }}>
        <Box
          sx={{
            width: { xs: 170, sm: 200, md: 220, lg: 280 },
            minHeight: { xs: 44, sm: 48, md: 52, lg: 56 },
            bgcolor: '#F2F2F2',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            px: { xs: 1, sm: 1.5, md: 2 }, py: 1, pt: { xs: 2, sm: 2.5, md: 3 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: { xs: 0.15, sm: 0.3, md: 0.4, lg: 1 },
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 30px 60px rgba(139, 92, 246, 0.25)',
              bgcolor: '#191629',
              opacity: 1,
              '& .MuiTypography-subtitle2': {
                color: '#F2F2F2'
              },
              '& .MuiTypography-caption': {
                color: '#94a3b8'
              }
            },
            ...customSx
          }}
        >
          <MacWindowDots />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', overflow: 'hidden', width: '100%' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1e293b', fontSize: { xs: '0.6rem', sm: '0.65rem', md: '0.7rem' }, lineHeight: 1.2, letterSpacing: '0.02em', transition: 'color 0.4s ease' }}>{header}</Typography>
            <Typography variant="caption" sx={{ color: '#475569', fontSize: { xs: '0.5rem', sm: '0.55rem', md: '0.6rem' }, whiteSpace: 'normal', lineHeight: 1.2, mt: 0.25, fontWeight: 400, transition: 'color 0.4s ease' }}>{description}</Typography>
          </Box>
        </Box>
      </Box>
    </FadeUp>
  </Box>
);

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

export default function LandingPage() {
  // Define your business for Google Search
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NRM Analytix",
    "url": "https://nrmanalytix.com", // Replace with your actual domain when live
    "logo": "https://nrmanalytix.com/logoNRM.png",
    "description": "A specialised Data and AI consulting company.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kancheepuram",
      "addressRegion": "Tamil Nadu",
      "postalCode": "631502",
      "addressCountry": "IN"
    }
  };

  useEffect(() => {
    document.title = "NRM Analytix | Expert Data & AI Solutions";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert Data & AI Solutions Built For Your Business. NRM Analytix delivers end-to-end consulting services including Databricks, Power BI, and Machine Learning.');

    // Open Graph Tags for Social Sharing
    const ogTags = {
      'og:title': 'NRM Analytix | Expert Data & AI Solutions',
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
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      minHeight: 'calc(100vh - 100px)',
      bgcolor: '#fdfdfd',
      py: { xs: 8, md: 0 }
    }}>

      {/* Inject SEO Schema invisibly into the page */}
      <Schema data={organizationSchema} />
      <Canonical url="https://nrmanalytix.com/" />

      {/* Premium Animated Glowing Background Orb */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: { xs: '150vw', md: '80vw' },
        height: { xs: '150vw', md: '80vw' },
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(236,72,153,0.08) 35%, rgba(255,255,255,0) 70%)',
        animation: 'pulseGlow 8s ease-in-out infinite alternate',
        zIndex: 0,
        pointerEvents: 'none',
        willChange: 'transform, opacity'
      }} />

      {/* Top Orbit (Left & Right) */}
      <FloatingCard text="Mosaic AI" top={{ md: '12%', lg: '15%' }} left={{ md: '4%', lg: '8%' }} delay="0s" entryDelay={500} rotate="-6deg" display={{ xs: 'none', md: 'flex' }} />
      <FloatingCard text="Workflows" top={{ md: '15%', lg: '18%' }} right={{ md: '4%', lg: '8%' }} delay="2s" entryDelay={700} rotate="8deg" display={{ xs: 'none', md: 'flex' }} />

      {/* Mid Orbit (Left & Right) */}
      <FloatingCard text="Data Live Tables" top={{ md: '42%', lg: '45%' }} left={{ md: '3%', lg: '5%' }} delay="1.5s" entryDelay={800} rotate="-4deg" display={{ xs: 'none', md: 'flex' }} />
      <FloatingCard text="DataBricks SQL" top={{ md: '48%', lg: '52%' }} right={{ md: '3%', lg: '5%' }} delay="1s" entryDelay={600} rotate="5deg" display={{ xs: 'none', md: 'flex' }} />

      {/* Bottom Orbit (Left, Right, and perfectly centered underneath) */}
      <RectangleBox
        header="Data Intelligence Platform"
        description={<>use <span style={{ color: '#8b5cf6', fontWeight: 600 }}>Generative AI</span> to understand <span style={{ color: '#8b5cf6', fontWeight: 600 }}>Semantics</span> of data</>}
        left={{ md: '3%', lg: '4%' }}
        bottom={{ md: '12%', lg: '18%' }}
        delay="0.5s"
        entryDelay={900}
        display={{ xs: 'none', md: 'flex' }}
      />
      <RectangleBox
        header="Data Catalog"
        description={<><span style={{ color: '#8b5cf6', fontWeight: 600 }}>Unity</span> Security Governance, and <span style={{ color: '#8b5cf6', fontWeight: 600 }}>Cataloging</span></>}
        right={{ md: '3%', lg: '6%' }}
        bottom={{ md: '15%', lg: '20%' }}
        delay="2s"
        entryDelay={1000}
        display={{ xs: 'none', md: 'flex' }}
      />
     
     {/* badge cards  */}

     {/* Bottom Partner Badges (Side by Side) */}
      {/* Bottom Partner Badges (Side by Side) - EXTRA COMPACT */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { md: '3%', lg: '5%' }, // Moved slightly lower to give the main text more room
          width: '100%',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { md: 3, lg: 6 }, // Reduced gap so they sit closer together
          zIndex: 10,
          pointerEvents: 'none' 
        }}
      >
        <FadeUp delay={1000}>
          {/* Card overall width reduced from 320 to 260 */}
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: { md: 220, lg: 260 }, pointerEvents: 'auto' }}>
            
            {/* Overlapping Badge Image - Scaled down further */}
            <Box
              component="img"
              src={badge1}
              alt="Databricks Partner"
              sx={{
                position: 'absolute',
                left: -35, // Pulled in closer to match the smaller badge size
                width: { md: 70, lg: 80 }, // Reduced from 100
                height: 'auto',
                zIndex: 2,
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.12))'
              }}
            />
            
            {/* Card Body - Scaled down */}
            <Box
              sx={{
                bgcolor: '#f4f5f7', 
                borderRadius: '8px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
                pl: { md: 5.5, lg: 6.5 }, // Reduced left padding to fit the smaller image
                pr: 1.5,
                py: 1,
                width: '100%',
                minHeight: 70, // Reduced from 85
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 12px 24px rgba(107, 33, 168, 0.12)' }
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#6b21a8', fontSize: '0.75rem', mb: 0.25 }}>
                Databricks Partner
              </Typography>
              <Typography variant="caption" sx={{ color: '#8b5cf6', fontSize: '0.65rem', lineHeight: 1.2 }}>
                Official Partner for Lakehouse, data engineering & AI solutions.
              </Typography>
            </Box>
          </Box>
        </FadeUp>

        <FadeUp delay={1100}>
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: { md: 220, lg: 260 }, pointerEvents: 'auto' }}>
            
            {/* Overlapping Badge Image - Scaled down further */}
            <Box
              component="img"
              src={badge2}
              alt="Brickbuilder Bronze"
              sx={{
                position: 'absolute',
                left: -35,
                width: { md: 70, lg: 80 }, // Reduced from 100
                height: 'auto',
                zIndex: 2,
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.12))'
              }}
            />
            
            {/* Card Body - Scaled down */}
            <Box
              sx={{
                bgcolor: '#f4f5f7',
                borderRadius: '8px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
                pl: { md: 5.5, lg: 6.5 }, 
                pr: 1.5,
                py: 1,
                width: '100%',
                minHeight: 70, // Reduced from 85
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 12px 24px rgba(107, 33, 168, 0.12)' }
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#6b21a8', fontSize: '0.75rem', mb: 0.25 }}>
                Brickbuilder Bronze
              </Typography>
              <Typography variant="caption" sx={{ color: '#8b5cf6', fontSize: '0.65rem', lineHeight: 1.2 }}>
                Bronze-tier Partner delivering proven Databricks solutions.
              </Typography>
            </Box>
          </Box>
        </FadeUp>
      </Box>


      {/* Main Hero Content - Shifted slightly up to clear the bottom center block */}
      <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 10, width: '90%', maxWidth: '1200px', mx: 'auto', mt: { xs: 2, md: -10, lg: -12 }, pointerEvents: 'none' }}>


        {/* <FadeUp delay={50}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: { xs: 2, sm: 3 }, mb: { xs: 2, md: 8 }, pointerEvents: 'auto', flexWrap: 'wrap' }}>
              <Box component="img" src={badge1} alt="Badge 1" sx={{ width: { xs: 70, sm: 80, md: 100 }, height: 'auto', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.10))' }} />
              <Box component="img" src={badge2} alt="Badge 2" sx={{ width: { xs: 70, sm: 80, md: 100 }, height: 'auto', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.10))' }} />
            </Box>
          </FadeUp> */}

        <FadeUp delay={0}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 1, pointerEvents: 'auto' }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
            <Typography variant="overline" sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: '0.85rem' }}>
              DATA + AI CONSULTING
            </Typography>
          </Box>
        </FadeUp>


        <FadeUp delay={100}>
          <Typography variant="h2" component="h1" sx={{ pointerEvents: 'auto', display: 'inline-block', fontWeight: 200, color: '#1e293b', mb: 0, fontSize: { xs: '1.8rem', sm: '2.8rem', md: '3.8rem' }, letterSpacing: '-0.02em' }}>
            We Simplify Your
          </Typography>
        </FadeUp>


        <FadeUp delay={200}>
          <Typography variant="h2" component="div" sx={{
            pointerEvents: 'auto',
            display: 'inline-block',
            fontWeight: 400,
            fontSize: { xs: '1.8rem', sm: '2.8rem', md: '3.8rem' },
            letterSpacing: '-0.02em',
            background: 'linear-gradient(90deg, #6b21a8 0%, #ec4899 50%, #f97316 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: { xs: 2, md: 3 }
          }}>
            Data+AI Journey.
          </Typography>
        </FadeUp>

        <FadeUp delay={300}>
          <Typography
            sx={{
              pointerEvents: 'auto',
              display: 'inline-block',
              color: '#475569',
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontWeight: 300,
              lineHeight: 1.6,
              textAlign: 'center',
              maxWidth: { xs: '100%', md: '80%' },
              mb: { xs: 4, md: 5 }
            }}
          >
            NRM Analytix is a specialised Data and AI consulting company helping businesses across 10+ industries unlock the full potential of their data. From Databricks implementation and Big Data architecture to Power BI dashboards and Machine Learning solutions — we turn complex data challenges into clear, measurable outcomes.
          </Typography>
        </FadeUp>

        <FadeUp delay={400}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ justifyContent: 'center', display: 'inline-flex', pointerEvents: 'auto' }}>
            <Button
              component="a"
              href="https://bookings.cloud.microsoft/book/NRMAnalytixFreeConsultation@nrmanalytix.com/?ismsaljsauthenabled"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                background: 'transparent',
                color: '#fff',
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                px: 3.5, py: 1.2,
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.8s ease',
                '&::before': {
                  content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  bgcolor: '#111827', borderRadius: 'inherit', zIndex: -1, transition: 'opacity 0.8s ease'
                },
                '&::after': {
                  content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(90deg, #6b21a8, #ec4899)', borderRadius: 'inherit', zIndex: -2
                },
                '&:hover::before': { opacity: 0 },
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 25px rgba(107, 33, 168, 0.3)'
                }
              }}
              endIcon={
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#8b5cf6', borderRadius: '50%', width: 34, height: 34, ml: 1, transition: 'all 0.8s ease', '.MuiButton-root:hover &': { transform: 'translateX(4px)', bgcolor: '#fff' } }}>
                  <ArrowForwardIcon sx={{ fontSize: 18, color: '#fff', transition: 'color 0.8s ease', '.MuiButton-root:hover &': { color: '#111827' } }} />
                </Box>
              }
            >
              Book 1:1 Free Consultation
            </Button>
            <Button
              component={Link}
              to="/solutions"
              variant="contained"
              sx={{
                background: 'transparent',
                color: '#111827',
                borderColor: '#cbd5e1',
                borderWidth: 1,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                px: 3.5, py: 1.2,
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.8s ease',
                '&::before': {
                  content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  bgcolor: '#fff', borderRadius: 'inherit', zIndex: -1, transition: 'opacity 0.8s ease'
                },
                '&::after': {
                  content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(90deg, #6b21a8, #ec4899)', borderRadius: 'inherit', zIndex: -2
                },
                '&:hover::before': { opacity: 0 },
                '&:hover': {
                  color: '#fff',
                  borderColor: 'transparent',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)'
                }
              }}
              endIcon={
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #cbd5e1', borderRadius: '50%', width: 34, height: 34, ml: 1, bgcolor: '#fff', transition: 'all 0.8s ease', '.MuiButton-root:hover &': { border: 'none', bgcolor: '#8b5cf6', transform: 'translateX(4px)' } }}>
                  <ArrowForwardIcon sx={{ fontSize: 18, color: '#111827', transition: 'color 0.8s ease', '.MuiButton-root:hover &': { color: '#fff' } }} />
                </Box>
              }
            >
              Explore Solutions
            </Button>
          </Stack>
        </FadeUp>
      </Box>

      {/* Scroll Indicator */}
      <Box sx={{
        position: 'absolute',
        right: { xs: -40, md: 20 },
        bottom: '40%',
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 2,
        transform: 'rotate(90deg)',
        transformOrigin: 'right center',
      }}>
        <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: 2, color: '#64748b' }}>
          SCROLL TO EXPLORE
        </Typography>
        <Box sx={{ transform: 'rotate(-90deg)', animation: 'bounceDown 2s infinite ease-in-out', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, borderRadius: '50%', border: '1px solid #cbd5e1' }}>
          <ArrowDownwardIcon sx={{ color: '#64748b', fontSize: 14 }} />
        </Box>
      </Box>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate3d(0, 0px, 0); }
            50% { transform: translate3d(0, -12px, 0); }
          }
          @keyframes bounceDown {
            0%, 100% { transform: rotate(-90deg) translateX(0); }
            50% { transform: rotate(-90deg) translateX(-5px); }
          }
          @keyframes pulseGlow {
            0% { transform: translate3d(-50%, -50%, 0) scale(1); opacity: 0.6; }
            100% { transform: translate3d(-50%, -50%, 0) scale(1.15); opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
}