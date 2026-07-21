import { Box, Typography, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  
  // Map the URL parameters to proper readable titles
  const productTitles: Record<string, string> = {
    'meta-flow': 'Meta Flow',
    'dbx-cost-calculator': 'DBX Cost Calculator',
    'finops-copilot': 'FinOps Copilot',
    'talend-job-analyzer': 'Talend Job Analyzer'
  };

  const title = productId && productTitles[productId] ? productTitles[productId] : 'Product Details';

  // Automatically scroll to the top when navigating to a new product
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <Box sx={{ 
      py: { xs: 10, md: 16 }, 
      flexGrow: 1, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      bgcolor: '#fdfdfd'
    }}>
      {/* Glowing Background Orb */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: { xs: '150vw', md: '80vw' },
        height: { xs: '150vw', md: '80vw' },
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(236,72,153,0.08) 35%, rgba(255,255,255,0) 70%)',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8b5cf6' }} />
          <Typography variant="overline" sx={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: 1.5, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            PRODUCT OVERVIEW
          </Typography>
        </Box>
        
        <Typography variant="h2" sx={{ fontWeight: 200, color: '#1e293b', mb: 4, fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          <Box component="span" sx={{ background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 400 }}>
            {title}
          </Box>
        </Typography>
        
        <Typography variant="body1" sx={{ color: '#475569', fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.6, maxWidth: '800px', mx: 'auto' }}>
          Discover how {title} can transform your data infrastructure. This dedicated product page will showcase the core features, architecture, and integration capabilities of this powerful tool.
        </Typography>
      </Container>
    </Box>
  );
}