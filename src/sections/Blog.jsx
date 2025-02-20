import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

function Blog() {
  const posts = [
    {
      title: "Building an iOS Flashcard App: A Case Study",
      excerpt: "Deep dive into the development process of CPP Flashcard ASIS, including technical challenges and solutions.",
      date: "March 2024",
      link: "/blog/ios-flashcard-app"
    },
    {
      title: "Neural Networks for Human Activity Recognition",
      excerpt: "Exploring the research and implementation of machine learning models for sensor-based activity recognition.",
      date: "February 2024",
      link: "https://link.springer.com/article/10.1007/s11042-022-13716-z"
    }
  ];

  return (
    <Box id="blog" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h2" component="h2" gutterBottom align="center">
          Technical Insights
        </Typography>
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {post.date}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    href={post.link}
                    target="_blank"
                  >
                    Read More
                  </Button>
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