'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import BlockIcon from '@mui/icons-material/Block';

// Define pixels with their display names and image paths
const PIXELS = [
  { name: 'Appsflyer', image: '/images/network/Appsflyer.png' },
  { name: 'GA4', image: '/images/network/GA4.svg' },
  { name: 'GTM', image: '/images/network/GTM.svg' },
  { name: 'Meta (Facebook)', image: '/images/network/Facebook.png' },
  { name: 'Microsoft', image: '/images/network/Microsoft.svg' },
  { name: 'Mixpanel', image: '/images/network/Mixpanel.png' },
  { name: 'Plausible', image: '/images/network/Plausible.png' },
  { name: 'Taboola', image: '/images/network/Taboola.png' },
  { name: 'TikTok', image: '/images/network/TikTok.png' },
];

export default function WelcomePage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 4 }, position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 20, left: 20, display: { xs: 'none', md: 'block' } }}>
        <Button
          component={Link}
          href="/"
          startIcon={<HomeIcon />}
          variant="text"
          color="primary"
          sx={{ fontWeight: 600 }}
        >
          Home
        </Button>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, mb: 2, justifyContent: 'center' }}>
        <Button
          component={Link}
          href="/"
          startIcon={<HomeIcon />}
          variant="text"
          color="primary"
          sx={{ fontWeight: 600 }}
        >
          Home
        </Button>
      </Box>

      {/* Centered Title */}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: 'text.primary',
          mb: 1,
          lineHeight: 1.2,
          textAlign: 'center',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Welcome to Zen Analytics Pixel Helper
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        component="p"
        sx={{
          color: 'text.secondary',
          fontWeight: 500,
          fontSize: '1.2rem',
          textAlign: 'center',
          mb: 0,
        }}
      >
        📌 Please locate and pin the extension for easy access.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 6 },
          mt: { xs: 4, md: 6 },
          height: '100%',
        }}
      >
        {/* Left Side: Content */}
        <Box
          sx={{
            flex: { xs: '1 1 auto', md: '1 1 40%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' }, // Left align on desktop
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Intro Message */}
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: 2,
              color: 'text.secondary',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.6,
            }}
          >
            The welcome page has installed several pixel trackers:
          </Typography>

          {/* List of installed pixels */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: 1.5,
            mb: 3,
          }}>
            {PIXELS.map((pixel) => (
              <Box key={pixel.name} sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 1,
                bgcolor: 'background.paper',
                borderRadius: 2,
                color: 'text.primary',
                border: '1px solid',
                borderColor: 'grey.200',
                fontWeight: 600,
                fontSize: '0.85rem',
                boxShadow: '0px 2px 4px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0px 4px 8px rgba(0,0,0,0.08)',
                  borderColor: 'primary.main',
                }
              }}>
                <Box
                  component="img"
                  src={pixel.image}
                  alt={pixel.name}
                  sx={{ width: 20, height: 20, objectFit: 'contain' }}
                />
                {pixel.name}
              </Box>
            ))}
          </Box>

          {/* Footer Message */}
          <Typography
            variant="body1"
            sx={{
              color: 'text.primary',
              fontSize: '1rem',
              lineHeight: 1.6,
              bgcolor: 'background.paper',
              p: 3,
              borderRadius: 3,
              borderLeft: '6px solid',
              borderColor: 'primary.main',
              width: '100%',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            If everything is working correctly, you should see them on the extension popup UI.
            On your existing pages, please REFRESH so that extension can see/check the event.
            <br />
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 700, mt: 1, display: 'inline-block' }}>
              <Typography variant="subtitle1" component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                Happy debugging.
              </Typography>
            </Box>
            <br />
            <Box component="span" sx={{ fontWeight: 600, mt: 2, display: 'flex', alignItems: 'center' }}>
              <BlockIcon sx={{ color: 'error.main', mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="caption" component="span" sx={{ color: 'text.secondary' }}>Note: If you have <Typography component="span" sx={{ color: 'error.main' }}>ad blocker</Typography> enabled, you may need to disable it temporarily for the extension to function properly.</Typography>
            </Box>
          </Typography>
        </Box>

        {/* Right Side: Video */}
        <Box
          sx={{
            flex: { xs: '1 1 auto', md: '1 1 60%' },
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            maxHeight: '60vh', // Limit video height
          }}
        >
          <Box
            component="video"
            src="/media/zen-analytics-welcome-image.webm"
            autoPlay
            loop
            muted
            playsInline
            sx={{
              width: '100%',
              maxWidth: '800px',
              maxHeight: '100%',
              borderRadius: 4,
              boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#000',
              objectFit: 'contain',
            }}
          />
        </Box>

      </Box>
    </Container>
  );
}
