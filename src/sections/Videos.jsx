import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import ReactPlayer from 'react-player';

function Videos() {
  const videos = [
    {
      id: 'KLlIpfHWbEE',
      title: 'Video 1',
      url: 'https://youtu.be/KLlIpfHWbEE'
    },
    {
      id: 'v4O2t-3-as8',
      title: 'Video 2',
      url: 'https://youtu.be/v4O2t-3-as8'
    }
  ];

  return (
    <Box sx={{ 
      width: '100%',
      py: 6,
      bgcolor: 'background.paper'
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Featured Videos
        </Typography>
        
        <Grid container spacing={4}>
          {videos.map((video) => (
            <Grid item xs={12} md={6} key={video.id}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}>
                <CardContent sx={{ flexGrow: 1, p: 0 }}>
                  <Box sx={{ 
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    '& .react-player': {
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }
                  }}>
                    <ReactPlayer
                      url={video.url}
                      width="100%"
                      height="100%"
                      controls
                      config={{
                        youtube: {
                          playerVars: {
                            modestbranding: 1,
                            rel: 0
                          }
                        }
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h5" component="h3" gutterBottom align="center">
                      {video.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      <a 
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        Watch on YouTube
                      </a>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Videos; 