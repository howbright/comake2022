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
      light: '#ffffb3',
      main: '#ffe082',
      dark: '#caae53',
      contrastText: '#cf000d'
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
