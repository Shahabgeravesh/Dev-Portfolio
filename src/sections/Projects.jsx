import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button, Stack } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import LanguageIcon from '@mui/icons-material/Language';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Projects() {
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  const projects = [
    {
      title: "NYK Court Officer Flashcards",
      description: "An interactive iOS app designed to help candidates prepare for the NY Court Officer exam. Features include comprehensive flashcards covering key topics, memory & recall practice questions, reading comprehension exercises, grammar & spelling assessments, court terminology review, and situational judgment scenarios.",
      image: "/images/nyk-court.jpg",
      appStoreLink: "https://apps.apple.com/us/app/court-officer-flashcards-app/id6744664594",
      websiteLink: "#"
    },
    {
      title: "CPP Flashcard ASIS",
      description: "A comprehensive iOS app designed to help professionals prepare for the ASIS Certified Protection Professional (CPP) exam. Features include flashcards covering all seven CPP domains, progress tracking, and offline access.",
      image: "/images/cpp-flashcard.jpg",
      appStoreLink: "https://apps.apple.com/us/app/cpp-flashcard-asis/id6741053163",
      websiteLink: "https://flashcpp.com"
    },
    {
      title: "Music Sheet Learn",
      description: "Master reading music notation with this comprehensive iOS app. Transform from music notation confusion to confident sheet music reader! Learn treble and bass clefs with interactive lessons, visual guides, and piano keyboard connections. Perfect for beginners and those looking to brush up their skills.",
      image: "/images/music-sheet-learn.jpg",
      appStoreLink: "https://apps.apple.com/us/app/music-sheet-learn/id6754809246",
      websiteLink: "#"
    },
    {
      title: "DateGenie",
      description: "A smart iOS app that helps users discover and plan memorable dates with scratch-off date ideas. Features include personalized date suggestions, location-based recommendations, and the ability to save and share favorite date ideas.",
      image: "/images/dategenie.jpg",
      appStoreLink: "https://apps.apple.com/us/story/id1535099772",
      websiteLink: "#"
    },
    {
      title: "Tennis Score Keeper",
      description: "Track tennis matches like a pro! Beautiful, intuitive score keeper with tiebreaks, match history, and court mode. Features comprehensive scoring (sets, games, points), automatic set and match win detection, match history, customizable player names, and a modern dark theme optimized for outdoor viewing.",
      image: "/images/tennis-score-keeper.jpg",
      appStoreLink: "https://apps.apple.com/us/app/tennis-score-keeper/id6754825833",
      websiteLink: "#"
    },
    {
      title: "Guard Card California",
      description: "A specialized iOS app designed to help security professionals in California prepare for their guard card certification. Features include comprehensive study materials, practice exams, flashcards covering state-specific regulations, and progress tracking for exam preparation.",
      image: "/images/guard-card-california.jpg",
      appStoreLink: "https://apps.apple.com/us/app/guard-card-california/id6751480977",
      websiteLink: "#"
    }
  ];

  const projectColors = [
    { gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' },
    { gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)' },
    { gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)' },
    { gradient: 'linear-gradient(135deg, #10b981 0%, #f59e0b 100%)' },
    { gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' },
    { gradient: 'linear-gradient(135deg, #ef4444 0%, #6366f1 100%)' },
  ];

  return (
    <Box 
      id="projects" 
      ref={elementRef}
      sx={{ 
        py: 10, 
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%)',
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
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{
              mb: 2,
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Projects
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
            Innovative iOS applications and mobile solutions
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {projects.map((project, index) => {
            const colors = projectColors[index % projectColors.length];
            return (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  overflow: 'visible',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
                  border: `1px solid ${colors.gradient.includes('6366f1') ? 'rgba(99, 102, 241, 0.2)' : colors.gradient.includes('8b5cf6') ? 'rgba(139, 92, 246, 0.2)' : 'rgba(6, 182, 212, 0.2)'}`,
                  borderRadius: 3,
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: colors.gradient,
                    borderRadius: '12px 12px 0 0',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: `0 24px 60px ${colors.gradient.includes('6366f1') ? 'rgba(99, 102, 241, 0.25)' : colors.gradient.includes('8b5cf6') ? 'rgba(139, 92, 246, 0.25)' : 'rgba(6, 182, 212, 0.25)'}`,
                  }
                }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${project.image}`);
                    e.target.src = '/images/placeholder.jpg';
                  }}
                  sx={{ 
                    objectFit: 'contain',
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: '16px'
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      background: colors.gradient,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Stack direction="row" spacing={2} width="100%" justifyContent="center">
                    <Button 
                      startIcon={<AppleIcon />}
                      variant="contained"
                      href={project.appStoreLink}
                      target="_blank"
                      sx={{ 
                        minWidth: 160,
                        py: 1.5,
                        background: colors.gradient,
                        fontWeight: 600,
                        boxShadow: `0 4px 12px ${colors.gradient.includes('6366f1') ? 'rgba(99, 102, 241, 0.3)' : colors.gradient.includes('8b5cf6') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(6, 182, 212, 0.3)'}`,
                        '&:hover': {
                          background: colors.gradient,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 24px ${colors.gradient.includes('6366f1') ? 'rgba(99, 102, 241, 0.4)' : colors.gradient.includes('8b5cf6') ? 'rgba(139, 92, 246, 0.4)' : 'rgba(6, 182, 212, 0.4)'}`,
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
                        sx={{ 
                          minWidth: 160,
                          py: 1.5,
                          border: `2px solid ${colors.gradient.includes('6366f1') ? 'rgba(99, 102, 241, 0.3)' : colors.gradient.includes('8b5cf6') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(6, 182, 212, 0.3)'}`,
                          color: colors.gradient.includes('6366f1') ? '#6366f1' : colors.gradient.includes('8b5cf6') ? '#8b5cf6' : '#06b6d4',
                          fontWeight: 600,
                          '&:hover': {
                            background: colors.gradient,
                            color: 'white',
                            border: 'none',
                            transform: 'translateY(-2px)',
                          }
                        }}
                      >
                        Website
                      </Button>
                    )}
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects; 