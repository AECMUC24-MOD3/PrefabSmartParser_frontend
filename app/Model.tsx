'use client';

import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen'; // Import the LoadingScreen component


export const maxDuration = 30;

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (loading) {
    return <LoadingScreen />; // Display the loading screen if loading is true
  }

  return (
    <Box
      sx={{
        width: '100dvw',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        minHeight: '90dvh',
        backgroundImage: 'radial-gradient(lightgray 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    >
      <Box sx={{ width: '60%', height: '80vh', margin: '20px 0' }}>
        <iframe
          src="https://bldrs.ai/share/v/gh/Swiss-Property-AG/Schneestock-Public/main/ZGRAGGEN.ifc#c:80.66,11.66,-94.06,6.32,2.93,-8.72"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px'
          }}
          title="3D Building Model"
        />
      </Box>

      </Box>
  );
}