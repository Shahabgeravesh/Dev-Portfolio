import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, Typography, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Intersection Observer for active section highlighting
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['about', 'skills', 'projects', 'contact', 'blog'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        zIndex: 1300,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Typography
          variant="h6"
          component="a"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('home');
          }}
          sx={{
            fontWeight: 800,
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            }
          }}
        >
          SG
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  selected={activeSection === item.id}
                >
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem
                component="a"
                href="https://github.com/Shahabgeravesh"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenuClose}
              >
                <GitHubIcon sx={{ mr: 1 }} /> GitHub
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => handleScroll(item.id)}
                sx={{
                  position: 'relative',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: activeSection === item.id ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                    width: '80%',
                    height: 3,
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                    borderRadius: '3px 3px 0 0',
                    transition: 'transform 0.3s ease',
                  },
                  color: activeSection === item.id ? '#6366f1' : '#64748b',
                  fontWeight: activeSection === item.id ? 700 : 500,
                  background: activeSection === item.id ? 'rgba(99, 102, 241, 0.08)' : 'transparent',
                  '&:hover': {
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: '#6366f1',
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              color="inherit"
              startIcon={<GitHubIcon />}
              href="https://github.com/Shahabgeravesh"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                ml: 1,
                px: 2,
                py: 1,
                borderRadius: 2,
                color: '#64748b',
                fontWeight: 500,
                '&:hover': {
                  background: 'rgba(139, 92, 246, 0.1)',
                  color: '#8b5cf6',
                }
              }}
            >
              GitHub
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 