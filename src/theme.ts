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