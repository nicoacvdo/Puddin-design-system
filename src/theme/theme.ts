import { createTheme, Theme, PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    onPrimary?: string;
    onSecondary?: string;
    onTertiary?: string;
    onError?: string;
    container?: string;
    onPrimaryContainer?: string;
    onSecondaryContainer?: string;
    onTertiaryContainer?: string;
    onErrorContainer?: string;
  }

  interface Palette {
    tertiary: Palette['primary'];
    surface: {
      main: string;
      dim: string;
      bright: string;
      container: {
        lowest: string;
        low: string;
        main: string;
        high: string;
        highest: string;
      };
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
      dim: string;
      bright: string;
      container: {
        lowest: string;
        low: string;
        main: string;
        high: string;
        highest: string;
      };
    };
    outline?: {
      main: string;
      variant: string;
    };
  }
}

// Create a type for the shadows array
type Shadows = [
  'none',
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

const baseShadows = [
  'none',
  '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
  '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3)',
  '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)',
] as const;

// Fill the remaining shadows with the last elevation
const lightShadows: Shadows = [
  ...baseShadows,
  ...Array(19).fill(baseShadows[5]),
] as Shadows;

const darkShadows: Shadows = [
  'none',
  '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
  '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
  '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
  '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3)',
  '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)',
  ...Array(19).fill('0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)'),
] as Shadows;

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6750A4', // material-theme/sys/light/primary
      onPrimary: '#FFFFFF', // material-theme/sys/light/on-primary
      container: '#EADDFF', // material-theme/sys/light/primary-container
      onPrimaryContainer: '#21005E', // material-theme/sys/light/on-primary-container
    } as PaletteColor,
    secondary: {
      main: '#625B71', // material-theme/sys/light/secondary
      onSecondary: '#FFFFFF', // material-theme/sys/light/on-secondary
      container: '#E8DEF8', // material-theme/sys/light/secondary-container
      onSecondaryContainer: '#1E192B', // material-theme/sys/light/on-secondary-container
    } as PaletteColor,
    tertiary: {
      main: '#7D5260', // material-theme/sys/light/tertiary
      onTertiary: '#FFFFFF', // material-theme/sys/light/on-tertiary
      container: '#FFD8E4', // material-theme/sys/light/tertiary-container
      onTertiaryContainer: '#370B1E', // material-theme/sys/light/on-tertiary-container
    } as PaletteColor,
    error: {
      main: '#B3261E', // material-theme/sys/light/error
      onError: '#FFFFFF', // material-theme/sys/light/on-error
      container: '#F9DEDC', // material-theme/sys/light/error-container
      onErrorContainer: '#410E0B', // material-theme/sys/light/on-error-container
    } as PaletteColor,
    background: {
      default: '#FFFBFE', // material-theme/sys/light/surface
      paper: '#FFFBFE', // material-theme/sys/light/surface
    },
    surface: {
      main: '#FFFBFE', // material-theme/sys/light/surface
      dim: '#F4EFF4', // material-theme/sys/light/surface-dim
      bright: '#FFFBFE', // material-theme/sys/light/surface-bright
      container: {
        lowest: '#FFFFFF', // material-theme/sys/light/surface-container-lowest
        low: '#F7F2FA', // material-theme/sys/light/surface-container-low
        main: '#F3EDF7', // material-theme/sys/light/surface-container
        high: '#ECE6F0', // material-theme/sys/light/surface-container-high
        highest: '#E6E0E9', // material-theme/sys/light/surface-container-highest
      },
    },
    text: {
      primary: '#1C1B1F', // material-theme/sys/light/on-surface
      secondary: '#49454F', // material-theme/sys/light/on-surface-variant
    },
    outline: {
      main: '#79747E', // material-theme/sys/light/outline
      variant: '#CAC4D0', // material-theme/sys/light/outline-variant
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '57px',
      lineHeight: '64px',
      letterSpacing: '-0.25px',
      fontWeight: 400,
    },
    h2: {
      fontSize: '45px',
      lineHeight: '52px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
    h3: {
      fontSize: '36px',
      lineHeight: '44px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
    h4: {
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
    h5: {
      fontSize: '28px',
      lineHeight: '36px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
    h6: {
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '0px',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.1px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.5px',
      fontWeight: 400,
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.25px',
      fontWeight: 400,
    },
    button: {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.1px',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.4px',
      fontWeight: 400,
    },
    overline: {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.5px',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: lightShadows,
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D0BCFF', // material-theme/sys/dark/primary
      onPrimary: '#381E72', // material-theme/sys/dark/on-primary
      container: '#4F378B', // material-theme/sys/dark/primary-container
      onPrimaryContainer: '#EADDFF', // material-theme/sys/dark/on-primary-container
    } as PaletteColor,
    secondary: {
      main: '#CCC2DC', // material-theme/sys/dark/secondary
      onSecondary: '#332D41', // material-theme/sys/dark/on-secondary
      container: '#4A4458', // material-theme/sys/dark/secondary-container
      onSecondaryContainer: '#E8DEF8', // material-theme/sys/dark/on-secondary-container
    } as PaletteColor,
    tertiary: {
      main: '#EFB8C8', // material-theme/sys/dark/tertiary
      onTertiary: '#492532', // material-theme/sys/dark/on-tertiary
      container: '#633B48', // material-theme/sys/dark/tertiary-container
      onTertiaryContainer: '#FFD8E4', // material-theme/sys/dark/on-tertiary-container
    } as PaletteColor,
    error: {
      main: '#F2B8B5', // material-theme/sys/dark/error
      onError: '#601410', // material-theme/sys/dark/on-error
      container: '#8C1D18', // material-theme/sys/dark/error-container
      onErrorContainer: '#F9DEDC', // material-theme/sys/dark/on-error-container
    } as PaletteColor,
    background: {
      default: '#1C1B1F', // material-theme/sys/dark/surface
      paper: '#1C1B1F', // material-theme/sys/dark/surface
    },
    surface: {
      main: '#1C1B1F', // material-theme/sys/dark/surface
      dim: '#141218', // material-theme/sys/dark/surface-dim
      bright: '#1C1B1F', // material-theme/sys/dark/surface-bright
      container: {
        lowest: '#0F0D13', // material-theme/sys/dark/surface-container-lowest
        low: '#1A1A1E', // material-theme/sys/dark/surface-container-low
        main: '#1F1A23', // material-theme/sys/dark/surface-container
        high: '#2D2930', // material-theme/sys/dark/surface-container-high
        highest: '#36343B', // material-theme/sys/dark/surface-container-highest
      },
    },
    text: {
      primary: '#E6E1E5', // material-theme/sys/dark/on-surface
      secondary: '#CAC4D0', // material-theme/sys/dark/on-surface-variant
    },
    outline: {
      main: '#938F99', // material-theme/sys/dark/outline
      variant: '#49454F', // material-theme/sys/dark/outline-variant
    },
  },
  typography: {
    ...lightTheme.typography,
  },
  shape: {
    ...lightTheme.shape,
  },
  shadows: darkShadows,
});

export { lightTheme, darkTheme }; 