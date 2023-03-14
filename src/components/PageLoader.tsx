import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';

export default function PageLoader() {
  return (
    <Stack
      sx={{ width: '100%', color: 'grey.500', height: '40vh' }}
      spacing={4}
    >
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <Typography variant="h6" gutterBottom component="div">
        Loading Books...
      </Typography>
      <LinearProgress color="success" />
      <LinearProgress color="secondary" />
    </Stack>
  );
}
