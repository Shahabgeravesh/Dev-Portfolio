import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button, Stack } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import LanguageIcon from '@mui/icons-material/Language';

function Projects() {
  const projects = [
    {
      title: "CPP Flashcard ASIS",
      description: "A comprehensive iOS app designed to help professionals prepare for the ASIS Certified Protection Professional (CPP) exam. Features include flashcards covering all seven CPP domains, progress tracking, and offline access.",
      image: "images/cpp-flashcard.jpg",
      appStoreLink: "https://apps.apple.com/us/app/cpp-flashcard-asis/id6741053163",
      websiteLink: "https://flashcpp.com"
    },
    // Add more projects here
  ];

  return (
    <Box id="projects" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Featured Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'visible'
              }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                  sx={{ 
                    objectFit: 'contain',
                    p: 2,
                    bgcolor: 'background.paper'
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Stack direction="row" spacing={2} width="100%" justifyContent="center">
                    <Button 
                      startIcon={<AppleIcon />}
                      variant="contained"
                      href={project.appStoreLink}
                      target="_blank"
                      sx={{ minWidth: 140 }}
                    >
                      App Store
                    </Button>
                    <Button
                      startIcon={<LanguageIcon />}
                      variant="outlined"
                      href={project.websiteLink}
                      target="_blank"
                      sx={{ minWidth: 140 }}
                    >
                      Website
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects; 