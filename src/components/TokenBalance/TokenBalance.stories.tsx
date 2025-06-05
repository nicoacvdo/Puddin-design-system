import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TokenBalance } from './TokenBalance';
import { WalletProvider } from '../WalletProvider/WalletProvider';

const meta: Meta<typeof TokenBalance> = {
  title: 'Solana/TokenBalance',
  component: TokenBalance,
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
type Story = StoryObj<typeof TokenBalance>;

export const Default: Story = {
  args: {
    mint: 'So11111111111111111111111111111111111111112', // SOL wrapped token mint
    decimals: 9,
    symbol: 'SOL',
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
  },
}; 