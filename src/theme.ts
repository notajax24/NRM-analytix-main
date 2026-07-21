import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: '#191529', // Dark navy
    },
    secondary: {
      main: '#8b5cf6', // Purple
    },
    error: {
      main: '#f87171', // Coral (widely used for accents/buttons)
    },
    info: {
      main: '#475569', // Slate (widely used for body text)
    }
  },
});

export default theme;