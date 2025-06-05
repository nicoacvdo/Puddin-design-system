import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SwapWithChart } from './SwapWithChart';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme/theme';
import { Box } from '@mui/material';

// Define custom viewports if needed
const customViewports = {
  desktop: {
    name: '14-inch Macbook',
    styles: {
      width: '2560px', // Typical width for 14-inch Macbook
      height: '1600px', // Typical height for 14-inch Macbook
    },
  },
};

const meta: Meta<typeof SwapWithChart> = {
  title: 'Pages/SwapWithChart',
  component: SwapWithChart,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: customViewports, // Use the custom desktop viewport
      defaultViewport: 'desktop', // Set the default viewport
    },
  },
  tags: ['autodocs'],
   decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
      return (
        <ThemeProvider theme={theme}>
          <Box sx={{ bgcolor: theme.palette.background.default, minHeight: '100vh', padding: theme.spacing(3) }}> {/* Add background color and padding matching the container */}
             <Story />
          </Box>
         </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof SwapWithChart>;

export const Default: Story = {
  args: {
    // Add any necessary args for the SwapWithChart component here
  },
}; 