import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: orange[500],
    },
    background: {
      default: '#fff',
    },
  },
});
