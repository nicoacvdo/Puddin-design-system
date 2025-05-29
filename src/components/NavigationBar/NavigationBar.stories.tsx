import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NavigationBar } from './NavigationBar';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme/theme';

const meta: Meta<typeof NavigationBar> = {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    navVariant: { control: 'select', options: ['center-aligned', 'small', 'large'] },
    title: { control: 'text' },
    onMenuClick: { action: 'onMenuClick' },
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

type Story = StoryObj<typeof NavigationBar>;

export const CenterAligned: Story = {
  args: {
    navVariant: 'center-aligned',
    title: 'App Title',
  },
};

export const Small: Story = {
  args: {
    navVariant: 'small',
    title: 'App Title',
    onMenuClick: () => console.log('Menu clicked'),
  },
};

export const Large: Story = {
  args: {
    navVariant: 'large',
    title: 'App Title',
    onMenuClick: () => console.log('Menu clicked'),
  },
}; 