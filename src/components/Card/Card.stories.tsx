import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme/theme';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['elevated', 'filled', 'outlined'] },
    // Add other common card props if needed
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

type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: 'Elevated Card Content',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Filled Card Content',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Card Content',
  },
}; 