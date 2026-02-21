'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button } from '@zen-analytics/ui';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { addUtmParams } from '@/global/utils';
import { EXTENSION_URLS } from '@zen-analytics/constants';

// Browser info type
interface BrowserInfo {
  link?: string;
  attributionUrl?: string;
  name: string;
  logo: string;
  installText: string;
  installLink: string;
}

// Styled component for browser card
const BrowserCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[4],
  },
}));

// Browser icon placeholder
const BrowserIcon = ({ name, logo, attributionUrl }: { name: string; logo: string; attributionUrl?: string }) => {
  const IconWrapper = attributionUrl ?
    ({ children }: { children: React.ReactNode }) => (
      <Link
        href={attributionUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          cursor: 'pointer',
          display: 'block',
          '&:hover': {
            '& img': {
              transform: 'scale(1.05)',
              transition: 'transform 0.2s ease-in-out',
            }
          }
        }}
      >
        {children}
      </Link>
    ) :
    ({ children }: { children: React.ReactNode }) => <>{children}</>;

  return (
    <IconWrapper>
      <img
        src={logo}
        srcSet={`${logo.replace('/webp/', '/webp/64/')} 64w, ${logo.replace('/webp/', '/webp/128/')} 128w, ${logo} 1500w`}
        sizes="80px"
        alt={`${name} logo`}
        loading="lazy"
        width={80}
        height={80}
        style={{
          marginBottom: 16,
          objectFit: 'contain',
          borderRadius: '50%',
          padding: 8,
          backgroundColor: 'white',
        }}
      />
    </IconWrapper>
  );
};

export default function BrowserSupport() {
  const browsers: BrowserInfo[] = [
    {
      name: 'Google Chrome',
      link: '<a target="_blank" href="https://icons8.com/icon/wNk5l8VVfBQF/chrome">Google Chrome</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
      attributionUrl: 'https://icons8.com/icon/wNk5l8VVfBQF/chrome',
      logo: '/images/browsers/webp/chrome.webp',
      installText: 'Add to Chrome',
      installLink: addUtmParams(EXTENSION_URLS.CHROME, {
        source: 'zen_analytics_landing_page',
        campaign: 'eternal',
        medium: 'browser_card',
      }),
    },
    {
      name: 'Firefox',
      logo: '/images/browsers/webp/firefox.webp',
      installText: 'Add to Firefox',
      installLink: '#',
    },
    {
      name: 'Microsoft Edge',
      logo: '/images/browsers/webp/edge.webp',
      installText: 'Add to Edge',
      installLink: '#',
    },
    {
      name: 'Safari',
      logo: '/images/browsers/webp/safari.webp',
      installText: 'Add to Safari',
      installLink: '#',
    },
    {
      name: 'Brave',
      logo: '/images/browsers/webp/brave.webp',
      link: '<a target="_blank" href="https://icons8.com/icon/ZAPJV5FAO4PW/brave-web-browser">Brave</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
      attributionUrl: 'https://icons8.com/icon/ZAPJV5FAO4PW/brave-web-browser',
      installText: 'Add To Brave',
      installLink: '#'
    }
  ];

  return (
    <Box
      id="browsers"
      sx={{
        py: 8,
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component="h2"
            variant="h3"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Available on All Major Browsers
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Install Zen Analytics on your favorite browser and start seeing analytics insights across platforms.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center'
          }}
        >
          {browsers.map((browser) => (
            <Box
              key={browser.name}
              sx={{
                flexBasis: {
                  xs: '100%',
                  sm: 'calc(50% - 32px)',
                  md: 'calc(20% - 32px)'
                }
              }}
            >
              <BrowserCard elevation={1}>
                <BrowserIcon
                  name={browser.name}
                  logo={browser.logo}
                  attributionUrl={browser.attributionUrl}
                />

                <Typography variant="h6" component="h3" gutterBottom>
                  {browser.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                  {`The best Zen Analytics experience on ${browser.name}.`}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  href={browser.installLink !== '#' ? browser.installLink : undefined}
                  disabled={browser.installLink === '#'}
                  sx={{
                    textTransform: 'none',
                    borderRadius: 5,
                    px: 3
                  }}
                >
                  {browser.installLink !== '#' ? browser.installText : "Not available"}
                </Button>
              </BrowserCard>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
