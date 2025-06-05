import React from 'react';
import { Box, Typography, CircularProgress, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import PendingIcon from '@mui/icons-material/Pending';

const StatusContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

export type TransactionStatus = 'pending' | 'confirmed' | 'failed';

interface TransactionStatusProps {
  status: TransactionStatus;
  signature?: string;
  error?: string;
}

export const TransactionStatus: React.FC<TransactionStatusProps> = ({
  status,
  signature,
  error,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'confirmed':
        return 'success';
      case 'failed':
        return 'error';
      default:
        return 'warning';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'confirmed':
        return <CheckCircleIcon color="success" />;
      case 'failed':
        return <ErrorIcon color="error" />;
      default:
        return <PendingIcon color="warning" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'confirmed':
        return 'Transaction Confirmed';
      case 'failed':
        return 'Transaction Failed';
      default:
        return 'Transaction Pending';
    }
  };

  return (
    <StatusContainer>
      {status === 'pending' ? (
        <CircularProgress size={24} />
      ) : (
        getStatusIcon()
      )}
      <Box>
        <Typography variant="subtitle1">{getStatusText()}</Typography>
        {signature && (
          <Typography variant="body2" color="text.secondary">
            Signature: {signature.slice(0, 8)}...{signature.slice(-8)}
          </Typography>
        )}
        {error && (
          <Typography variant="body2" color="error">
            Error: {error}
          </Typography>
        )}
      </Box>
      <Chip
        label={status.toUpperCase()}
        color={getStatusColor()}
        size="small"
        sx={{ marginLeft: 'auto' }}
      />
    </StatusContainer>
  );
}; 