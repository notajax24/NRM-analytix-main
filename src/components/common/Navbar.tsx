import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Button, Stack, IconButton,
  Drawer, List, ListItem, Collapse, Divider
} from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import SyncAlt from '@mui/icons-material/SyncAlt';

// Icons for the Mega Menu
import AccountTree from '@mui/icons-material/AccountTree';
import Insights from '@mui/icons-material/Insights';
import WorkOutline from '@mui/icons-material/WorkOutlineOutlined';
import { Handshake } from '@mui/icons-material';
import Route from '@mui/icons-material/Route';

import { Link, useLocation } from 'react-router-dom';
import logoNRM from '../../assets/logoNRM.png';

const navLinks = [
  {
    title: "Products",
    path: "/products",
    isMegaMenu: true,
    subItems: [
      {
        label: "Code Switch",
        path: "/products/code-switch",
        description: "Seamless code migration and transformation across languages and frameworks.",
        icon: <CodeIcon sx={{ color: '#6b21a8' }} />
      },
      {
        label: "Meta Flow",
        path: "/products/meta-flow",
        description: "Intelligent metadata management and automated data lineage tracking.",
        icon: <AccountTree sx={{ color: '#6b21a8' }} />
      },
      {
        label: "FinOps Copilot",
        path: "/products/finops-copilot",
        description: "AI-powered cloud cost governance and financial operations automation.",
        icon: <Insights sx={{ color: '#ec4899' }} />
      },
      {
        label: "Talend Job Analyzer",
        path: "/products/talend-job-analyzer",
        description: "Deep visibility into Talend ETL jobs with AI-driven performance and error analysis.",
        icon: <WorkOutline sx={{ color: '#f59e0b' }} />
      },
      {
        label: "Dev Sync",
        path: "/products/dev-sync",
        description: "Real-time synchronization of code, environments, and deployments across your dev teams.",
        icon: <SyncAlt sx={{ color: '#f59e0b' }} />
      },
      {
        label: "TrailMe",
        path: "#",
        description: "Track and audit every data and process change with a complete, end-to-end trail.",
        icon: <Route sx={{ color: '#8B5E3C' }} />
      }
    ]
  },
  { title: "Data + AI", path: "#" },
  { title: "Solutions", path: "/solutions" },
  {
    title: "Partners",

    isMegaMenu: true,
    subItems: [
      {
        label: "Databricks Partner",
        path: "/partners/databricks",
        description: "Discover our Databricks partnership solutions.",
        icon: <Handshake sx={{ color: '#6b21a8' }} />
      }
    ]
  },

  { title: "Blog", path: "/blog" },
  { title: "Events", path: "/events" },
  { title: "About", path: "/about" },
  { title: "Careers", path: "/careers" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    if (mobileOpen) {
      setExpandedMobileMenu(null);
    }
  };

  const handleMenuClose = () => {
    setActiveMenu(null);
  };

  const isItemActive = (item: typeof navLinks[number]) => {
    if (item.path && location.pathname === item.path) return true;
    if (item.subItems && item.subItems.some((sub) => location.pathname === sub.path)) return true;
    return false;
  };

  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        background: { xs: 'rgba(255, 255, 255, 0.7)', md: 'transparent' },
        backdropFilter: { xs: 'blur(16px)', md: 'none' },
        WebkitBackdropFilter: { xs: 'blur(16px)', md: 'none' },
        color: 'text.primary',
        pt: { xs: 1.5, md: 2 },
        pb: { xs: 1.5, md: 0 },
        px: { xs: 2, md: 4 },
        zIndex: 1100,
        borderBottom: { xs: '1px solid rgba(0, 0, 0, 0.05)', md: 'none' }
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', position: 'static' }}>
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Box
            component="img"
            src={logoNRM}
            alt="NRM Analytix"
            sx={{ height: { xs: '32px', md: '40px' }, objectFit: 'contain' }}
          />
        </Box>

        <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((item) => (
            <Box
              key={item.title}
              onMouseEnter={() => item.subItems && setActiveMenu(item.title)}
              onMouseLeave={handleMenuClose}
              sx={{ position: item.isMegaMenu ? 'static' : 'relative' }}
            >
              <Box
                component={item.path ? Link : 'div'}
                to={item.path}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: isItemActive(item) ? '#ec4899' : '#6b21a8',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#ec4899' },
                  py: 1
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: 'Michroma, sans-serif' }}>
                  {item.title}
                </Typography>
                {item.subItems && (
                  <KeyboardArrowDown fontSize="small" sx={{
                    transform: activeMenu === item.title ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s ease',
                    ml: 0.5
                  }} />
                )}
              </Box>

              {/* Dropdown Menu */}
              {item.subItems && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: item.isMegaMenu ? 0 : '-20px',
                    right: item.isMegaMenu ? 0 : 'auto', // Safely span full width without 100% overflow
                    display: 'flex',
                    justifyContent: item.isMegaMenu ? 'center' : 'flex-start',
                    pt: 2,
                    opacity: activeMenu === item.title ? 1 : 0,
                    visibility: activeMenu === item.title ? 'visible' : 'hidden',
                    transform: activeMenu === item.title ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 1200,
                  }}
                >
                  {item.isMegaMenu ? (
                    <Box
                      sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        bgcolor: '#ffffff',
                        borderRadius: '16px',
                        p: 4,
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                      }}
                    >
                      <Typography variant="overline" sx={{ color: '#475569', fontWeight: 600, letterSpacing: 1, fontSize: '0.85rem' }}>
                        {item.title.toUpperCase()}
                      </Typography>
                      <Divider sx={{ my: 2, borderColor: '#f1f5f9' }} />

                      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 3 }}>
                        {item.subItems.map((subItem) => (
                          <Box
                            key={subItem.label}
                            component={subItem.path && subItem.path !== '#' ? Link : 'div'}
                            to={subItem.path !== '#' ? subItem.path : undefined}
                            onClick={handleMenuClose}
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              p: 3,
                              borderRadius: '12px',
                              border: '1px solid #f1f5f9',
                              textDecoration: 'none',
                              color: 'inherit',
                              transition: 'all 0.2s ease',
                              bgcolor: '#fff',
                              '&:hover': {
                                borderColor: '#cbd5e1',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
                                transform: 'translateY(-2px)'
                              }
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                              <Box sx={{
                                width: 44, height: 44,
                                borderRadius: '10px',
                                border: '1px solid #e2e8f0',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                mr: 2,
                                bgcolor: '#f8fafc'
                              }}>
                                {subItem.icon}
                              </Box>
                              <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b' }}>
                                {subItem.label}
                              </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>
                              {subItem.description}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        minWidth: '260px',
                        p: 1.5,
                        borderRadius: '24px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(139, 92, 246, 0.15)',
                        boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5
                      }}
                    >
                      {item.subItems.map((subItem) => (
                        <Box
                          key={subItem.label}
                          component={subItem.path && subItem.path !== '#' ? Link : 'div'}
                          to={subItem.path !== '#' ? subItem.path : undefined}
                          onClick={(e: React.MouseEvent) => {
                            if (subItem.path === '#') e.preventDefault();
                            handleMenuClose();
                          }}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            px: 2.5,
                            py: 1.5,
                            borderRadius: '14px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            bgcolor: location.pathname === subItem.path ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
                            color: location.pathname === subItem.path ? '#6b21a8' : '#334155',
                            '&:hover': {
                              bgcolor: 'rgba(139, 92, 246, 0.08)',
                              color: '#6b21a8',
                              transform: 'translateX(4px)',
                              '& .menu-arrow': {
                                opacity: 1,
                                transform: 'translateX(0)'
                              }
                            }
                          }}
                        >
                          <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>
                            {subItem.label}
                          </Typography>
                          <ArrowForward
                            className="menu-arrow"
                            sx={{
                              fontSize: 16,
                              color: '#8b5cf6',
                              opacity: location.pathname === subItem.path ? 1 : 0,
                              transform: location.pathname === subItem.path ? 'translateX(0)' : 'translateX(-8px)',
                              transition: 'all 0.3s ease',
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          ))}
        </Stack>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            // component={Link}
            // to="/contact"
            component="a"
            href="https://forms.office.com/pages/responsepage.aspx?id=_nwNTqL-QE-5n6lqq1AQ_q2wzWFkTJFJmd-1-0iJpeZUREYzQVpSUjBJSlBaRVFXS082TEVGMUdIUS4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mobileOpen && handleDrawerToggle()}
            variant="contained"
            sx={{
              background: 'transparent',
              color: '#fff',
              borderRadius: '50px',
              textTransform: 'none',
              px: { xs: 2.5, md: 3 }, py: { xs: 0.8, md: 1 },
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              fontWeight: 600,
              position: 'relative',
              zIndex: 1,
              transition: 'all 0.8s ease',
              '&::before': {
                content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                bgcolor: '#191529', borderRadius: 'inherit', zIndex: -1, transition: 'opacity 0.8s ease'
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
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#8b5cf6', borderRadius: '50%', width: { xs: 28, md: 32 }, height: { xs: 28, md: 32 }, ml: { xs: 0.5, md: 1 }, transition: 'all 0.8s ease', '.MuiButton-root:hover &': { transform: 'translateX(4px)', bgcolor: '#fff' } }}>
                <ArrowForward sx={{ fontSize: { xs: 16, md: 18 }, color: '#fff', transition: 'color 0.8s ease', '.MuiButton-root:hover &': { color: '#191529' } }} />
              </Box>
            }
          >
            Contact Us
          </Button>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: '#1e293b', ml: 0.5 }}
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        transitionDuration={{ enter: 500, exit: 400 }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiBackdrop-root': {
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: 'none',
            boxShadow: 'none'
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 3 }}>
          <Box component="img" src={logoNRM} alt="NRM Analytix" sx={{ height: '36px', objectFit: 'contain' }} />
          <IconButton onClick={handleDrawerToggle} sx={{ transition: 'transform 0.4s ease', '&:hover': { transform: 'rotate(90deg)' } }}>
            <Close sx={{ fontSize: 28 }} />
          </IconButton>
        </Box>
        <List sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 3, mt: 4, textAlign: 'center' }}>
          {navLinks.map((item, index) => (
            <ListItem
              key={item.title}
              disablePadding
              sx={{
                py: 1.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                opacity: 0,
                animation: mobileOpen ? `menuFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards` : 'none',
                animationDelay: `${0.1 + index * 0.08}s`
              }}
            >
              <Box
                component={item.path && !item.subItems ? Link : 'div'}
                to={item.path && !item.subItems ? item.path : undefined}
                onClick={item.subItems ? () => setExpandedMobileMenu(prev => prev === item.title ? null : item.title) : handleDrawerToggle}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: isItemActive(item) ? '#ec4899' : '#1e293b',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#ec4899' }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontFamily: 'Michroma, sans-serif',
                  }}
                >
                  {item.title}
                </Typography>
                {item.subItems && (
                  <KeyboardArrowDown sx={{
                    transform: expandedMobileMenu === item.title ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s ease'
                  }} />
                )}
              </Box>

              {item.subItems && (
                <Collapse in={expandedMobileMenu === item.title} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
                    mt: 2,
                    p: 2,
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    alignItems: 'center',
                    width: '100%'
                  }}>
                    {item.subItems.map((subItem) => (
                      <Typography
                        key={subItem.label}
                        component={subItem.path && subItem.path !== '#' ? Link : 'div'}
                        to={subItem.path !== '#' ? subItem.path : undefined}
                        onClick={(e: React.MouseEvent) => {
                          if (subItem.path === '#') e.preventDefault();
                          handleDrawerToggle();
                        }}
                        sx={{
                          color: location.pathname === subItem.path ? '#8b5cf6' : '#334155',
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          '&:hover': { color: '#8b5cf6', transform: 'translateX(4px)' }
                        }}
                      >
                        {subItem.label}
                      </Typography>
                    ))}
                  </Box>
                </Collapse>
              )}
            </ListItem>
          ))}
          <ListItem
            disablePadding
            sx={{
              mt: 2,
              display: 'flex',
              justifyContent: 'center',
              opacity: 0,
              animation: mobileOpen ? `menuFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards` : 'none',
              animationDelay: `${0.1 + navLinks.length * 0.08}s`
            }}
          >
            <Button
              component={Link}
              to="/#contactUs"
              onClick={handleDrawerToggle}
              variant="contained"
              sx={{
                background: 'transparent',
                color: '#fff',
                borderRadius: '50px',
                textTransform: 'none',
                px: 3,
                py: 1,
                fontSize: '0.95rem',
                fontWeight: 600,
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.8s ease',
                '&::before': {
                  content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  bgcolor: '#191529', borderRadius: 'inherit', zIndex: -1, transition: 'opacity 0.8s ease'
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
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#8b5cf6', borderRadius: '50%', width: 32, height: 32, ml: 1, transition: 'all 0.8s ease', '.MuiButton-root:hover &': { transform: 'translateX(4px)', bgcolor: '#fff' } }}>
                  <ArrowForward sx={{ fontSize: 18, color: '#fff', transition: 'color 0.8s ease', '.MuiButton-root:hover &': { color: '#191529' } }} />
                </Box>
              }
            >
              Contact Us
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <style>
        {`
          @keyframes menuFadeUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </AppBar>
  );
}