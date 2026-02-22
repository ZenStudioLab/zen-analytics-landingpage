'use client';

import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NextLink from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SpaIcon from '@mui/icons-material/Spa';
import SecurityIcon from '@mui/icons-material/Security';
import { keyframes } from '@mui/system';

const rotateEnso = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const values = [
  {
    icon: <SpaIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'The Zen Philosophy',
    description: 'Zen is about clarity in chaos. We believe debugging should be a calm, insightful process. By unifying 25+ trackers into one interface, we strip away the noise and fragmentation, allowing you to focus on what truly matters: data accuracy.',
    hasEnso: true,
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Privacy by Design',
    description: 'We believe your data belongs to you. Zen Analytics runs entirely client-side within your browser. We do not collect, store, or transmit your debugging data to any servers. It is enterprise-grade power with zero privacy compromise.',
    hasEnso: false,
  }
];

const ValueCard = ({ value }: { value: typeof values[0] }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const parallaxRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !parallaxRef.current || !value.hasEnso) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    // Calculate distance from center
    const x = (e.clientX - left - width / 2) / 15; // Divide by 15 for subtle effect
    const y = (e.clientY - top - height / 2) / 15;

    parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = 'translate(0px, 0px)';
    }
  };

  return (
    <Paper
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      elevation={0}
      sx={{
        p: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        textAlign: 'left',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 6,
        background: (theme) => theme.palette.mode === 'dark' ? '#2A2A2A' : '#FFFFFF',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-8px)',
          boxShadow: (theme) => theme.palette.mode === 'dark'
            ? '0 20px 40px rgba(0,0,0,0.4)'
            : '0 20px 40px rgba(176, 152, 104, 0.15)',
          '& .icon-bg': {
            transform: 'scale(1.2)',
            opacity: 0.2
          }
        },
      }}
    >
      {/* Decorative Background: Enso for Zen, Icon for others */}
      {value.hasEnso ? (
        <Box
          ref={parallaxRef}
          sx={{
            position: 'absolute',
            right: -40,
            bottom: -40,
            width: 280,
            height: 280,
            zIndex: 0,
            pointerEvents: 'none',
            transition: 'transform 0.1s ease-out', // Smooth movement
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              opacity: 0.08,
              color: 'primary.main',
              animation: `${rotateEnso} 60s linear infinite`,
            }}
          >
            <svg viewBox="0 0 100 100" fill="currentColor" style={{ width: '100%', height: '100%' }}>
              <path d="M50,10 C75,10 95,30 95,50 C95,75 70,95 45,90 C25,85 10,65 15,45 C18,35 25,25 35,20 C45,15 60,15 70,20" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" style={{ opacity: 0.8 }} />
              <path d="M48,12 C20,15 5,40 10,65 C15,85 35,95 55,90 C80,85 92,60 85,35" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" style={{ opacity: 0.4 }} />
            </svg>
          </Box>
        </Box>
      ) : (
        <Box
          className="icon-bg"
          sx={{
            position: 'absolute',
            right: -20,
            bottom: -20,
            opacity: 0.05,
            color: 'primary.main',
            transform: 'scale(1)',
            transition: 'all 0.4s ease',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          {React.cloneElement(value.icon as React.ReactElement<any>, { sx: { fontSize: 180 } })}

        </Box>
      )}

      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box
          sx={{
            mb: 3,
            display: 'inline-flex',
            p: 2,
            borderRadius: '20px', // Soft square
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(176, 152, 104, 0.2)' : 'rgba(176, 152, 104, 0.1)',
            color: 'primary.main',
            width: 'fit-content'
          }}
        >
          {value.icon}
        </Box>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          {value.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '1.05rem', flexGrow: 1 }}>
          {value.description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default function AboutContent({ children }: { children?: React.ReactNode }) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: 'white',
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              About Zen Analytics
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              sx={{ mb: 2 }}
            >
              Master your tracking. Simplify your workflow.
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
              <strong>Zen Analytics</strong> is a <strong>unified</strong>, <strong>privacy-first</strong> browser extension that revolutionizes how you debug digital analytics. It aggregates data from <strong>25+ platforms</strong> into a single interface, offering real-time validation, session recording, and deep inspection capabilities.
            </Typography>
          </Container>
        </Box>

        {/* Our Story / About the Author Section */}
        <Box sx={{ py: 10, bgcolor: 'background.default' }}>
          <Container maxWidth="md">
            {/* Tab Navigation */}
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{
                mb: 4,
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  minWidth: 120,
                },
                '& .Mui-selected': {
                  color: 'primary.main',
                },
                '& .MuiTabs-indicator': {
                  height: 4,
                  borderRadius: 2,
                },
              }}
            >
              <Tab label="Why Zen Analytics?" />
              <Tab label="About the Author" />
            </Tabs>

            {/* Our Story Content */}
            {tabValue === 0 && (
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '150px',
                    height: '150px',
                    background: (theme) => `radial-gradient(circle at top right, ${theme.palette.primary.light}20, transparent 70%)`,
                    zIndex: 0
                  }}
                />

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                    Why did we build Zen Analytics?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                    Zen Analytics was born from the chaos of modern digital marketing. Developers and marketers constantly switch between Facebook Pixel Helper, Google Tag Assistant, network tabs, and console logs just to verify a single "Purchase" event. It was fragmented, inefficient, and exhausting.
                  </Typography>

                  <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                    The Problem with Existing Workflows:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    <Box component="li" sx={{ mb: 1 }}><strong>Fragmentation:</strong> Using 5 different extensions to check 5 different pixels.</Box>
                    <Box component="li" sx={{ mb: 1 }}><strong>Opacity:</strong> Measurement Protocol parameters are hard to decode manually.</Box>
                    <Box component="li" sx={{ mb: 1 }}><strong>Context Switching:</strong> Constantly tabbing between tools kills productivity.</Box>
                  </Box>

                  <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                    Our Solution:
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                    We realized that <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>unification</Box> and <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>clarity</Box> were the keys. So we built Zen Analytics as the <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>ultimate debugging command center</Box>.
                  </Typography>

                  <Box component="ul" sx={{ pl: 2, mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    <Box component="li" sx={{ mb: 1 }}><strong>One Interface:</strong> See GA4, Meta, TikTok, and GTM events side-by-side.</Box>
                    <Box component="li" sx={{ mb: 1 }}><strong>Human-Readable:</strong> We decode cryptic parameter names into clear labels.</Box>
                    <Box component="li" sx={{ mb: 1 }}><strong>History & Recording:</strong> Never miss an event; record sessions for audit.</Box>
                    <Box component="li" sx={{ mb: 1 }}><strong>Privacy First:</strong> Your data never leaves your browser.</Box>
                  </Box>

                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                    Today, Zen Analytics helps you validate your implementation in seconds, not minutes, giving you the confidence that your data is accurate.
                  </Typography>
                </Box>
              </Paper>
            )}

            {/* About the Author Content */}
            {tabValue === 1 && children}
          </Container>
        </Box>

        {/* Our Values Section */}
        <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                component="h2"
                variant="h4"
                color="text.primary"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                What We Believe In
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                Our design philosophy blends modern aesthetics with functional purity.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <ValueCard value={value} />
                </Grid>
              ))}
            </Grid>

          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: 10,
            bgcolor: 'background.default',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background decoration */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: '800px',
              height: '400px',
              background: (theme) => `radial-gradient(ellipse at center, ${theme.palette.primary.main}08, transparent 70%)`,
              zIndex: 0
            }}
          />

          <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                component="h2"
                variant="h3"
                color="text.primary"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Ready to Debug?
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, fontWeight: 400 }}>
                Join thousands of marketers and developers who trust Zen Analytics for their tracking validation.
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={NextLink}
                href="/#browsers"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  borderRadius: 8 // Pill shape
                }}
              >
                Install Extension
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
