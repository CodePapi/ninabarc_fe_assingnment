import { Box, Typography } from '@mui/material';

export default function NoBookFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Typography variant="h6" gutterBottom component="div">
        No book found, enter a valid book name and try again
      </Typography>
    </Box>
  );
}
