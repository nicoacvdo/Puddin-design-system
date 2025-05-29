import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Swap } from './Swap';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme/theme';
import { Box } from '@mui/material';

// Define custom viewports
const customViewports = {
  iphone16ProMax: {
    name: 'iPhone 16 Pro Max',
    styles: {
      width: '440px',
      height: '956px',
    },
  },
};

const meta: Meta<typeof Swap> = {
  title: 'Pages/Swap',
  component: Swap,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: customViewports, // Add the custom viewports
      defaultViewport: 'iphone16ProMax', // Set the default viewport to iPhone 16 Pro Max
    },
  },
  tags: ['autodocs'],
   decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
      return (
        <ThemeProvider theme={theme}>
          <Story />
         </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Swap>;

export const Default: Story = {
  args: {
    // Add any necessary args for the Swap component here
  },
}; 