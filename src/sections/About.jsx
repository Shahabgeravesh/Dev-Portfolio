import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About() {
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });
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
    "Physical Security Leadership & Risk Management",
    "Full Stack Web Development",
    "iOS Mobile App Development",
    "Data Science & Analytics"
  ];

  return (
    <Box 
      id="about" 
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
            About Me
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
            Passionate about technology, innovation, and creating impactful solutions
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 5, 
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.1)',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(180deg, #6366f1, #8b5cf6, #06b6d4)',
                }
              }}
            >
              <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', lineHeight: 1.9 }}>
                I am a Software Engineer, Data Scientist, and Physical Security Leader with extensive experience in full-stack development, machine learning, and risk management. With over 68 public repositories on GitHub, published research in AI, and a proven track record in security operations, I combine technical expertise with practical implementation to deliver innovative and secure solutions across web, mobile, and physical environments.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.9 }}>
                Whether it's building responsive web applications or developing native mobile apps, 
                I bring ideas to life with clean, efficient, and maintainable code.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 4, 
                height: '100%',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.15)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Education
                </Typography>
              </Box>
              <Box sx={{ pl: 1 }}>
                {education.map((edu, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      mb: 3,
                      p: 2,
                      borderRadius: 2,
                      background: index % 2 === 0 ? 'rgba(99, 102, 241, 0.05)' : 'rgba(6, 182, 212, 0.05)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        background: index % 2 === 0 ? 'rgba(99, 102, 241, 0.1)' : 'rgba(6, 182, 212, 0.1)',
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600, mb: 0.5 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>{edu.school}</Box>
                      <Box component="span">•</Box>
                      <Box component="span">{edu.year}</Box>
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 4, 
                height: '100%',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.15)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <WorkIcon sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Professional Focus
                </Typography>
              </Box>
              <Box sx={{ pl: 1 }}>
                {professionalFocus.map((focus, index) => {
                  const colors = [
                    ['#6366f1', '#8b5cf6'],
                    ['#8b5cf6', '#06b6d4'],
                    ['#06b6d4', '#10b981'],
                    ['#10b981', '#f59e0b'],
                  ];
                  const [color1, color2] = colors[index % colors.length];
                  return (
                    <Box
                      key={index}
                      sx={{
                        mb: 2,
                        p: 2,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${color1}15, ${color2}15)`,
                        border: `1px solid ${color1}30`,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateX(8px)',
                          background: `linear-gradient(135deg, ${color1}25, ${color2}25)`,
                          border: `1px solid ${color1}50`,
                        }
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          '&:before': {
                            content: '""',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            marginRight: '12px',
                            background: `linear-gradient(135deg, ${color1}, ${color2})`,
                            flexShrink: 0,
                          }
                        }}
                      >
                        {focus}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Paper>
          </Grid>

          {/* Physical Security Expertise Section */}
          <Grid item xs={12}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 5,
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(180deg, #10b981, #06b6d4)',
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <WorkIcon sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, background: 'linear-gradient(135deg, #10b981, #06b6d4)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Physical Security Leadership & Expertise
                </Typography>
              </Box>
              <Box sx={{ pl: 1 }}>
                <Typography variant="body1" paragraph>
                  As a recognized expert in physical security, I have led teams and projects for organizations such as Allied Universal, focusing on risk mitigation, threat assessment, and the implementation of advanced security protocols. My background includes:
                </Typography>
                <Typography variant="body1" paragraph>
                  - Leadership in large-scale security operations and executive protection<br />
                  - Expertise in security technology integration, access control, and surveillance systems<br />
                  - Experience in incident response, crisis management, and security training<br />
                  - Certified ASIS International member with a strong record of professional development<br />
                  - Skilled in data-driven security analysis, reporting, and custom solution development
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  My approach combines hands-on field experience with a data science background, enabling innovative, technology-driven solutions for modern security challenges.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 5,
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(239, 68, 68, 0.05) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(180deg, #f59e0b, #ef4444)',
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArticleIcon sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, background: 'linear-gradient(135deg, #f59e0b, #ef4444)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Publications
                </Typography>
              </Box>
              <Box sx={{ pl: 1 }}>
                <Box 
                  sx={{ 
                    mb: 2,
                    p: 3,
                    borderRadius: 2,
                    background: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 1.5, color: '#1e293b' }}>
                    Artificial Neural Networks for Human Activity Recognition Using Sensor Based Dataset
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}>
                    Published in Multimedia Tools and Applications, 2023
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
                    Designed a simple architecture of MLP using smartphone sensors data (Gyroscope and Accelerometer) 
                    for human activity recognition. The model achieved 98% accuracy on combined sensor data, 
                    outperforming traditional machine learning methods.
                  </Typography>
                  <Button 
                    variant="contained"
                    size="medium"
                    href="https://link.springer.com/article/10.1007/s11042-022-13716-z"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      textTransform: 'none',
                      background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                      fontWeight: 600,
                      px: 3,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #d97706 0%, #dc2626 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(245, 158, 11, 0.4)',
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