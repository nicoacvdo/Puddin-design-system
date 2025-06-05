import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TokenTransfer } from './TokenTransfer';
import { WalletProvider } from '../WalletProvider/WalletProvider';

const meta: Meta<typeof TokenTransfer> = {
  title: 'Solana/TokenTransfer',
  component: TokenTransfer,
  decorators: [
    (Story) => (
      <WalletProvider network="devnet">
        <Story />
      </WalletProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TokenTransfer>;

export const Default: Story = {
  args: {
    mint: 'So11111111111111111111111111111111111111112', // SOL wrapped token mint
    decimals: 9,
    symbol: 'SOL',
  },
}; 