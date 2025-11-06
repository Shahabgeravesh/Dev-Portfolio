import { Box, Typography, Container, Grid, Paper, Chip, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StorageIcon from '@mui/icons-material/Storage';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import WorkIcon from '@mui/icons-material/Work';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Skills() {
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.1, once: true });
  
  const categoryColors = [
    { gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', bg: 'rgba(99, 102, 241, 0.05)', border: 'rgba(99, 102, 241, 0.2)' },
    { gradient: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)', bg: 'rgba(139, 92, 246, 0.05)', border: 'rgba(139, 92, 246, 0.2)' },
    { gradient: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)', bg: 'rgba(6, 182, 212, 0.05)', border: 'rgba(6, 182, 212, 0.2)' },
    { gradient: 'linear-gradient(135deg, #10b981 0%, #f59e0b 100%)', bg: 'rgba(16, 185, 129, 0.05)', border: 'rgba(16, 185, 129, 0.2)' },
    { gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)', bg: 'rgba(245, 158, 11, 0.05)', border: 'rgba(245, 158, 11, 0.2)' },
    { gradient: 'linear-gradient(135deg, #ef4444 0%, #6366f1 100%)', bg: 'rgba(239, 68, 68, 0.05)', border: 'rgba(239, 68, 68, 0.2)' },
  ];
  
  const skillCategories = [
    {
      title: "Development & Programming",
      icon: <CodeIcon fontSize="large" />,
      skills: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "jQuery",
        "Redux",
        "HTML/CSS",
        "Python",
        "Git"
      ]
    },
    {
      title: "Mobile & iOS Development",
      icon: <PhoneIphoneIcon fontSize="large" />,
      skills: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "Xcode",
        "iOS SDK",
        "Core Data",
        "App Store Connect",
        "Mobile UI/UX",
        "Native iOS Apps"
      ]
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BubbleChartIcon fontSize="large" />,
      skills: [
        "SQL",
        "Tableau",
        "Power BI",
        "Data Analytics",
        "Statistical Analysis",
        "Data Visualization"
      ]
    },
    {
      title: "Enterprise Systems",
      icon: <StorageIcon fontSize="large" />,
      skills: [
        "ARIBA SAP",
        "Project Management",
        "Budget Management",
        "Risk Assessment",
        "KPI Tracking"
      ]
    },
    {
      title: "Leadership & Management",
      icon: <WorkIcon fontSize="large" />,
      skills: [
        "Team Leadership",
        "Portfolio Management",
        "Strategic Planning",
        "Performance Analysis",
        "Compliance Management"
      ]
    },
    {
      title: "Open Source & Collaboration",
      icon: <GitHubIcon fontSize="large" />,
      skills: [
        "68+ Public Repositories",
        "Pull Shark Achievement",
        "Version Control",
        "Code Review",
        "Team Collaboration",
        "Technical Documentation"
      ]
    }
  ];

  return (
    <Box 
      id="skills" 
      ref={elementRef}
      sx={{ 
        py: 10, 
        background: 'linear-gradient(180deg, #ffffff 0%, #fef3f2 50%, #ffffff 100%)',
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
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #f59e0b 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Skills & Expertise
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
            A comprehensive range of technical and professional skills
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {skillCategories.map((category, index) => {
            const colors = categoryColors[index % categoryColors.length];
            return (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    borderRadius: 3,
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: colors.gradient,
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 60px ${colors.border.replace('0.2', '0.2')}`,
                      border: `1px solid ${colors.border.replace('0.2', '0.4')}`,
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        background: colors.gradient,
                        mr: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 4px 12px ${colors.border}`,
                        '& svg': {
                          color: 'white',
                        }
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 700,
                        background: colors.gradient,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {category.skills.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        sx={{ 
                          m: 0.5,
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          height: 36,
                          background: 'rgba(255, 255, 255, 0.8)',
                          border: `1px solid ${colors.border}`,
                          color: '#1e293b',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            background: colors.gradient,
                            color: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: `0 4px 12px ${colors.border}`,
                            border: 'none',
                          }
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills; 