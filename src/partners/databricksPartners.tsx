import { Box, Typography, Container, Stack, Card } from '@mui/material';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import badge1 from '../assets/badge1.svg';
import badge2 from '../assets/badge2.svg';


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
      opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`, willChange: 'opacity, transform',
      height: '100%'
    }}>{children}</Box>
  );
};

export default function DatabricksPartnershipSection() {
  
  const alliancePoints = [
    {
      num: '01.',
      title: 'Official Partnership with DataBricks',
      color: '#6b21a8', 
      desc1: 'NRM Analytix is recognized as an Official Databricks Partner, specializing in Lakehouse architecture, data engineering, and AI-driven solutions. As a certified partner, we bring deep platform expertise to help organizations design, implement, and scale their Databricks environments — from initial setup to full production deployment.',
      desc2: "Our partnership means you get a team that's trained, certified, and aligned directly with Databricks' best practices — ensuring every solution we build is reliable, secure, and built to scale.",
      desc1Color: '#7c3aed',
      desc2Color: '#f87171',
      cards: null
    },
    {
      num: '02.',
      title: 'Databricks Brickbuilder Bronze Partner',
      color: '#ef4444', 
      desc1: 'databricks brickbuilder bronze\nwe are also a recognized databricks brickbuilder bronze partner, part of an exclusive network of solution providers delivering proven, pre-built accelerators on the databricks platform. this recognition reflects our ability to deliver validated, high-quality solutions that help clients move faster — reducing time-to-value on their data and ai initiatives.',
      desc1Color: '#f87171',
      desc2: null,
      cards: null
    },
    {
      num: '03.',
      title: 'What This Means For You',
      color: '#6b21a8', 
      desc1: null, 
      desc2: null,
      cards: [
        {
          title: 'Certified Expertise',
          desc: 'A team trained and validated by Databricks across data engineering, Unity Catalog, Delta Lake, and Lakehouse architecture.',
        },
        {
          title: 'Proven Accelerators',
          desc: 'A team trained and validated by Databricks across data engineering, Unity Catalog, Delta Lake, and Lakehouse architecture.',
        },
        {
          title: 'End To End Support',
          desc: 'A team trained and validated by Databricks across data engineering, Unity Catalog, Delta Lake, and Lakehouse architecture.',
        },
        {
          title: 'Direct Alignment',
          desc: 'A team trained and validated by Databricks across data engineering, Unity Catalog, Delta Lake, and Lakehouse architecture.',
        }
      ]
    }
  ];

  return (
    <Box sx={{ 
      pt: { xs: 4, md: 6 },   // reduce top padding
      pb: { xs: 8, md: 12 },  // keep bottom padding as is

      background: 'linear-gradient(135deg, rgba(238,242,255,0.6) 0%, rgba(254,226,226,0.6) 50%, rgba(255,255,255,0.8) 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">
        
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            mb: { xs: 8, md: 10 },
            pl: { md: 4 } 
          }}
        >
          <FadeUp delay={100}>
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: { md: 220, lg: 260 } }}>
              <Box
                component="img"
                src={badge1}
                alt="Databricks Partner"
                sx={{
                  position: 'absolute',
                  left: -35,
                  width: { md: 70, lg: 80 },
                  height: 'auto',
                  zIndex: 2,
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.12))'
                }}
              />
              <Box
                sx={{
                  bgcolor: '#f4f5f7', 
                  borderRadius: '8px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
                  pl: { md: 5.5, lg: 6.5 }, 
                  pr: 1.5,
                  py: 1.5,
                  width: '100%',
                  minHeight: 70, 
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

          <FadeUp delay={200}>
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: { md: 220, lg: 260 } }}>
              <Box
                component="img"
                src={badge2}
                alt="Brickbuilder Bronze"
                sx={{
                  position: 'absolute',
                  left: -35,
                  width: { md: 70, lg: 80 }, 
                  height: 'auto',
                  zIndex: 2,
                  filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.12))'
                }}
              />
              <Box
                sx={{
                  bgcolor: '#f4f5f7',
                  borderRadius: '8px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
                  pl: { md: 5.5, lg: 6.5 }, 
                  pr: 1.5,
                  py: 1.5,
                  width: '100%',
                  minHeight: 70, 
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


        <Box sx={{ textAlign: 'center', mb: { xs: 10, md: 14 } }}>
          <FadeUp delay={300}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#7c3aed' }} />
              <Typography variant="overline" sx={{ color: '#7c3aed', letterSpacing: 1.5, fontWeight: 500 }}>
                OUR PARTNERSHIP WITH DATABRICKS
              </Typography>
            </Box>
          </FadeUp>
          
          <FadeUp delay={400}>
            <Typography variant="h2" sx={{ fontWeight: 300, color: '#1e293b', fontSize: { xs: '2.5rem', md: '4rem' }, mb: 2 }}>
              Our <Box component="span" sx={{ color: '#f87171' }}>Partnership</Box> with <Box component="span" sx={{ color: '#f87171' }}>DataBricks</Box>
            </Typography>
            <Typography variant="body2" sx={{ color: '#475569', mb: 6, fontSize: '0.95rem' }}>
              Turning Data Into Your Competitive Advantage
            </Typography>
          </FadeUp>

          <FadeUp delay={500}>
            <Typography variant="h5" sx={{ color: '#1e293b', fontWeight: 300, lineHeight: 1.6, maxWidth: '900px', mx: 'auto', mb: 6, fontSize: { xs: '1.25rem', md: '1.75rem' } }}>
              <Box component="span" sx={{ color: '#7c3aed' }}>NRM Analytix is a proud Databricks Partner,</Box> helping businesses unlock the full power of the Lakehouse Platform through certified expertise, proven solutions, and hands-on delivery.
            </Typography>
            
            <Box sx={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              bgcolor: 'rgba(255,255,255,0.6)', 
              backdropFilter: 'blur(10px)',
              borderRadius: '50px', 
              px: 3, 
              py: 1.5,
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <Typography sx={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>
                Validated by <Box component="span" sx={{ color: '#f87171', fontWeight: 600 }}>DATABRICKS</Box>
              </Typography>
            </Box>
          </FadeUp>
        </Box>

        <Box sx={{ mb: 6 }}>
          <FadeUp delay={600}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#7c3aed' }} />
              <Typography variant="overline" sx={{ color: '#7c3aed', letterSpacing: 1.5, fontWeight: 500 }}>
                ALLIANCE INDUSTRIES
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 300, color: '#1e293b', fontSize: { xs: '2rem', md: '2.75rem' }, mb: 2 }}>
              Strategic Alliance
            </Typography>
            <Typography sx={{ color: '#475569', fontSize: '0.95rem', mb: 8 }}>
              Deep-dives into architecture, sovereignty, and the future of industrial-scale automation. Curated research for the modern enterprise.
            </Typography>
          </FadeUp>

          {/* Numbered Points */}
          <Stack spacing={8}>
            {alliancePoints.map((point, index) => (
              <FadeUp delay={700 + (index * 100)} key={index}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 3 }}>
                    <Typography sx={{ fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 200, color: '#d8b4fe', lineHeight: 1 }}>
                      {point.num}
                    </Typography>
                    <Typography variant="h5" sx={{ color: point.color, fontWeight: 400, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                      {point.title}
                    </Typography>
                  </Box>

                  <Box sx={{ pl: { xs: 0, md: '5rem' }, maxWidth: '1200px' }}>
                    {point.desc1 && (
                      <Typography sx={{ color: point.desc1Color, fontSize: '1.1rem', lineHeight: 1.7, mb: point.desc2 ? 2 : 0, whiteSpace: 'pre-line' }}>
                        {point.desc1}
                      </Typography>
                    )}
                    {point.desc2 && (
                      <Typography sx={{ color: point.desc2Color, fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {point.desc2}
                      </Typography>
                    )}
                  </Box>

                  {point.cards && (
                    <Box sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, 
                      gap: 3.5, 
                      mt: 6,
                      pl: { xs: 0, md: '5rem' } 
                    }}>
                      {[
                        {
                          ...point.cards[0],
                          glow: 'rgba(59, 130, 246, 0.15)',
                          svgPaths: (
                            <>
                              <defs>
                                <linearGradient id="grad1a" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#60a5fa" />
                                  <stop offset="100%" stopColor="#2563eb" />
                                </linearGradient>
                                <linearGradient id="grad1b" x1="100%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#818cf8" />
                                  <stop offset="100%" stopColor="#4f46e5" />
                                </linearGradient>
                                <linearGradient id="grad1c" x1="0%" y1="100%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#93c5fd" />
                                  <stop offset="100%" stopColor="#1d4ed8" />
                                </linearGradient>
                              </defs>
                              <path d="M10.5 50.5C10.5 35 45 10 90 15C135 20 185 30 185 50.5C185 71 135 90 90 85C45 80 10.5 66 10.5 50.5Z" fill="url(#grad1a)" opacity="0.9" />
                              <path d="M30 65C30 55 60 40 100 45C140 50 160 65 160 75C160 85 140 95 100 95C60 95 30 75 30 65Z" fill="url(#grad1b)" opacity="0.85" />
                              <path d="M55 85C55 80 75 75 95 78C115 81 125 88 125 93C125 98 115 102 95 100C75 98 55 90 55 85Z" fill="url(#grad1c)" opacity="0.9" />
                            </>
                          )
                        },
                        {
                          ...point.cards[1],
                          glow: 'rgba(168, 85, 247, 0.15)',
                          svgPaths: (
                            <>
                              <defs>
                                <linearGradient id="grad2a" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#c084fc" />
                                  <stop offset="100%" stopColor="#7e22ce" />
                                </linearGradient>
                                <linearGradient id="grad2b" x1="100%" y1="100%" x2="0%" y2="0%">
                                  <stop offset="0%" stopColor="#f472b6" />
                                  <stop offset="100%" stopColor="#db2777" />
                                </linearGradient>
                              </defs>
                              <path d="M15 45C15 25 55 15 100 25C145 35 185 20 185 55C185 90 145 95 100 85C55 75 15 75 15 45Z" fill="url(#grad2a)" opacity="0.9" />
                              <path d="M40 75C40 55 70 45 110 55C150 65 170 80 150 90C130 100 70 95 40 75Z" fill="url(#grad2b)" opacity="0.85" />
                            </>
                          )
                        },
                        {
                          ...point.cards[2],
                          glow: 'rgba(248, 113, 113, 0.15)',
                          svgPaths: (
                            <>
                              <defs>
                                <linearGradient id="grad3a" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#fca5a5" />
                                  <stop offset="100%" stopColor="#dc2626" />
                                </linearGradient>
                                <linearGradient id="grad3b" x1="100%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#fdba74" />
                                  <stop offset="100%" stopColor="#ea580c" />
                                </linearGradient>
                                <linearGradient id="grad3c" x1="50%" y1="100%" x2="50%" y2="0%">
                                  <stop offset="0%" stopColor="#f87171" />
                                  <stop offset="100%" stopColor="#991b1b" />
                                </linearGradient>
                              </defs>
                              <path d="M20 50C20 30 70 20 110 30C150 40 180 30 180 60C180 90 140 95 100 85C60 75 20 70 20 50Z" fill="url(#grad3a)" opacity="0.9" />
                              <path d="M50 70C50 50 90 40 130 50C170 60 160 85 140 90C120 95 70 90 50 70Z" fill="url(#grad3b)" opacity="0.85" />
                              <path d="M70 85C70 75 100 70 120 75C140 80 145 90 130 95C115 100 80 95 70 85Z" fill="url(#grad3c)" opacity="0.9" />
                            </>
                          )
                        },
                        {
                          ...point.cards[3],
                          glow: 'rgba(45, 212, 191, 0.15)',
                          svgPaths: (
                            <>
                              <defs>
                                <linearGradient id="grad4a" x1="0%" y1="100%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#5eead4" />
                                  <stop offset="100%" stopColor="#0d9488" />
                                </linearGradient>
                                <linearGradient id="grad4b" x1="100%" y1="100%" x2="0%" y2="0%">
                                  <stop offset="0%" stopColor="#67e8f9" />
                                  <stop offset="100%" stopColor="#0284c7" />
                                </linearGradient>
                              </defs>
                              <path d="M25 60C25 40 50 30 90 45C130 60 175 40 175 70C175 100 130 105 90 90C50 75 25 80 25 60Z" fill="url(#grad4a)" opacity="0.9" />
                              <path d="M45 40C45 20 85 15 125 30C165 45 185 25 185 50C185 75 125 80 85 65C45 50 45 60 45 40Z" fill="url(#grad4b)" opacity="0.85" />
                            </>
                          )
                        }
                      ].map((card, cardIndex) => (
                        <FadeUp delay={800 + (cardIndex * 150)} key={cardIndex}>
                          <Card elevation={0} sx={{
                            height: '100%',
                            minHeight: '420px', 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            borderRadius: '20px',
                            border: '1px solid rgba(226, 232, 240, 0.8)',
                            background: 'linear-gradient(180deg, #ffffff 0%, #f5d0d0 100%)',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                            '&:hover': {
                              transform: 'translateY(-8px)',
                              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)',
                              borderColor: 'rgba(203, 213, 225, 1)',
                              '& .graphic-container': {
                                transform: cardIndex % 2 !== 0 
                                  ? 'rotate(180deg) scale(1.08)' 
                                  : 'scale(1.08)',
                                filter: `drop-shadow(0 15px 25px ${card.glow})`
                              }
                            }
                          }}>
                            
                            <Box sx={{ 
                              order: cardIndex % 2 === 0 ? 1 : 2,
                              p: 4,
                              pt: cardIndex % 2 === 0 ? 5 : 3,
                              pb: cardIndex % 2 === 0 ? 3 : 5,
                              zIndex: 2,
                            }}>
                              <Typography variant="h5" sx={{ color: '#0f172a', fontWeight: 600, mb: 2, letterSpacing: '-0.02em' }}>
                                {card.title}
                              </Typography>
                              <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.7, fontSize: '1rem' }}>
                                {card.desc}
                              </Typography>
                            </Box>

                            <Box sx={{ 
                              order: cardIndex % 2 === 0 ? 2 : 1,
                              display: 'flex', 
                              justifyContent: 'center', 
                              alignItems: cardIndex % 2 === 0 ? 'flex-end' : 'flex-start',
                              width: '150%',
                              px: 3,
                              pb: cardIndex % 2 === 0 ? 4 : 0,
                              pt: cardIndex % 2 === 0 ? 0 : 4,
                              flexGrow: 1,
                              zIndex: 1,
                              position: 'relative',
                            }}>
                              <Box sx={{
                                position: 'absolute',
                                width: '150px',
                                height: '150px',
                                background: `radial-gradient(circle, ${card.glow} 0%, transparent 70%)`,
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 0,
                                pointerEvents: 'none'
                              }} />
                              
                              <Box 
                                className="graphic-container"
                                sx={{
                                  width: '100%', 
                                  position: 'relative',
                                  zIndex: 1,
                                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                  transform: cardIndex % 2 !== 0 ? 'rotate(180deg)' : 'none',
                                  transformOrigin: 'center center'
                                }}
                              >
                                <svg 
                                  viewBox="0 0 200 100" 
                                  fill="none" 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  style={{ width: '100%', height: 'auto', display: 'block' }}
                                >
                                  {card.svgPaths}
                                </svg>
                              </Box>
                            </Box>

                          </Card>
                        </FadeUp>
                      ))}
                    </Box>
                  )}

                </Box>
              </FadeUp>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}