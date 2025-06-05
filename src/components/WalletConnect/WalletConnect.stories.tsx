import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WalletConnect } from './WalletConnect';
import { WalletProvider } from '../WalletProvider/WalletProvider';

const meta: Meta<typeof WalletConnect> = {
  title: 'Components/WalletConnect',
  component: WalletConnect,
  decorators: [
    (Story) => (
      <WalletProvider>
        <Story />
      </WalletProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WalletConnect>;

export const Default: Story = {
  args: {},
}; 