import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TransactionStatus } from './TransactionStatus';

const meta: Meta<typeof TransactionStatus> = {
  title: 'Solana/TransactionStatus',
  component: TransactionStatus,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TransactionStatus>;

export const Pending: Story = {
  args: {
    status: 'pending',
    signature: '5Q2k...9vXy',
  },
};

export const Confirmed: Story = {
  args: {
    status: 'confirmed',
    signature: '5Q2k...9vXy',
  },
};

export const Failed: Story = {
  args: {
    status: 'failed',
    signature: '5Q2k...9vXy',
    error: 'Insufficient funds',
  },
}; 