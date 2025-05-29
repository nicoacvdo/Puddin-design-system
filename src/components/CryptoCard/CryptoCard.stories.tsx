import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CryptoCard } from './CryptoCard';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme/theme';

const meta: Meta<typeof CryptoCard> = {
  title: 'Components/CryptoCard',
  component: CryptoCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currency: { control: 'text' },
    percentageChange: { control: 'text' },
    price: { control: 'text' },
    chartData: { control: 'object' },
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

type Story = StoryObj<typeof CryptoCard>;

const sampleChartData = [
  { value: 10 }, { value: 12 }, { value: 8 }, { value: 15 }, { value: 10 }, { value: 14 }, { value: 16 }
];

export const Default: Story = {
  args: {
    currency: 'SOL',
    percentageChange: '+3.43%',
    price: '$243.4430001',
    chartData: sampleChartData,
  },
}; 