import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useEffect } from 'react';

function Videos() {
  useEffect(() => {
    console.log('Videos component mounted');
  }, []);

  console.log('Rendering Videos component');

  const videos = [
    {
      id: 1,
      title: "Video 1",
      url: "https://youtu.be/KLlIpfHWbEE",
      embedUrl: "https://www.youtube.com/embed/KLlIpfHWbEE?rel=0"
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://youtu.be/v4O2t-3-as8",
      embedUrl: "https://www.youtube.com/embed/v4O2t-3-as8?rel=0"
    }
  ];

  return (
    <Box 
      id="videos" 
      sx={{ 
        py: 8, 
        bgcolor: 'background.default',
        border: '2px solid red', // Debug border
        minHeight: '50vh' // Ensure minimum height
      }}
    >
      <Container>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Featured Videos
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {videos.map((video) => (
            <Grid item xs={12} md={6} key={video.id}>
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
                <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {video.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    startIcon={<YouTubeIcon />}
                    variant="contained"
                    href={video.url}
                    target="_blank"
                    sx={{ 
                      minWidth: 140,
                      background: 'linear-gradient(45deg, #FF0000, #FF4444)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #CC0000, #FF0000)',
                      }
                    }}
                  >
                    Watch on YouTube
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Videos; 