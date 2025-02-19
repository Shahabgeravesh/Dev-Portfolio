import { Box, Typography, Container, Grid, Paper, Chip, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StorageIcon from '@mui/icons-material/Storage';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import WorkIcon from '@mui/icons-material/Work';

function Skills() {
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
    }
  ];

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Skills & Expertise
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  {category.icon}
                  <Typography variant="h5" sx={{ ml: 2 }}>
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
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white'
                        }
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills; 