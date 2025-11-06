import { Box, Typography, Container, Button, Stack, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Contact() {
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  
  const handleEmailClick = () => {
    // Obfuscated email to prevent scraping
    const email = atob('c2hhaGFiZ2VyYXZlc2hAZ21haWwuY29t');
    window.location.href = `mailto:${email}?subject=Portfolio Contact`;
  };

  return (
    <Box 
      id="contact" 
      ref={elementRef}
      sx={{ 
        py: 10,
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #fef3f2 100%)',
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent)',
        }
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={5} alignItems="center">
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              align="center"
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ef4444 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get In Touch
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              align="center" 
              sx={{ 
                maxWidth: '600px', 
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.7
              }}
            >
              I'm always open to new opportunities and interesting projects. 
              Feel free to reach out if you'd like to collaborate!
            </Typography>
          </Box>
          
          <Paper
            elevation={0}
            sx={{
              p: 5,
              width: '100%',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444)',
                borderRadius: '16px 16px 0 0',
              }
            }}
          >
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={3}
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                onClick={handleEmailClick}
                sx={{ 
                  minWidth: 200,
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(99, 102, 241, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Me
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/shahabgeravesh/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  minWidth: 200,
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  border: '2px solid rgba(6, 182, 212, 0.3)',
                  color: '#06b6d4',
                  background: 'rgba(6, 182, 212, 0.05)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
                    color: 'white',
                    border: 'none',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(6, 182, 212, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                href="https://github.com/Shahabgeravesh"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  minWidth: 200,
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                  color: '#8b5cf6',
                  background: 'rgba(139, 92, 246, 0.05)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                    color: 'white',
                    border: 'none',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(139, 92, 246, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                GitHub
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

export default Contact; 