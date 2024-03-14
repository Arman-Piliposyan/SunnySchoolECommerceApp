import { CircularProgress, Box } from '@mui/material';
import React from 'react';

export const LayoutLoader = ({ height }: { height?: string }) => {
  const loadingContainerStyles = {
    height: `calc(100vh - ${height ? height : '80px'})`,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  };
  return (
    <Box sx={loadingContainerStyles}>
      <CircularProgress sx={{ color: '#1976D2' }} size={42} />
    </Box>
  );
};
