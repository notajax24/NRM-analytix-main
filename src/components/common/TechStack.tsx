import { Box, Typography, Container } from '@mui/material';
import { useState, useEffect, useRef, type ReactNode } from 'react';

// ----------------------------------------------------------------------
// 1. REUSABLE ANIMATION WRAPPER
// ----------------------------------------------------------------------
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
    <Box ref={ref} sx={{ height: fullHeight ? '100%' : 'auto', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)', transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`, willChange: 'opacity, transform' }}>
      {children}
    </Box>
  );
};

// ----------------------------------------------------------------------
// 2. COMMON TECH STACK COMPONENT
// ----------------------------------------------------------------------
export interface TechItem {
  name: string;
  icon: string; // This accepts both URLs and imported local logos
}

const TechStack = ({ title = 'TECHNOLOGIES USED', technologies }: { title?: string, technologies: TechItem[] }) => {
  return (
    <Box sx={{ py: { xs: 2, md: 3 }, mb: { xs: 4, md: 6 } }}>
      <FadeUp delay={200}>
        <Typography variant="h5" sx={{ color: '#7c3aed', mb: { xs: 4, md: 5 }, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, textAlign: { xs: 'center', md: 'left' } }}>
          {title}
        </Typography>
      </FadeUp>

      <Box sx={{ display: { xs: 'flex', md: 'grid' }, pt: { xs: 2, md: 5 }, pb: { xs: 3, md: 0 }, flexWrap: 'wrap', justifyContent: 'center', gridTemplateColumns: { md: `repeat(${technologies.length}, minmax(0, 1fr))` }, gap: { xs: 3, sm: 4, md: 3 }, alignItems: 'center' }}>
        {technologies.map((tech, i) => (
          <FadeUp delay={300 + (i * 100)} key={i}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, width: '100%', minWidth: { xs: '120px', md: 'auto' }, maxWidth: 140, mx: 'auto', transform: { xs: 'none', md: i % 2 === 0 ? 'translateY(-25px)' : 'translateY(25px)' } }}>
              <Box sx={{ width: { xs: 70, md: 80 }, height: { xs: 70, md: 80 }, borderRadius: '50%', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}>
                {/* Image tag natively supports your SVGs/Logos */}
                <Box component="img" src={tech.icon} alt={tech.name} sx={{ width: { xs: 35, md: 45 }, height: { xs: 35, md: 45 }, objectFit: 'contain' }} />
              </Box>
              <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500, textAlign: 'center', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                {tech.name}
              </Typography>
            </Box>
          </FadeUp>
        ))}
      </Box>
    </Box>
  );
};

// ----------------------------------------------------------------------
// 3. MAIN PAGE
// ----------------------------------------------------------------------
export default function MyPage() {

  // Here is your array using the external logos. 
  // If you ever want to use local files, just replace the URL with your imported logo (e.g., icon: myAirflowLogo)
  const dataTechStack = [
    { name: 'Apache Airflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg' },
    { name: 'Python DB API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Databricks', icon: 'https://cdn.simpleicons.org/databricks' },
    { name: 'dbt', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dbt.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
  ];

  return (
    <Box>
      <Container maxWidth="lg">

        {/* Calling your common component */}
        <TechStack title="TECHNOLOGIES USED" technologies={dataTechStack} />

      </Container>
    </Box>
  );
}