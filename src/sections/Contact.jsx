import { Box, Typography, Container, Button, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:shahabgeravesh@gmail.com?subject=Portfolio Contact';
  };

  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center">
          <Typography variant="h2" component="h2" gutterBottom align="center">
            Get In Touch
          </Typography>
          <Typography variant="h6" color="text.secondary" align="center" sx={{ maxWidth: '600px' }}>
            I'm always open to new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate!
          </Typography>
          
          <Stack direction="row" spacing={3}>
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              onClick={handleEmailClick}
              sx={{ 
                minWidth: 200,
                py: 1.5,
                fontSize: '1.1rem'
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
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              LinkedIn
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Contact; 