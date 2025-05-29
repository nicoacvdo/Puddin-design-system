import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BottomNavigationBar } from './BottomNavigationBar';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme/theme';

const meta: Meta<typeof BottomNavigationBar> = {
  title: 'Components/BottomNavigationBar',
  component: BottomNavigationBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'number' },
    onChange: { action: 'onChange' },
  },
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

type Story = StoryObj<typeof BottomNavigationBar>;

export const Default: Story = {
  args: {
    value: 0,
    onChange: (event, newValue) => console.log('Selected value:', newValue),
  },
};

export const SecondTabSelected: Story = {
  args: {
    value: 1,
    onChange: (event, newValue) => console.log('Selected value:', newValue),
  },
}; 