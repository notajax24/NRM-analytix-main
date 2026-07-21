// src/components/landing/PracticeArea.tsx
import { Box, Typography, Container } from '@mui/material';
import { useState, useEffect, useRef, type ReactNode } from 'react';

const servicesData = [
  {
    title: 'Databricks Consulting & Implementation',
    description: 'As experienced Databricks practitioners, we help organisations implement, optimise, and scale their Databricks Lakehouse environments. From initial workspace setup and cluster management to Delta Live Tables and Databricks SQL — ',
    highlight: 'we accelerate your time to value.',
    image: 'https://i.postimg.cc/fLYDLXqf/photo-1573164713988-8665fc963095.jpg',
  },
  {
    title: 'Big Data Solutions Architecture',
    description: 'We design and build high-performance Big Data architectures that scale with your business. Whether you are processing millions of transactions daily or building a centralized data lake — ',
    highlight: 'our architects deliver solutions that are robust, secure, and future-ready.',
    image: 'http://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Cloud & Data Platform Migration',
    description: 'Migrating to the cloud is one of the most impactful decisions a data organisation can make. Our migration specialists reduce risk, minimise downtime, and ensure data integrity throughout every stage of your migration to ',
    highlight: 'Azure, AWS, or Google Cloud.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Talend Data Integration Consulting',
    description: 'We help organisations leverage Talend\'s powerful data integration capabilities to unify disparate data sources, automate ETL pipelines, and maintain data quality at scale.',
    highlight: '',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'MSBI Services',
    description: 'Our Microsoft Business Intelligence experts design and implement end-to-end MSBI solutions — including SSRS, SSIS, and SSAS — ',
    highlight: 'that give your organisation a reliable, cost-effective reporting and analytics foundation.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
  }
];

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

export default function PracticeArea() {
  return (
    <Box id="practice1" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff' }}>
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
                PRACTICE AREA 1
              </Typography>
            </Box>
          </FadeUp>

          <FadeUp delay={100}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 300, 
                color: '#f87171', // Coral/Red text matching the design
                fontSize: { xs: '2.25rem', md: '3.5rem' }, 
                letterSpacing: '-0.02em',
                mb: 3
              }}
            >
              Data Engineering & Platform Services
            </Typography>
          </FadeUp>

          <FadeUp delay={200}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#475569', 
                fontSize: { xs: '1rem', md: '1.1rem' }, 
                lineHeight: 1.7,
                maxWidth: '1000px'
              }}
            >
              Modern businesses run on data. Our Data Engineering practice helps you build the reliable, scalable, and cloud-native infrastructure your analytics and AI ambitions demand. We are certified experts in Databricks, Apache Spark, Azure Data Factory, Talend, and the broader modern data stack —{' '}
              <Box component="span" sx={{ color: '#8b5cf6' }}>
                ensuring your data is always clean, connected, and ready to use.
              </Box>
            </Typography>
          </FadeUp>
        </Box>

        {/* Staggered Cards List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 6 } }}>
          {servicesData.map((service, index) => {
            // Alternate alignment left and right
            const isLeftAligned = index % 2 === 0;

            return (
              <FadeUp key={index} delay={100}>
                <Box
                  className="practice-card"
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: isLeftAligned ? 'row' : 'row-reverse' }, 
                    alignItems: 'center', 
                    width: { xs: '100%', md: '85%' }, 
                    marginLeft: isLeftAligned ? 0 : 'auto',
                    marginRight: isLeftAligned ? 'auto' : 0,
                    p: { xs: 3, md: 2 },
                    pr: { md: isLeftAligned ? 6 : 2 },
                    pl: { md: isLeftAligned ? 2 : 6 },
                    gap: { xs: 4, md: 6 },
                    position: 'relative',
                    zIndex: 1,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: '#f1f5f9', // Slightly darker, premium grey background
                      borderRadius: '24px',
                      zIndex: -1,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      transformOrigin: isLeftAligned ? 'left center' : 'right center',
                    },
                    '&:hover::before': {
                      transform: { md: 'scaleX(1.1765)' }, // Expanding background to exactly 100% of container
                      boxShadow: '0 20px 40px -10px rgba(139, 92, 246, 0.15)'
                    }
                  }}
                >
                  {/* Image Container */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: '320px' },
                      height: { xs: '200px', md: '220px' },
                      flexShrink: 0,
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 15px 35px -5px rgba(0,0,0,0.15)'
                    }}
                  >
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </Box>

                  {/* Text Content Container */}
                  <Box sx={{ 
                    flexGrow: 1, 
                    py: { md: 2 }
                  }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: '#7c3aed', // Purple header
                        fontWeight: 500, 
                    fontSize: { xs: '1.5rem', md: '1.75rem' }, 
                        mb: 2,
                    transition: 'letter-spacing 0.4s ease',
                        '.practice-card:hover &': {
                      letterSpacing: '0.5px'
                        }
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#475569', 
                    fontSize: '0.95rem', 
                        lineHeight: 1.6,
                    transition: 'letter-spacing 0.4s ease',
                        '.practice-card:hover &': {
                      letterSpacing: '0.2px'
                        }
                      }}
                    >
                      {service.description}
                      {service.highlight && (
                        <Box component="span" sx={{ 
                          color: '#f87171'
                        }}>
                          {service.highlight}
                        </Box>
                      )}
                    </Typography>
                  </Box>

                </Box>
              </FadeUp>
            );
          })}
        </Box>

      </Container>
    </Box>
  );
}