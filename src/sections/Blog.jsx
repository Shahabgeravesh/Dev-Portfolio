import { Box, Typography, Container, Grid, Card, CardContent, Button, Chip, Stack, Paper } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Blog() {
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  const posts = [
    {
      title: "Neural Networks for Human Activity Recognition",
      excerpt: "Exploring the research and implementation of machine learning models for sensor-based activity recognition. The study focuses on using smartphone sensors (Gyroscope and Accelerometer) to achieve 98% accuracy in activity recognition.",
      date: "February 2024",
      link: "https://link.springer.com/article/10.1007/s11042-022-13716-z",
      category: "Research Publication",
      publisher: "Multimedia Tools and Applications"
    }
  ];

  return (
    <Box 
      id="blog" 
      ref={elementRef}
      sx={{ 
        py: 10, 
        background: 'linear-gradient(180deg, #fafbfc 0%, #ffffff 100%)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        position: 'relative',
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
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technical Insights
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ maxWidth: '600px', mx: 'auto', fontWeight: 400 }}
          >
            Research publications and technical articles showcasing innovative solutions
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {posts.map((post, index) => (
            <Grid item xs={12} md={8} lg={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  position: 'relative',
                  overflow: 'visible',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  border: '1px solid rgba(99, 102, 241, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 60px rgba(99, 102, 241, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                    borderRadius: '4px 4px 0 0',
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack spacing={3}>
                    <Box>
                      <Chip
                        icon={<ArticleIcon />}
                        label={post.category}
                        size="small"
                        sx={{
                          mb: 2,
                          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                          color: 'white',
                          fontWeight: 600,
                          '& .MuiChip-icon': {
                            color: 'white',
                          }
                        }}
                      />
                      <Typography 
                        variant="h4" 
                        component="h3"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          lineHeight: 1.3,
                          mb: 2,
                          color: '#1e293b',
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                          <CalendarTodayIcon fontSize="small" />
                          <Typography variant="body2" color="text.secondary">
                            {post.date}
                          </Typography>
                        </Stack>
                        {post.publisher && (
                          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                            • {post.publisher}
                          </Typography>
                        )}
                      </Stack>
                    </Box>

                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.8,
                        mb: 2
                      }}
                    >
                      {post.excerpt}
                    </Typography>

                    <Button 
                      variant="contained"
                      endIcon={<OpenInNewIcon />}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        alignSelf: 'flex-start',
                        px: 3,
                        py: 1.5,
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        fontWeight: 600,
                        '&:hover': {
                          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                          transform: 'translateX(4px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Read Publication
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Blog; 