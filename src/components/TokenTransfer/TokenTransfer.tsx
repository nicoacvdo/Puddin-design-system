import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  createTransferInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { PublicKey, Transaction } from '@solana/web3.js';

const TransferContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  maxWidth: 400,
}));

interface TokenTransferProps {
  mint: string;
  decimals?: number;
  symbol?: string;
  onSuccess?: (signature: string) => void;
  onError?: (error: Error) => void;
}

export const TokenTransfer: React.FC<TokenTransferProps> = ({
  mint,
  decimals = 9,
  symbol,
  onSuccess,
  onError,
}) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTransfer = async () => {
    if (!publicKey || !sendTransaction) {
      setError('Please connect your wallet');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const mintPubkey = new PublicKey(mint);
      const recipientPubkey = new PublicKey(recipient);

      // Get token accounts
      const fromTokenAccount = await getAssociatedTokenAddress(
        mintPubkey,
        publicKey
      );
      const toTokenAccount = await getAssociatedTokenAddress(
        mintPubkey,
        recipientPubkey
      );

      // Create transfer instruction
      const transferAmount = Math.floor(Number(amount) * Math.pow(10, decimals));
      const transferInstruction = createTransferInstruction(
        fromTokenAccount,
        toTokenAccount,
        publicKey,
        transferAmount
      );

      // Create and send transaction
      const transaction = new Transaction().add(transferInstruction);
      const signature = await sendTransaction(transaction, connection);

      // Wait for confirmation
      await connection.confirmTransaction(signature);

      onSuccess?.(signature);
      setAmount('');
      setRecipient('');
    } catch (err) {
      const error = err as Error;
      setError(error.message);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  };

  if (!publicKey) {
    return (
      <TransferContainer>
        <Typography variant="body2" color="text.secondary">
          Connect wallet to transfer tokens
        </Typography>
      </TransferContainer>
    );
  }

  return (
    <TransferContainer>
      <Typography variant="h6">Transfer {symbol || 'Tokens'}</Typography>
      
      <TextField
        label="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        fullWidth
        error={!!error}
      />

      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        error={!!error}
        InputProps={{
          endAdornment: <Typography>{symbol}</Typography>,
        }}
      />

      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Button
        variant="contained"
        onClick={handleTransfer}
        disabled={loading || !amount || !recipient}
        fullWidth
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          'Transfer'
        )}
      </Button>
    </TransferContainer>
  );
}; 