import { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <LinearProgress
      variant="determinate"
      value={scrollProgress}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        zIndex: 1400,
        '& .MuiLinearProgress-bar': {
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)',
        },
      }}
    />
  );
}

export default ScrollProgress;

