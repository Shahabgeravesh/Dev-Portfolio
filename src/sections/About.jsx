import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';

function About() {
  const education = [
    {
      degree: "Master of Engineering - Data Science",
      school: "UC Riverside",
      year: "Jan 2021"
    },
    {
      degree: "Bachelor of Science - Business Information Systems",
      school: "UC Riverside",
      year: "Mar 2019"
    },
    {
      degree: "Full Stack Web Development Certificate",
      school: "UC Berkeley Bootcamp",
      year: "Oct 2021"
    }
  ];

  const professionalFocus = [
    "Full Stack Web Development",
    "iOS Mobile App Development",
    "Data Science & Analytics"
  ];

  return (
    <Box id="about" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" paragraph>
                I am a Software Engineer and Data Scientist with extensive experience in full-stack development 
                and machine learning. With over 68 public repositories on GitHub and published research in AI, 
                I combine technical expertise with practical implementation to deliver innovative solutions 
                across web and mobile platforms.
              </Typography>
              <Typography variant="body1">
                Whether it's building responsive web applications or developing native mobile apps, 
                I bring ideas to life with clean, efficient, and maintainable code.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <SchoolIcon sx={{ mr: 2, fontSize: 30 }} color="primary" />
                <Typography variant="h5">Education</Typography>
              </Box>
              <Box sx={{ pl: 1 }}>
                {education.map((edu, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {edu.school} • {edu.year}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <WorkIcon sx={{ mr: 2, fontSize: 30 }} color="primary" />
                <Typography variant="h5">Professional Focus</Typography>
              </Box>
              <Box sx={{ pl: 1 }}>
                {professionalFocus.map((focus, index) => (
                  <Typography 
                    key={index} 
                    variant="h6" 
                    sx={{ 
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      '&:before': {
                        content: '"•"',
                        marginRight: '8px',
                        color: 'primary.main',
                        fontWeight: 'bold'
                      }
                    }}
                  >
                    {focus}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <ArticleIcon sx={{ mr: 2, fontSize: 30 }} color="primary" />
                <Typography variant="h5">Publications</Typography>
              </Box>
              <Box sx={{ pl: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600, mb: 1 }}>
                    Artificial Neural Networks for Human Activity Recognition Using Sensor Based Dataset
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Published in Multimedia Tools and Applications, 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Designed a simple architecture of MLP using smartphone sensors data (Gyroscope and Accelerometer) 
                    for human activity recognition. The model achieved 98% accuracy on combined sensor data, 
                    outperforming traditional machine learning methods.
                  </Typography>
                  <Button 
                    variant="outlined" 
                    size="small"
                    href="https://link.springer.com/article/10.1007/s11042-022-13716-z"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      mt: 1,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white'
                      }
                    }}
                  >
                    View Publication
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About; 