import { Grid } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorOccurred() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: '40vh' }}
    >
      <Stack spacing={2} sx={{ width: '100%', height: '100%' }}>
        <Alert severity="error">
          An error while searching for books, please try again later
        </Alert>
      </Stack>
    </Grid>
  );
}
