"use client"

import React, { useState } from 'react';
import { 
  Fab, 
  Popover,
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Typography, 
  IconButton, 
  Tooltip, 
  Box,
  Paper
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { GITHUB_ISSUES_URL } from '@zen-analytics/constants';

// Define vendor icon paths
const gmailIconPath = '/images/vendors/icons8-gmail.svg';
const githubIconPath = '/images/vendors/icons8-github.svg';
const redditIconPath = '/images/vendors/icons8-reddit.svg';
const chromeIconPath = '/images/vendors/icons8-chrome.svg';

interface SupportOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  tooltip: string;
}

const SupportFab: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  const sendEmail = () => {
    window.open('mailto:zen.analytics.corp@gmail.com', '_blank');
    handleClose();
  };

  const supportOptions: SupportOption[] = [
    {
      id: 'email',
      label: 'Email Support',
      icon: <Box component="img" src={gmailIconPath} alt="Gmail" sx={{ width: 24, height: 24 }} />,
      action: sendEmail,
      tooltip: 'Contact via Email'
    },
    {
      id: 'github',
      label: 'Report Bug on GitHub',
      icon: <Box component="img" src={githubIconPath} alt="GitHub" sx={{ width: 24, height: 24 }} />,
      action: () => openExternalLink(GITHUB_ISSUES_URL),
      tooltip: 'Report issues on GitHub'
    },
    {
      id: 'reddit',
      label: 'Join Reddit Community',
      icon: <Box component="img" src={redditIconPath} alt="Reddit" sx={{ width: 24, height: 24 }} />,
      action: () => openExternalLink('https://www.reddit.com/r/zen_analytics/'),
      tooltip: 'Discuss on Reddit'
    },
    {
      id: 'webstore',
      label: 'Chrome Web Store Support',
      icon: <Box component="img" src={chromeIconPath} alt="Chrome Web Store" sx={{ width: 24, height: 24 }} />,
      action: () => openExternalLink('https://chromewebstore.google.com/detail/gknigcbhlammoakmmdddkblknanpjiac/support?hl=en'),
      tooltip: 'Official Support Channel'
    }
  ];

  return (
    <>
      <Tooltip title="Hover for support options">
        <Fab
          color="primary"
          size="medium"
          onMouseEnter={handleMouseEnter}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <HelpOutlineIcon />
        </Fab>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        PaperProps={{
          onMouseLeave: handleClose,
          sx: { 
            mt: -2, 
            mr: 2, 
            width: 400,
            overflow: 'visible',
            borderRadius: 2,
            boxShadow: 4
          }
        }}
      >
        <Paper sx={{ 
          p: 2,
          position: 'relative',
          borderRadius: 2,
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1.5
          }}>
            <Typography variant="h6">Help & Support</Typography>
            <IconButton 
              edge="end" 
              color="error" 
              onClick={handleClose} 
              aria-label="close"
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {supportOptions.map((option) => (
              <ListItem 
                key={option.id} 
                onClick={option.action}
                sx={{ 
                  borderRadius: 1,
                  mb: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                  },
                  cursor: 'pointer'
                }}
              >
                <ListItemIcon>
                  {option.icon}
                </ListItemIcon>
                <ListItemText primary={option.label} />
                <OpenInNewIcon fontSize="small" color="primary" />
              </ListItem>
            ))}
          </List>
          
          {/* Attribution */}
          <Box sx={{ 
            mt: 2, 
            pt: 2, 
            borderTop: '1px solid rgba(0, 0, 0, 0.12)', 
            fontSize: '0.75rem', 
            color: 'text.secondary', 
            textAlign: 'center' 
          }}>
            <Typography variant="caption" sx={{ display: 'block' }}>
              Icons by <a 
                href="https://icons8.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >Icons8</a>
            </Typography>
          </Box>
        </Paper>
      </Popover>
    </>
  );
};

export default SupportFab;
