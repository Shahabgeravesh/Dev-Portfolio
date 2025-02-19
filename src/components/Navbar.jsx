import { AppBar, Toolbar, Button, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 2, margin: '0 auto' }}>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#skills">Skills</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 