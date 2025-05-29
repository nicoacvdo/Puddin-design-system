import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    surface: {
      main: string;
      variant: string;
      tint: string;
    };
    outline: {
      main: string;
      variant: string;
    };
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    surface?: {
      main: string;
      variant: string;
      tint: string;
    };
    outline?: {
      main: string;
      variant: string;
    };
  }
} 