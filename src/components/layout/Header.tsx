'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@zen-analytics/ui';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { Fade, useScrollTrigger } from '@mui/material';
import { addUtmParams } from '@/global/utils';
import { EXTENSION_URLS } from '@zen-analytics/constants';

const navItems = [
  { name: 'Features', href: '/#features' },
  { name: 'Download', href: '/#browsers' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/#faq' }
];

interface ElevationScrollProps {
  children: React.ReactElement<React.ComponentProps<typeof AppBar>>;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: trigger ? 'background.paper' : 'transparent',
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      borderBottom: trigger ? `1px solid rgba(0, 0, 0, 0.08)` : 'none',
    },
  });
}

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ElevationScroll>
      <AppBar position="sticky" color="default" elevation={0} sx={{ backdropFilter: 'blur(10px)', bgcolor: 'rgba(255,255,255,0.8)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: { xs: 1, md: 0 },
                mr: 4,
                fontWeight: 700,
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                fontSize: { xs: '1.15rem', md: '1.3rem' },
                letterSpacing: '-0.5px',
              }}
            >
              <Box
                component="img"
                src="/images/128.svg"
                alt="Zen Analytics Logo"
                sx={{
                  height: 40,
                  mr: 1.5,
                  display: { xs: 'none', md: 'flex' },
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(5deg) scale(1.1)'
                  }
                }}
              />
              Zen Analytics
            </Typography>

            {/* Mobile menu */}
            {isMobile && (
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  sx={{
                    border: '1px solid',
                    borderColor: 'rgba(0,0,0,0.08)',
                    borderRadius: '8px',
                    p: 1,
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiPaper-root': {
                      borderRadius: 2,
                      mt: 1.5,
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.name}
                      onClick={handleCloseNavMenu}
                      sx={{
                        py: 1.5,
                        px: 3,
                        '&:hover': {
                          backgroundColor: 'rgba(76, 175, 80, 0.08)'
                        }
                      }}
                    >
                      <Link href={item.href} passHref style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                        <Typography textAlign="center" fontWeight={500}>{item.name}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}

            {/* Desktop navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    mx: 1.5,
                    color: 'text.primary',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: '50%',
                      width: 0,
                      height: 2,
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease, left 0.3s ease',
                      transform: 'translateX(-50%)',
                      borderRadius: '2px',
                      opacity: 0.8
                    },
                    '&:hover': {
                      backgroundColor: 'rgba(76, 175, 80, 0.08)',
                      '&::after': {
                        width: '50%',
                      }
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            {/* Action buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Fade in={true} timeout={1000}>
                <Button
                  variant="contained"
                  color="primary"
                  href={addUtmParams(EXTENSION_URLS.CHROME, {
                    source: 'zen_analytics_landing_page',
                    campaign: 'eternal',
                    medium: 'header_button'
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    ml: 2,
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: '24px',
                    boxShadow: `0 5px 15px ${theme.palette.primary.main}30`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: `0 8px 25px ${theme.palette.primary.main}40`
                    }
                  }}
                >
                  Get Extension
                </Button>
              </Fade>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
