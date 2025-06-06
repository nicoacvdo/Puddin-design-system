import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#26a69a',
    },
    secondary: {
      main: '#ef5350',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2d2d2d',
    },
    surface: {
      main: '#2d2d2d',
      dim: '#1a1a1a',
      bright: '#2d2d2d',
      container: {
        lowest: '#1a1a1a',
        low: '#1a1a1a',
        main: '#2d2d2d',
        high: '#2d2d2d',
        highest: '#2d2d2d',
      },
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    outline: {
      main: 'rgba(255, 255, 255, 0.12)',
      variant: 'rgba(255, 255, 255, 0.12)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#6b6b6b #2d2d2d',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#2d2d2d',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#6b6b6b',
            minHeight: 24,
            border: '3px solid #2d2d2d',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: '#959595',
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme }; 