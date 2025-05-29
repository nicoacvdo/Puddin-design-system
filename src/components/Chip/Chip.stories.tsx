import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chip } from './Chip';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme/theme';
import FaceIcon from '@mui/icons-material/Face';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outlined'] },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    clickable: { control: 'boolean' },
    onDelete: { action: 'onDelete' },
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

type Story = StoryObj<typeof Chip>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled Chip',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined Chip',
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    label: 'Clickable Chip',
    onClick: () => console.log('Chip clicked'),
  },
};

export const Deletable: Story = {
  args: {
    label: 'Deletable Chip',
    onDelete: () => console.log('Chip deleted'),
  },
};

export const WithAvatar: Story = {
  args: {
    label: 'Chip with Avatar',
    avatar: <FaceIcon />,
  },
}; 