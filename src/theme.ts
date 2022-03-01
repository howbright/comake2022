import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#ff5f52',
      main: '#cf000d',
      dark: '#8e0000'
    },
    secondary: {
      light: '#E5F6FD',
      main: '#6ec6ff',
      dark: '#0069c0'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#e8eaf6"
    }
  },
});

export default theme;
