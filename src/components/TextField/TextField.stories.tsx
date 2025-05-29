import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextField } from './TextField';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme/theme';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outlined', 'standard'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    // Add other common text field props if needed
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

type Story = StoryObj<typeof TextField>;

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'outlined',
    label: 'With Icon',
    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      ),
    },
  },
};

export const WithError: Story = {
  args: {
    variant: 'outlined',
    label: 'With Error',
    error: true,
    helperText: 'Incorrect entry.'
  },
}; 