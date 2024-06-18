import React from 'react';
import { Box, useTheme } from '@mui/material';

type StatusDotProps = {
  color: 'success' | 'error' | 'warning' | 'info'; // Add more colors if needed
}

export const StatusDot: React.FC<StatusDotProps> = ({ color }) => {
  const theme = useTheme();
  
  const getColor = (color: StatusDotProps['color']) => {
    switch (color) {
      case 'success':
        return theme.palette.success.light;
      case 'error':
        return theme.palette.error.light;
      case 'warning':
        return theme.palette.warning.light;
      case 'info':
        return theme.palette.info.light;
      default:
        return theme.palette.success.light; // default color
    }
  }

  return (
    <Box
      width={theme.spacing(1.5)}
      height={theme.spacing(1.5)}
      sx={{
        backgroundColor: getColor(color),
        borderRadius: '100%',
      }}
    />
  );
};
