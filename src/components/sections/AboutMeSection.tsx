'use client';

import React from 'react';
import { Box, Grid, IconButton, Typography, Tooltip } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { WorkOutline as WorkIcon } from '@mui/icons-material';
import { GITHUB_PROFILE_URL } from '@zen-analytics/constants';

const AboutMeSection: React.FC = () => {
  // Hardcoded content since i18n is not set up
  const content = {
    title: 'About Me',
    intro: "Hello! I'm Toan Nguyen from Vietnam, the creator of Zen Analytics. I've been in Software Development for 10+ years. My passion is to craft intuitive tools that simplify complex data and empower users by boosting productivity.",
    quote: "\"My goal is to make intuitive, easy-to-use, yet powerful tools for everyone.\"",
    author: "- Toan Nguyen",
    closing: "I hope Zen Analytics helps you debug and validate your data with ease. Feel free to reach out with any feedback!",
    hideUpwork: "Hire me on Upwork"
  };

  return (
    <>
      <Grid container spacing={3} alignItems="flex-start" sx={{ mt: 2 }}>
        {/* Left Column: Introduction and Quote */}
        <Grid item xs={12} md={7}>
          <Typography variant="body1" paragraph>
            {content.intro}
          </Typography>
          <Box
            component="blockquote"
            sx={{
              p: 2,
              borderLeft: (theme) => `4px solid ${theme.palette.primary.main}`,
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.05),
              mt: 2,
              mb: 2,
              ml: 0,
              mr: 0,
              fontStyle: 'italic',
              position: 'relative',
              '&::before': {
                content: '"\u201C"', // Unicode for left double quotation mark
                fontFamily: 'Georgia, serif',
                fontSize: '3em',
                lineHeight: 0.1,
                position: 'absolute',
                top: '0.2em',
                left: '-0.15em',
                color: (theme) => alpha(theme.palette.primary.main, 0.3),
              },
              '& p': {
                marginLeft: '1.5em', // Indent text to make space for quote mark
              }
            }}
          >
            <Typography variant="h6" component="p" sx={{ fontWeight: 'medium', fontStyle: 'normal' }}>
              {content.quote}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'right', fontStyle: 'normal' }}>
              {content.author}
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {content.closing}
          </Typography>
        </Grid>
        {/* Right Column: Photo with Icon Links */}
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ position: 'relative', width: '100%', maxWidth: 280, lineHeight: 0 }}>
            <Box
              component="img"
              src="/images/about/about-me.jpg"
              alt="About Me - Toan Nguyen"
              sx={{
                display: 'block',
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                boxShadow: (theme) => theme.shadows[4],
                border: (theme) => `2px solid ${theme.palette.divider}` 
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: (theme) => theme.spacing(1.5),
                left: (theme) => theme.spacing(1.5),
                display: 'flex',
                gap: (theme) => theme.spacing(1),
              }}
            >
              <IconButton
                component="a"
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                size="small"
                sx={{
                  backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.9),
                  '&:hover': {
                    backgroundColor: (theme) => alpha(theme.palette.background.paper, 1),
                  },
                  boxShadow: (theme) => theme.shadows[3],
                }}
              >
                <Box component="img" src="/images/vendors/icons8-github.svg" alt="GitHub" sx={{ width: 20, height: 20 }} />
              </IconButton>
              <Tooltip title={content.hideUpwork}>
                <IconButton
                  component="a"
                  href="https://www.upwork.com/freelancers/~01ab0d8d6efd33201c"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Upwork Profile"
                  size="small"
                  sx={{
                    backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.9),
                    '&:hover': {
                      backgroundColor: (theme) => alpha(theme.palette.background.paper, 1),
                    },
                    boxShadow: (theme) => theme.shadows[3],
                  }}
                >
                  <WorkIcon sx={{ fontSize: 20, color: 'action.active' }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMeSection;
