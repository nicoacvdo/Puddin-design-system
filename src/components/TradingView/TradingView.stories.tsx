import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TradingView } from './TradingView';
import { Box } from '@mui/material';

const meta: Meta<typeof TradingView> = {
  title: 'Solana/TradingView',
  component: TradingView,
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', height: 500, p: 2 }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TradingView>;

export const SolUsdtPair: Story = {
  args: {
    symbol: 'SOLUSDT',
    theme: 'dark',
    interval: '1D',
    containerId: 'sol_usdt_chart',
  },
}; 