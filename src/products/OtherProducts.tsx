// src/components/landing/OtherServices.tsx
import { Box, Typography, Container, Button, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid'; // Using modern Grid2 for the size prop
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

const solutionsData = [
    {
        title: 'Meta Flow',
        description: 'Streamline and Automate Complex Metadata Ingestion and Orchestration Sequences.',
        size: { xs: 12, md: 4 }, 
        path: '/products/meta-flow'
    },
    {
        title: 'FinOps Copilot',
        description: 'AI-Driven Unit Economics and Multi-Cloud Spend Anomaly Detection Contextualizer.',
        size: { xs: 12, md: 4 }, 
        path: '/products/finops-copilot' // Fixed missing forward slash here
    },
    {
        title: 'Talent Job Analyzer',
        description: 'BI dashboards, ETL modernization, real-time streaming and performance optimization across BFSI & Logistics.',
        size: { xs: 12, md: 4 }, 
        path: '/products/talend-job-analyzer'
    },
];

// Reusable scroll animation wrapper
const FadeUp = ({ children, delay = 0, fullHeight }: { children: ReactNode; delay?: number; fullHeight?: boolean }) => {
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
            height: fullHeight ? '100%' : 'auto',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: `all 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
            willChange: 'opacity, transform'
        }}>{children}</Box>
    );
};

export default function SolutionsShowcase() {
    return (
        <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 } }}>           
            <Container maxWidth="lg">

                {/* Header Section */}
                <Box sx={{ mb: { xs: 5, md: 6 } }}>
                    <FadeUp delay={200}>
                        <Typography variant="h5" sx={{ color: '#7c3aed', mb: { xs: 4, md: 5 }, fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1, textAlign: { xs: 'center', md: 'left' } }}>
                            OTHER SERVICES
                        </Typography>
                    </FadeUp>
                </Box>

                {/* Asymmetric Brick Grid */}
                <Grid container spacing={4} sx={{ alignItems: 'stretch' }}>
                    {solutionsData.map((solution, index) => (
                        <Grid size={{ xs: solution.size.xs, md: solution.size.md }} key={index}>
                            <FadeUp delay={300 + index * 100} fullHeight>
                                <Card
                                    elevation={0}
                                    sx={{
                                        bgcolor: '#FFFFFF',
                                        border: '1px solid #EEF2F7',
                                        borderRadius: '24px',
                                        p: { xs: 2.5, sm: 3 },
                                        minHeight: '220px',
                                        height: '100%', // Ensures all cards stretch equally
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
                                        }
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            p: 0,
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                color: '#7c3aed',
                                                fontWeight: 500,
                                                mb: 1.5,
                                                fontSize: '1.3rem'
                                            }}
                                        >
                                            {solution.title}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#475569',
                                                lineHeight: 1.6,
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            {solution.description}
                                        </Typography>

                                        {/* Learn More Button bottom right */}
                                        <Box
                                            sx={{
                                                mt: 'auto', // Pushes the button to the bottom of the card
                                                pt: 4,
                                                display: 'flex',
                                                justifyContent: 'flex-end'
                                            }}
                                        >
                                            <Button
                                                component={solution.path === '#' ? 'button' : Link}
                                                to={solution.path === '#' ? undefined : solution.path}
                                                variant="contained"
                                                sx={{
                                                    background: '#111827',
                                                    color: '#fff',
                                                    borderRadius: '50px',
                                                    textTransform: 'none',
                                                    fontSize: '0.9rem',
                                                    px: 2.5,
                                                    py: 0.75,
                                                    boxShadow: 'none',
                                                    '&:hover': {
                                                        background: '#1f2937',
                                                        boxShadow: '0 4px 12px rgba(17, 24, 39, 0.2)'
                                                    }
                                                }}
                                                endIcon={
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        bgcolor: '#8b5cf6',
                                                        borderRadius: '50%',
                                                        width: 28,
                                                        height: 28
                                                    }}>
                                                        <ArrowForwardIcon sx={{ fontSize: 16 }} />
                                                    </Box>
                                                }
                                            >
                                                Learn More
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </FadeUp>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box>
    );
}