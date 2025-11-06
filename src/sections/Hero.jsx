import { Box, Typography, Container, Button, Stack, Avatar, Fade } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Hero() {
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in={true} timeout={1000}>
          <Stack spacing={4} alignItems="center">
            <Box
              sx={{
                position: 'relative',
                mb: 2,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  zIndex: -1,
                  animation: 'pulse 3s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
                    '50%': { transform: 'scale(1.1)', opacity: 1 },
                  },
                },
              }}
            >
              <Avatar
                src={`${baseUrl}images/profile.jpg`}
                alt="Shahab Geravesh - Software Engineer and Data Scientist based in Daly City, CA"
                sx={{
                  width: 220,
                  height: 220,
                  border: '6px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1) inset',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  zIndex: 1,
                  '&:hover': {
                    transform: 'scale(1.08) rotate(2deg)',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.2) inset',
                  },
                }}
              />
            </Box>
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(255,255,255,0.5)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                mb: 1,
              }}
            >
              Hi, I'm Shahab Geravesh
            </Typography>
            <Typography 
              variant="h5" 
              align="center" 
              sx={{ 
                fontWeight: 600,
                color: 'rgba(255,255,255,0.95)',
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                mb: 1,
              }}
            >
              Physical Security Leader & Risk Management Expert
            </Typography>
            <Typography 
              variant="h4" 
              paragraph 
              align="center"
              sx={{ 
                maxWidth: '800px',
                mb: 4,
                color: 'rgba(255,255,255,0.9)',
                textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                fontWeight: 400,
              }}
            >
              Full Stack & Mobile App Developer
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ width: '100%', justifyContent: 'center', maxWidth: '700px' }}>
              <Button 
                variant="contained" 
                size="large" 
                href="#contact"
                sx={{
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  color: '#6366f1',
                  fontWeight: 700,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  '&:hover': {
                    background: 'rgba(255,255,255,1)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
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
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.3)',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'rgba(255,255,255,0.2)',
                    border: '2px solid rgba(255,255,255,0.5)',
                    transform: 'translateY(-4px)',
                  },
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
              color: 'rgba(255,255,255,0.9)',
              cursor: 'pointer',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'white',
                transform: 'translateY(5px)',
              },
            }} 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Hero; 