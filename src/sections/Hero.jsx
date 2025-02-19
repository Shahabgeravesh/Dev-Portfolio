import { Box, Typography, Container, Button, Stack, Avatar, Fade } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f6f8fc 0%, #ffffff 100%)',
        position: 'relative',
      }}
    >
      <Container>
        <Fade in={true} timeout={1000}>
          <Stack spacing={4} alignItems="center">
            <Avatar
              src="images/profile.jpg"
              alt="Shahab Geravesh"
              sx={{
                width: 220,
                height: 220,
                mb: 2,
                border: '4px solid white',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{
                background: 'linear-gradient(45deg, #1976d2, #64b5f6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Hi, I'm Shahab Geravesh
            </Typography>
            <Typography 
              variant="h4" 
              color="text.secondary" 
              paragraph 
              align="center"
              sx={{ maxWidth: '800px', mb: 4 }}
            >
              Full Stack & Mobile App Developer
            </Typography>
            <Stack direction="row" spacing={3}>
              <Button 
                variant="contained" 
                size="large" 
                href="#contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #1976d2, #64b5f6)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1565c0, #42a5f5)',
                  },
                }}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                href="#projects"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                View My Work
              </Button>
            </Stack>
          </Stack>
        </Fade>
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': {
                transform: 'translateX(-50%) translateY(0)',
              },
              '50%': {
                transform: 'translateX(-50%) translateY(10px)',
              },
            },
          }}
        >
          <KeyboardArrowDownIcon 
            sx={{ 
              fontSize: 40,
              color: 'primary.main',
              cursor: 'pointer',
            }} 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Hero; 