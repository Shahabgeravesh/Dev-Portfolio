import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button, Stack } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import LanguageIcon from '@mui/icons-material/Language';

function Projects() {
  const projects = [
    {
      title: "Court Officer Flashcards App",
      description: "An interactive iOS app designed to help candidates prepare for the NY Court Officer exam. Features include comprehensive flashcards covering key topics, memory & recall practice questions, reading comprehension exercises, grammar & spelling assessments, court terminology review, and situational judgment scenarios.",
      image: "images/nyk-court.jpg",
      appStoreLink: "https://apps.apple.com/us/app/court-officer-flashcards-app/id6744664594",
      websiteLink: "#"
    },
    {
      title: "CPP Flashcard ASIS",
      description: "A comprehensive iOS app designed to help professionals prepare for the ASIS Certified Protection Professional (CPP) exam. Features include flashcards covering all seven CPP domains, progress tracking, and offline access.",
      image: "images/cpp-flashcard.jpg",
      appStoreLink: "https://apps.apple.com/us/app/cpp-flashcard-asis/id6741053163",
      websiteLink: "https://flashcpp.com"
    },
    {
      title: "DateGenie",
      description: "A magical date planning app that makes date nights special with 72 curated date ideas. Features include scratch-off reveal functionality, categorized date suggestions (romantic, adventure, budget-friendly, luxury), and instant sharing with partners. Perfect for couples looking to break routine and discover new experiences.",
      image: "/images/DateGenie.png",
      appStoreLink: "https://apps.apple.com/us/app/dategenie/id6749169858",
      websiteLink: "#"
    },
    {
      title: "Guard Card California",
      description: "A comprehensive iOS app for California security guard certification. Features include step-by-step certification guide, BSIS-approved training center locator, LiveScan fingerprinting locations, official study materials, interactive practice quizzes with 52 questions, and streamlined application process through BSIS Breeze portal. Complete offline access for studying anywhere.",
      image: "images/Guardcardca.jpg",
      appStoreLink: "https://apps.apple.com/us/app/guard-card-california/id6751480977",
      websiteLink: "#"
    }
  ];

  return (
    <div style={{
      width: '100%',
      padding: '40px 20px',
      backgroundColor: '#f8f9fa',
      margin: '20px 0'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Featured Projects
        </Typography>
        
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'visible',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                  onError={(e) => {
                    console.error(`Failed to load image: ${project.image}`);
                    e.target.src = 'images/placeholder.jpg';
                  }}
                  sx={{ 
                    objectFit: 'contain',
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: '16px'
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
                      sx={{ 
                        minWidth: 140,
                        background: 'linear-gradient(45deg, #1976d2, #64b5f6)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1565c0, #42a5f5)',
                        }
                      }}
                    >
                      App Store
                    </Button>
                    {project.websiteLink !== "#" && (
                      <Button
                        startIcon={<LanguageIcon />}
                        variant="outlined"
                        href={project.websiteLink}
                        target="_blank"
                        sx={{ minWidth: 140 }}
                      >
                        Website
                      </Button>
                    )}
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Projects; 