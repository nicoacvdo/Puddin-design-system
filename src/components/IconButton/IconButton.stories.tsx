import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton } from './IconButton';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme/theme';
import AddIcon from '@mui/icons-material/Add';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'tonal', 'outlined', 'standard'] },
    disabled: { control: 'boolean' },
    // Add other common icon button props if needed
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

type Story = StoryObj<typeof IconButton>;

export const Standard: Story = {
  args: {
    variant: 'standard',
    children: <AddIcon />,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: <AddIcon />,
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    children: <AddIcon />,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: <AddIcon />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <AddIcon />,
  },
}; 